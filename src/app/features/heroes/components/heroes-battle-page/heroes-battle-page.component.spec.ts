import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesBattlePageComponent } from './heroes-battle-page.component';

describe('HeroesBattlePageComponent', () => {
  let component: HeroesBattlePageComponent;
  let fixture: ComponentFixture<HeroesBattlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesBattlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesBattlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
