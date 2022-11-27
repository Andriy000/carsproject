let carCatalogCard ='';
cars.forEach(({id,brand,model,color,price,image,year,country,power,video})=>{
  carCatalogCard +=`
    <ul class="products-element">
      <img class="products-element_img" src="${image}"/>
      <p>Brand:<span class="products-element_brands"> ${brand},</span></p>
      <p>Model:<span class="products-element_models"> ${model},<span/></p>
      <p>Color:<span class="products-element_colors"> ${color},<span/></p>
      <p>Price:<span class="products-element_prices"> ${price.toLocaleString()}USD,<span/></p>
      <p>Year of issue: <span class="products-element_years"> ${year},<span/></p>
      <p>Country:<span class="products-element_countries"> ${country},<span/></p>
      <p>Power: <span class="products-element_powers">${power},<span/></p>
      <p>Video rewiev:<span class="products-element_videos"> <a href="${video}">video</a></span></p>
      <button class="products-element_btn">Позвонити продавцю 📞</button>
    </ul> `;
});
const HTMLdata =`
<ul class ="products-container">
${carCatalogCard}
</ul>
`;

card.innerHTML=HTMLdata;
