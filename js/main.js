let elList = document.querySelector(".list")
let elPostsList = document.querySelector(".posts")
let elCommetsList = document.querySelector(".comments")

function rednderNavbar(arr, list, isData){
    if(isData == "users"){
        arr.forEach(item => {
            let elItem = document.createElement("li")
            elItem.localName = "w-full p-5 rounded-md bg-blue-500"
            elItem.innerHTML = `
            <div class="bg-slate-300 p-6">
               <h2 class="font-bold text-[20px] mb-[5px]">${item.name}</h2>
                <p class="font-medium mb-[5px] text-blue-800 hover:text-red-500 duration-300">${item.email}</p>
               <a class="text-orange-500 hover:text-green-500 duration-300" href="tel:${item.phone}">${item.phone}</a>
            </div>
            `
            list.appendChild(elItem)
        })
    }
    else if(isData == "posts"){
        arr.forEach(item => {
            let elItem = document.createElement("li")
            elItem.localName = "w-full p-5 rounded-md bg-blue-500"
            elItem.innerHTML = `
            <div class="bg-slate-300 p-6">
               <h2 class="font-bold text-[20px] mb-[5px]">${item.title}</h2>
                <p class="font-medium mb-[5px] text-blue-800 hover:text-red-500 duration-300">ID : ${item.id}</p>
               <a class="text-orange-500 hover:text-green-500 duration-300" href="">${item.body}</a>
            </div>
            `
            list.appendChild(elItem)
        })
    }
    else{
        arr.forEach(item => {
            let elItem = document.createElement("li")
            elItem.localName = "w-full p-5 rounded-md bg-blue-500"
            elItem.innerHTML = `
            <div class="bg-slate-300 p-6">
               <h2 class="font-bold text-[20px] mb-[5px]">${item.name}</h2>
                <p class="font-medium mb-[5px] text-blue-800 hover:text-red-500 duration-300">${item.id}</p>
                <p class="font-medium mb-[5px] text-blue-800 hover:text-red-500 duration-300">${item.email}</p>
               <a class="text-orange-500 hover:text-green-500 duration-300" href="">${item.body}</a>
            </div>
            `
            list.appendChild(elItem)
        })
    }
}

function renderFeatch(API, lists, isDataValue){
    fetch(API , {
        method:"Get",
        headers:{
         "Content-type":"application/json"
        }
     }).then(res => res.json()).then(data => {
         rednderNavbar(data, lists, isDataValue)
     })
}
renderFeatch("https://jsonplaceholder.typicode.com/users" , elList, "users")
renderFeatch("https://jsonplaceholder.typicode.com/posts" , elPostsList, "posts")
renderFeatch("https://jsonplaceholder.typicode.com/comments" , elCommetsList, "comments")
