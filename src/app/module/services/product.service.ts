import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Iproducts[] = [
    { id: 1, name: 'Adidas Own The Game', price: 300.00, description: 'Entre em quadra e domine o jogo com o Tênis de Basquete Adidas', image: './tenis1.png'},
    { id: 2, name: 'Adidas Streetcheck', price: 340.50, description: 'Uma plataforma de lançamento de sonhos. Uma tela em branco.', image: './tenis2.png' },
    { id: 3, name: 'Adidas Ultraboost', price: 220.50, description: 'Nova geração mais leve e com ainda mais retorno de energia', image: './tenis3.png'},
  ];
  getProducts(): Iproducts[] {
    return this.products;
  }
}
