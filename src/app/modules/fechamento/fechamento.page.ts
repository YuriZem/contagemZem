import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/core/database/database.service';
import { SharedIonicModule } from 'src/app/services/SharedIonicModule/shared-ionic-module.service';

@Component({
  selector: 'app-fechamento',
  templateUrl: 'fechamento.page.html',
  imports: [SharedIonicModule,],
  styleUrls: ['fechamento.page.scss'],
})
export class FechamentoPage implements OnInit {

  resultado: any[] = [];

  constructor(private db: DataBaseService) {}

  async ngOnInit() {
    await this.carregarFechamento();
  }

  async carregarFechamento() {
    const dataHoje = new Date().toISOString().split('T')[0];

    this.resultado = await this.db.query(`
      SELECT 
        p.nome,
        IFNULL((
          SELECT quantidade FROM estoques 
          WHERE produto_id = p.id AND data = ? AND tipo = 'INICIAL' LIMIT 1
        ), 0) AS inicial,
        IFNULL((
          SELECT quantidade FROM estoques 
          WHERE produto_id = p.id AND data = ? AND tipo = 'FINAL' LIMIT 1
        ), 0) AS final,
        IFNULL((
          SELECT SUM(quantidade) FROM vendas_sistema
          WHERE produto_id = p.id AND data = ?
        ), 0) AS vendido
      FROM produtos p
    `, [dataHoje, dataHoje, dataHoje]);

    // Calcula saída real e diferença
    this.resultado = this.resultado.map(r => ({
      ...r,
      saidaReal: r.inicial - r.final,
      diferenca: (r.inicial - r.final) - r.vendido
    }));
  }
}
