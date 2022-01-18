const serverStatus = document.querySelector('.serverStatus');

const updateAddServerStatus = () => {
    // Timeout event listener to reduce the amount of api calls.
    serverStatus.removeEventListener('mouseenter', updateAddServerStatus);
    window.setTimeout(()=>{
        serverStatus.addEventListener('mouseenter', updateAddServerStatus);
    }, 10000);

    getJSON("https://api.minetools.eu/query/play.ecocraft.fi/25565").then(response=>{
        try{
            console.log(response.response);
            document.querySelector("#playerCount").textContent = response.response.Players;
            const playerList = document.querySelector('#playerList');
            removeChildren(playerList);
            if(response.response.Players > 0){
                response.response.Playerlist.forEach(user => {
                    const newUser = document.createElement('p')
                    newUser.textContent = user;
                    playerList.append(newUser);
                });
            }
        }
        catch (e){
            document.querySelector("#playerCount").textContent = '-';
        }
    })
}

serverStatus.addEventListener('mouseenter', updateAddServerStatus);

updateAddServerStatus();