let elProducts = document.querySelector(".products")
let elSearchLabel = document.querySelector(".admin-label")
let elSearchInput = document.querySelector(".search-input")
let data = []

function renderList(arr){
    elProducts.innerHTML = ""
    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.className = "w-full p-5 rounded-md bg-teal-500 text-center"
        elItem.innerHTML = `
            <p class="font-medium">${item.id}</p>
            <img src=${item.images[0]} width="full"/>
            <h2 class="font-bold text-[20px] mb-[15px] text-slate-300">${item.title}</h2>
            <p class="font-medium text-[16px] mb-[10px]">${item.description}</p>
            <strong class="font-bold text-[25px] text-white mb-[15px]">${item.category}</strong>
            <h3 class="font-bold text-[25px] text-yellow-500 mb-[10px]">${item.brand}</h3>
            <p class="font-bold text-[20px] text-green-900 mb-[10px]"><span class="font-bold text-[18px] text-black">S K U</span> : ${item.sku}</p>
            <strong class="font-bold text-[18px] text-slate-500 mb-[10px]"><span class="font-bold text-[18px] text-black">INFORMATION</span> : ${item.warrantyInformation}</strong>
            <p class="font-bold text-[18px] text-white mt-[10px]"><span class="font-bold text-[18px] text-black">RATING </span> : ${item.rating}</p>

        `
        elProducts.appendChild(elItem)
    })
}

fetch("https://dummyjson.com/products").then(res => res.json()).then(data =>{
    renderList(data.products)
    localStorage.setItem("products" , JSON.stringify(data.products))
})


elSearchInput.addEventListener("input", function (e){
    const products = JSON.parse(localStorage.getItem("products"))
    const data = products.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    renderList(data)
})