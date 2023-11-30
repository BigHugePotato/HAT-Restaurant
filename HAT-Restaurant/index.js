


let fiveCourseMenu = [
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

// Sample eight-course menu data
let eightCourseMenu = [
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
  // ... (your eight-course menu data)
];


function generateMenuItems(menuId, menuData) {
  let menuContainer = document.getElementById(menuId);

 
  menuContainer.innerHTML = "";


  menuData.forEach(function (item) {
    let menuItemHTML = "<div>";
    menuItemHTML += "<h2>" + item.course + "</h2>";
    menuItemHTML += "<h3>" + item.name + "</h3>";
    menuItemHTML += "<p>" + item.description + "</p>";
    menuItemHTML += "</div>";

    
    menuContainer.innerHTML += menuItemHTML;
  });
}


generateMenuItems("five-course-menu", fiveCourseMenu);


generateMenuItems("eight-course-menu", eightCourseMenu);
