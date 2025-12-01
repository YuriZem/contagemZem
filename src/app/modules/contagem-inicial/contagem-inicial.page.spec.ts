import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContagemInicialPage } from './contagem-inicial.page';

describe('ContagemInicialPage', () => {
  let component: ContagemInicialPage;
  let fixture: ComponentFixture<ContagemInicialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContagemInicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
