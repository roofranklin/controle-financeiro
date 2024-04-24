import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTimerComponent } from './session-timer.component';

describe('SessionTimerComponent', () => {
  let component: SessionTimerComponent;
  let fixture: ComponentFixture<SessionTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
