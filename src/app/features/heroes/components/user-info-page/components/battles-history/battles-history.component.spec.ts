import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlesHistoryComponent } from './battles-history.component';

describe('BattlesHistoryComponent', () => {
  let component: BattlesHistoryComponent;
  let fixture: ComponentFixture<BattlesHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattlesHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
