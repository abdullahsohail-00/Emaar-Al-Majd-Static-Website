const products = [
    { id: 1, name: 'iPhone 12 Pro' },
     { id: 2, name: 'iPhone 12 Pro Max' },
     { id: 3, name: 'iPhone 13 Pro' },
     { id: 4, name: 'iPhone 13 Pro Max' },
     { id: 5, name: 'iPhone 14 Pro' },
     { id: 6, name: 'iPhone 14 Pro Max' },
     { id: 7, name: 'iPhone 15 Pro' },
     { id: 8, name: 'iPhone 15 Pro Max' },
     { id: 9, name: 'Airpods' },
     { id: 10, name: 'MacBooks' },
     { id: 11, name: 'Apple Watches' },
     { id: 12, name: 'Xioami Phones' },
     { id: 13, name: 'Xiaomi Tablets' },
     { id: 14, name: 'Samsung Phones' },
     { id: 15, name: 'Samsung Watches' },
     { id: 16, name: 'Redmi Phones' },
     { id: 17, name: 'Redmi Watches' },
     
 
  
     // Add more products as needed
 ];
 
 function filterProducts() {
     const input = document.getElementById('search-input').value.toLowerCase();
     const suggestionsContainer = document.getElementById('suggestions-container');
     
     suggestionsContainer.innerHTML = ''; // Clear previous results
     
     if (input.length > 0) {
         const filteredProducts = products.filter(product =>
             product.name.toLowerCase().includes(input)
         );
         
         filteredProducts.forEach(product => {
             const suggestionElement = document.createElement('div');
             suggestionElement.className = 'suggestion-item';
             suggestionElement.textContent = product.name;
             suggestionElement.onclick = () => redirectToShop(product);
             suggestionsContainer.appendChild(suggestionElement);
         });
     }
 }
 
 function redirectToShop(product) {
     // Redirect to shop.html
     window.location.href = `shop.html`;
 }
 
 