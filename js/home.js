if ('content' in document.createElement('template')) {
    const itemTemplate = document.querySelector("#carousel-item");
    const bulletTemplate = document.querySelector("#carousel-bullet");
    const container = document.querySelector('.carousel-items');

    getJSON("/data/news.json").then(news => {
        Object.keys(news.response).forEach(item => {
            const itemClone = itemTemplate.content.cloneNode(true);
            const bulletClone = bulletTemplate.content.cloneNode(true);
            itemClone.querySelector('.title').textContent = item;
            const newsContent = news.response[item];
            itemClone.querySelector(".text-content").textContent = newsContent.text;
            itemClone.querySelector(".date").textContent = newsContent.date;
            container.appendChild(itemClone)

            // bullets
            document.querySelector(".carousel-indicators").appendChild(bulletClone);
            let bullets = document.querySelectorAll('.carousel-bullet');
            bullets[bullets.length - 1].onclick = () => {
                goToIndex(bullets.length - 1);
            };
        });
        goToIndex(0);
    });
}

const goToIndex = (index) => {
    let items = document.querySelectorAll('.carousel-content');
    if(index >= items.length) index = 0;
    else if(index < 0) index = items.length - 1;
    selectBullet(index);
    items.forEach(item => {
       item.style.display = 'none';
    });
    items[index].style.display = 'flex';
};

const getIndex = () => {
    let items = document.querySelectorAll('.carousel-content');
    for(let i = 0; i < items.length; i++){
        if(items[i].style.display === 'flex') {
            return i;
        }
    }
};

const selectBullet = (index)=>{
    let items = document.querySelectorAll('.carousel-bullet');
    items.forEach(item => {
        item.classList.remove('active');
    });
    items[index].classList.add('active');
};

const goToNext = ()=>{
    goToIndex(getIndex() + 1);
};

const goToPrev = ()=>{
    goToIndex(getIndex() - 1);
};

document.querySelector('.carousel-control.next').addEventListener('click', goToNext);
document.querySelector('.carousel-control.prev').addEventListener('click', goToPrev);