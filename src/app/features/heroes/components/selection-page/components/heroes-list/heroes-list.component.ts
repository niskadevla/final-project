import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../shared/services/api.service';
import { IHero } from '../../../../../../shared/models/hero.model';
import { UserInfoService } from '../../../../../../shared/services/user-info.service';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: [ './heroes-list.component.scss' ]
})
export class HeroesListComponent implements OnInit {

    heroes: IHero[];

    constructor(private apiService: ApiService,
                public userInfoService: UserInfoService) {}

    ngOnInit(): void {
        this.getHeroesBySearchQuery(this.userInfoService.getSearchQuery());
    }

    // ngDoCheck(): void {
    //     this.getHeroesBySearchQuery(this.userInfoService.getSearchQuery());
    // }

    getHeroesBySearchQuery(query: string): void {
        query = query.trim();

        if (query) {
            this.apiService.getHeroesBySearch(query)
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
