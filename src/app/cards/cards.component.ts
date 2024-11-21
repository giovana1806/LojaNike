import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../module/services/product.service';
import { Iproducts } from '../module/services/iproducts';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[ProductService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit{
  constructor(private productsService:ProductService){}
  products: Iproducts[] = [];

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
  static chamarFuncao(chamarFuncao: any){
    throw new Error('Method not implemented.');
  }
  mensagem: string = 'Nenhuma ação realizada ainda.';
  buttonColor = 'blue';
  chamarFuncao(): void {
    this.mensagem = 'Botão clicado! A função foi chamada com sucesso.';
    console.log('Função chamada ao clicar no botão.');
    this.buttonColor = 'red';
  }
}