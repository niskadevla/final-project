import { Component, OnInit } from '@angular/core';
import { routes } from '../../core/routes/app-routes';
import { Router } from '@angular/router';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: [ './heroes.component.scss' ]
})
export class HeroesComponent implements OnInit{

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.navigate([ routes.SELECTION_PAGE.fullPath ]);
    }

}
