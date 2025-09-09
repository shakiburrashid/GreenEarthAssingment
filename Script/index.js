// Global Declaration 
let nowMoney = 0;

// Loading Spinner
const manageSpinner = async (status) => {
    if (status == true) {
        document.getElementById("loading-spinner").classList.remove('hidden')
        document.getElementById("CartShow5").classList.add('hidden')
    } else {
        document.getElementById("loading-spinner").classList.add('hidden')
        document.getElementById("CartShow5").classList.remove('hidden')
    }
}


const catagoriesList = async () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    const res = await fetch(url)
    const get = await res.json();
    showCatagoriesList(get.categories);
}




const showCatagoriesList = (list) => {
    const Catagories = document.getElementById("Catagories");
    for (let i of list) {
        const h1 = document.createElement('h1');
        h1.innerHTML =
            `<h2 id="selected-${i.id}" onclick="cardList(${i.id})" class="text-xl p-2 rounded-xl cursor-pointer allclick hover:bg-[#15803D] hover:text-white">${i.category_name}</h2>`
        Catagories.appendChild(h1)
    }
}

const RemoveActive = () => {
    const remove = document.querySelectorAll(".allclick")

    for (let i of remove) {
        i.classList.remove('primary')
    }
    
}

catagoriesList()


const cardList = async (id) => {
    manageSpinner(true);
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    const res = await fetch(url)
    const get = await res.json()
    showCardList(get.plants);
    RemoveActive();
    const addSelected = document.getElementById(`selected-${id}`)
    addSelected.classList.add('primary')
    
    
}


// ? Cart Show and Spinner Show

// ! Categories Cart List
const showCardList = (list) => {
    const Cart = document.getElementById("Cart");
    Cart.innerHTML = " ";
    for (let i of list) {
        const div = document.createElement("div")
        div.innerHTML =
            `<div id="CartShow5" class="p-4  w-90 max-md:w-80 bg-white rounded-xl ">
                <div class=" place-content-center flex">

                    <img class=" w-[320px] h-[180px] bg-cover rounded-sm "
                        src="${i.image}" alt="">
                </div>
                <div>
                    <p onclick="DisplayShowModale(${i.id})" class="font-bold mt-2 cursor-pointer">${i.name}</p>
                    <p>${i.description}</p>
                </div>
                <div class="flex justify-between items-center mt-3">
                    <p class="btn bg-[#DCFCE7] text-[#15803D] rounded-full">${i.category}</p>
                    <p class="font-bold"><span class="banglafont">৳ </span>${i.price}</p>
                </div>
                <button onclick="Cart(${i.id})" class="mt-3 btn primary w-full rounded-full">Add to Cart</button>
        </div>`

        Cart.appendChild(div)
    };
    manageSpinner(false);
}

// ! Auto Show Card List
const AutoShowCardList = async () => {
    manageSpinner(true);
    const url = `https://openapi.programming-hero.com/api/plants`
    const res = await fetch(url)
    const get = await res.json()
    NowShowCardList(get.plants);

}
AutoShowCardList();
const NowShowCardList = (id) => {
    const NowCart = document.getElementById('Cart')
    for (let i of id) {
        const addCart = document.createElement("div")
        addCart.innerHTML = `
        <div id="CartShow5" class="p-4  w-90 max-md:w-80 bg-white rounded-xl">
                <div class=" place-content-center flex">

                    <img class=" w-[320px] h-[180px] bg-cover rounded-sm"
                        src="${i.image}" alt="">
                </div>
                <div>
                    <p onclick="DisplayShowModale(${i.id})" class="font-bold mt-2 cursor-pointer">${i.name}</p>
                    <p>${i.description}</p>
                </div>
                <div class="flex justify-between items-center mt-3">
                    <p class="btn bg-[#DCFCE7] text-[#15803D] rounded-full">${i.category}</p>
                    <p class="font-bold"><span class="banglafont">৳ </span>${i.price}</p>
                </div>
                <button onclick="Cart(${i.id})" class="mt-3 btn primary w-full rounded-full">Add to Cart</button>
            </div>`
        NowCart.appendChild(addCart)
    }
    manageSpinner(false);
}

// Show Modale 
const DisplayShowModale = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    const res = await fetch(url);
    const get = await res.json();
    NowShowDialog(get.plants)

}
// Show Modale 
const NowShowDialog = (details) => {
    console.log(details);
    
    const dialog = document.getElementById('dialog');
    dialog.innerHTML=""
    const div = document.createElement('div')
    div.innerHTML = `
    <div id="modal_box" class="modal-box ">
            <div class=" place-content-center flex flex-col gap-5">
                <p class="font-bold mt-2 cursor-pointer text-2xl">${details.name}</p>
                <img class=" w-[400px] h-[200px] bg-cover rounded-xl mb-7" src="${details.image}" alt="">
            </div>
            <div class="space-y-5">
                <p class="mt-2 cursor-pointer"><span class="font-bold">Categories:</span> ${details.category}</p>
                <p><span class="font-bold">Price: </span>${details.price}</p>
                <p><span class="font-bold">Description:</span> ${details.description}</p>
            </div>
                <div class="modal-action">
                    <form method="dialog">
                        <button class="btn">Close</button>
                    </form>
                </div>
            </div>`

    dialog.appendChild(div)

    document.getElementById('dialog').showModal();

}





let Cart = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    const res = await fetch(url)
    const get = await res.json();
    alert(`${get.plants.name} has been added to cart`)
    const yourCardShow = document.getElementById("your-card-show").classList.remove('hidden')
    CartAmount(get.plants);
}

// Add To Cart
let CartAmount = (list) => {
    addAmount1(list.price);
    const cartAmount = document.getElementById("cartAmount")
    const div = document.createElement("div")
    div.innerHTML =
        `<div id='removeContainer-${list.id}'>
            <div class="bg-[#F0FDF4] p-3 my-3 m-3 rounded-xl max-md:p-0">
                    <div class="flex items-center justify-between space-y-5">
                            <div class="mt-3">
                                <h1 class="font-bold">${list.name}</h1>
                                <p><span class="banglafont">৳</span>${list.price} x 1</p>
                            </div>
                        <i onclick="removeCart(${list.id},${list.price})" class="fa-solid fa-xmark cursor-pointer"></i>
                    </div>
            </div>
    </div>`
    cartAmount.appendChild(div)

}

// Card remove and Subtract Money
const removeCart = (id, money) => {
    const a = document.getElementById(`removeContainer-${id}`)
    a.remove();

    let TotalMoney = document.getElementById("totalMoney");
    nowMoney -= money
    TotalMoney.innerHTML = nowMoney;
}



// Add Money
const addAmount1 = (updateMoney) => {
    let TotalMoney = document.getElementById("totalMoney");
    nowMoney += updateMoney
    TotalMoney.innerHTML = nowMoney;
}


