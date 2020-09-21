import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserInfo } from '../../../../../../shared/models/user-info';
import { Subscription } from 'rxjs';
import { IHero } from '../../../../../../shared/models/hero.model';
import { UserInfoService } from '../../../../../../shared/services/user-info.service';
import { routes } from '../../../../../../core/routes/app-routes';

@Component({
  selector: 'app-user-heroes-list',
  templateUrl: './user-heroes-list.component.html',
  styleUrls: [ './user-heroes-list.component.scss']
})
export class UserHeroesListComponent implements OnInit, OnDestroy{

    routes = routes;
    userInfo: IUserInfo;
    subscriptions: Subscription = new Subscription();
    heroes: IHero[];

    constructor(private userInfoService: UserInfoService) {}

    ngOnInit(): void {
        this.initData();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    initData(): void {
        this.subscriptions.add(this.userInfoService.userInfo$.subscribe(userInfo => {
            this.userInfo = userInfo;
            this.heroes = this.userInfo.selectedHeroes;
        }));
    }

    selectHero(id: number): void {
        this.userInfoService.setUserInfoSelectedHero(id);
    }

    isSelectedHero(id: number): boolean {
        return Boolean(this.userInfoService.getSelectedHeroById(id)?.selected);
    }

}
