if ('content' in document.createElement('template')) {
    const template = document.querySelector("#card-template");
    const container = document.querySelector('#card-container');

    getJSON("/data/commands.json").then(titles => {
        Object.keys(titles.response).forEach(item => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.title').textContent = item;
            const commands = titles.response[item];
            Object.keys(commands).forEach(command => {
                const listElem = document.createElement('li');
                listElem.textContent = command;
                listElem.appendChild(document.createElement('p'));
                listElem.children[0].textContent = commands[command].description;
                if(commands[command].example !== "" && commands[command].example !== undefined){
                    listElem.appendChild(document.createElement('p'));
                    listElem.children[1].classList.add('command-example');
                    listElem.children[1].textContent = commands[command].example;
                }
                clone.querySelector(".commands").appendChild(listElem);
            });
            container.appendChild(clone);
        });
    });
}
