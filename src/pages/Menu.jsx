import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";
import "../styles/Menu.css";
import img1 from "../assets/img/image-12.webp";

const MENU_DATA = [
  {
    category: "Novidades",
    items: [
      {
        name: "Milano Burger",
        price: "R$ 30,00",
        desc: "2 hambúrguer, 2 fatias de queijo provolone, Cebola roxa, Alface e tomate",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1772071454197blob_600.webp",
        link: "https://pedido.anota.ai/product/697276ac0a40b3ff822188b4/0/snack-burguer-."
      },
      {
        name: "oklahoma",
        price: "R$ 32,00",
        desc: "Pão brioche, alface, tomate, 1 hambúrguer 130g, 2 fatias de queijo provolone, cebola caramelizada, bacon, maionese caseira.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769136530318blob_600.webp",
        link: "https://pedido.anota.ai/product/69727b4b1309f567f2df0143/0/snack-burguer-."
      },
      {
        name: "Insane burguer",
        price: "R$ 28,00",
        desc: "Pão brioche, alface, tomate, 1 hambúrguer 130g, 2 fatias de queijo provolone, bacon caramelizado, maionese caseira.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769135657501blob_600.webp",
        link: "https://pedido.anota.ai/product/69727824a96eeb581ff9d569/0/snack-burguer-."
      },
      {
        name: "Porção de Fritas com Costela desfiada e Creme de queijo",
        price: "R$ 38,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1763940849657blob_600.webp",
        link: "https://pedido.anota.ai/product/692399f39f20b53d92d4413d/0/snack-burguer-."
      }
    ]
  },
  {
    category: "Promoção",
    items: [
      {
        name: "2 BATIDAS DE AÇAÍ PROMOCIONAIS",
        price: "R$ 20,00",
        desc: "Cabores Disponíveis: Chocolate - Paçoca - Dorella - Amendoims - Creme Ninho - Brigadeiro de Maracuja",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1775686419883blob_600.webp",
        link: "https://pedido.anota.ai/product/69d6d3158edce5734ad57cee/0/snack-burguer-."
      }
    ]
  },
    {
    category: "Porções",
    items: [
      {
        name: "Batata, Mussarela E Bacon",
        price: "R$ 38,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812732456blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118b/0/snack-burguer-."
      },
      {
        name: "Meia porção de Batata, mussarela e bacon",
        price: "R$ 19,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852024754blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1afaccb056af7946da98/0/snack-burguer-."
      },
      {
        name: "Batata, Calabresa e cheddar",
        price: "R$ 43,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1771885942158blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118c/0/snack-burguer-."
      },
      {
        name: "Meia porção de batata, calabresa e cheddar",
        price: "R$ 21,50",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1771885942158blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1a584beeac365b101f81/0/snack-burguer-."
      },
      {
        name: "Batata, Calabresa, bacon e cheddar",
        price: "R$ 50,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769664923482blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118e/0/snack-burguer-."
      },
      {
        name: "Meia porção de batata, calabresa, cheddar e bacon",
        price: "R$ 25,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852150725blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1b78d18cee3d39193009/0/snack-burguer-."
      },
      {
        name: "Picanha assada na brasa",
        price: "R$ 80,00",
        desc: "Acompanha mandioca cozida.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852584627blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51194/0/snack-burguer-."
      },
      {
        name: "Meia porção de picanha na brasa",
        price: "R$ 40,00",
        desc: "Acompanha mandioca cozida.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852584627blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1d2a2ea686f9169a6cfc/0/snack-burguer-."
      },
      {
        name: "Coxinha empanada",
        price: "R$ 55,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812980060blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118f/0/snack-burguer-."
      },
      {
        name: "Meia porção de coxinha empanada",
        price: "R$ 27,50",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852243102blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1bd43391633547b6416a/0/snack-burguer-."
      },
      {
        name: "Filé de peito empanado",
        price: "R$ 50,00",
        desc: null,
        img: img1,
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51190/0/snack-burguer-."
      },
      {
        name: "Meia porção de filé de peito empanado",
        price: "R$ 25,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852741952blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1c7accb056af7947091b/0/snack-burguer-."
      },
      {
        name: "Calabresa acebolada",
        price: "R$ 43,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747813013259blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118d/0/snack-burguer-."
      },
      {
        name: "Meia porção de calabresa acebolada",
        price: "R$ 21,50",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747852501215blob_600.webp",
        link: "https://pedido.anota.ai/product/682e1cd64beeac365b10c55c/0/snack-burguer-."
      },
      {
        name: "Batata frita G",
        price: "R$ 30,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812936520blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51193/0/snack-burguer-."
      },
      {
        name: "Batata frita M",
        price: "R$ 27,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812936520blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51192/0/snack-burguer-."
      },
      {
        name: "Batata frita P",
        price: "R$ 21,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812936520blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51191/0/snack-burguer-."
      }
    ]
  },
  {
  category: "Açaí",
    items: [
      {
        name: "Copo de 300ml",
        price: "R$ 13,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748117903398blob_600.webp",
        link: "https://pedido.anota.ai/product/68322991e2f6b16cea29024d/0/snack-burguer-."
      },
      {
        name: "Copo de 400ml",
        price: "R$ 16,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748118480177blob_600.webp",
        link: "https://pedido.anota.ai/product/68322bd24beeac365b6d9934/0/snack-burguer-."
      },
      {
        name: "Copo de 500ml",
        price: "R$ 18,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748118480177blob_600.webp",
        link: "https://pedido.anota.ai/product/68322c9d2ea686f916fa0776/0/snack-burguer-."
      },
      {
        name: "Copo de 700ml",
        price: "R$ 25,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748118480177blob_600.webp",
        link: "https://pedido.anota.ai/product/68322cc733916335471715ed/0/snack-burguer-."
      },
      {
        name: "Combo Família",
        price: "R$ 45,00",
        desc: "2 açaís de 500ml (5 complementos + 1 adicional gourmet por unidade).",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748545121238blob_600.webp",
        link: "https://pedido.anota.ai/product/68322e1b20f458884cbd57ec/0/snack-burguer-."
      },
      {
        name: "Combo TikTok",
        price: "R$ 25,00",
        desc: "2 açaís de 300ml.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748545080226blob_600.webp",
        link: "https://pedido.anota.ai/product/68322ee021f0e4195e1a81b3/0/snack-burguer-."
      },
      {
        name: "Poleta P",
        price: "R$ 25,00",
        desc: "4 complementos.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748119751944blob_600.webp",
        link: "https://pedido.anota.ai/product/683230c921f0e4195e1aed45/0/snack-burguer-."
      },
      {
        name: "Poleta G",
        price: "R$ 40,00",
        desc: "5 complementos.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748119818557blob_600.webp",
        link: "https://pedido.anota.ai/product/6832310c20f458884cbde310/0/snack-burguer-."
      },
      {
        name: "Batida de açaí com amendoim",
        price: "R$ 12,00",
        desc: "300ml.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748124462243blob_600.webp",
        link: "https://pedido.anota.ai/product/68323330ccb056af79a698e2/0/snack-burguer-."
      },
      {
        name: "Batida de açaí gourmet de morango",
        price: "R$ 12,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769375363249blob_600.webp",
        link: "https://pedido.anota.ai/product/69768684c3c2e14f161b2b57/0/snack-burguer-."
      },
      {
        name: "Batida de açaí com mousse de maracujá",
        price: "R$ 12,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769375400849blob_600.webp",
        link: "https://pedido.anota.ai/product/697686a9a96eeb581f4ec4ab/0/snack-burguer-."
      },
      {
        name: "Batida de açaí com Chocotine",
        price: "R$ 12,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1770677630715blob_600.webp",
        link: "https://pedido.anota.ai/product/697a8d41a96eeb581fa0346d/0/snack-burguer-."
      },
      {
        name: "Batida de açaí com creme de paçoca",
        price: "R$ 12,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1770677689811blob_600.webp",
        link: "https://pedido.anota.ai/product/697a8d9e0a40b3ff82ca74c4/0/snack-burguer-."
      },
      {
        name: "Batida de açaí com creme ninho",
        price: "R$ 12,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1770677736469blob_600.webp",
        link: "https://pedido.anota.ai/product/697a8dbb1309f567f285c93e/0/snack-burguer-."
      },
      {
        name: "Batida de açaí com Dorella (creme de avelã)",
        price: "R$ 12,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1770677781008blob_600.webp",
        link: "https://pedido.anota.ai/product/697a8dfcdbebd5f2bbcd6131/0/snack-burguer-."
      },
      {
        name: "Batida de açaí com brownie",
        price: "R$ 12,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1770677914203blob_600.webp",
        link: "https://pedido.anota.ai/product/698a669b1a131a1214c42d48/0/snack-burguer-."
      }
    ]
  },
  {
    category: "Lanches",
    items: [
      {
        name: "Juicy Burguer",
        price: "R$ 18,00",
        desc: "Pão brioche, hambúrguer, alface, tomate, cheddar e molho picante com barbecue.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812501256blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51175/0/snack-burguer-."
      },
      {
        name: "Sensorial",
        price: "R$ 20,00",
        desc: "Pão brioche, alface, tomate, hambúrguer, creme cheddar, molho levemente picante, cebola roxa defumada e barbecue.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812593409blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5117a/0/snack-burguer-."
      },
      {
        name: "X-burguer",
        price: "R$ 23,00",
        desc: "Pão brioche, hambúrguer, barbecue, alface, tomate, ovo, mussarela, cheddar e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812488057blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51176/0/snack-burguer-."
      },
      {
        name: "Griff Costela",
        price: "R$ 26,00",
        desc: "Pão brioche, alface, tomate, queijo cheddar, hambúrguer de costela, cebola defumada na brasa, ovo e mussarela.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812444504blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51178/0/snack-burguer-."
      },
      {
        name: "Classic Burguer",
        price: "R$ 30,00",
        desc: "Pão brioche, hambúrguer, alface, tomate, cheddar, ovo, mussarela, bacon, banana, barbecue e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812541224blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51179/0/snack-burguer-."
      },
      {
        name: "Snack",
        price: "R$ 26,00",
        desc: "Pão brioche, alface, tomate, hambúrguer, ovo, mussarela, barbecue, cebola caramelizada e queijo.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810247911blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5117c/0/snack-burguer-."
      },
      {
        name: "Snack Frango",
        price: "R$ 23,00",
        desc: "Pão brioche, alface, tomate, batata palha, filé de frango empanado, ovo, mussarela e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812464720blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51177/0/snack-burguer-."
      },
      {
        name: "Monster Burguer",
        price: "R$ 34,00",
        desc: "Pão brioche, alface, tomate, 2 hambúrgueres, bacon, creme cheddar, 3 ovos, 3 fatias de mussarela, molho e cebola.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812520480blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51184/0/snack-burguer-."
      },
      {
        name: "Super Monster",
        price: "R$ 56,00",
        desc: "3 camadas de pão brioche, 3 hambúrgueres, banana, alface, tomate, 3 ovos, 3 fatias de mussarela, 2 camadas de bacon e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812558654blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51185/0/snack-burguer-."
      },
      {
        name: "Picanha Burguer",
        price: "R$ 30,00",
        desc: "Pão brioche, tomate, tiras de picanha, alface, cebola, mussarela, barbecue e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810776766blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5117f/0/snack-burguer-."
      },
      {
        name: "Snack Cuiabano",
        price: "R$ 30,00",
        desc: "Pão brioche, cheddar, bacon, hambúrguer de linguiça cuiabana e cebola defumada na brasa.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810401530blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5117d/0/snack-burguer-."
      },
      {
        name: "Duplo Smash",
        price: "R$ 30,00",
        desc: "Pão brioche, 2 hambúrgueres, alface, tomate, cebola crispy, 2 fatias de mussarela, barbecue e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810998375blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51181/0/snack-burguer-."
      },
      {
        name: "Colony Burguer",
        price: "R$ 30,00",
        desc: "Pão brioche, alface, tomate, 2 hambúrgueres, queijo cheddar e cebola caramelizada no vinho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810896983blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51180/0/snack-burguer-."
      },
      {
        name: "Filé Burguer",
        price: "R$ 33,00",
        desc: "Pão brioche, alface, tomate, tiras de filé mignon, cebola defumada, mussarela, barbecue e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747812611554blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51183/0/snack-burguer-."
      },
      {
        name: "Toscana Burguer",
        price: "R$ 24,00",
        desc: "Pão brioche, alface, linguiça toscana na brasa, tomate, ovo, mussarela, cebola, barbecue e molho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810487380blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Durack",
        price: "R$ 33,00",
        desc: "Pão brioche, alface, tomate, hambúrguer, banana, mel, queijo coalho.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747811149889blob.webp",
        link: "https://pedido.anota.ai/"
      }
    ]
  },
  {
    category: "Combos e Barcas",
    items: [
      {
        name: "Combo X-burguer",
        price: "R$ 30,00",
        desc: "X-burguer + batata frita.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747809628924blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51186/0/snack-burguer-."
      },
      {
        name: "Combo Classic",
        price: "R$ 39,00",
        desc: "Classic burguer + batata frita + refrigerante.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747808923351blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51187/0/snack-burguer-."
      },
      {
        name: "Combo Snack",
        price: "R$ 37,00",
        desc: "Snack burguer + batata frita + refrigerante.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747809522241blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51188/0/snack-burguer-."
      },
      {
        name: "Barca Grande",
        price: "R$ 115,00",
        desc: "2 Classic burguer + 2 X-burguer + acompanhamentos.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747810027640blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b5118a/0/snack-burguer-."
      },
      {
        name: "Barca Média",
        price: "R$ 80,00",
        desc: "1 Classic burguer + 1 Snack burguer + acompanhamentos.",
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747809885755blob_600.webp",
        link: "https://pedido.anota.ai/product/682cdda8a9d46608b8b51189/0/snack-burguer-."
      }
    ]
  },
  {
    category: "Refrigerantes",
    items: [
      {
        name: "Coca-Cola (lata)",
        price: "R$ 6,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747796109073blob_600.webp",
        link: "https://pedido.anota.ai/product/682d408ebd87a7f0bc01ff80/0/snack-burguer-."
      },
      {
        name: "Coca-Cola Zero (lata)",
        price: "R$ 6,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747796187781blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Fanta Uva (lata)",
        price: "R$ 6,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747796615621blob_600.webp",
        link: "https://pedido.anota.ai/product/682d4288e2f6b16ceabc8cb7/0/snack-burguer-."
      },
      {
        name: "Fanta Laranja (lata)",
        price: "R$ 6,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747796691696blob_600.webp",
        link: "https://pedido.anota.ai/product/682d42d43391633547a8f745/0/snack-burguer-."
      },
      {
        name: "Guaraná (lata)",
        price: "R$ 6,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769121196836blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Coca-Cola 1L",
        price: "R$ 10,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747796923969blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Guaraná 1L",
        price: "R$ 10,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747797238154blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Fanta Laranja 1L",
        price: "R$ 10,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1761153375659blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Coca-Cola 2L",
        price: "R$ 15,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747796454991blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Coca-Cola Zero 2L",
        price: "R$ 15,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747796534444blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Guaraná 2L",
        price: "R$ 15,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747797269297blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Fanta Uva 2L",
        price: "R$ 15,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747796743816blob_600.webp",
        link: "https://pedido.anota.ai/product/682d4309e2f6b16ceabc918f/0/snack-burguer-."
      },
      {
        name: "Fanta Laranja 2L",
        price: "R$ 15,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1747796859356blob_600.webp",
        link: "https://pedido.anota.ai/product/682d437cccb056af79398118/0/snack-burguer-."
      }
    ]
  },
    {
    category: "Bebidas",
    items: [
      {
        name: "Água sem gás",
        price: "R$ 5,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748841157713blob_600.webp",
        link: "https://pedido.anota.ai/product/683d32c799faf827f859b238/0/snack-burguer-."
      },
      {
        name: "Água c/ gás",
        price: "R$ 6,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748841201462blob_600.webp",
        link: "https://pedido.anota.ai/product/683d32f2be2e0a3a7c52d663/0/snack-burguer-."
      },
      {
        name: "H2O Limão",
        price: "R$ 10,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748841074787blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "H2O Limoneto",
        price: "R$ 10,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748841114132blob_600.webp",
        link: "https://pedido.anota.ai/product/683d329b5c718ecc84efcedc/0/snack-burguer-."
      },
      {
        name: "Monster Ultra Paradise 473ml",
        price: "R$ 15,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748715415625blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Monster Tropical Orange",
        price: "R$ 15,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1769813180227blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Energético Monster 473ml",
        price: "R$ 15,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748715493149blob_600.webp",
        link: "https://pedido.anota.ai/product/683b47e699faf827f831b736/0/snack-burguer-."
      },
      {
        name: "Energético Monster Mango Loco 473ml",
        price: "R$ 15,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748841035849blob_600.webp",
        link: "https://pedido.anota.ai/product/683b48323e3c637901af6443/0/snack-burguer-."
      },
      {
        name: "Monster Ultra 473ml",
        price: "R$ 15,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1748841330669blob.webp",
        link: "https://pedido.anota.ai/"
      }
    ]
  },
  {
    category: "Vinhos",
    items: [
      {
        name: "Vinho Freixenet Italian Rosé",
        price: "R$ 150,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758951926878blob_600.webp",
        link: "https://pedido.anota.ai/product/68d779f76d9fc4ea21abc58e/0/snack-burguer-."
      },
      {
        name: "Vinho EA Tinto",
        price: "R$ 110,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758951562660blob_600.webp",
        link: "https://pedido.anota.ai/product/68d7788b9384f644a5b07e40/0/snack-burguer-."
      },
      {
        name: "Vinho Casillero del Diablo",
        price: "R$ 85,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758951775805blob_600.webp",
        link: "https://pedido.anota.ai/product/68d77960ad2cee15f50938c6/0/snack-burguer-."
      },
      {
        name: "Vinho Pê Tinto",
        price: "R$ 65,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758951849787blob_600.webp",
        link: "https://pedido.anota.ai/product/68d779aa8f156282767e92e1/0/snack-burguer-."
      },
      {
        name: "Vinho Santa Helena Reservado Red Blend",
        price: "R$ 55,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758951681772blob_600.webp",
        link: "https://pedido.anota.ai/product/68d778d28f156282767e9245/0/snack-burguer-."
      },
      {
        name: "Vinho Tinto Olaria Suave",
        price: "R$ 55,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758952450051blob_600.webp",
        link: "https://pedido.anota.ai/product/68d77c038f156282767e94ea/0/snack-burguer-."
      },
      {
        name: "Relax Garibaldi Rosé Suave",
        price: "R$ 48,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758952031175blob_600.webp",
        link: "https://pedido.anota.ai/product/68d77a606d9fc4ea21abc5bd/0/snack-burguer-."
      },
      {
        name: "Adega do Vale",
        price: "R$ 45,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758952378450blob_600.webp",
        link: "https://pedido.anota.ai/product/68d77bbb9384f644a5b0811d/0/snack-burguer-."
      },
      {
        name: "Del Grano Gold Bordô Suave Rosé",
        price: "R$ 45,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758952135773blob_600.webp",
        link: "https://pedido.anota.ai/product/68d77ac9ad2cee15f5093d1f/0/snack-burguer-."
      },
      {
        name: "Pérgola Tinto Suave 750ml",
        price: "R$ 40,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758951460496blob_600.webp",
        link: "https://pedido.anota.ai/product/68d778259384f644a5b07dcb/0/snack-burguer-."
      },
      {
        name: "Quinta do Morgado Tinto Suave",
        price: "R$ 38,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758952089889blob.webp",
        link: "https://pedido.anota.ai/"
      },
      {
        name: "Vinho Chalise Tinto Suave",
        price: "R$ 38,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758952309770blob_600.webp",
        link: "https://pedido.anota.ai/product/68d77b769384f644a5b080de/0/snack-burguer-."
      },
      {
        name: "Sangue de Boi",
        price: "R$ 36,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1758952192140blob_600.webp",
        link: "https://pedido.anota.ai/product/68d77b016d9fc4ea21abc619/0/snack-burguer-."
      },
      {
        name: "La Colina",
        price: "R$ 45,00",
        desc: null,
        img: "https://client-assets.anota.ai/produtos/682b8d5c471e5e0012ee520d/-1764034210835blob_600.webp",
        link: "https://pedido.anota.ai/product/692506a3562a48b7204ccddd/0/snack-burguer-."
      }
    ]
  }
];

