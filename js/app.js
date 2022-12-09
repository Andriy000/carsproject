const card = document.getElementById("section");

for (let key in carsData ) {
  let uls = document.createElement("ul");
  uls.className = "products-container"
  let ul =document.createElement('ul');
  ul.className ="products-element";
  let list = document.createElement('li');
  let branData = document.createElement("div");
  branData.className ="products-element_brands";
  let modelData = document.createElement("div");
  let countryData = document.createElement("div");
  let colorData =document.createElement("div");
  let yearData = document.createElement("div");
  let powerData = document.createElement("div");
  let priceData = document.createElement("div");
  let button = document.createElement("button")
  button.className = "products-element_btn";
  let photo = document.createElement("img");
  photo.className ="products-element_img";
  

  
  photo.src = carsData[key].image;
  branData.innerHTML = `Brand: ${carsData[key].brand}`;
  modelData.innerHTML =`model: ${carsData[key].model}`;
  countryData.innerHTML = `country: ${carsData[key].country}`;
  colorData.innerHTML = `color: ${carsData[key].color }`;
  yearData.innerHTML = `year: ${carsData[key].year }`;
  powerData.innerHTML =`power:  ${carsData[key].power}`;
  priceData.innerHTML =`price: ${carsData[key].price} `;
  button.innerHTML = `подзвонити продавцю`


  section.appendChild(uls);
  uls.appendChild(ul);
  ul.appendChild(list);
  list.appendChild(photo);
  list.appendChild(branData);
  list.appendChild(modelData);
  list.appendChild(priceData);
  list.appendChild(yearData);
  list.appendChild(countryData);
  list.appendChild(powerData);
  list.appendChild(colorData);
  ul.appendChild(button);
};
