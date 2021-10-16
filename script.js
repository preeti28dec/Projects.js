var text=document.getElementById("quote");
var author=document.getElementById("author");
var getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    
    // fetch the data from api
    var response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    var allQuotes = await response.json();
    // Generates a random number between 0 and the length of the quotes array
    var indx = Math.floor(Math.random()*allQuotes.length);
    //Store the quote present at the randomly generated index
    var quote=allQuotes[indx].text;  
    //Store the author of the respective quote
    var auth=allQuotes[indx].author;
    if(auth==null)
    {
        author = "Anonymous";
    } 
    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;
}
getNewQuote(); 