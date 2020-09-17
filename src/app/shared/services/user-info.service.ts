import { Injectable } from '@angular/core';
import { IUserInfo, UserInfo } from '../models/user-info';
import { Hero, IHero } from '../models/hero.model';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {

    private userInfoSubject: BehaviorSubject<IUserInfo> = new BehaviorSubject(this.getUserInfo());
    userInfo$: Observable<IUserInfo> = this.userInfoSubject.asObservable();

    constructor(public apiService: ApiService ) {}

    setUserInfo(userInfo: IUserInfo): void {
        this.userInfoSubject.next(userInfo);
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
