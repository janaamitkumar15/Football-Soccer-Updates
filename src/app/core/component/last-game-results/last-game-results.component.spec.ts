import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastGameResultsComponent } from './last-game-results.component';

describe('LastGameResultsComponent', () => {
  let component: LastGameResultsComponent;
  let fixture: ComponentFixture<LastGameResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastGameResultsComponent]
    });
    fixture = TestBed.createComponent(LastGameResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
