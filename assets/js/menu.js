// Sample menu data
const menuData = [
  /* Breakfast Section Start */
  {
      id: 1,
      title: "French Omelette Shakshuka",
      category: "Breakfast",
      price: 3.00,
      img: "images/espresso.jpg",
      desc: "A fusion of french and mediterranean classics for breakfast."
  },
  {
      id: 2,
      title: "Croissant Eggs Benedict",
      category: "Breakfast",
      price: 4.00,
      img: "images/latte.jpg",
      desc: "Our twist of a classic breakfast favourite."
  },
  {
      id: 3,
      title: "Croissant Shakshuka",
      category: "Breakfast",
      price: 4.50,
      img: "assets/menu/Desserts/Acai Bowl.webp",
      desc: "Non traditional way of enjoying shakshuka."
  },
  {
      id: 4,
      title: "Scrambled Eggs",
      category: "Breakfast",
      price: 5.00,
      img: "images/mocha.jpg",
      desc: "Luscious Creamy and buttery scrambled eggs to enjoy the way you like."
  },
  {
      id: 5,
      title: "Burrata Salads",
      category: "Breakfast",
      price: 2.50,
      img: "images/greentea.jpg",
      desc: "Creamy buratta caprese salad."
  },
  {
    id: 6,
    title: "Ciliegina Salads",
    category: "Breakfast",
    price: 2.50,
    img: "images/greentea.jpg",
    desc: "A mix of salads helighting the fresh cherry like mozzarela chesse."
  },
  {
    id: 7,
    title: "Figs & Nectarine Salads",
    category: "Breakfast",
    price: 2.50,
    img: "images/greentea.jpg",
    desc: "A refreshing and fruity salad mix with different textures on every bite."
  },
  {
    id: 8,
    title: "Corn Cobb Salads",
    category: "Breakfast",
    price: 2.50,
    img: "images/greentea.jpg",
    desc: "An herby salad with sliced off corn from cobb."
  },
  {
    id: 9,
    title: "Brisket Pasta",
    category: "Breakfast",
    price: 2.00,
    img: "images/blacktea.jpg",
    desc: "Slow cooked brisket in pacherri pasta."
  },
  {
    id: 10,
    title: "Truffle Pasta",
    category: "Breakfast",
    price: 2.00,
    img: "images/blacktea.jpg",
    desc: "A delightful and aromatic truffle pasta."
  },
  {
    id: 11,
    title: "Chicken Risotto",
    category: "Breakfast",
    price: 2.00,
    img: "images/blacktea.jpg",
    desc: "A creamy and rich chicken risotto and amplified rice dish."
  },
  {
    id: 12,
    title: "Truffle Risotto",
    category: "Breakfast",
    price: 2.00,
    img: "images/blacktea.jpg",
    desc: "A Fragrant truffle risotto a luxurious rice dish."
  },
  
  {
    id: 13,
    title: "Yoghurt Bowls",
    category: "Breakfast",
    price: 2.00,
    img: "images/blacktea.jpg",
    desc: "A Delightful and healty bowl of yougurt topped with veriety of Items."
},
  /* Breakfast Section End */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /* Coffee and Drinks Section Start */
    /* Coffee */
  {
    id: 9,
    title: "Yoghurt Bowls",
    category: "Drinks",
    price: 2.00,
    img: "images/blacktea.jpg",
    desc: "Classic black tea."
  },

    /* Coffee and Drinks Section End */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /* Desserts Section Start */
    {
      id: 10,
      title: "Choco Cake",
      category: "Desserts",
      price: 2.00,
      img: "images/blacktea.jpg",
      desc: "Classic black tea."
    },

    /* Desserts Section End */
];

// Selectors
const menuContainer = document.getElementById('menu-container'); // The container for menu items
const filterButtons = document.querySelectorAll('.menu-filters li'); // All filter buttons

// Function to display menu items
function displayMenuItems(menu) {
  menuContainer.innerHTML = ""; // Clear existing items
  menu.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item'); // Use your existing class for menu items

      menuItem.innerHTML = `
          <img class="menu-img" src="${item.img}" alt="${item.title}">
          <div class="menu-content">
              <a href="#">${item.title}</a>
              
          </div>
          <p class="menu-ingredients">${item.desc}</p>
      `;
      
      menuContainer.appendChild(menuItem);
  });
}

// Function to filter menu items
function filterMenu(category) {
  const filteredMenu = category === "all" 
      ? menuData 
      : menuData.filter(item => item.category === category);

  displayMenuItems(filteredMenu);
}

// Initial call to display all menu items
displayMenuItems(menuData);

// Add event listeners to filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
      const category = button.dataset.filter; // Using the correct data attribute
      filterMenu(category);

      // Update the active class for the filter
      filterButtons.forEach(btn => btn.classList.remove('filter-active'));
      button.classList.add('filter-active');
  });
});