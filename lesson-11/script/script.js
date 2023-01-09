// Реализовать функцию, которая принимает на вход массив с данными (товары) и рендерит на страницу карточки товаров.

// Пример масисива данных, с которыми должна работать функция, используйте их для теста:

const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];


// Для реазизации задачи используйте разные способы, как и innerHTML с шаблонными строками, так и метод append()

const createCard = () => {
  for(i = 0; i <= products.length; i++){

    const createProductCard = (name, brand, properties, price) => {
      const cardContainer = document.createElement("div");
      const productName = document.createElement("h1");
      const productBrand = document.createElement("h2");
      const productPrise = document.createElement("h2");
      
    
    
      productName.innerText = name;
      productBrand.innerText = brand;

    
      const productProperties = (properties) => {
        const listProperties = document.createElement("ul");
       
    
        properties.forEach((item) => {
          const itemProperties = document.createElement("li");
          itemProperties.innerText = item;
    
          listProperties.append(itemProperties);
        });
    
        document.body.append(listProperties);
      }
    
      productProperties(products);


      productPrise.innerText = price;

      
    
      cardContainer.append(productBrand, productName, productProperties, productPrise);
    
      console.dir(cardContainer);
      console.log(cardContainer)
    
      return cardContainer;
    
    
    }
    
    const cards = createProductCard(products);
    console.log(cards)
    
    document.body.append(cards);
  }
}
const result = createCard(products)

