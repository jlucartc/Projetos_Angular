import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindComponentComponent } from './event-bind-component.component';

describe('EventBindComponentComponent', () => {
  let component: EventBindComponentComponent;
  let fixture: ComponentFixture<EventBindComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
