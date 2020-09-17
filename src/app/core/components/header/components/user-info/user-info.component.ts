import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../../../shared/services/user-info.service';
import { IHero } from '../../../../../shared/models/hero.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

    lastHero: IHero;

    constructor(public userInfoService: UserInfoService) {}

    ngOnInit(): void {
        const selectedHeroes = this.userInfoService.getUserInfo().selectedHeroes;
        this.lastHero = selectedHeroes[selectedHeroes.length - 1];
    }
}
