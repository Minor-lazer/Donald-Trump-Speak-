var txtInput=document.getElementById("txt-input");

var btnTranslate=document.getElementById("btn-translate");

var outputDiv=document.getElementById("output");

var serverURL="https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(input)
{
    return serverURL + "?" + "text=" + input
}


function errorHandler(error)
{
    console.log("An error occured",error);
    alert("There is something wrong with the server please try after sometime");
}

function clickHandler()
{
    var inputText=txtInput.value;
    fetch(getTranslationURL(inputText)).then(response=>response.json())
    .then(json=>{
        
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;

    }).catch(errorHandler)

};

btnTranslate.addEventListener("click",clickHandler)