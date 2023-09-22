// const menu = [
//   {
//     id: 1,
//     title: "buttermilk pancakes",
//     category: "breakfast",
//     price: 15.99,
//     img: "./images/item-1.jpeg",
//     desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//   },
//   {
//     id: 2,
//     title: "diner double",
//     category: "lunch",
//     price: 13.99,
//     img: "./images/item-2.jpeg",
//     desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
//   },
//   {
//     id: 3,
//     title: "godzilla milkshake",
//     category: "shakes",
//     price: 6.99,
//     img: "./images/item-3.jpeg",
//     desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
//   },
//   {
//     id: 4,
//     title: "country delight",
//     category: "breakfast",
//     price: 20.99,
//     img: "./images/item-4.jpeg",
//     desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//   },
//   {
//     id: 5,
//     title: "egg attack",
//     category: "lunch",
//     price: 22.99,
//     img: "./images/item-5.jpeg",
//     desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
//   },
//   {
//     id: 6,
//     title: "oreo dream",
//     category: "shakes",
//     price: 18.99,
//     img: "./images/item-6.jpeg",
//     desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
//   },
//   {
//     id: 7,
//     title: "bacon overflow",
//     category: "breakfast",
//     price: 8.99,
//     img: "./images/item-7.jpeg",
//     desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
//   },
//   {
//     id: 8,
//     title: "american classic",
//     category: "lunch",
//     price: 12.99,
//     img: "./images/item-8.jpeg",
//     desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
//   },
//   {
//     id: 9,
//     title: "quarantine buddy",
//     category: "shakes",
//     price: 16.99,
//     img: "./images/item-9.jpeg",
//     desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//   },
// ];

// const sectionCenter = document.querySelector(".section-center");

// window.addEventListener("DOMContentLoaded", function () {
//   let displayMenu = menu.map(function (item) {
//     // console.log(item);

//     return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//   });
//   displayMenu = displayMenu.join("");
//   console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;
// });


const menu = [
  {
    id: 1,
    title: "Toyota Matrix",
    category: "sedan",
    price: ("45,900"),
    img: "./images/car-1.webp",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Toyota Highlander",
    category: "suv",
    price: ("55,900"),
    img: "./images/car-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Corolla Sport",
    category: "sports",
    price: ("35,900"),
    img: "./images/car-3.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 4,
    title: "Toyota Centurion",
    category: "sports",
    price: ("95,900"),
    img: "./images/car-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Toyota Rav 4",
    category: "suv",
    price: ("40,900"),
    img: "./images/car-5.webp",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "E-Sportage Sport",
    category: "sedan",
    price: ("60,900"),
    img: "./images/car-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Toyota Camry",
    category: "saloon",
    price: ("80,900"),
    img: "./images/car-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Toyota Avalon",
    category: "saloon",
    price: ("58,900"),
    img: "./images/car-8.webp",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Toyota Patfinder",
    category: "sedan",
    price: ("95,900"),
    img: "./images/car-9.webp",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
  id: 10,
    title: "SUV City cruiser",
    category: "suv",
    price: ("28,999"),
    img: "./images/car-10.jpg",
    desc: `rogged and flexible suv for all age brackets and multi-purpose use. Also very efficient for sports and comes as hybrid.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  // displayMenuButtons();
});
// category items
filterBtns.forEach(function(btn) {
 btn.addEventListener('click', function(e) {
  const category = e.currentTarget.dataset.id;
  const menuCategory = menu.filter(function(menuItem) {
if (menuItem.category === category) {
  return menuItem;
}
  });
  if (category === 'all'){
    displayMenuItems(menu);
  }
  else{
    displayMenuItems(menuCategory);
  }
 });
});


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
      <img src="${item.img}" class="photo" alt="${item.title}">
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
      });
      displayMenu = displayMenu.join('');
      sectionCenter.innerHTML = displayMenu;
}

