


let fiveCourseMenu = [
  {
    course: "Appetizer",
    name: "Amuse-Bouche",
    description:
      "Beetroot Tartare - goat cheese - walnut - microgreens - balsamic reduction",
  },
  {
    course: "Soup",
    name: "Butternut Velouté",
    description:
      "Creamy Butternut Squash Soup - toasted pine nuts - sage - truffle oil - parmesan crisp",
  },
  {
    course: "Fish",
    name: "Seabass Citron",
    description:
      "Pan-Seared Sea Bass - mango salsa - avocado mousse - cilantro - lime drizzle",
  },
  {
    course: "Main",
    name: "Duck à la Cerise",
    description:
      "Sous-Vide Duck Breast - cherry reduction - parsnip purée - brussels sprouts - star anise",
  },
  {
    course: "Dessert",
    name: "Chocolate Eruption",
    description:
      "Chokolate Fondant, Sake icecream, wild berries, salt caramel, chokolate crunsh",
  },
];


let eightCourseMenu = [
  {
    course: "Appetizer",
    name: "Amuse-Bouche",
    description:
      "Beetroot Tartare - goat cheese - walnut - microgreens - balsamic reduction",
    
  },
  {
    course: "Starter",
    name: "Octopus & Ember",
    description:
      "Charred Octopus - sweet potato - paprika aioli - lemon zest - arugula",
    
  },
  {
    course: "Soup",
    name: "Butternut Velouté",
    description:
      "Creamy Butternut Squash Soup - toasted pine nuts - sage - truffle oil - parmesan crisp",
    
  },
  {
    course: "Fish",
    name: "Seabass Citron",
    description:
      "Pan-Seared Sea Bass - mango salsa - avocado mousse - cilantro - lime drizzle",
   
  },
  {
    course: "Pasta",
    name: "Tagliatelle Forestière",
    description:
      "Handmade Tagliatelle - wild mushrooms - thyme - garlic-infused olive oil - pecorin",
    
  },
  {
    course: "Main",
    name: "Duck à la Cerise",
    description:
      "Sous-Vide Duck Breast - cherry reduction - parsnip purée - brussels sprouts - star anise",
   
  },
  {
    course: "Palate Cleanser",
    name: "Lemon Frost",
    description: "Lemon Sorbet - mint - ginger crumble - elderflower syrup",
    
  },
  {
    course: "Dessert",
    name: "Chocolate Eruption",
    description:
      "Chokolate Fondant, Sake icecream, wild berries, salt caramel, chokolate crunsh",
  },
];


function generateMenuItems(menuId, menuData) {
  let menuContainer = document.getElementById(menuId);

  menuContainer.innerHTML = "";

  menuData.forEach(function (item) {
    let menuItemHTML = "<div>";
    menuItemHTML += "<h2 class='name'>" + item.name + "</h2>"; 
    menuItemHTML += "<p>" + item.description + "</p>";
    menuItemHTML += "</div>";

    menuContainer.innerHTML += menuItemHTML;
  });
}


generateMenuItems("five-course-menu", fiveCourseMenu);


generateMenuItems("eight-course-menu", eightCourseMenu);
