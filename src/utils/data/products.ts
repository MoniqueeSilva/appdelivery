const MENU = [
  {
    title: "Lanche do dia",
    data: [
      {
        id: "1",
        title: "X-Duplo Smash",
        price: 24.9,
        description:
          "Sabores intensos se chocando em um abraço suculento: o encontro épico de 2 blends da casa e tudo que há de melhor.",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
    ],
  },
  {
    title: "Promoções",
    data: [
      {
        id: "2",
        title: "X-Tudo",
        price: 34.9,
        description:
          "Os ingredientes desse hambúrguer mudam toda semana, então você sempre terá uma surpresa...",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Pão brioche;",
          "1x Bife (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Presunto;",
          "Ovo;",
          "Molho da casa;",
        ],
      },
      {
        id: "3",
        title: "X-Da Casa",
        price: 32.7,
        description:
          "Sabor intenso em cada mordida. Nosso campeão suculento e irresistível. O mais pedido da casa.",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Duplo Cheddar;",
          "Ovo;",
          "Bacon;",
          "Alface;",
          "Tomate;",
          "Calabresa;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
      {
        id: "4",
        title: "X-Frango",
        price: 29.9,
        description:
          "Leveza e sabor se encontram em cada pedaço do nosso hambúrguer de frango, uma explosão de sabores suculentos que conquistam o paladar. ",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Pão brioche;",
          "1x Filé de Frango empanado de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebolinha;",
          "Cebola Caramelisada;",
          "Molho da casa;",
        ],
      },
    ],
  },
  {
    title: "Sobremesa",
    data: [
      {
        id: "5",
        title: "Sorvete com Brownie",
        price: 18.9,
        description:
          "Uma sobremesa deliciosa para saborear. Escolha o sorvete e a calda que desejar...",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "1x Brownie;",
          "1x Bola de sorvete a sua escolha",
          "Escolha sua calda;",
        ],
      },
      {
        id: "6",
        title: "Cupcake",
        price: 22.9,
        description:
          "Um delicioso Cupcake para adoçar. Escolha o sabor que você gosta...",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Escolha o sabor;", "Chantilly;"],
      },
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "7",
        title: "Coca Cola",
        price: 6.9,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "Uma coca super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },
    ],
  },
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }