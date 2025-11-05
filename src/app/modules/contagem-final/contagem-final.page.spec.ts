import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContagemFinalPage } from './contagem-final.page';

describe('ContagemFinalPage', () => {
  let component: ContagemFinalPage;
  let fixture: ComponentFixture<ContagemFinalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContagemFinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
