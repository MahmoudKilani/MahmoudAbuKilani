const quotes = [{
        quote: "Do not let your difficulties fill you with anxiety, after all it is only in the darkest nights that stars shine more brightly.",
        author: "Ali Ibn Abi Talib"
    }, {
        quote: "Be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    }, {
        quote: "The only way to do great work is to love what you do",
        author: "Steve Jobs"
    }, {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    }, {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    }, {
        quote: "Patience is the key to relief.",
        author: "Ibn Qayyim Al-Jawziyya"
    }

];

let index = 0;
let isDeleting = false;
let text = "";
let delta = 50;
let quoteElement = document.getElementById("quote-text");
let authorElement = document.getElementById("author");

function type() {
    const quote = quotes[index];
    if (isDeleting) {
        text = quote.quote.substring(0, text.length - 1);
        delta = 25;
    } else {
        text = quote.quote.substring(0, text.length + 1);
        delta = 50;
    }
    quoteElement.innerHTML = text;
    if (text === quote.quote) {
        authorElement.innerHTML = "- " + quote.author;
        authorElement.style.opacity = 1;
        if (isDeleting) {
            delta = 100;
        } else {
            delta = 7000;
            isDeleting = true;
        }
    } else if (isDeleting && text === "") {
        authorElement.style.opacity = 0;
        authorElement.innerHTML = "";
        isDeleting = false;
        index = (index + 1) % quotes.length;
        delta = 500;
    }
    setTimeout(type, delta);
}

type();