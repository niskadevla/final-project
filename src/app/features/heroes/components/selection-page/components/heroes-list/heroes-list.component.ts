import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../shared/services/api.service';
import { IHero } from '../../../../../../shared/models/hero.model';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: [ './heroes-list.component.scss' ]
})
export class HeroesListComponent implements OnInit {

    heroes: IHero[];

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.getHeroesBySearch('Bomb');
    }

    getHeroesBySearch(query: string): void {
        this.apiService.getHeroesBySearch(query)
            .subscribe((heroes) => {
                this.heroes = heroes.results;
            });
    }

}
