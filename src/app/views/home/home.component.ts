import { Component } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public pathFiles: string;

  constructor() {};
  title = 'Sales Management';
  cards = [
    {
      title: "Pedidos",
      subtitle: "Consultar pedidos",
      image: "assets/shop.svg",
      color: "primary",
      icon: "timeline",
      uisref: '/orders',
      stats: {
        label: "Total de pedidos:",
        value: 10
      }
    },
    {
      title: "Produtos",
      subtitle: "Cadastrar produtos",
      image: "assets/products.svg",
      color: "orange",
      icon: "shopping_cart",
      uisref: '/products',
      stats: {
        label: "Total de produtos:",
        value: 10
      }
    },
    {
      title: "Custos",
      subtitle: "Consultar custos",
      image: "assets/custos.svg",
      color: "yellow",
      icon: "attach_money",
      uisref: '/costs',
      stats: {
        label: "Custo atual:",
        value: 'médio'
      }
    }
  ]

}
