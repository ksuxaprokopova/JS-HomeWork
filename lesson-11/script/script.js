// Реализовать функцию, которая принимает на вход массив с данными (товары) и рендерит на страницу карточки товаров.

// Пример масисива данных, с которыми должна работать функция, используйте их для теста:

const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: "price: 3200000",
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: "price: 2900000",
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: "price: 1300000",
    properties: ["Best price", "Pay less - get more!"],
  },
];


// Для реазизации задачи используйте разные способы, как и innerHTML с шаблонными строками, так и метод append()

const createCard = (createProductCard) => {
  const cardContainer = document.createElement("div");

    createProductCard.forEach((product) =>{


      const productCardContainer = document.createElement("div");
      const productName = document.createElement("h2");
      const productBrand = document.createElement("h3");
      const productPrise = document.createElement("h4");
      const productProperties = document.createElement("ul");


      productName.innerText = product.name;
      productBrand.innerText = product.brand;
     


      product.properties.forEach((elem) => {
        const listProperties = document.createElement("li");
        listProperties.innerText = elem;
       
    
        productProperties.append(listProperties);

      })


      productPrise.innerText = product.price;


      productCardContainer.append(productName, productBrand, productProperties, productPrise);



      cardContainer.append(productCardContainer);
    });

    document.body.append(cardContainer);
     
} ;    
      
  

createCard(products);




const createCard2 = (createProductCard) => {
  const cardContainer = document.createElement("div");

  cardContainer.innerHTML = `
    ${createProductCard
      .map((product) =>{
        return `
        <div>
          <h2>${product.name}</h2>
          <h3>${product.brand}</h3>
          <ul>
            ${product.properties
              .map((properties) =>{
                return`
                <li>
                  ${properties}
                </li>
                `
                })
              .join("")}
          </ul>
          <h4>${product.price}</h4>
        </div>
        `
        })
      .join("")};
    `

  document.body.append(cardContainer);
};

createCard2(products);