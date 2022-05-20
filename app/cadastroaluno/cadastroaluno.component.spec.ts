import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroalunoComponent } from './cadastroaluno.component';

describe('CadastroalunoComponent', () => {
  let component: CadastroalunoComponent;
  let fixture: ComponentFixture<CadastroalunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroalunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
