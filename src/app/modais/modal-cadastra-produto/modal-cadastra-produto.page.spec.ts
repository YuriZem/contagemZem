import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCadastraProdutoPage } from './modal-cadastra-produto.page';

describe('ModalCadastraProdutoPage', () => {
  let component: ModalCadastraProdutoPage;
  let fixture: ComponentFixture<ModalCadastraProdutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCadastraProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
