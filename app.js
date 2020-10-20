const btn = document.getElementById('nextQuote')
const h1 = document.querySelector('.display').firstElementChild;
const p = document.querySelector('p');
const body = document.body;
const quotes = [
    {
        quote: '"Start writing, no matter what. The water does not flow until the faucet is turned on."',
        author: '-Louis L’Amour'
    },
    {
        quote: '"Get it down. Take chances. It may be bad, but it\'s the only way you can do anything really good."',
        author: '- William Faulkner'
    },
    {
        quote:'"The first draft is just you telling yourself the story."',
        author: '- Terry Pratchett'
    },
    {
        quote:'"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it."',
        author: '- Octavia E. Butler'
    },
    {
        quote:  '"To produce a mighty book, you must choose a mighty theme."',
        author: '- Herman Melville'
    }
];
const colors = [
    '#46ACC2',
    '#42F2F7',
    '#0B5D1E',
    '#00487C',
    '#BC5F04',
    '#2B0504',
    '#800E13',
    '#000103'
];  
function randomQuote(){
    let random = Math.floor(Math.random() * quotes.length);
    let quote =  quotes[random].quote;
    let author =  quotes[random].author;
    h1.textContent = quote;
    p.textContent = author;
    body.style.backgroundColor = randomColor();
}

function randomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(randomQuote, 30000);

btn.addEventListener('click',randomQuote,false);
