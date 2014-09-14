// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "",
        "main":    "",
        "results": "<h5>Thanks for joining this CARBONIKA WORLD</h5>",
        "level1":  "You are Climate Warrior",
        "level2":  "You won",
        "level3":  "Hardly survived",
        "level4":  "Should Improve",
        "level5":  "You Are Defeated" // no comma here
    },
    "questions": [
        {   "q": "Your daily diet includes ?",
            "a": [
                {"option": "Vegan ",      "correct": false, "corbonprint":-5},
                {"option": "Vegetarian ( Including Diary Products)",     "correct": false, "corbonprint":0},
                {"option": "Non-Vegetarian",      "correct": true, "corbonprint":5}
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>", // no comma here,
			"tip":"Organic farming, or growing food using minimal chemical pesticides or fertilisers (which are energy-intensive to make), is usually better for the local environment and animals, as well as being lower carbon. Buying more organic food can reduce your food footprint by around 15%."
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": ". How often do you buy/eat organic meat, vegetables or dairy products?",
            "a": [
                {"option": "Always",               "correct": false,"corbonprint":-5},
                {"option": "SomeTime",   "correct": true,"corbonprint":-2},
                {"option": "Ofter",               "correct": false,"corbonprint":2},
                {"option": "Never", "correct": true,"corbonprint":5} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>", // no comma here,
			"tip":"Organic farming, or growing food using minimal chemical pesticides or fertilisers (which are energy-intensive to make), is usually better for the local environment and animals, as well as being lower carbon. Buying more organic food can reduce your food footprint by around 15%."
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "How often do you buy locally produced meat, vegetables or dairy products?",
            "a": [
                {"option": "Always",           "correct": true,"corbonprint":-5},
                {"option": "Some Times",                  "correct": false,"corbonprint":-3},
                {"option": "Often",  "correct": true,"corbonprint":3},
                {"option": "Never",          "correct": true,"corbonprint":5} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false,"corbonprint":-5},
                {"option": "32",     "correct": true,"corbonprint":-5},
                {"option": "3",      "correct": false,"corbonprint":-5},
                {"option": "1291",   "correct": false,"corbonprint":-5} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true,"corbonprint":-5},
                {"option": "No",     "correct": false,"corbonprint":5} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
