import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAppRotes } from '../../routes/route.model';
import { IUserInfo } from '../../../shared/models/user-info';
import { Subscription } from 'rxjs';
import { UserInfoService } from '../../../shared/services/user-info.service';
import { routes } from '../../routes/app-routes';
import { IHero } from '../../../shared/models/hero.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    routes: IAppRotes = routes;
    userInfo: IUserInfo;
    subscription: Subscription = null;
    selectedHero: IHero;

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
        this.subscription = this.userInfoService.userInfo$.subscribe((userInfo: IUserInfo) => {
            this.userInfo = userInfo;
            [this.selectedHero] = this.userInfo.selectedHeroes;
        });
    }

    doYouHaveHeroes(): boolean {
        return Boolean(this.selectedHero?.name);
    }
}
