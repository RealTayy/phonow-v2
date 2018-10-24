var menu = require("./menu.json");
var categories = []
menu.forEach(item => {
	if (!categories.includes(item.category)) {
		categories.push(item.category);
	}
});

console.log(categories);