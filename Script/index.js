const catagoriesList = async()=>{
    const url = "https://openapi.programming-hero.com/api/categories"
    const res = await fetch(url)
    const get = await res.json();
    showCatagoriesList(get.categories);
}



const showCatagoriesList = (list)=>{
    const Catagories = document.getElementById("Catagories");
    for(let i of list){
        const h1 = document.createElement('h1');
        h1.innerHTML = 
        `<h2 id="selected-${i.id}" onclick="cardList(${i.id})" class="text-xl p-2 rounded-xl cursor-pointer allclick">${i.category_name}</h2>`
        Catagories.appendChild(h1)
    }
}

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
    showCardList(get.plants);
    RemoveActive();
    const select = document.getElementById(`selected-${id}`)
    select.classList.add('primary')
}

const showCardList = (list)=>{
        const Cart = document.getElementById("Cart");
        Cart.innerHTML = " "
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
                <button class="mt-3 btn primary w-full rounded-full">Add to Cart</button>
            </div>`
            Cart.appendChild(div)
        }
}





// https://openapi.programming-hero.com/api/category/
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500