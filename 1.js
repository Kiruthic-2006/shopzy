
const cart = [];


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        const productName = e.target.parentElement.querySelector('h3').innerText;
        const productPrice = e.target.parentElement.querySelector('p').innerText;

        cart.push({ id: productId, name: productName, price: productPrice });
        alert(`${productName} has been added to the cart!`);
        console.log(cart);
    });
});
