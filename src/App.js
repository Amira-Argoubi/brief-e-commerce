import React, { Component } from "react";
import "./App.css";

import Child from "./components/child";

let products = [
  {
    id: "1",

    image:
      "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2019.2F12.2F06.2F99ba624b-7942-4ba5-be62-6bbd0ba9e611.2Ejpeg/865x600/quality/65/tendance-sac-le-modele-embosse.jpg",

    title: "p1",
    price: 250,
    description: "magnifique",
    quantity: 0,
  },

  {
    id: "2",

    image: "https://monlook.fr/8758-large_square/sac-nuage-cuir-daim-camel.jpg",
    title: "p2",
    price: 300,
    description: "ftouuu9",
    quantity: 0,
  },

  {
    id: "3",

    image:
      "https://static.galerieslafayette.com/media/606/60628998/G_60628998_57103_VPP_1.jpg",

    title: "p3",
    price: 180,
    description: "woooow",
    quantity: 0,
  },

  {
    id: "4",

    image: "https://www.chloe.com/45/45504997FB_17_f.jpg",

    title: "p4",
    price: 200,
    quantity: 0,
    description: "fashionable",
  },

  {
    id: "5",

    image:
      "https://static.e-stradivarius.net/5/photos3/2020/V/0/1/p/0717/011/531/0717011531_1_1_3.jpg",

    title: "p5",
    price: 150,
    description: "original",
    quantity: 0,
  },

  {
    id: "6",

    image:
      "https://cdn.laredoute.com/products/362by362/2/6/d/26d7f3011a8622c9a858c3497fed25a8.jpg",

    title: "p6",
    price: 260,
    description: "modern",
    quantity: 0,
  },
];

class App extends Component {
  state = {
    products: products,
  };

  /********************************fonction********************** */

  quantityUp = (id) => {
    let plus = this.state.products[id].quantity++;

    this.setState({ products });
  };
  /*************************DECREMENT ************ */
  quantityDown = (id) => {
    let minus = this.state.products[id].quantity--;
    this.setState({ products });
  };

  render() {
    return (
      <div className="App">
        <Child
          list={this.state.products}
          up={this.quantityUp}
          down={this.quantityDown}
          somme={this.total}
        />
      </div>
    );
  }
}
export default App;
