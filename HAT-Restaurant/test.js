let menuItems = [
  {
    course: "Amuse-bouche",
    name: "Beetroot Tarte",
    description: "Goat Cheese - Walnut - Microgreens - Balsamic Reduction",
  },
  {
    course: "Butternut Velouté",
    name: "Creamy Butternut Squash Soup",
    description: "Toasted Pine Nuts - Sage - Truffle Oil - Parmesan Crisp",
  },
  {
    course: "Seabass Citron",
    name: "Pan-Seared Sea Bass",
    description: "Mango Salsa - Avocado Mousse - Cilantro - Lime Drizzle",
  },
  {
    course: "Duck à la Cerise",
    name: "Sous-Vide Duck Breast",
    description:
      "Cherry Reduction - Parsnip Purée - Brussels Sprouts - Star Anise",
  },
  {
    course: "Chocolate Eruption",
    name: "Chocolate Lava Cake",
    description:
      "Raspberry Coulis - Vanilla Bean Ice Cream - Gold Leaf - Hazelnut Brittle",
  },
];


function generateMenuItems() {
  let menuContainer = document.getElementById("menu-container");

  
  menuItems.forEach(function (item) {
    let menuItemHTML = "<div>";
    menuItemHTML += "<h2>" + item.course + "</h2>";
    menuItemHTML += "<h3>" + item.name + "</h3>";
    menuItemHTML += "<p>" + item.description + "</p>";
    menuItemHTML += "</div>";

    
    menuContainer.innerHTML += menuItemHTML;
  });
}


generateMenuItems();
