const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection
console.log(sliderImageList);

sliderImageList[0].onclick = function(){
    sliderMainImage.src = sliderImageList[0].src;
    console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function(){
    sliderMainImage.src = sliderImageList[1].src;
    console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function(){
    sliderMainImage.src = sliderImageList[2].src;
    console.log(sliderMainImage.src);
};

sliderImageList[3].onclick = function(){
    sliderMainImage.src = sliderImageList[3].src;
    console.log(sliderMainImage.src);
};
// JavaScript to handle adding the item to the cart and displaying it
document.getElementById("addToCartButton").addEventListener("click", function() {
    // You can perform various actions here, such as:
    
    // 1. Creating a cart item object with variations and quantity
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    
    if (quantity < 1) {
        alert("Please enter a valid quantity.");
        return;
    }
    
    const product = {
       
        name: "Goggle pixel 8 pro",
        price: 999.00, // Base price
        quantity: quantity,
        image: "img/8 pro.png" ,// URL to the product image
        
    };
    
    // 2. Adding the item to the cart (you can use an array to simulate a cart)
    const cart = [];
    cart.push(product);
    
    // 3. Updating the cart display
    updateCartDisplay(cart);
});

// Function to update the cart display
function updateCartDisplay(cart) {
    const cartItemsElement = document.getElementById("cartItems");
    const cartTotalElement = document.getElementById("cartTotal");
    
    cartItemsElement.innerHTML = ""; // Clear the previous cart items
    
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="200"; >
           
           <br/> ${item.name} - Rs.${(item.price).toFixed(2)}x${item.quantity}
        `;
        cartItemsElement.appendChild(li);
        
        total += item.price * item.quantity;
    });
    
    cartTotalElement.textContent = total.toFixed(2);
}
$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }