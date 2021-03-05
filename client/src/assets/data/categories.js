export default [
	// Appetizers
	{
		display: "Appetizers",
		id: "appetizers",
		items: [
			{
				name: "Vietnamese Egg Rolls (2)",
				category: "appetizers",
				price: 3.50,
				options: [
					"Shrimp and Pork",
					"Vegetarian"
				]
			},
			{
				name: "Fresh Spring Rolls (2)",
				category: "appetizers",
				price: 3.50,
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
				price: 7.50,
				options: [
					"Plain",
					"Hot",
					"BBQ",
					"Lemon Pepper"
				]
			},
			{
				name: "French Fries",
				category: "appetizers",
				price: 4.25
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
				price: 1.25
			},
			{
				name: "Bowl of Steamed Rice",
				category: "sides",
				price: 1.25
			},
			{
				name: "Bowl of Rice Noodles",
				category: "sides",
				price: 1.25
			},
			{
				name: "Bowl of Egg Noodles",
				category: "sides",
				price: 2.00
			},
			{
				name: "Bowl of Beef or Chicken Broth",
				category: "sides",
				price: 1.25
			},
			{
				name: "Fried Eggs (2)",
				category: "sides",
				price: 2.50
			},
			{
				name: "Plate of Eye round steak",
				category: "sides",
				price: 3.50
			},
			{
				name: "Meatballs or Fried Meatballs (6)",
				category: "sides",
				price: 3.00
			},
			{
				name: "Dish of Fried Rice",
				category: "sides",
				price: 5.50
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
					"Small": 7.75,
					"Large": 8.75
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
				name: "Special Combination (ONE SIZE LARGE)",
				category: "noodlesoup",
				price: 9.75,
				details: "Eye round steak, well done flank, fatty brisket, soft tendon, beef tripe, beef meatballs"
			},
			{
				name: "Chicken Noodle Soup",
				category: "noodlesoup",
				price: {
					"Small": 7.75,
					"Large": 8.75,
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
					"Small": 7.75,
					"Large": 8.75
				},
				details: "Broccoli, carrots, mushroom, & tofu"
			},
			{
				name: "Meatless Noodle Soup (ONE SIZE LARGE)",
				category: "noodlesoup",
				price: 6.75,
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
					"Small": 8.75,
					"Large": 9.75
				},
				details: "Shrimp, fishballs, crab sticks"
			},
			{
				name: "Egg Noodle Soup",
				category: "noodlesoup",
				price: 9.75,
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
				price: 8.50,
				options: [
					// "Charbroiled pork chop",
					"Charbroiled sliced pork",
					"Charbroiled chicken",
					"Charbroiled beef ($9.25)",
					"Tofu and vegatables",
					"Charbroiled shirp ($9.25)",
					"Shrimp ($9.25)",
				]
			},
			{
				name: "Combination Stream Rice",
				category: "riceplates",
				price: 9.50,
				details: "Pork, chicken, shrimp, and egg rolls"
			}
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
				price: 8.75,
				options: [
					"Charbroiled sliced pork",
					"Charbroiled chicken",
					"Charbroiled beef ($9.50)",
					"Charbroiled Shrimp ($9.50)",
					"Egg rolls",
					"Tofu & vegetable"
				]
			},
			{
				name: "Combination Noodles",
				category: "noodlebowls",
				price: 9.75,
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
					"Steamed rice": 12.49,
					"Fried rice": 13.99,
					"Egg noodles": 13.99,
				},
				details: "Vietnamese popular dish called \"Shaking Beef \" cooked in our special sauce. Served with cilantro, green, red peppers, and sweet white onion. A fresh sliced lime, salt and black pepper for dipping sauce."
			},
			{
				name: "House Fried Rice",
				category: "housespecials",
				price: 9.25,
				options: [
					"Chicken",
					"Pork",
					"Beef",
					"Tofu",
					"Vegetarian",
				],
				details: "Jasmine fried rice with egg, bean sprouts, carrots, green peas, and green onion."
			},
			{
				name: "Deluxe fried rice",
				category: "housespecials",
				price: 10.25,
				details: "Jasmine fried rice with egg, bean sprouts, carrots, green peas, and green onion plus a tasty combination of grilled beef, chicken, pork, and shrimp."
			},
			{
				name: "House Lo Mein",
				category: "housespecials",
				price: {
					"Chicken or Beef": 9.50,
					"Shrimp or Combo": 11.25,
				},
				details: "Lo mein noodles stir fried with your choice of meat, yellow onions, bean sprouts, cabbage, green onions and cilantro."
			},
			{
				name: "Chow Mein",
				category: "housespecials",
				price: {
					"Chicken or Beef": 11.50,
					"Shrimp or Combo": 13.25,
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
					"Avocado",
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
				price: 5.50,
				options: [
					"Well done lean meat noodle soup",
					"White chicken meat noodle soup",
					"Steamed rice with grill pork",
					"Steamed rice with grill chicken",
					"Steamed rice with grill beef",
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
				details: "Served with tapioca pearls, rainbow jelly, or combination of both"
			},
			{
				name: "Soft Drinks (Can)",
				category: "drinks",
				price: 1.50,
				options: [
					'Coke',
					'Diet Coke',
					'Sprite',
					'Dr Pepper',
				]
			},
			{
				name: "Bottle water",
				category: "drinks",
				price: 1.50,
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
				name: "Fresh strawberry and lemonade",
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
		]
	}
]
