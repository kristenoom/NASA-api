const baseURL = 'https://api.nasa.gov/planetary/apod';
const key = 'zTjrFVIwtBVIENb3dJpESWDWbhRFFWa4m3AbPyO1';

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const moreInfoBtn = document.querySelector('.btn');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');

fetch(baseURL + '?api_key=' + key)
    .then(response => response.json())
    .then(json => displayImage(json));

    function displayImage(spaceObject) {
        console.log(spaceObject);
        let img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = spaceObject.hdurl;

        let title = document.createElement('h1');
        title.className = 'card-title';
        title.innerText = spaceObject.title;
        title.style = 'font-family: space-age;';

        let date = document.createElement('p');
        date.className = 'card-text';
        date.innerText = spaceObject.date;
        date.style.fontFamily = 'kiona-regular';

        let expl = document.createElement('p');
        expl.innerText = spaceObject.explanation;
        expl.style.fontFamily = 'kiona-regular';

        moreInfoBtn.style.fontFamily = 'kiona-regular';

        modalTitle.innerText = spaceObject.title;
        modalTitle.style.fontFamily = 'space-age';

        card.insertBefore(img, cardBody);
        cardBody.insertBefore(title, moreInfoBtn);
        cardBody.insertBefore(date, moreInfoBtn);
        modalBody.appendChild(expl);
    }

// function displayImage(spaceObject) {
//     console.log(spaceObject);

//     let img = document.createElement('img');
//     img.className = 'card-img-top';
//     img.src = spaceObject.hdurl; //hdurl is API object property

//     let title = document.createElement('h1');
//     title.className = 'card-title';
//     title.innerText = spaceObject.title; //title is API object property
//     title.style.fontFamily = 'space-age';

//     let date = document.createElement('p');
//     date.className = 'card-text';
//     date.innerText = spaceObject.date; //date is API object property
//     date.style.fontFamily = 'kiona-regular';

//     let expl = document.createElement('p');
//     expl.innerText = spaceObject.explanation;
//     expl.style.fontFamily = 'kiona-regular';

//     moreInfoBtn.style.fontFamily = 'kiona-regular';

//     modalTitle.innerText = spaceObject.title;
//     modalTitle.style.fontFamily = 'space-age';

//     //card.appendChild(img);
//     card.insertBefore(img, cardBody); //inserts image before card-body
//     cardBody.insertBefore(title, moreInfoBtn);
//     cardBody.insertBefore(date, moreInfoBtn);
//     modalBody.appendChild(expl);
// }   
//date
//explanation
//hdurl
//media_type
//service_version
//title
//url