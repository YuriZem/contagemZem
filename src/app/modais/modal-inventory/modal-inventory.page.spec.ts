import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalInventoryPage } from './modal-inventory.page';

describe('ModalInventoryPage', () => {
  let component: ModalInventoryPage;
  let fixture: ComponentFixture<ModalInventoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
