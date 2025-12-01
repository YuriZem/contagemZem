import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaContagensPage } from './lista-contagens.page';

describe('ListaContagensPage', () => {
  let component: ListaContagensPage;
  let fixture: ComponentFixture<ListaContagensPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
