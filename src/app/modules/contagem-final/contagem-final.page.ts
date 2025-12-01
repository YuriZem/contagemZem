import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/core/database/database.service';
import { SharedIonicModule } from 'src/app/services/SharedIonicModule/shared-ionic-module.service';

@Component({
  selector: 'app-contagem-final',
  templateUrl: 'contagem-final.page.html',
  imports: [SharedIonicModule,],
  styleUrls: ['contagem-final.page.scss'],
})
export class ContagemFinalPage implements OnInit {

  produtos: any[] = [];

  constructor(private db: DataBaseService) {}

  async ngOnInit() {
    this.produtos = await this.db.query("SELECT * FROM produtos");

    // adiciona campo quantidade
    this.produtos = this.produtos.map(p => ({ ...p, quantidade: 0 }));
  }

  aumentar(p: any) {
    p.quantidade++;
  }

  diminuir(p: any) {
    if (p.quantidade > 0) p.quantidade--;
  }

  async salvar() {
    const dataHoje = new Date().toISOString().split('T')[0];

    for (const produto of this.produtos) {
      if (produto.quantidade > 0) {
        await this.db.run(
          `INSERT INTO vendas_sistema (data, produto_id, quantidade, origem) VALUES (?, ?, ?, ?)`,
          [dataHoje, produto.id, produto.quantidade, 'MANUAL']
        );
      }
    }

    alert("Vendas registradas!");
  }
}
