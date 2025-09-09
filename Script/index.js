
const catagoriesList = async()=>{
    const url = "https://openapi.programming-hero.com/api/categories"
    const res = await fetch(url)
    const get = await res.json();
    showCatagoriesList(get.categories);
}

let nowMoney = 0;


const showCatagoriesList = (list)=>{
    const Catagories = document.getElementById("Catagories");
    for(let i of list){
        const h1 = document.createElement('h1');
        h1.innerHTML = 
        `<h2 id="selected-${i.id}" onclick="cardList(${i.id})" class="text-xl p-2 rounded-xl cursor-pointer allclick hover:bg-[#15803D] hover:text-white">${i.category_name}</h2>`
        Catagories.appendChild(h1)
       //let autoselected =  document.getElementById("selected-1").classList.add("primary")
       
        
    }
}
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500





const RemoveActive= ()=>{
    const remove = document.querySelectorAll(".allclick")
    
    for(let i of remove){
        i.classList.remove('primary')
    }
}

catagoriesList()




const cardList = async (id)=>{
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    const res = await fetch(url)
    const get = await res.json()
const Cart = document.getElementById("Cart");
    showCardList(get.plants);
    RemoveActive();
    const select = document.getElementById(`selected-${id}`)
    select.classList.add('primary')
}


// Cart Section
const showCardList = (list)=>{
        const Cart = document.getElementById("Cart");
        Cart.innerHTML = "";        
        for(let i of list){
            const div = document.createElement("div")
            div.innerHTML= 
            ` <div class="p-4  w-90 bg-white rounded-xl">
                <div class=" place-content-center flex">

                    <img class=" w-[320px] h-[180px] bg-cover rounded-sm "
                        src="${i.image}" alt="">
                </div>
                <div>
                    <p class="font-bold mt-2">${i.name}</p>
                    <p>${i.description}</p>
                </div>
                <div class="flex justify-between items-center mt-3">
                    <p class="btn bg-[#DCFCE7] text-[#15803D] rounded-full">${i.category}</p>
                    <p class="font-bold"><span class="banglafont">৳ </span>${i.price}</p>
                </div>
                <button onclick="Cart(${i.id})" class="mt-3 btn primary w-full rounded-full">Add to Cart</button>
            </div>`
            Cart.appendChild(div)
        }
}



// ! Auto Show Card List
const AutoShowCardList =async ()=>{
    const url = `https://openapi.programming-hero.com/api/plants`
    const res = await fetch(url)
    const get = await res.json()
    NowShowCardList(get.plants);
   
}
AutoShowCardList();

const NowShowCardList = (id) => {
    const NowCart = document.getElementById('Cart')

    for(let i of id){
    const addCart = document.createElement("div")
        addCart.innerHTML=`
        <div class="p-4  w-90 bg-white rounded-xl">
                <div class=" place-content-center flex">

                    <img class=" w-[320px] h-[180px] bg-cover rounded-sm "
                        src="${i.image}" alt="">
                </div>
                <div>
                    <p class="font-bold mt-2 cursor-pointer">${i.name}</p>
                    <p>${i.description}</p>
                </div>
                <div class="flex justify-between items-center mt-3">
                    <p class="btn bg-[#DCFCE7] text-[#15803D] rounded-full">Fruit Tree</p>
                    <p class="font-bold"><span class="banglafont">৳ </span>${i.price}</p>
                </div>
                <button onclick="Cart(${i.id})" class="mt-3 btn primary w-full rounded-full">Add to Cart</button>
            </div>`
            NowCart.appendChild(addCart)
    }
}


let Cart = async (id)=>{
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    const res = await fetch(url)
    const get = await res.json();
   const yourCardShow = document.getElementById("your-card-show").classList.remove('hidden')
    CartAmount(get.plants);
}


let CartAmount = (list) => {
    addAmount1(list.price);    
    // subtractAmount2(list.price);
    const cartAmount = document.getElementById("cartAmount")
    const div = document.createElement("div")
    div.innerHTML = 
    `<div id='removeContainer-${list.id}'>
            <div class="bg-[#F0FDF4] p-3 my-3 m-3 rounded-xl">
                    <div class="flex items-center justify-between space-y-5 ">
                            <div class="mt-3">
                                <h1 class="font-bold">${list.name}</h1>
                                <p><span class="banglafont">৳</span>${list.price} x 1</p>
                            </div>
                        <i id="valueRemove${list.price}" onclick="removeCart(${list.id},${list.price})" class="fa-solid fa-xmark cursor-pointer"></i>
                    </div>
            </div>
    </div>`
    cartAmount.appendChild(div)
    
}

const removeCart = (id,taka)=>{
   const a = document.getElementById(`removeContainer-${id}`)
   a.remove();

   let TotalMoney = document.getElementById("totalMoney");
    nowMoney -= taka
    TotalMoney.innerHTML=nowMoney;
}






// let nowMoney = 0;
const addAmount1 = (updateMoney)=>{
    let TotalMoney = document.getElementById("totalMoney");
    nowMoney += updateMoney
    TotalMoney.innerHTML = nowMoney;
}

// subtractAmount1(nowMoney);


// {
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500
// },












// let a = 0;
// const addAmount = (amount)=>{
//      a += amount
//      console.log(a);
     
    
// }



// https://openapi.programming-hero.com/api/category/
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500