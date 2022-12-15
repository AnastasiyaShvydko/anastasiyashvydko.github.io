const pexelsApiKey = "563492ad6f91700001000001c20edfc6c7e14112a4ba15789c52d868";
export async function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response}
        })
        .then(response=> {return response.json()})
        .then(response => {
            console.log(response)
            return (response.def)
        })
        .catch(function(error) {
            console.log(error);
        });
    }


export async function getJSONpos(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } 
            else{
                return response
            }
        })
        .then(response=> {return response.json()})
        .then(response => {
            console.log(response)
            return (response)
        })
        .catch(function(error) {
            console.log(error);
        });
        
    }



export async function getAudio(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                //return "none"
                throw Error(response.statusText);
            } else {
               
                
                return response;
            }
        })
        .then(response=>{return response.url})
       // return response})
        
        .catch(function(error) {
            console.log(error);
        });
}


export async function getImg(url){
    return fetch(url,{
    method:"GET",
    headers: { Authorization : `Bearer ${pexelsApiKey}` },
        })
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } 
            else {
                return response.json();
            }
        })
        .then(response=>{return response.photos})
        .catch(function(error){
            console.log(error);
        });
    }

                                                            