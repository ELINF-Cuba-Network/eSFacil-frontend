import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedResourcesComponent } from './denied-resources.component';

describe('DeniedResourcesComponent', () => {
  let component: DeniedResourcesComponent;
  let fixture: ComponentFixture<DeniedResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeniedResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeniedResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
