javascript:(function() {  var text = prompt("Question for ChatGPT", ""); 
if (text !== null && text !== "") {    var model = "text-davinci-003";  
fetch("https://api.openai.com/v1/engines/" + model + "/completions",
{      method: "POST",      headers: {        "Content-Type": "application/json",   
"Authorization": "YOUR_TOKEN_KEY_HERE"      },  
body: JSON.stringify({        prompt: text,        max_tokens: 150,        temperature: 0.5      })    })  
.then(response => response.json())    .then(data => prompt(data.choices[0].text,data.choices[0].text))  
.catch(error => console.error(error));  }})()
