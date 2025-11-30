let cart = JSON.parse(localStorage.getItem("cart")) || [];


function updateCartCount() {
    document.getElementById("cartCount").innerText = cart.length;
}
updateCartCount();


function addToCart(id, name, price) {
    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    content.innerHTML = `
        <p>Вкажіть кількість:</p>
        <input type="number" id="qty" value="1" min="1">
        <br><br>
        <button onclick="confirmAdd(${id}, '${name}', ${price})">Додати</button>
    `;

    modal.style.display = "block";
}


function confirmAdd(id, name, price) {
    const qty = +document.getElementById("qty").value;

    cart.push({ id, name, price, qty });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    showMessage();
}


function showMessage() {
    document.getElementById("modalContent").innerHTML = `
        <p>✅ Товар додано</p>
        <button onclick="location.href='cart.html'">Перейти у корзину</button>
        <button onclick="closeModal()">Повернутись до покупок</button>
    `;
}


function openCart() {
    cart.length === 0
        ? alert("Корзина пуста")
        : location.href = "cart.html";
}


function renderCart() {
    const div = document.getElementById("cartItems");
    if (!div) return;

    if (cart.length === 0) {
        div.innerHTML = "<p>Корзина пуста</p>";
        return;
    }

    div.innerHTML = "";
    cart.forEach(item => {
        div.innerHTML += `
            <div class="cart-item">
                <strong>${item.name}</strong><br>
                Ціна: ${item.price} грн<br>
                Кількість: ${item.qty}
            </div>
        `;
    });
}


function closeModal() {
    document.getElementById("modal").style.display = "none";
}
