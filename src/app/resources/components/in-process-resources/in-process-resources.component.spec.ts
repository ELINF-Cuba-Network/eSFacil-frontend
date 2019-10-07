import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProcessResourcesComponent } from './in-process-resources.component';

describe('InProcessResourcesComponent', () => {
  let component: InProcessResourcesComponent;
  let fixture: ComponentFixture<InProcessResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProcessResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProcessResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
