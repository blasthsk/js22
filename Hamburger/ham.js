class additionalMenu{
    constructor(){
        this.additionalItems = []
        this._f()
    }
    _f(){
        this.additionalItems=[
            {id:1,title:"salad",price:20,cals:5},
            {id:2,title:"potato",price:15,cals:10},
            {id:3,title:"cheese",price:10,cals:20},
            {id:4,title:"mayonnaise",price:20,cals:5},
            {id:5,title:"seasoning",price:15,cals:0}

        ]
    }
    render(){
        let block = document.querySelector(".additionalOptions")
        for(let item of this.additionalItems){
            const ItemObj = new ExtraItem(item)
            block.appendChild(ItemObj.render())
        }
    }
}


class ExtraItem{
    constructor(x){
        this.name = x.title
        this.price = x.price
        this.cals =x.cals
        this.id =x.id
    }
    render(){
        const dElem = document.createElement("div");
        dElem.setAttribute("style","width:300px; height:100px; border: 1px solid green; margin-bottom: 10px; display:flex; justify-content: space-around;")
        const butt = document.createElement("div")
        butt.setAttribute("style","width:100; height: 50px;  background-color: orange; align-self:center")
        butt.textContent = `${this.name}  +${this.price} coins`

        const form = document.createElement("div")
        form.setAttribute("style","width:100px; height: 50px; border: 1px solid green; align-self:center; text-align: center; overflow: hidden;")
        form.setAttribute("class","form")
        form.textContent = 0;


        dElem.appendChild(form)
        dElem.appendChild(butt)
         
        dElem.onclick = (event)=> {
            const x = event.currentTarget
            
            const y = x.querySelector(".form")
            y.textContent = parseInt(y.textContent) + 1
            
        }
        return dElem

        
    }
}
class Hamburger{
    constructor(price = 0,calories = 0,img = "https://placehold.it/300x300"){
        this.img = img
        this.price =price
        this.calories = calories
    }
    addIngridient(x){
        this.totalCalories()
        this.totalPrice()
    }
    totalCalories(){
        const showC = document.querySelector(".showCalories")
        showC.textContent = this.calories
    }
    totalPrice(){
        const showP = document.querySelector(".showPrice")
        showP.textContent = this.Price
    }
    
}





let elemArrow = document.querySelector(".arrowLeft")
elemArrow.onclick = () => {
    let BigHam = new Hamburger(100,40)
    let picture = document.querySelector(".screen")
    picture.innerHTML = `<img src="${BigHam.img}" alt="">`
    const i = document.querySelector(".additionalOptions")
    i.innerHTML = ''
    let addIn = new additionalMenu()
    return addIn.render()
}
let elemArrowTWO = document.querySelector(".arrowRight")
elemArrowTWO.onclick = () => {
    let smallHam = new Hamburger(50,20)
    let picture = document.querySelector(".screen")
    picture.innerHTML = `<img src="${smallHam.img}" alt="">`
    const i = document.querySelector(".additionalOptions")
    i.innerHTML = ''
    let addIn = new additionalMenu()
    return addIn.render()
}