export default function Menu() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchTerm = queryParams.get("search")?.toLowerCase() || "";
  
  const [currentIndex, setCurrentIndex] = useState(-1);
  const matchRefs = useRef([]);

  // Encontra todos os itens que dão match
  const matches = useMemo(() => {
    const found = [];
    if (!searchTerm) return found;

    MENU_DATA.forEach((section, sIdx) => {
      section.items.forEach((item, iIdx) => {
        if (
          item.name.toLowerCase().includes(searchTerm) ||
          (item.desc && item.desc.toLowerCase().includes(searchTerm))
        ) {
          found.push({ sIdx, iIdx });
        }
      });
    });
    return found;
  }, [searchTerm]);

  // Resetar índice quando a busca mudar
  useEffect(() => {
    if (matches.length > 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(-1);
    }
  }, [searchTerm]);

  // Scroll suave para o item atual
  useEffect(() => {
    if (matches.length > 0 && matchRefs.current[currentIndex]) {
      matchRefs.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentIndex, matches]);

  const nextMatch = () => {
    setCurrentIndex((prev) => (prev + 1) % matches.length);
  };

  const prevMatch = () => {
    setCurrentIndex((prev) => (prev - 1 + matches.length) % matches.length);
  };

  return (
    <section className="menu-page">
      <header className="menu-header">
        <span className="tag">NOSSA ARTE</span>
        <h1>O Manifesto do Sabor</h1>
        <p>Cada ingrediente é selecionado localmente, cada hambúrguer é moldado à mão.</p>
        
        {searchTerm && (
          <div className="search-controls">
            <p className="search-results-text">
              Mostrando resultados para: <strong>{searchTerm}</strong>
            </p>
            
            {matches.length > 0 ? (
              <div className="navigation-box">
                <button onClick={prevMatch} className="nav-btn">⬅</button>
                <span className="counter">
                  {currentIndex + 1} de {matches.length}
                </span>
                <button onClick={nextMatch} className="nav-btn">➡</button>
              </div>
            ) : (
              <p>Nenhum item encontrado.</p>
            )}
          </div>
        )}
      </header>

      <div className="menu-container">
        {MENU_DATA.map((section, sIdx) => (
          <div key={sIdx} className="menu-section">
            <h2 className="section-title">{section.category}</h2>
            <div className="menu-grid">
              {section.items.map((item, iIdx) => {
                const matchIndex = matches.findIndex(
                  (m) => m.sIdx === sIdx && m.iIdx === iIdx
                );
                const isMatch = matchIndex !== -1;
                const isActive = isMatch && matchIndex === currentIndex;

                return (
                  <div 
                    key={iIdx} 
                    ref={(el) => {
                      if (isMatch) matchRefs.current[matchIndex] = el;
                    }}
                    className={`menu-item ${isMatch ? "highlight" : ""} ${isActive ? "active-match" : ""}`}
                  >
                    <div 
                      className="item-image" 
                      style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="item-info">
                      <div className="item-header">
                        <h3>{item.name}</h3>
                        <span className="price">{item.price}</span>
                      </div>
                      <p>{item.desc}</p>
                      <a href={item.link} target="_blank" rel="noreferrer" className="add-btn">
                        ADICIONAR AO PEDIDO
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/** 
 * EXEMPLO DE CSS PARA Menu.css:
 * 
 * .highlight {
 *   border: 2px solid rgba(255, 193, 7, 0.3);
 *   transition: all 0.3s ease;
 * }
 * 
 * .active-match {
 *   border: 2px solid #ffc107;
 *   box-shadow: 0 0 15px rgba(255, 193, 7, 0.5);
 *   transform: scale(1.02);
 *   z-index: 10;
 * }
 * 
 * .navigation-box {
 *   display: flex;
 *   align-items: center;
 *   gap: 15px;
 *   margin-top: 10px;
 *   justify-content: center;
 * }
 * 
 * .nav-btn {
 *   background: #ffc107;
 *   border: none;
 *   padding: 5px 15px;
 *   border-radius: 4px;
 *   cursor: pointer;
 *   font-weight: bold;
 * }
 */

/** 
 * EXEMPLO DE CSS PARA Menu.css:
 * 
 * .highlight {
 *   border: 2px solid rgba(255, 193, 7, 0.3);
 *   transition: all 0.3s ease;
 * }
 * 
 * .active-match {
 *   border: 2px solid #ffc107;
 *   box-shadow: 0 0 15px rgba(255, 193, 7, 0.5);
 *   transform: scale(1.02);
 *   z-index: 10;
 * }
 * 
 * .navigation-box {
 *   display: flex;
 *   align-items: center;
 *   gap: 15px;
 *   margin-top: 10px;
 *   justify-content: center;
 * }
 * 
 * .nav-btn {
 *   background: #ffc107;
 *   border: none;
 *   padding: 5px 15px;
 *   border-radius: 4px;
 *   cursor: pointer;
 *   font-weight: bold;
 * }
 */
