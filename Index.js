
    // Product Data

    const products = [

        {
            id: 1,
            name: "Women's Stylish Dress",
            category: "Women",
            price: 1499,
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"
        },

        {
            id: 2,
            name: "Men's Casual Shirt",
            category: "Men",
            price: 1299,
            image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500"
        },

        {
            id: 3,
            name: "Fashion Handbag",
            category: "Accessories",
            price: 899,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
        },

        {
            id: 4,
            name: "Women's Denim Jeans",
            category: "Women",
            price: 1799,
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
        },

        {
            id: 5,
            name: "Men's T-Shirt",
            category: "Men",
            price: 799,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
        },

        {
            id: 6,
            name: "Women's Fashion Top",
            category: "Women",
            price: 999,
            image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=500"
        },

        {
            id: 7,
            name: "Stylish Sunglasses",
            category: "Accessories",
            price: 599,
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
        },

        {
            id: 8,
            name: "Men's Jacket",
            category: "Men",
            price: 2499,
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
        }

    ];


    // Display Products

    const productContainer = document.getElementById("productContainer");

    function displayProducts(data) {

        productContainer.innerHTML = "";

        data.forEach(product => {

            productContainer.innerHTML += `

                <div class="product-card">

                    <img src="${product.image}" alt="${product.name}">

                    <h3>${product.name}</h3>

                    <p>₹${product.price}</p>

                    <button onclick="addToCart(${product.id})">
                        Add To Cart
                    </button>

                </div>

            `;

        });

    }

    displayProducts(products);


    // Filter Products

    function filterProducts(category) {

        let filteredProducts;

        if (category === "All") {

            filteredProducts = products;

        } else {

            filteredProducts = products.filter(
                product => product.category === category
            );

        }

        displayProducts(filteredProducts);

    }


    // Shopping Cart

    let cart = [];

    function addToCart(id) {

        let product = products.find(p => p.id === id);

        let existingProduct = cart.find(p => p.id === id);

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                ...product,
                quantity: 1
            });

        }

        updateCart();

        alert("Product added to cart!");

    }


    // Update Cart

    function updateCart() {

        let cartItems = document.getElementById("cartItems");

        let total = 0;

        let count = 0;

        cartItems.innerHTML = "";

        cart.forEach((item, index) => {

            total += item.price * item.quantity;

            count += item.quantity;

            cartItems.innerHTML += `

                <div class="cart-item">

                    <div>

                        <h4>${item.name}</h4>

                        <p>₹${item.price} × ${item.quantity}</p>

                        <button onclick="removeFromCart(${index})">
                            Remove
                        </button>

                    </div>

                </div>

            `;

        });

        document.getElementById("cartCount").innerText = count;

        document.getElementById("totalPrice").innerText = total;

    }


    // Remove Cart Item

    function removeFromCart(index) {

        cart.splice(index, 1);

        updateCart();

    }


    // Open Cart

    function openCart() {

        document.getElementById("cartSidebar")
            .classList.add("active");

    }


    // Close Cart

    function closeCart() {

        document.getElementById("cartSidebar")
            .classList.remove("active");

    }


    // Search Products

    function openSearch() {

        document.getElementById("searchBox").style.display = "block";

    }

    function closeSearch() {

        document.getElementById("searchBox").style.display = "none";

        document.getElementById("searchInput").value = "";

        displayProducts(products);

    }

    function searchProducts() {

        let searchValue = document.getElementById("searchInput")
            .value.toLowerCase();

        let filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchValue)
        );

        displayProducts(filtered);

    }


    // Mobile Menu

    function toggleMenu() {

        document.getElementById("navbar")
            .classList.toggle("active");

    }


    // Newsletter

    document.getElementById("newsletterForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("email").value;

        document.getElementById("message").innerText =
            "Thank you for subscribing!";

        this.reset();

    });


    // Checkout

    function checkout() {

        if (cart.length === 0) {

            alert("Your cart is empty!");

        } else {

            alert("Demo checkout! Payment gateway is not connected yet.");

        }

    }
