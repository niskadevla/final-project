import { Component, OnDestroy } from '@angular/core';
import { UserInfoService } from '../../../../../shared/services/user-info.service';
import { IHero } from '../../../../../shared/models/hero.model';
import { Subscription } from 'rxjs';
import { IUserInfo } from '../../../../../shared/models/user-info';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnDestroy {

    userInfo: IUserInfo;
    subscription: Subscription = null;
    lastHero: IHero;

    constructor(public userInfoService: UserInfoService) {
        this.subscription = this.userInfoService.userInfo$.subscribe(userInfo => {
            this.userInfo = userInfo;
            const selectedHeroes = this.userInfo.selectedHeroes;
            this.lastHero = selectedHeroes[selectedHeroes.length - 1];
        });
    }

    ngOnDestroy(): void {
        if (this.subscription !== null) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
}
