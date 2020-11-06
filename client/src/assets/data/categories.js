export default [
	// Appetizers
	{
		display: "Appetizers",
		id: "appetizers",
		items: [
			{
				name: "Vietnamese Egg Rolls (2)",
				category: "appetizers",
				price: 3.25,
				options: [
					"Shrimp and Pork",
					"Vegetarian"
				]
			},
			{
				name: "Fresh Spring Rolls (2)",
				category: "appetizers",
				price: 3.25,
				options: [
					"Shrimp",
					"Shrimp and Pork",
					"Tofu"
				]
			},
			{
				name: "Grilled Meat Spring Rolls (2)",
				category: "appetizers",
				price: 4.25,
				options: [
					"Grilled Chicken",
					"Grilled Pork",
					"Grilled Beef"
				]
			},
			{
				name: "Fried Dumplings (6)",
				category: "appetizers",
				price: 4.25,
				options: [
					"Chicken",
					"Pork"
				]
			},
			{
				name: "Chicken Wings (6)",
				category: "appetizers",
				price: 7.25,
				options: [
					"Plain",
					"Hot",
					"BBQ",
					"Lemon Pepper"
				]
			},
			{
				name: "Cheese Puff Crab Rangoon (6)",
				category: "appetizers",
				price: 4.25
			},
			{
				name: "Wonton Soup",
				category: "appetizers",
				price: 4.25
			},
		]
	},
	// Sides
	{
		display: "Sides",
		id: "sides",
		items: [
			{
				name: "French Bread",
				category: "sides",
				price: 1.00
			},
			{
				name: "Bowl of Steamed Rice",
				category: "sides",
				price: 1.00
			},
			{
				name: "Bowl of Rice Noodles",
				category: "sides",
				price: 1.00
			},
			{
				name: "Bowl of Egg Noodles",
				category: "sides",
				price: 2.00
			},
			{
				name: "Bowl of Beef or Chicken Broth",
				category: "sides",
				price: 2.00
			},
			{
				name: "Fried Eggs (2)",
				category: "sides",
				price: 2.00
			},
			{
				name: "Plate of Eye round steak",
				category: "sides",
				price: 3.00
			},
			{
				name: "Meatballs or Fried Meatballs (6)",
				category: "sides",
				price: 3.00
			},
			{
				name: "Dish of Fried Rice",
				category: "sides",
				price: 5.00
			},
		]
	},
	// Noodle Soup
	{
		display: "Noodle Soup",
		id: "noodlesoup",
		items: [
			{
				name: "Beef Noodle Soup",
				category: "noodlesoup",
				price: {
					"Small": 7.50,
					"Large": 8.50
				},
				options: [
					"Eye round steak",
					"Eye round steak & Well-done lean meat",
					"Eye round steak & Well-done flank",
					"Eye round steak & Soft tendon",
					"Eye round steak & Beef meatball",
					"Beef meatballs",
					"Eye round steak, Well-done flank & Fatty brisket",
					"Eye round steak, Well-done flank & Soft tendon",
					"Well-done flank, Fatty brisket & Soft tendon",
					"Well-done lean meat",
					"Well-done lean meat & Beef meatballs",
					"Well-done lean meat & Flank",
					"Well-done lean meat & Soft Tendon",
					"Well-done lean meat, Flank & Brisket",
					"Beef stew with white noodle",
					"Beef stew with french breat (one size large)",
				]
			},
			{
				name: "Special Combination",
				category: "noodlesoup",
				price: 9.50,
				details: "Eye round steak, well done flank, fatty brisket, soft tendon, beef tripe, beef meatballs"
			},
			{
				name: "Chicken Noodle Soup",
				category: "noodlesoup",
				price: {
					"Small": 7.50,
					"Large": 8.50
				},
				options: [
					"Chicken white meat",
					"Chicken dark meat",
					"Mixed white & dark meat",
					"Pho wonton"
				]
			},
			{
				name: "Vegetarian Noodle Soup",
				category: "noodlesoup",
				price: {
					"Small": 7.50,
					"Large": 8.50
				},
				details: "Broccoli, carrots, mushroom, & tofu"
			},
			{
				name: "Meatless Noodle Soup",
				category: "noodlesoup",
				price: 6.50,
				options: [
					"Beef broth",
					"Chicken broth",
					"Vegetarian broth"
				]
			},
			{
				name: "Seafood Noodle Soup",
				category: "noodlesoup",
				price: {
					"Small": 8.50,
					"Large": 9.50
				},
				details: "Shrimp, fishballs, crab sticks"
			},
			{
				name: "Egg Noodle Soup",
				category: "noodlesoup",
				price: 9.50,
				options: [
					"Egg noodle with beef stew",
					"Egg noodle with meatball",
					"Egg noodle with chicken",
					"Egg noodle with seafood"
				]
			}
		]
	},
	// Rice Plates
	{
		display: "Rice Plates",
		id: "riceplates",
		items: [
			{
				name: "Steamed Rice Plates",
				category: "riceplates",
				price: 8.25,
				options: [
					"Charbroiled pork chop",
					"Charbroiled sliced pork",
					"Charbroiled chicken",
					"Charbroiled beef ($9.25)",
					"Tofu and vegatables",
					"Charbroiled shirp ($9.25)",
					"Shrimp ($9.25)",
					"Combination -- Pork, Chicken, Shrimp & Egg roll ($9.25)",
				]
			},
			{
				name: "Fried Rice Plates",
				category: "riceplates",
				price: 8.25,
				details: "Jasmine fried rice with egg, bean sprout, green peas, and green onion",
				options: [
					"Pork",
					"Chicken",
					"Shrimp ($9.25)",
					"Pork, chicken, shrimp ($9.25)"
				],
			},
		]
	},
	// Noodle Bowls
	{
		display: "Vermicelli Noodles",
		id: "noodlebowls",
		items: [
			{
				name: "Vermicelli Noodles",
				category: "noodlebowls",
				price: 8.25,
				options: [
					"Charbroiled sliced pork",
					"Charbroiled chicken",
					"Charbroiled beef ($9.25)",
					"Shrimp ($9.25)",
					"Egg rolls",
					"Tofu & vegetable"
				]
			},
			{
				name: "Combination Noodles",
				category: "noodlebowls",
				price: 9.25,
				details: "Pork, chicken, shrimp, and egg rolls. Served with lettuce, cucumber, bean sprouts, carrots, green onion, cilantro, peanuts and homemade fish sauce"
			}
		]
	},
	// House Specials
	{
		display: "House Specials",
		id: "housespecials",
		items: [
			{
				name: "Roasted chicken",
				category: "housespecials",
				price: {
					"Steamed rice": 11.99,
					"Fried rice": 13.99
				},
				details: "Whole chicken roasted in our house special sauce served with green onion and cilantro. A fresh sliced lime, salt and black pepper for dipping sauce."
			},
			{
				name: "Shaking beef",
				category: "housespecials",
				price: {
					"Steamed rice": 11.99,
					"Fried rice": 13.99,
					"Egg noodles": 13.99,
				},
				details: "Vietnamese popular dish called \"Shaking Beef \" cooked in our special sauce. Served with cilantro, green, red peppers, and sweet white onion. A fresh sliced lime, salt and black pepper for dipping sauce."
			},
			{
				name: "Shaking chicken",
				category: "housespecials",
				price: {
					"Steamed rice": 11.99,
					"Fried rice": 13.99,
					"Egg noodles": 13.99,
				},
				details: "Vietnamese popular dish called \"Shaking Beef\" cooked in our special sauce. Served with cilantro, green, red peppers, and sweet white onion. A fresh sliced lime, salt and black pepper for dipping sauce."
			},
			{
				name: "House Fried Rice",
				category: "housespecials",
				price: 9.25,
				options: [
					"Pork",
					"Chicken",
					"Beef",
					"Tofu",
					"Vegetarian",
				],
				details: "Hot jasmine fried rice with egg, carrots, green peas, and onion"
			},
			{
				name: "Deluxe fried rice",
				category: "housespecials",
				price: 10.25,
				details: "Hot jasmine fried rice with egg, carrots, green peas, and green onion plus a tasty combination of beef, chicken, pork, and shrimp"
			},
			{
				name: "Charbroiled Shrimp fried rice",
				category: "housespecials",
				price: 10.25,
			},
			{
				name: "House Lo Mein",
				category: "housespecials",
				price: {
					"Chicken or Beef": 9.25,
					"Shrimp or Combo": 11.25,
				},
				details: "Lo mein noodles stir fried with your choice of meat, yellow onions, bean sprouts, cabbage, green onions and cilantro."
			},
			{
				name: "Chow Mein",
				category: "housespecials",
				price: {
					"Chicken or Beef": 9.25,
					"Shrimp or Combo": 11.25,
				},
				details: "Thin egg noodles stir fried with your choice of meat, carrots, broccoli, baby corn, cabbage, green onion, and cilantro."
			},
			{
				name: "Pad Thai",
				category: "housespecials",
				price: {
					"Chicken or Beef": 9.25,
					"Shrimp or Combo": 11.25,
				},
				details: "Hot thin rice noodles with your choice of meat, eggs,green onions and cilantro. Served with bean sprouts, peanuts, and lemon."
			},
		]
	},
	// Sandwiches
	{
		display: "Sandwiches",
		id: "sandwiches",
		items: [
			{
				name: "Vietnamese Sandwich",
				category: "sandwiches",
				price: 5.25,
				options: [
					"Grilled Pork",
					"Grilled Beef",
					"Grilled Chicken",
					"Beef pork belly, ham, and pate",
					"Fried tofu",
					"Fried eggs (3)"
				],
				details: "Fresh french bread with a butter spread, fresh slices of cucumbers, sweet and sour carrots, cilantro, and fresh jalapeños"
			}
		]
	},
	// Kids Meal
	{
		display: "Kids Meal",
		id: "kidsmeal",
		items: [
			{
				name: "Kid's meal",
				category: "kidsmeal",
				price: 5.25,
				options: [
					"Well done lean meat noodle soup",
					"White chicken meat noodle soup",
					"Steamed rice with grilled pork",
					"Steamed rice with grilled chicken",
					"Steamed rice with grilled beef",
					"Chicken nuggets with french fries"
				],
				details: "Served with an eggroll"
			}
		]
	},
	// Drinks
	{
		display: "Drinks",
		id: "drinks",
		items: [
			{
				name: "Tapioca drinks",
				category: "drinks",
				price: 4.49,
				options: [
					"Mango",
					"Strawberry",
					"Banana",
					"Pineapple",
					"Kiwi",
					"Papaya",
					"Avocado",
					"Coconut",
					"Taro",
					"Coffee",
					"Thai Tea",
					"Milk Tea",
					"Green Milk Tea",
					"Passion Fruit Tea",
					"Chamoy smoothie ($5.25) - Mango or Strawberry",
				],
				details: "Served with tapioca pearls, rainbow jelly, or both"
			},
			{
				name: "Soft Drinks (Can)",
				category: "drinks",
				price: 1.35
			},
			{
				name: "Iced tea (free refills)",
				category: "drinks",
				price: 1.99
			},
			{
				name: "Hot Jasmine or Green tea",
				category: "drinks",
				price: 1.99
			},
			{
				name: "Sweet tea (free refills)",
				category: "drinks",
				price: 2.50
			},
			{
				name: "Fresh lemonade",
				category: "drinks",
				price: 2.50
			},
			{
				name: "Sweet lemon iced tea",
				category: "drinks",
				price: 2.50
			},
			{
				name: "Fresh lemonade with club soda",
				category: "drinks",
				price: 2.99
			},
			{
				name: "Fresh strawberry lemonade",
				category: "drinks",
				price: 2.99
			},
			{
				name: "Young coconut drink",
				category: "drinks",
				price: 2.99
			},
			{
				name: "Vietnamese Coffee (Hot or Cold)",
				category: "drinks",
				price: 3.50
			}
		]
	},
	// Desserts
	{
		display: "Desserts",
		id: "desserts",
		items: [
			{
				name: "Jelly Taro and panda in coconut milk",
				category: "desserts",
				price: 3.25
			},
			{
				name: "Apple pie eggs rolls",
				category: "desserts",
				price: 3.25
			}
		]
	}
]
