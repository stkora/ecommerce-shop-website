
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });

  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
}






const data = [
  {
    imageUrl: "https://m.media-amazon.com/images/I/810nLWvmUXL._UL1500_.jpg",
    itemName: "Crown Shirt",
    euSize: "35-40",
    price: "$80 - $120"
  },
  {
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/2/IS/VQ/PO/113881309/copy-sareee-jpg-500x500.jpg",
    itemName: "Lady Shoes",
    euSize: "35-40",
    price: "$100 - $180"
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/71o6knOrItL._SL1500_.jpg",
    itemName: "Pares Blau",
    euSize: "35-40",
    price: "$90 - $150"
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/41+6oS63sxL.jpg",
    itemName: "T-Shirts",
    euSize: "35-40",
    price: "$50 - $100"
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/61hprs+jHoL._SL1034_.jpg",
    itemName: "Denim",
    euSize: "35-40",
    price: "$80 - $99"
  },
  {
    imageUrl:
      "https://lumangtree.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-09-at-9.51.18-PM.jpeg",
    itemName: "Slacks",
    euSize: "35-40",
    price: "$110 - $150"
  },
  {
    imageUrl:
      "https://lumangtree.com/wp-content/uploads/2025/11/IMG-20251029-WA0064-1.jpg",
    itemName: "Rubber Shoes",
    euSize: "35-40",
    price: "$120 - $180"
  }
];

// Constants variables - DOM elements
const prodItems = document.querySelector(".prod-items");
const prevBtn = document.querySelector(".left-btn");
const nextBtn = document.querySelector(".right-btn");
// Declare slideTimer variable globally for better control
let slideTimer;

function createProductElement(prodDetails) {
  const { imageUrl, itemName, euSize, price } = prodDetails;
  const productItem = document.createElement("div");
  productItem.classList.add("prod-item");
  productItem.innerHTML = `
        <div class="img-cont">
          <img src="${imageUrl}" />
        </div>
        <h3 class="item-name">${itemName}</h3>
        <p class="size"><b>EU Size:</b> ${euSize}</p>
        <p class="price"><b>Price:</b> ${price}</p>
        <a class="addCart" href="#">Add to Cart</a>
        `;
  return productItem;
}

function displayProducts(items = data) {
  prodItems.innerHTML = "";
  items.forEach((item) => {
    const productItem = createProductElement(item);
    prodItems.appendChild(productItem);
  });
}

displayProducts();

// Function to handle slide animation
function handleSlide(direction) {
  // Clear any existing slide timer
  clearInterval(window.slideTimer);

  // Set the direction of slide based on input
  const increment = direction === "next" ? 5 : -5;

  // Start slide animation
  window.slideTimer = setInterval(() => {
    // Update scrollLeft based on direction
    prodItems.scrollLeft += increment;
    if (prodItems.scrollLeft % 100 === 0) {
      // Use window.slideTimer to clear the interval
      clearInterval(window.slideTimer);
    }
  }, 15);
}

// Previous button scroll event (Scrolling to Left)
prevBtn.addEventListener("click", () => {
  handleSlide("prev"); // Call handleSlide with 'prev' direction
});

// Next button scroll event (Scrolling to Right)
nextBtn.addEventListener("click", () => {
  handleSlide("next"); // Call handleSlide with 'next' direction
});

// Autoplay function
function autoplay() {
  if (
    prodItems.scrollLeft >=
    prodItems.scrollWidth - prodItems.clientWidth - 1
  ) {
    prodItems.scrollLeft = 0;
  } else {
    prodItems.scrollLeft += 1;
  }
}

let play = setInterval(autoplay, 15);

// Pause slide when hover
prodItems.addEventListener("mouseover", () => {
  clearInterval(play);
});

// Resume slide after pause
prodItems.addEventListener("mouseout", () => {
  play = setInterval(autoplay, 15);
});
