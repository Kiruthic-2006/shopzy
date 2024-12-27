document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const cartSection = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");

    const updateCart = () => {
        cartSection.innerHTML = "";
        if (cartItems.length === 0) {
            cartSection.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            const ul = document.createElement("ul");
            let totalPrice = 0;

            cartItems.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.name} - ₹${item.price}`;
                ul.appendChild(li);
                totalPrice += item.price;
            });

            cartSection.appendChild(ul);
            totalPriceEl.textContent = `Total Price: ₹${totalPrice}`;
        }
    };

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseInt(button.getAttribute("data-price"), 10);

            cartItems.push({ name, price });
            updateCart();
        });
    });
});
