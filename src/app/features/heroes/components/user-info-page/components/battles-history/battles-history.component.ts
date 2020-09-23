import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserInfoService } from '../../../../../../shared/services/user-info.service';
import { IUserInfo } from '../../../../../../shared/models/user-info';
import { IBattleHistory } from '../../../../../../shared/models/battle-history.model';
import { battleHistoryFields } from '../../../../../../shared/utils/constants';

@Component({
  selector: 'app-battles-history',
  templateUrl: './battles-history.component.html',
  styleUrls: ['./battles-history.component.scss']
})
export class BattlesHistoryComponent implements OnInit, OnDestroy {

    userInfo: IUserInfo;
    subscriptions: Subscription = new Subscription();
    battlesHistory: IBattleHistory[];
    battleHistoryFields: object = battleHistoryFields;
    Object = Object;
    Number = Number;
    order = 1;

    constructor(private userInfoService: UserInfoService) {}

    ngOnInit(): void {
        this.initData();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    initData(): void {
        this.subscriptions.add(this.userInfoService.userInfo$.subscribe((userInfo: IUserInfo) => {
            this.userInfo = userInfo;
            this.battlesHistory = this.userInfo.battlesHistory;
        }));
    }

    sortInOrder(key: string): void {
        if (!this.battlesHistory || !this.battlesHistory.length) {
            return;
        }

        this.battlesHistory.sort((a: IBattleHistory, b: IBattleHistory) => a[key] > b[key] ? this.order : -this.order);
        this.order = -this.order;
    }
}
