if ('content' in document.createElement('template')) {
    const template = document.querySelector("#card-template");
    const container = document.querySelector('#card-container');

    getJSON("/data/rules.json").then(rules => {
        Object.keys(rules.response).forEach(rule => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.title').textContent = rule;
            let elem = clone.querySelector('.text-content').cloneNode();
            clone.querySelector('.text-content').remove();
            rules.response[rule].forEach(val=>{
                elem.textContent = ` ${val}`;
                clone.querySelector('.content').appendChild(elem);
                elem = clone.querySelector('.text-content').cloneNode();
            })

            container.appendChild(clone);
        });
    });
}