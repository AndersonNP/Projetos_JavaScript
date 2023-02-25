var quotes =[
    {quote: "E o que é senão ignorância, a mais reprovável, acreditar saber aquilo que não se sabe?",
    author: "Sócrates"},
    {quote: "Enquanto os filósofos não forem reis, ou os reis não tiverem o poder da filosofia, as cidades jamais deixarão de sofrer",
    author: "Platão"},
    {quote: "Uma andorinha não faz verão.",
    author: "Aristótes"},
    {quote: "Todo o prazer intelectual e toda a felicidade se baseiam no fato de ter uma pessoa com quem se comparar e em relação a quem se sentir superior.",
    author: "Thomas Hobbes"},
    {quote: "Não concordo com uma palavra do que dizeis, mas defenderei até a morte o direito de dizê-la",
    author: "Voltaire"},
    {quote: "Todo homem que tem o poder é tentado a abusar dele (…). É preciso que, pela disposição das coisas, o poder freie o poder.",
    author: "Montesquieu"},
    {quote: "Homem livre e escravo, patrício e plebeu, senhor e servo, mestre e oficial, em suma, opressores e oprimidos sempre estiveram em constante oposição.",
    author: "Karl Marx"}
     
]


var gerarQuote = () => {
    var tagQuote = document.getElementById("quote");
    var tagAuthor = document.getElementById("author");
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    tagQuote.textContent = quote.quote;   
    tagAuthor.textContent = quote.author;   
}