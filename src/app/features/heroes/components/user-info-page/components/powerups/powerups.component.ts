import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserInfo } from '../../../../../../shared/models/user-info';
import { UserInfoService } from '../../../../../../shared/services/user-info.service';
import { Subscription } from 'rxjs';
import { IPowerup } from '../../../../../../shared/models/powerup.model';
import { POWERUPS } from '../../../../../../shared/utils/constants';

@Component({
    selector: 'app-powerups',
    templateUrl: './powerups.component.html',
    styleUrls: [ './powerups.component.scss' ]
})
export class PowerupsComponent implements OnInit, OnDestroy {

    userInfo: IUserInfo;
    subscriptions: Subscription = new Subscription();
    powerups: IPowerup[];
    allPowerups: IPowerup[] = [];

    constructor(private userInfoService: UserInfoService) {}

    ngOnInit(): void {
        this.initData();
        this.createAllPowerups();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    initData(): void {
        this.subscriptions.add(this.userInfoService.userInfo$.subscribe(userInfo => {
            this.userInfo = userInfo;
            this.powerups = this.userInfo.powerups;
        }));
    }

    createAllPowerups(): void {
        let restPowerups: IPowerup[] = POWERUPS;
        let userPowerups: IPowerup[];

        if (!this.powerups) {
            this.allPowerups = restPowerups;

            return;
        }

        restPowerups = this.findDisabledPowerups();
        userPowerups = this.createUserPowerups();

        this.allPowerups = userPowerups.concat(restPowerups);
    }

    findDisabledPowerups(): IPowerup[] {
        let restPowerups: IPowerup[] = POWERUPS;

        this.powerups.forEach((powerup: IPowerup) => {
            restPowerups = restPowerups.map((p: IPowerup) => p?.title === powerup.title
                                                 ? null
                                                 : p)
                                       .filter(p => p);
        });

        return restPowerups;
    }

    createUserPowerups(): IPowerup[] {
        const userPowerups: IPowerup[] = [];

        this.powerups.forEach((powerup: IPowerup) => (
            userPowerups.push({...POWERUPS.find(p => p?.title === powerup.title), usesLeft: powerup.usesLeft})
        ));

        return userPowerups;
    }
}
