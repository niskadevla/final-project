import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../shared/services/api.service';
import { IHero } from '../../../../../../shared/models/hero.model';
import { UserInfoService } from '../../../../../../shared/services/user-info.service';
import { IUserInfo } from '../../../../../../shared/models/user-info';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { routes } from '../../../../../../core/routes/app-routes';
import { queryParams } from '../../../../routes/hero-info.route';
import { getQueryParams } from '../../../../../../shared/utils/getQueryParams';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: [ './heroes-list.component.scss' ]
})
export class HeroesListComponent implements OnInit, OnDestroy {

    userInfo: IUserInfo;
    subscription: Subscription = null;
    heroes: IHero[];
    routes = routes;
    getQueryParams = getQueryParams;
    queryParams = queryParams;

    constructor(private apiService: ApiService,
                private userInfoService: UserInfoService) {}

    ngOnInit(): void {
        this.initData();
        this.getHeroesBySearchQuery(this.userInfoService.getSearchQuery());
    }

    ngOnDestroy(): void {
        if (this.subscription !== null) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }

    initData(): void {
        this.subscription = this.userInfoService.userInfo$.subscribe(userInfo => {
            this.userInfo = userInfo;
            this.heroes = this.userInfo.selectedHeroes;
            this.getHeroesBySearchQuery(this.userInfoService.getSearchQuery());
        });
    }

    getHeroesBySearchQuery(query: string): void {
        query = query.trim();

        if (query) {
            this.apiService.getHeroesBySearch(query)
                .pipe(take(1))
                .subscribe((heroes) => {
                    this.heroes = heroes.results;
                });
        }
    }

    selectHero(id: number): void {
        this.userInfoService.createSelectedHeroById(id);
    }

    isSelectedHero(id: number): boolean {
        return Boolean(this.userInfoService.getSelectedHeroById(id));
    }

}
