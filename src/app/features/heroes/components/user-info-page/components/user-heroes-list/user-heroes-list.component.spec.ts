import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeroesListComponent } from './user-heroes-list.component';

describe('UserHeroesListComponent', () => {
  let component: UserHeroesListComponent;
  let fixture: ComponentFixture<UserHeroesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHeroesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
