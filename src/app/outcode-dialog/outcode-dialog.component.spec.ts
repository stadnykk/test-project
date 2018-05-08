import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcodeDialogComponent } from './outcode-dialog.component';

describe('OutcodeDialogComponent', () => {
  let component: OutcodeDialogComponent;
  let fixture: ComponentFixture<OutcodeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcodeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
