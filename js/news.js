if ('content' in document.createElement('template')) {
    const template = document.querySelector("#card-template");
    const container = document.querySelector('#card-container');

    getJSON("/data/news.json").then(news => {
        Object.keys(news.response).forEach(item => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.title').textContent = item;
            const newsContent = news.response[item];
            clone.querySelector(".text-content").textContent = newsContent.text;
            clone.querySelector(".date").textContent = newsContent.date;
            container.appendChild(clone);
        });
    });
}