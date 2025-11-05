import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/core/database/database.service';
import { SharedIonicModule } from 'src/app/services/SharedIonicModule/shared-ionic-module.service';

@Component({
  selector: 'app-contagem-inicial',
  templateUrl: 'contagem-inicial.page.html',
  imports: [SharedIonicModule,],
  styleUrls: ['contagem-inicial.page.scss'],
})
export class ContagemInicialPage implements OnInit {

  freezers: any[] = [];
  selectedFreezer: any = null;
  produtos: any[] = [];

  constructor(private db: DataBaseService) {}

  async ngOnInit() {
    this.freezers = await this.db.query("SELECT * FROM freezers");
  }

  async selecionarFreezer(freezer: any) {
    this.selectedFreezer = freezer;

    // carrega lista de produtos
    this.produtos = await this.db.query("SELECT * FROM produtos");

    // cria obj com quantidade inicial zerada
    this.produtos = this.produtos.map(p => ({ ...p, quantidade: 0 }));
  }

  aumentar(p: any) {
    p.quantidade++;
  }

  diminuir(p: any) {
    if (p.quantidade > 0) p.quantidade--;
  }

  async salvar() {
    const dataHoje = new Date().toISOString().split('T')[0]; // yyyy-mm-dd

    for (const produto of this.produtos) {
      await this.db.run(
        `INSERT INTO estoques (data, tipo, produto_id, freezer_id, quantidade) VALUES (?, ?, ?, ?, ?)`,
        [dataHoje, 'INICIAL', produto.id, this.selectedFreezer.id, produto.quantidade]
      );
    }

    alert('Contagem inicial salva com sucesso!');
    this.selectedFreezer = null;
  }
}
