import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserInfoService } from '../../../../../shared/services/user-info.service';
import { IHero } from '../../../../../shared/models/hero.model';
import { Subscription } from 'rxjs';
import { IUserInfo } from '../../../../../shared/models/user-info';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {

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
            let selectedHeroes: IHero[];

            this.userInfo = userInfo;
            selectedHeroes = this.userInfo.selectedHeroes;
            this.lastHero = selectedHeroes[selectedHeroes.length - 1];
        });
    }
}
