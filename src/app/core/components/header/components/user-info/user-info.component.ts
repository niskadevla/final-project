import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserInfoService } from '../../../../../shared/services/user-info.service';
import { IHero } from '../../../../../shared/models/hero.model';
import { IUserInfo } from '../../../../../shared/models/user-info';
import { routes } from '../../../../routes/app-routes';
import { IAppRotes } from '../../../../routes/route.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {

    routes: IAppRotes = routes;
    userInfo: IUserInfo;
    subscription: Subscription = null;
    lastHero: IHero;

    constructor(private userInfoService: UserInfoService) {}

    ngOnInit(): void {
        this.initData();
    }

    ngOnDestroy(): void {
        if (this.subscription !== null) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }

    private initData(): void {
        this.subscription = this.userInfoService.userInfo$.subscribe(userInfo => {
            const selectedHeroes: IHero[] = userInfo.selectedHeroes;

            this.userInfo = userInfo;
            this.lastHero = selectedHeroes[selectedHeroes.length - 1];
        });
    }
}
