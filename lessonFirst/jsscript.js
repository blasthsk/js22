const products = [
    {id : 1 , title : "Parfume", price : 4999,pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZx1W3eRkca7WHDM8upj2f3MDyyI-0L79AXQ&usqp=CAU"},
    {id : 1 , title : "Black pen", price : 100,pic : "data:image/jpeg;base64,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"},
    {id : 1 , title : "Swiss Watch", price : 12000, pic : "https://www.dhresource.com/200x200s/f2-albu-g9-M01-6E-41-rBVaWF3XjBWAaNPxAAdUTm5WHoA936.jpg/nibosi-watch-men-chronograph-wrist-watch.jpg"},
    {id : 1 , title : "Silver fork", price : 3500, pic : "https://cdnimg.webstaurantstore.com/images/products/medium/52068/1753227.jpg "},
]
const styledProduct = (title,price,pic = "https://placehold.it/200") => {
    return `<div class="product_item" style = "margin-bottom: 25px; width: 450px; height: 350px; border: 1px solid grey;">
    <img src=${pic} alt="${title} ">
    <h3>${title}</h3>
    <h3>${price}</h3>
    <div class="buy_btn" style="background-color: rgb(77, 174, 219); padding: 10px 20px; width: 50px;">Buy</div>
</div>`

}

const innerProduct = list => {
    const productList = products.map(item => styledProduct(item.title,item.price,item.pic)).join('')
    document.querySelector(".products").innerHTML = productList

}

innerProduct()