const btn=document.querySelector(".show-btn");
const btn2=document.querySelector(".hide-btn");
async function getProducts(){
    const respnoe=await fetch("https://dummyjson.com/products");
    const data= await respnoe.json();
    console.log(data);
    const products=data.products;
    console.log(products);
    const result=products.map((product)=>{
        return`
            <div class="product">
                <img src="${product.thumbnail}" alt="">
                <h2><span>Title : </span>${product.title}</h2>
                <h3><span>Price : </span>${product.price} $</h3>
                <h4><span>Brand : </span>${product.brand}</h4>
                <input type="button" value="Buy" class='buy'>
            </div>
        `
    });
    btn.onclick=function(){
        document.querySelector(".products").innerHTML=result.join("");
    }
    btn2.onclick=function(){
        document.querySelector(".products").innerHTML="";
    }
}
getProducts();