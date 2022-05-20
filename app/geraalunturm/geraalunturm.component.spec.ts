import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeraalunturmComponent } from './geraalunturm.component';

describe('GeraalunturmComponent', () => {
  let component: GeraalunturmComponent;
  let fixture: ComponentFixture<GeraalunturmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeraalunturmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeraalunturmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
