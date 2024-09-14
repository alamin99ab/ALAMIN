

function getjoke(){
    let config ={
        Headers : {
            'Accept' : 'Applicatio/json'
        }
    }
    axios.get("https://icanhazdadjoke.comooo",config) .then((res)=>{
        console.log(res.data.joke);
        document.getElementById("joke").innerHTML = res.data.joke

    }).catch((err)=>{
        console.error.err;
        document.getElementById("joke").innerHTML = " an error plase wait"
    })
}

window.onload = getjoke