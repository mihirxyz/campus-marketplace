
// ==========================
// LOAD PRODUCTS (HOME PAGE)
// ==========================

let products = JSON.parse(localStorage.getItem("products")) || [];

let productList = document.getElementById("productList");

if (productList) {
  if (products.length === 0) {
    productList.innerHTML = "<p class='text-center'>No products yet</p>";
  } else {
    products.forEach((p, index) => {
      productList.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card shadow-sm">
            <img src="${p.image}" class="card-img-top" height="200">
            <div class="card-body">
              <h5 class="card-title fw-bold">${p.title}</h5>

              <p class="card-text text-muted" style="font-size: 0.9rem;">
              ${
                p.description 
               ? p.description.split(" ").slice(0, 7).join(" ") + "..." 
                  : "No description"
                 }
              </p>

<p class="card-text fw-bold">₹${p.price}</p>

              <div class="d-flex gap-2">
                <button class="btn btn-dark w-50" onclick="viewProduct(${index})">
                  View Details
                </button>
                <button class="btn btn-success w-50" onclick="buyProduct(${index})">
                  Buy
                </button>
              </div>

            </div>
          </div>
        </div>
      `;
    });
  }
}

// ==========================
// VIEW PRODUCT (GO TO DETAIL PAGE)
// ==========================

function viewProduct(index) {
  localStorage.setItem("selectedProduct", index);
  window.location.href = "product.html";
}

// ==========================
// BUY PRODUCT
// ==========================

function buyProduct(index) {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  alert("Product bought: " + products[index].title);

  // Remove product after buying
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));

  window.location.href = "index.html";
}

// ==========================
// LOAD SINGLE PRODUCT (product.html)
// ==========================

let productDetail = document.getElementById("productDetail");

if (productDetail) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let index = localStorage.getItem("selectedProduct");

  let p = products[index];

  if (p) {
    productDetail.innerHTML = `
  <div class="col-md-10 mx-auto">
    <div class="card shadow-lg p-4" style="background: rgba(255,255,255,0.95); backdrop-filter: blur(5px);">
      <div class="row g-4 align-items-center">

        <!-- IMAGE -->
        <div class="col-md-6 text-center">
          <img src="${p.image}" class="img-fluid rounded" style="max-height: 350px; object-fit: cover;">
        </div>

        <!-- DETAILS -->
        <div class="col-md-6">
          <h2 class="fw-bold mb-3">${p.title}</h2>

          <p class="text-muted mb-3">
            ${p.description || "No description available"}
          </p>

          <h3 class="fw-bold text-success mb-4">₹${p.price}</h3>

          <button class="btn btn-success w-100 mb-2" onclick="buyProduct(${index})">
            Buy Now
          </button>

          <a href="index.html" class="btn btn-outline-dark w-100">
            ← Back
          </a>
        </div>

      </div>
    </div>
  </div>
`;
  }
}
