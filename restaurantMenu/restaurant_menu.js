const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// arrow functions
const renderItems = (data = []) => {
    return data.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
}

const breakfastMenus = document.getElementById("breakfastTotalItems")
breakfastMenus.innerHTML = renderItems(breakfastMenu);

// for each loop
let mainCourseItem = ''
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
})

const maincourseMenuItems = document.getElementById("maincourseMenuItems")
maincourseMenuItems.innerHTML = mainCourseItem;

// for loop
let dessertMenuItem = ''
for (let index = 0; index < dessertMenu.length; index++) {
    const item = dessertMenu[index];
    dessertMenuItem += `<p>Item ${index + 1}: ${item}</p>`;
}

const dessertMenuItems = document.getElementById("dessertMenuItems")
dessertMenuItems.innerHTML = dessertMenuItem;