const productContainer = document.getElementById('product-container');
const loadingElement = document.getElementById('loading');

// Fetch and display products
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const products = await response.json();

        // loadingElement.style.display = 'none';
        displayProducts(products);
    } catch (error) {
        productContainer.innerHTML = `
                    <div class="col-12 text-center text-danger">
                        <p>${error.message}</p>
                    </div>
                `;
        console.error(error);
    }
}

function displayProducts(products) {
    products.forEach(product => {
        const productCard = `
                    <div class="col-md-4 col-lg-3 d-flex">
                        <div class="card">
                            <img src="${product.image}" class="card-img-top" alt="${product.title}">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text text-muted">${product.description.slice(0, 100)}...</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="fw-bold">$${product.price}</span>
                                    <a href="productDetails.html?id=${product.id}" class="btn btn-primary btn-sm">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        productContainer.innerHTML += productCard;
    });
}

fetchProducts();
