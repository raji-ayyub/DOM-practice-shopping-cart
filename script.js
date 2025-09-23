    // --- Step 1: Product Data (Objects) ---
    const products = [
      { id: 1, name: "Laptop", price: 800, qty: 0 },
      { id: 2, name: "Phone", price: 500, qty: 0 },
      { id: 3, name: "Headphones", price: 100, qty: 0 }
    ];

    // --- Step 2: Render Products ---
    const productsDiv = document.getElementById("products");

    function renderProducts() {


      productsDiv.innerHTML = "<h2>Products</h2>"; // -- Renders the h2 header on the page

      // rendering the products in the product data using forEach loop
      products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
          <span>${product.name} - $${product.price}</span>
          <button onclick="addToCart(${product.id})">Add</button>
          <button onclick="removeFromCart(${product.id})">Remove</button>
          <span>Qty: ${product.qty}</span>
        `;
        productsDiv.appendChild(div);
      });
    }


    

    // --- Step 3: Add & Remove Functions ---
    function addToCart(id) {
      const item = products.find(p => p.id === id);
      item.qty++;
      renderProducts();
      renderCart();
    }

    function removeFromCart(id) {
      const item = products.find(p => p.id === id);
      if (item.qty > 0) item.qty--;
      renderProducts();
      renderCart();
    }

    // --- Step 4: Render Cart ---
    const cartDiv = document.getElementById("cart");
    const totalDiv = document.getElementById("total");

    function renderCart() {
      cartDiv.innerHTML = "<h2>Your Cart</h2>";
      let total = 0;
      
      products.forEach(item => {
        if (item.qty > 0) {
          const itemTotal = item.price * item.qty;
          total += itemTotal;

          const div = document.createElement("div");
          div.textContent = `${item.name} x ${item.qty} = $${itemTotal}`;
          cartDiv.appendChild(div);
        }
      });

      totalDiv.textContent = `Total: $${total}`;
    }

    // --- Initialize ---
    renderProducts();
    renderCart();