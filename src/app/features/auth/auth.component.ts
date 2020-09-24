import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { routes } from '../../core/routes/app-routes';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate([routes.LOGIN.routerPath]);
  }
}
