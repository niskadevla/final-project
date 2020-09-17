import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IHero } from '../models/hero.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private API_TOKEN = 629164751326577;
    private baseUrl = `https://www.superheroapi.com/api.php/${ this.API_TOKEN }/`;

    constructor(public http: HttpClient) {
    }

    private getUrl(url: string = ''): string {
        return this.baseUrl + url;
    }

    get(url: string = ''): Observable<IHero[]> {
        return this.http.get<IHero[]>(this.getUrl(url))
                   .pipe(
                       map((hero: IHero[]) => hero)
                   );
    }

    getHeroesBySearch(str: string): Observable<any> {
        return this.get(`search/${ str }`);
    }

    getHeroById(id: number): Observable<any> {
        return this.get(`${ id }`);
    }
}
