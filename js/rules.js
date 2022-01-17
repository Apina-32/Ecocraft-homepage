if ('content' in document.createElement('template')) {
    const template = document.querySelector("#card-template");
    const container = document.querySelector('#card-container');

    getJSON("/data/rules.json").then(rules => {
        Object.keys(rules.response).forEach(rule => {
            const clone = template.content.cloneNode(true);
            const content = clone.querySelector('.text-content');
            clone.querySelector('.title').textContent = rule;
            rules.response[rule].forEach(val=>{
                content.textContent += val;
            })

            container.appendChild(clone);
        });
    });

}