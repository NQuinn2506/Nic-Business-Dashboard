const products = [
    { name: "Laptop", costPrice: 800, sellingPrice: 1200 },
    { name: "Mouse", costPrice: 25, sellingPrice: 15 },
    { name: "Keyboard", costPrice: 50, sellingPrice: 45 },
    { name: "Monitor", costPrice: 150, sellingPrice: 300 }
];

const container = document.getElementById('dashboard-container');

products.forEach(product => {
    let profit = product.sellingPrice - product.costPrice;
    
    // 1. Create a "box" (div) for the product
    const card = document.createElement('div');
    card.classList.add('product-card');

    // 2. Decide which "costume" to apply
    if (profit > 0) {
        card.classList.add('profitable');
        card.innerHTML = `<h3>${product.name}</h3> <p>Profit: $${profit}</p>`;
    } else {
        card.classList.add('deficit');
        card.innerHTML = `<h3>${product.name}</h3> <p>Deficit: $${profit}</p>`;
    }

    // 3. Put the card on the stage (HTML)
    container.appendChild(card);
});