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
	// Rice Places
	{
		display: "Rice Plates",
		id: "riceplates",
		items: [
			{
				name: "Fried Rice Plates",
				category: "riceplates",
				price: 7.99,
				options: [
					"Pork & chicken",
					"Chicken & shrimp",
					"Shrimp",
					"Pork, chicken, shrimp"
				],
				details: "Hot Jasmine fried rice with egg, bean sprouts, and green onion"
			},
			{
				name: "Steamed Rice Plates",
				category: "riceplates",
				price: 7.99,
				options: [
					"Charbroiled pork chop",
					"Charbroiled sliced pork",
					"Charbroiled chicken",
					"Charbroiled beef (add $1)",
					"Shrimp (add $1)",
					"Tofu and vegatables"
				]
			}
		]
	},
	// Noodle Bowls
	{
		display: "Noodle Bowls",
		id: "noodlebowls",
		items: [
			{
				name: "Vermicelli Noodles",
				category: "noodlebowls",
				price: 7.99,
				options: [
					"Charbroiled sliced pork",
					"Charbroiled chicken",
					"Charbroiled beef (add $1)",
					"Shrimp (add $1)",
					"Egg rolls",
					"Tofu & vegetable"
				],
				details: "Served with lettuce, cucumber, bean sprouts, carrots, green onion, cilantro, peanuts and homemade fish sauce"
			},
			{
				name: "Combination Noodles",
				category: "noodlebowls",
				price: 8.99,
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
				name: "Roasted Chicken",
				category: "housespecials",
				price: 10.99,
				details: "Whole chicken roasted in our house special sauce. Served with green and red peppers, sweet white onion, green onion, and cilantro. A fresh sliced lime, salt and black pepper for dipping sauce."
			},
			{
				name: "Shaking beef or chicken",
				category: "housespecials",
				price: 10.99,
				details: "Vietnamese popular dish called \"Shaking Beef\" cooked in our special sauce. Served with cilantro, green, red peppers, and sweet white onion. A fresh sliced lime, salt and black pepper for dipping sauce."
			},
			{
				name: "House Lo Mein",
				category: "housespecials",
				price: 8.99,
				options: [
					"Chicken",
					"Beef",
					"Shrimp",
					"Combo (add $2)"
				],
				details: "Lo mein noodles stir fried with chicken, beef, or shrimp, yellow onions, bean sprouts, cabbage, green onions and cilantro."
			},
			{
				name: "Chow Mein",
				category: "housespecials",
				price: 10.99,
				options: [
					"Chicken",
					"Beef",
					"Shrimp",
					"Combo (add $2)"
				],
				details: "Thin egg noodles stir fried with chicken, beef, shrimp, BBQ pork, mushrooms, carrots, baby corn, yellow onions, cilantro, and assorted green onion."
			},
			{
				name: "Pad Thai",
				category: "housespecials",
				price: 8.99,
				options: [
					"Chicken",
					"Beef",
					"Shrimp",
					"Combo (add $2)"
				],
				details: "Thin rice noodles, stir fried chicken, beef, or shrimp. Also, eggs, green onions, and cilantro. Served with bean sprouts and peanuts."
			},
			{
				name: "House Fried Rice",
				category: "housespecials",
				price: 8.99,
				options: [
					"Pork",
					"Chicken",
					"Beef",
					"Shrimp (add $1)"
				],
				details: "Hot jasmine fried rice with egg, carrots, green peas, and onion"
			},
			{
				name: "Deluxe Fried Rice",
				category: "housespecials",
				price: 9.99,
				details: "Hot jasmine fried rice with egg, carrots, green peas, and green onion plus a tasty combination of beef, chicken, pork, and shrimp"
			}
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
				price: 4.99,
				options: [
					"Grilled Pork",
					"Grilled Beef",
					"Grilled Chicken",
					"Beef pork belly, ham, and pate",
					"Fried tofu or fried egg ($3.99)"
				],
				details: "Fresh french bread with a butter spread, fresh slices of cucumbers, sweet and sour carrots, cilantro, fresh jalapeños, and pate"
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
				price: 4.99,
				options: [
					"Well done lean meat noodle soup",
					"Steamed rice with chicken, pork or beef",
					"Chicken nuggets with french fries"
				],
				details: "All Kid's meals served with an eggroll"
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
				price: 3.99,
				options: [
					"Mango",
					"Strawberry",
					"Banana",
					"Pineapple",
					"Kiwi",
					"Avocado",
					"Coconut",
					"Taro",
					"Papaya",
					"Coffee",
					"Thai Tea",
					"Milk Tea",
					"Green Milk Tea",
					"Passion Fruit Tea"
				],
				details: "Served with tapioca pearls or rainbow jelly"
			},
			{
				name: "Soft Drinks (Can)",
				category: "drinks",
				price: 1.35
			},
			{
				name: "Iced tea",
				category: "drinks",
				price: 1.99
			},
			{
				name: "Hot Jasmine or Green tea",
				category: "drinks",
				price: 1.99
			},
			{
				name: "Syrup",
				category: "drinks",
				price: 1.99,
				options: [
					"Raspberry",
					"Strawberry",
					"Cherry"
				]
			},
			{
				name: "Fresh lemonade",
				category: "drinks",
				price: 2.35
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
				price: 3.25
			}
		]
	},
	// Desserts
	{
		display: "Desserts",
		id: "desserts",
		items: [
			{
				name: "Ice Cream",
				category: "desserts",
				price: 2.99,
				options: [
					"Vanilla",
					"Chocolate",
					"Strawberry"
				]
			},
			{
				name: "Jelly Taro and tapioca in coconut milk",
				category: "desserts",
				price: 3.99
			},
			{
				name: "Fried ice cream or banana ice cream",
				category: "desserts",
				price: 4.99
			}
		]
	}
]
