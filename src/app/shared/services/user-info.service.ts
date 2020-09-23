import { Injectable } from '@angular/core';
import { IUserInfo, UserInfo } from '../models/user-info';
import { Hero, IHero } from '../models/hero.model';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { IPowerup, Powerup } from '../models/powerup.model';
import { POWERUPS } from '../utils/constants';

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {

    userInfo$: BehaviorSubject<IUserInfo> = new BehaviorSubject(this.getUserInfo());

    constructor(public apiService: ApiService) {
    }

    private setUserInfo(userInfo: IUserInfo): void {
        this.userInfo$.next(userInfo);
    }

    public updateUserInfo(userInfo: IUserInfo): void {
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
        this.setUserInfo(userInfo);
    }

    private getUserInfo(): IUserInfo {
        return JSON.parse(window.localStorage.getItem('userInfo'))
            || new UserInfo('', [ new Hero() ]);
    }

    private getSelectedHeroes(): IHero[] {
        return this.getUserInfo().selectedHeroes;
    }

    public getSearchQuery(): string {
        return this.getUserInfo().searchQuery;
    }

    public createSelectedHeroById(id: number): void {
        if (!this.getSelectedHeroById(id)) {
            this.apiService.getHeroById(id)
                .pipe(take(1))
                .subscribe((hero: IHero) => {
                    const userInfo = this.deleteEmptyHero(this.getUserInfo());

                    userInfo.selectedHeroes.push(hero);
                    this.updateUserInfo(userInfo);
                    this.setUserInfoSelectedHero(id);
                });
        }
    }

    public getSelectedHeroById(id: number): IHero {
        return this.getSelectedHeroes()
                   .find((user: IHero) => user.id === id);
    }

    public setUserInfoSearchQuery(query: string): void {
        const userInfo = this.getUserInfo();

        userInfo.searchQuery = query;
        this.updateUserInfo(userInfo);
    }

    public setUserInfoSelectedLetter(letter: string): void {
        const userInfo = this.getUserInfo();
        userInfo.selectedLetter = letter;
        this.updateUserInfo(userInfo);
    }

    public setUserInfoSelectedHero(id: number): void {
        const userInfo = this.getUserInfo();
        let selectedHeroes: IHero[] = userInfo.selectedHeroes;

        selectedHeroes = selectedHeroes.map(hero => {
            hero.selected = hero.id === id;

            return hero;
        });

        userInfo.selectedHeroes = selectedHeroes;
        this.updateUserInfo(userInfo);
    }

    private deleteEmptyHero(userInfo: IUserInfo): IUserInfo {
        userInfo.selectedHeroes = userInfo.selectedHeroes.filter((hero: IHero) => hero.name);

        return userInfo;
    }

    getUserInfoPowerups(): IPowerup[] {
        return this.getUserInfo().powerups || [];
    }

    foundPowerup(powerup: IPowerup, powerups: IPowerup[]): IPowerup {
        return powerups.find(obj => obj.title === powerup.title);
    }

    private increaseUserInfoPowerup(powerup: IPowerup, userInfo: IUserInfo): IUserInfo {

        if (!userInfo.powerups?.length || !this.foundPowerup(powerup, userInfo.powerups)) {
            userInfo.powerups = userInfo.powerups || [];
            userInfo.powerups.push(powerup);

            return userInfo;
        }

        userInfo.powerups = userInfo.powerups.map((obj: IPowerup) => ( {
            ...obj, usesLeft: obj.title === powerup.title
                              ? ++obj.usesLeft
                              : obj.usesLeft
        } ));

        return userInfo;
    }

    private decreaseUserInfoPowerup(powerup: IPowerup, userInfo: IUserInfo): IUserInfo {

        if (!userInfo.powerups?.length || !this.foundPowerup(powerup, userInfo.powerups)) {
            return userInfo;
        }

        userInfo.powerups = userInfo.powerups.map((obj: IPowerup) => ( {
            ...obj, usesLeft: obj.title === powerup.title
                              ? --obj.usesLeft
                              : obj.usesLeft
        } ))
                                    .filter((obj: IPowerup) => obj.usesLeft > 0);

        return userInfo;
    }

    updateUserInfoPowerups(powerup: IPowerup, win: boolean): void {
        let userInfo = this.getUserInfo();

        userInfo = win
                   ? this.increaseUserInfoPowerup(powerup, userInfo)
                   : this.decreaseUserInfoPowerup(powerup, userInfo);

        this.updateUserInfo(userInfo);
    }

    createPowerup(title: string): IPowerup {
        return new Powerup(title, 1, this.getPowerupImg(title), this.getPowerupPowerstat(title));
    }

    private getPowerupImg(title: string): string {
        const result = POWERUPS.find((powerup: IPowerup) => powerup.title === title);

        return result.img;
    }

    private getPowerupPowerstat(title: string): object {
        const result = POWERUPS.find((powerup: IPowerup) => powerup.title === title);

        return result.powerstat;
    }
}
