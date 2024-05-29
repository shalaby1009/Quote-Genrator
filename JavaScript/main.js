var quotes = [
    { quote: "“Be yourself; everyone else is already taken.”", author: "Oscar Wilde" },
    { quote: "“So many books, so little time.”", author: "Frank Zappa" },
    { quote: "“Be the change that you wish to see in the world.”", author: "Mahatma Gandhi" },
    { quote: "“A friend is someone who knows all about you and still loves you.”", author: "Elbert Hubbard" },
    { quote: "“Against the odds I would bet on myself.”", author: "Travis Scott" },
    { quote: "“Life is what happens when you're busy making other plans.”", author: "John Lennon" },
    { quote: "“In three words I can sum up everything I've learned about life: it goes on.”", author: "Robert Frost" },
    { quote: "“You only live once, but if you do it right, once is enough.”", author: "Mae West" },
    { quote: "“The only way to do great work is to love what you do.”", author: "Steve Jobs" },
    { quote: "“Believe you can and you're halfway there.”", author: "Theodore Roosevelt" }
];

var generateButton = document.querySelector('.generate-btn');
var quoteText = document.getElementById('quoteText');
var quoteAuthor = document.getElementById('quoteAuthor');

// Function to generate a random quote
function genQuote() {
    var ranIndex;
    do {
        ranIndex = Math.floor(Math.random() * quotes.length);
    } while (ranIndex === genQuote.lastIndex);
    genQuote.lastIndex = ranIndex;

    quoteText.innerHTML = quotes[ranIndex].quote;
    quoteAuthor.innerHTML = "-" + quotes[ranIndex].author;
}

// Attach event listener
generateButton.addEventListener('click', genQuote);


////////////////////////////////////////////////////////////////////////////////////////




// Recive a quote from user
var storedQuotes = JSON.parse(localStorage.getItem('customQuotes'));
if (storedQuotes !== null) {
    quotes.push(storedQuotes);
}

var quoteInput = document.getElementById('quoteInput');
var authorInput = document.getElementById('authorInput');
var addCustomQuoteButton = document.getElementById('addCustomQuoteBtn');


function addCustomQuote() {
    var newQuote = {
        quote: quoteInput.value,
        author: authorInput.value
    };

    quotes.push(newQuote);
    if (storedQuotes === null) {
        storedQuotes = [];
    }
    storedQuotes.push(newQuote);
    localStorage.setItem('customQuotes', JSON.stringify(storedQuotes));

    quoteInput.value = '';
    authorInput.value = '';

    alert('Custom quote added successfully!');
}


addCustomQuoteButton.addEventListener('click', addCustomQuote);
