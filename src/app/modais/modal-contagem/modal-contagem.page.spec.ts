import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalContagemPage } from './modal-contagem.page';

describe('ModalContagemPage', () => {
  let component: ModalContagemPage;
  let fixture: ComponentFixture<ModalContagemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
