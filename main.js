window.onload = function() 
{
    document.getElementById('consoleButton').addEventListener('click', firstResponse);
    document.getElementById('browserButton').addEventListener('click', secondResponse);
    
}

function firstResponse(e)
    {
    console.log('Thanks for clicking the console button!');
    }

function secondResponse(e)
    {
    document.getElementById('browserButton').innerHTML = "Thanks for clicking the browser button";
    }