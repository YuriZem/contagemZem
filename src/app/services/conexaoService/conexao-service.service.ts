import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class ConexaoServiceService {
  private apiUrl = 'http://localhost:3000/'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }


  //*****************
  //**** PRODUTO ****
  //*****************
  getProdutos(): Observable<any> {
    return this.http.get(this.apiUrl + 'produtos');
  }

  postProduto(produto: any): Observable<any> {
    //preciso colocar o codigo 
    //quantidade geral 
    return this.http.post(this.apiUrl + 'produto', produto);
  }

  //*****************
  //**** ESTOQUE ****
  //*****************
  getEstoque(): Observable<any> {
    return this.http.get(this.apiUrl + 'estoques');
  }

  postEstoque(estoque: any): Observable<any> {
    //preciso colocalar o codigo 
    //quantidade geral 
    return this.http.post(this.apiUrl + 'estoque', estoque);
  }


  //*********************
  //**** CONFERENCIA ****
  //*********************

  getConferencias(): Observable<any> {
    return this.http.get(this.apiUrl + 'conferencias');
  }



  // Exemplo de POST
  salvarDado(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}





@Injectable({
  providedIn: 'root'
})
export class ApiService {


}