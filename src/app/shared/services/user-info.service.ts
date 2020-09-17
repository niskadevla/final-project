import { Injectable } from '@angular/core';
import { IUserInfo, UserInfo } from '../models/user-info';
import { IHero } from '../models/hero.model';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {

    constructor(public apiService: ApiService ) {}

    createUserInfo(userInfo: IUserInfo): void {
        if (!this.getUserInfo()) {
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
        }
    }

    updateUserInfo(userInfo: IUserInfo): void {
        if (this.getUserInfo()) {
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
        } else {
            this.createUserInfo(userInfo);
        }
    }

    getUserInfo(): IUserInfo {
        return JSON.parse(window.localStorage.getItem('userInfo'))
            || new UserInfo('', []);
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
