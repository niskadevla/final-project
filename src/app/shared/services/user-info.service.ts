import { Injectable } from '@angular/core';
import { IUserInfo, UserInfo } from '../models/user-info';
import { Hero, IHero } from '../models/hero.model';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {

    userInfo$: BehaviorSubject<IUserInfo> = new BehaviorSubject(this.getUserInfo());

    constructor(public apiService: ApiService ) {}

    private setUserInfo(userInfo: IUserInfo): void {
        this.userInfo$.next(userInfo);
    }

    private updateUserInfo(userInfo: IUserInfo): void {
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
        this.setUserInfo(userInfo);
    }

    private getUserInfo(): IUserInfo {
        return JSON.parse(window.localStorage.getItem('userInfo'))
            || new UserInfo('', [new Hero()]);
    }

    private getSelectedHeroes(): IHero[] {
        return this.getUserInfo().selectedHeroes;
    }

    public getSearchQuery(): string {
        return this.getUserInfo().searchQuery;
    }

    public createSelectedHeroById(id: number): void {
        if (!this.getSelectedHeroById(id)) {
            this.apiService.getHeroById(id)
                .pipe(take(1))
                .subscribe((hero: IHero) => {
                    const userInfo = this.deleteEmptyHero(this.getUserInfo());

                    userInfo.selectedHeroes.push(hero);
                    this.updateUserInfo(userInfo);
                    this.setUserInfoSelectedHero(id);
                });
        }
    }

    public getSelectedHeroById(id: number): IHero {
        return  this.getSelectedHeroes().find((user: IHero) => user.id === id );
    }

    public setUserInfoSearchQuery(query: string): void {
        const userInfo = this.getUserInfo();

        userInfo.searchQuery = query;
        this.updateUserInfo(userInfo);
    }

    public setUserInfoSelectedLetter(letter: string): void {
        const userInfo = this.getUserInfo();
        userInfo.selectedLetter = letter;
        this.updateUserInfo(userInfo);
    }

    public setUserInfoSelectedHero(id: number): void {
        const userInfo = this.getUserInfo();
        let selectedHeroes: IHero[] = userInfo.selectedHeroes;

        selectedHeroes = selectedHeroes.map(hero => {
            hero.selected = hero.id === id;

            return hero;
        });

        userInfo.selectedHeroes = selectedHeroes;
        this.updateUserInfo(userInfo);
    }

    private deleteEmptyHero(userInfo: IUserInfo): IUserInfo {
        userInfo.selectedHeroes = userInfo.selectedHeroes.filter((hero: IHero) => hero.name );

        return userInfo;
    }
}
