const serverStatus = document.querySelector('.serverStatus');

const updateAddServerStatus = () => {
    // Get initial player count
    const initCount = localStorage.getItem('playerCount');
    if(initCount !== "undefined")
        document.querySelector("#playerCount").textContent = localStorage.getItem('playerCount');

    // Timeout event listener to reduce the amount of api calls.
    serverStatus.removeEventListener('mouseenter', updateAddServerStatus);

    getJSON("https://api.minetools.eu/query/play.ecocraft.fi/25565").then(response=>{
        try{
            console.log(response.response);
            if(response.response.Players !== undefined)
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
            if(response.response.error === "timed out"){
                document.querySelector("#playerCount").parentElement.childNodes[1].textContent = "Server offline";
            }
            localStorage.setItem('playerCount', response.response.Players);
            window.setTimeout(()=>{
                serverStatus.addEventListener('mouseenter', updateAddServerStatus);
            }, 10000);
        }
        catch (e){
            console.error("Error getting server status:", e);
            document.querySelector("#playerCount").textContent = '-';
        }
    })
}

serverStatus.addEventListener('mouseenter', updateAddServerStatus);

updateAddServerStatus();