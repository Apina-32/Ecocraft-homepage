if ('content' in document.createElement('template')) {
    const template = document.querySelector("#card-template");
    const container = document.querySelector('#card-container');

    getJSON("/data/rules.json").then(rules => {
        Object.keys(rules.response).forEach(rule => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.title').textContent = rule;
            rules.response[rule].forEach(val=>{
                clone.querySelector('.text-content').textContent += ` ${val}`;
            })

            container.appendChild(clone);
        });
    });
}