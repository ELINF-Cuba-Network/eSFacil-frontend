import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendResourcesComponent } from './send-resources.component';

describe('SendResourcesComponent', () => {
  let component: SendResourcesComponent;
  let fixture: ComponentFixture<SendResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
