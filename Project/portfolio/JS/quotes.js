const quotes = [
    {
       quote: '"We earn a living by what we get but we make a life by what we give."',
       author: "-Winston Churchill" 
    },
    {
        quote: '"I fear not the man who has practiced 10 000 kicks once, but I fear the man who has practiced one kick 10 000 times."',
        author: "-Bruce Lee" 
    },
    {
        quote: '“I can accept failure, everyone fails at something. But I can not accept not trying.”',
        author: "-Michael Jordan" 
    },
    {
        quote: '"I am reflective only in the sense that I learn to move forward. I reflect with a purpose."',
        author: "-Kobe Bryant" 
    },
    {
        quote: '"Patience is a key element of success."',
        author: "-Bill Gates" 
    },
    {
        quote: '"Life is a movie, pick your own role, climb your own ladder or dig your own hole."',
        author: "-J. Cole" 
    },
    {
        quote: '"Most of the battles of life are won or lost in the mind."',
        author: "-Craig Groeschel" 
    },
];

function addRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    $p = $("<p>").html(quotes[randomNumber].quote + " " + quotes[randomNumber].author);
    $(".divider").append($p);
}

addRandomQuote();

/*let $p = $("<p>")
$p.html(quotes[0].quote + " " + quotes[0].author);
console.log($p);
$(".divider").append($p);*/