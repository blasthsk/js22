class ProductList{
	constructor(container=".products"){
  	this.container = container;
    this.goods = [];
    this._fetchProduct();
    
  }
  _fetchProduct(){
  	this.good = [
    {id:1,title: "Refregirator",price:22000},
    {id:2, title:"Dishwasher",price: 14000},
    {id:3,title:"Microwave",price:5600},
    {id:4,title:"Coffe Maker",price:19000}
    
    ]
  }
  sumOfAllGoods(){
    let s = 0
    for (let i = 0; i < this.good.length; i++) {
      s = s + parseInt(this.good[i].price)
      
    }
    return s
  }
  render(){
  	let block = document.querySelector(this.container)
  	for(let product of this.good){
    	const ProductObj = new ProductItem(product)
        block.innerHTML += ProductObj.render()
    }
    console.log(this.sumOfAllGoods())
  }
  
}

class ProductItem{
	constructor(product,img="https://placehold.it/200x150"){
  	    this.title = product.title
        this.price = product.price
        this.id = product.id
        this.img = img
  }
  render(){

  	 return `<div class="product_item" id = ${this.id}>
            <img src=${this.img} alt="" >
            <h2>${this.title}</h2>
            <p>${this.price} coins</p>
            <button>Buy Now</button>
      </div>`
      
  }
}


let list = new ProductList()
list.render()