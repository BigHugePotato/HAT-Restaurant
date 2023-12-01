


let fiveCourseMenu = [
  {
    course: "Apéritif",
    name: "Sparkling Citrus Sorbet",
    description:
      " A refreshing apéritif of sparkling citrus sorbet to tantalize the palate.",
   
  },
  {
    course: "Starter",
    name: "Caprese Bruschetta",
    description:
      "Crisp bruschetta topped with fresh tomatoes, creamy mozzarella, basil, and a drizzle of balsamic glaze",
   
  },
  {
    course: "Soup",
    name: "Creamy Tomato Basil Soup",
    description:
      "Velvety soup blending ripe tomatoes and fragrant basil, enriched with a swirl of cream.",
    
  },
  {
    course: "Main",
    name: "Grilled Chicken with Lemon-Herb Quinoa",
    description:
      "Succulent grilled chicken paired with light lemon-herb quinoa for a satisfying main course.",
    
  },
  {
    course: "Dessert",
    name: "Decadent Chocolate Fondue with Fresh Berries",
    description:
      " A rich chocolate fondue served with fresh berries and bite-sized treats for a sweet finale",
    
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
      "Decadent chocolate dessert, perhaps a lava cake or a rich chocolate mousse",
   
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
