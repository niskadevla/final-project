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

    setUserInfo(userInfo: IUserInfo): void {
        this.userInfo$.next(userInfo);
    }

    updateUserInfo(userInfo: IUserInfo): void {
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
        this.setUserInfo(userInfo);
    }

    getUserInfo(): IUserInfo {
        return JSON.parse(window.localStorage.getItem('userInfo'))
            || new UserInfo('', [new Hero()]);
    }

    getSelectedHeroes(): IHero[] {
        return this.getUserInfo().selectedHeroes;
    }

    getSearchQuery(): string {
        return this.getUserInfo().searchQuery;
    }

    createSelectedHeroById(id: number): void {
        if (!this.getSelectedHeroById(id)) {
            this.apiService.getHeroById(id)
                .pipe(take(1))
                .subscribe((hero: IHero) => {
                    const userInfo = this.getUserInfo();
                    userInfo.selectedHeroes.push(hero);
                    this.updateUserInfo(userInfo);
                });
        }
    }

    getSelectedHeroById(id: number): IHero {
        return  this.getSelectedHeroes().find((user: IHero) => user.id === id );
    }

    setUserInfoSearchQuery(query: string): void {
        const userInfo = this.getUserInfo();
        userInfo.searchQuery = query;
        this.updateUserInfo(userInfo);
    }
}
