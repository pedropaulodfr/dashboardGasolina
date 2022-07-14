const urlBase = "http://localhost:8000/precos";

function Regiao() {

    try {
        var request = new XMLHttpRequest();
        request.open("GET", urlBase + "/regiao/NE", true);
        request.send();
    } catch (error) {
        console.log(error);
    }

    request.onload = () => {
        console.log(request.status);
        if (request.status == 200 && request.readyState == 4) {
            
            try {
                
                let query = JSON.parse(request.response);
                console.log(query);
            } catch (error) {
                console.log(error);
            }

        }
    }
}
