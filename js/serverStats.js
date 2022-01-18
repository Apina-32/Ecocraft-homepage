getJSON("https://api.minetools.eu/query/play.ecocraft.fi/25565").then(response=>{
    try{
        console.log(response.response);
        document.querySelector("#playerCount").textContent = response.response.Players;
        if(response.response.Players > 0){
            response.response.Playerlist.forEach(user => {
                const newUser = document.createElement('p')
                newUser.textContent = user;
                document.querySelector('#playerList').append(newUser);
            });
        }
    }
    catch (e){
        document.querySelector("#playerCount").textContent = '-';
    }
})