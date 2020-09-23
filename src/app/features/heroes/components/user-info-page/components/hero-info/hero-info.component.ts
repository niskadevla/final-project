import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiService } from '../../../../../../shared/services/api.service';
import { IHero } from '../../../../../../shared/models/hero.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-hero-info',
    templateUrl: './hero-info.component.html',
    styleUrls: [ './hero-info.component.scss' ]
})
export class HeroInfoComponent implements OnInit, OnDestroy {

    subscriptions: Subscription = new Subscription();
    hero: IHero;

    constructor(private apiService: ApiService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.queryParamsSubscribe();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    getHeroByName(query: string): void {
        this.subscriptions.add(this.apiService.getHeroesBySearch(query)
                                   .subscribe((heroes: any) => [ this.hero ] = heroes.results));
    }

    queryParamsSubscribe(): void {
        this.subscriptions.add(this.route.queryParams
                                   .subscribe(({ name }: Params) => {
                                       this.getHeroByName(name);
                                   }));
    }
}
