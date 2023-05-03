const quotes = [{
    quote: "The man who comes back through the door in the wall will never be quite the same as the man who went out.",
    author: "Aldous Huxley"
}, {
    quote: "All that we see or seem is but a dream within a dream.",
    author: "Edgar Allan Poe"
}, {
    quote: "It is not in the stars to hold our destiny, but in ourselves.",
    author: "William Shakespeare"
}];

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