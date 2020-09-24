import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserInfoService } from '../../../../../../shared/services/user-info.service';
import { IUserInfo } from '../../../../../../shared/models/user-info';
import { IBattleHistory } from '../../../../../../shared/models/battle-history.model';
import { battleHistoryFields, sortFn } from '../../../../../../shared/utils/constants';
import { SortDirectionsEnum } from '../../../../../../shared/utils/enums';
import { routes } from '../../../../../../core/routes/app-routes';
import { queryParams } from '../../../../routes/hero-info.route';
import { getQueryParams } from '../../../../../../shared/utils/getQueryParams';

@Component({
    selector: 'app-battles-history',
    templateUrl: './battles-history.component.html',
    styleUrls: [ './battles-history.component.scss' ]
})
export class BattlesHistoryComponent implements OnInit, OnDestroy {

    userInfo: IUserInfo;
    subscriptions: Subscription = new Subscription();
    battlesHistory: IBattleHistory[];
    battleHistoryFields: object = battleHistoryFields;
    order = true;
    direction: SortDirectionsEnum;
    routes = routes;
    getQueryParams = getQueryParams;
    queryParams = queryParams;

    constructor(private userInfoService: UserInfoService) {
    }

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

    sortInOrder(sortName: string): void {
        if (!this.battlesHistory || !this.battlesHistory.length) {
            return;
        }

        this.direction = this.order
                         ? SortDirectionsEnum.ASCEND
                         : SortDirectionsEnum.DESC;
        this.order = !this.order;
        this.battlesHistory.sort(sortFn(sortName, this.direction));
    }

    isHeroName(key: string): boolean {
        return (key === 'heroName' || key === 'opponentName');
    }

    isNumber(value: string | number): boolean {
        return Number.isFinite(value);
    }
}
