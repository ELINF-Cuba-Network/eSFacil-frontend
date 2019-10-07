import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedResourcesComponent } from './accepted-resources.component';

describe('AcceptedResourcesComponent', () => {
  let component: AcceptedResourcesComponent;
  let fixture: ComponentFixture<AcceptedResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
