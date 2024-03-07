const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors:[
           { code: "black",
        img: "./sneakker.png"
        },
  {
        code: "darkblue",
        img: "./sneaker66.png",
    }]
    },

    {
        id: 2,
        title: "JORDAN",
        price: 159,
        colors:[
           { code: "black",
        img: "./sneaker4-removebg-preview.png"
        },
  {
        code: "darkblue",
        img: "./sneaker66.png",
    }]
    },

    {
        id: 3,
        title: "BLAZER",
        price: 119,
        colors:[
           { code: "black",
        img: "./sneakker.png"
        },
  {
        code: "darkblue",
        img: "./sneaker66.png",
    }]
    },

    {
        id: 4,
        title: "CRATER",
        price: 129,
        colors:[
           { code: "black",
        img: "./sneakker.png"
        },
  {
        code: "darkblue",
        img: "./sneaker66.png",
    }]
    },

    {
        id: 5,
        title: "HIPPIE",
        price: 219,
        colors:[
           { code: "black",
        img: "./sneakker.png"
        },
  {
        code: "darkblue",
        img: "./sneaker66.png",
    },
    ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes= document.querySelectorAll(".size");


menuItems.forEach((item, index)=>{
 item.addEventListener("click", ()=>{
    console.log("you clicked" + index)
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change the choosen product
     choosenProduct = products[index]

    //  change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title 
    currentProductPrice.textContent = "$" + choosenProduct.price
     currentProductImg.src = choosenProduct.colors[0].img

     currentProductColors.forEach((color, index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code
     })
});
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) =>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex"
})

close.addEventListener("click", ()=>{
    payment.style.display = "none"
})