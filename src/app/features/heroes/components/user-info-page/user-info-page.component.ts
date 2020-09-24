import { Component } from '@angular/core';
import { routes } from '../../../../core/routes/app-routes';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent {

    routes = routes;
}
