import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';

import { IUserInfo } from '../../../../shared/models/user-info';
import { IHero } from '../../../../shared/models/hero.model';
import { UserInfoService } from '../../../../shared/services/user-info.service';
import { ApiService } from '../../../../shared/services/api.service';
import { delay } from 'rxjs/operators';
import { randomInteger } from '../../../../shared/utils/randomInteger';
import { DROP_CHANCE, MAX_HEROES_AMOUNT, POWERUPS, timeForCountdown } from '../../../../shared/utils/constants';
import { IPowerup, Powerup } from '../../../../shared/models/powerup.model';

@Component({
    selector: 'app-heroes-battle-page',
    templateUrl: './heroes-battle-page.component.html',
    styleUrls: [ './heroes-battle-page.component.scss' ]
})
export class HeroesBattlePageComponent implements OnInit, OnDestroy {

    userInfo: IUserInfo;
    subscriptions: Subscription = new Subscription();
    hero: IHero;
    opponentHero: IHero;
    powerups: IPowerup[];
    selectedPowerup: IPowerup;
    heroAfterUpgrade: IHero;
    isWon = false;
    isFinished = false;
    isFightGoingOn = false;
    timeForCountdown: number = timeForCountdown;

    constructor(private apiService: ApiService,
                private userInfoService: UserInfoService) {
    }

    ngOnInit(): void {
        this.initData();
        this.getOpponentHero(randomInteger(1, MAX_HEROES_AMOUNT));
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    initData(): void {
        this.subscriptions.add(this.userInfoService.userInfo$.subscribe(userInfo => {
            this.userInfo = userInfo;
            this.hero = this.getSelectedHero(this.userInfo.selectedHeroes);
            this.heroAfterUpgrade = this.cloneHero(this.hero);
            this.powerups = userInfo.powerups;
        }));
    }

    cloneHero(obj: IHero): IHero {
        return JSON.parse(JSON.stringify(obj));
    }

    getOpponentHero(id: number): void {
        this.subscriptions.add(this.apiService.getHeroById(id)
                                   .subscribe((hero) => this.opponentHero = hero));
    }

    getSelectedHero(heroes: IHero[]): IHero {
        return heroes.find(hero => hero.selected);
    }

    selectPowerup($event: any): any {
        this.selectedPowerup = this.createPowerup($event.target.value);
        this.upgradeHero(this.selectedPowerup);
    }

    createPowerup(title: string): IPowerup {
        return POWERUPS.find(powerup => powerup.title === title);
    }

    upgradeHero(powerup: IPowerup): void {
        let [ [ powerstat, value ] ] = Object.entries(powerup.powerstat);
        this.heroAfterUpgrade = this.cloneHero(this.hero);
        const value2 = this.toNumber(this.heroAfterUpgrade.powerstats[powerstat]);

        value = this.toNumber(value);
        this.heroAfterUpgrade.powerstats[powerstat] = value + value2;
    }

    toNumber(value: any): number {
        return isNaN(value)
               ? 0
               : +value;
    }

    startBattle(): void {
        this.doAfterStart();
    }

    countdown(): void {
        this.subscriptions.add(of(true)
            .pipe(delay(timeForCountdown))
            .subscribe(() => this.doAfterFight()));
    }

    calcBattleResult(): void {
        let heroStatsSum = 0;
        let opponentHeroStatsSum = 0;
        const myStats: { [key: string]: number | string } = this.heroAfterUpgrade.powerstats;
        const oppositeStatsts: { [key: string]: number | string } = this.opponentHero.powerstats;

        for (const key in myStats) {
            if (myStats.hasOwnProperty(key)) {
                heroStatsSum += this.toNumber(myStats[key]);
            }
        }

        for (const key in oppositeStatsts) {
            if (oppositeStatsts.hasOwnProperty(key)) {
                opponentHeroStatsSum += this.toNumber(oppositeStatsts[key]);
            }
        }

        this.isWon = heroStatsSum - opponentHeroStatsSum > 0;
    }

    doAfterStart(): void {
        this.countdown();
        this.isFinished = false;
        this.isFightGoingOn = true;
    }

    doAfterFight(): void {
        this.calcBattleResult();
        this.isFinished = true;
        this.isFightGoingOn = false;
        this.userInfoService.updateUserInfoBattleHistory(this.hero?.name, this.opponentHero?.name, this.isWon
                                                                                                   ? 'win'
                                                                                                   : 'lose');

        if (this.isDropedPowerup()) {
            this.userInfoService.updateUserInfoPowerups(new Powerup(this.getRandomPowerup()), this.isWon);
        }

        this.getOpponentHero(randomInteger(1, MAX_HEROES_AMOUNT));
    }

    isDropedPowerup(): boolean {
        return Math.random() < DROP_CHANCE;
    }

    getRandomPowerup(): string {
        return POWERUPS[randomInteger(0, POWERUPS.length - 1)].title;
    }
}
