import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserInfo } from '../../../../../../shared/models/user-info';
import { UserInfoService } from '../../../../../../shared/services/user-info.service';
import { Subscription } from 'rxjs';
import { IPowerup, Powerup } from '../../../../../../shared/models/powerup.model';
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
    allPowerups: IPowerup[];

    constructor(private userInfoService: UserInfoService) {
        this.userInfoService.updateUserInfoPowerups(new Powerup('Flash boots'), true);
    }

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

        if (!this.powerups) {
            this.allPowerups = restPowerups;
            console.log('gg');
            return;
        }

        this.powerups.forEach(powerup => {
            restPowerups = restPowerups.map(p => p?.title === powerup.title
                                                 ? null
                                                 : p)
                                       .filter(p => p);
        });

        this.allPowerups = this.powerups;
        this.allPowerups.push(...restPowerups);
        console.log(this.allPowerups);
    }
}
