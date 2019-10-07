import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFileInputComponent } from './material-file-input.component';

describe('MaterialFileInputComponent', () => {
  let component: MaterialFileInputComponent;
  let fixture: ComponentFixture<MaterialFileInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFileInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
