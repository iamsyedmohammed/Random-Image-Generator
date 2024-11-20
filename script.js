const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Dream big and dare to fail. – Norman Vaughan",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "Act as if what you do makes a difference. It does. – William James",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "Do one thing every day that scares you. – Eleanor Roosevelt",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "If you can dream it, you can achieve it. – Zig Ziglar",
    "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. – Jamie Paolinetti"
];


let button=document.querySelector("#button");

button.addEventListener("click",()=>{
    let randomQuotes=quotes[Math.floor(Math.random()*quotes.length)]
    let quotesContainer=document.querySelector("#quoteContainer");
    quotesContainer.innerHTML = "";
    let newQuotes=document.createElement("div");
    newQuotes.textContent=randomQuotes; 
   
    // quotesContainer.textContent=randomQuotes;
    quotesContainer.appendChild(newQuotes)

})