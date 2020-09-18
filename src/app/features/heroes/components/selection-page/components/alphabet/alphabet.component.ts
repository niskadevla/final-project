import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../shared/services/api.service';
import { UserInfoService } from '../../../../../../shared/services/user-info.service';
import { IUserInfo } from '../../../../../../shared/models/user-info';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit, OnDestroy {

    alphabet: string[];
    isClicked = false;
    userInfo: IUserInfo;
    selectedLetter: string;
    subscription: Subscription = null;

    constructor(private apiService: ApiService,
                private userInfoService: UserInfoService) {}

    ngOnInit(): void {
        this.alphabet = this.getAlphabet();
        this.initData();
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
            this.selectedLetter = this.userInfo.selectedLetter;
        });
    }

    getAlphabet(): string[] {
        const arr = [];

        for (let i = 65; i <= 90; i++) {
            arr.push(String.fromCharCode(i));
        }

        return arr;
    }

    onClick($event: MouseEvent): void {
        const target = $event.target as HTMLAnchorElement;
        const letter = target.dataset.value;

        if (letter) {
            this.userInfoService.setUserInfoSelectedLetter(letter);
            this.userInfoService.setUserInfoSearchQuery(letter);
            this.selectedLetter = letter;
        }

        this.isClicked = !this.isClicked;
    }
}
