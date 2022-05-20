import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastromateriaComponent } from './cadastromateria.component';

describe('CadastromateriaComponent', () => {
  let component: CadastromateriaComponent;
  let fixture: ComponentFixture<CadastromateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastromateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastromateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
