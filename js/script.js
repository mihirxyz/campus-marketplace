// Load products on homepage
let products = JSON.parse(localStorage.getItem("products")) || [];

let productList = document.getElementById("productList");

if (productList) {
  if (products.length === 0) {
    productList.innerHTML = "<p class='text-center'>No products yet</p>";
  } else {
    products.forEach((p, index) => {
      productList.innerHTML += `         <div class="col-md-4 mb-4">           <div class="card shadow-sm">             <img src="${p.image}" class="card-img-top" height="200">             <div class="card-body">               <h5 class="card-title">${p.title}</h5>               <p class="card-text fw-bold">₹${p.price}</p>               <button class="btn btn-dark w-100" onclick="viewProduct(${index})">
                View Details               </button>             </div>           </div>         </div>
      `;
    });
  }
}

// Go to product page
function viewProduct(index) {
  localStorage.setItem("selectedProduct", index);
  window.location.href = "product.html";
}
