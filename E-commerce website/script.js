var sidemenu = document.getElementById("sidemenu");
const productWrapper = document.querySelector('.product-wrapper')

function openMenu(){
    sidemenu.style.right = "0";
}
function closeMenu(){
    sidemenu.style.right = "-200px";
}
// ---------------products------------------
let products = [{name:'Apple',price:'Rs.200/kg',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aspernatur.',image:'images/apple-1702316_640.jpg'},
{name:'Capsicum',price:'Rs.50/kg',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aspernatur.',image:'images/bell-peppers-1264209_640.jpg'},
{name:'Cabbage',price:'Rs.20/kg',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aspernatur.',image:'images/cabbage-1353192_640.jpg'},
{name:'Cherry',price:'Rs.400/kg',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aspernatur.',image:'images/cherries-3477927_640.jpg'},
{name:'Orange',price:'Rs.200/kg',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aspernatur.',image:'images/orange-1117645_640.jpg'},
{name:'Lemon',price:'Rs.300/kg',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aspernatur.',image:'images/limes-1310253_640.jpg'},
{name:'Tomato',price:'Rs.20/kg',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aspernatur.',image:'images/tomato-498721_640.jpg'},
{name:'Green Chilly',price:'Rs.200/kg',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aspernatur.',image:'images/jalapenos-1320629_640.jpg'},

];
products.forEach(mapProducts)

function mapProducts(product){
    const productBox = document.createElement('div')
    productBox.innerHTML= `<div class="product-box">
    <img src="${product.image}" alt="">
    <div class="desc">
    <h2>${product.name}</h2>
    <h3>${product.price}</h3>
    <p>${product.desc}</p>
    <button>Add to Cart</button>
    </div>
</div>`
    productWrapper.appendChild(productBox)
}

// ----------------Reviews----------------

let reviewWrapper = document.querySelector('.review-wrapper');

reviewWrapper.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    reviewWrapper.scrollLeft += evt.deltaY;
    reviewWrapper.style.scrollBehavior = "auto";

})

