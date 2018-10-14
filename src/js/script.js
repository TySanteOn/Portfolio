// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// // import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from "react-router-dom";

const works = [];

const init = () => {
  fetch(`./data/portfolioShowcase.json`)
    .then(r => r.json())
    .then(parse);

  window.addEventListener("scroll", onScrollHandler);
  document.querySelector(`.menu-button`).addEventListener("click", menuClickHandler);
  document.querySelector(`.header`).addEventListener("click", menuClickHandler);
};

const makeWorkScroller =  data => {
  const $worksList = document.querySelector(".works");
  if (data.length > 0) {
    data.forEach(work => {
      work.forEach(werk => {
        const $art = document.createElement(`article`);
        $art.classList = "works-article"
        const $head = document.createElement(`header`);
        $head.textContent = werk[0];
        $art.append($head);
        const $ul = document.createElement(`ul`);
        $ul.classList = "works-lijst";
        
        for (const key in werk[1]) {
          if (werk[1].hasOwnProperty(key)) {
            const $li = document.createElement(`li`);
            $li.innerHTML = `<a class="work" href="${werk[1][key].link}"><img class="works-list-pic" src="assets/${werk[1][key].pic}" alt="" width="250" height="250" /></a>`;
            $li.classList = "works-list-item"
            $ul.append($li);
          }
        }
        $art.append($ul);
        $worksList.append($art);
      })
    });
  }
};

const menuClickHandler = () => {
  const $header = document.querySelector(`.header`);
  // $header.style.left = 0;
  // $header.style.opacity = 1;
  $header.classList.toggle(`on`);
}

const parse = (data) => {
  const workData = Object.entries(data);
  works.push(workData);
  makeWorkScroller(works);
};

const onScrollHandler = e => {
  const titles = document.querySelector(`.intro-titles`);
  const headerImg = document.querySelector(`.intro`);
  if (titles) {
    const constant = 80;
    const scrolled = e.path[1].pageYOffset / 2;
    const newXPos = (constant + scrolled)/10;
    const backgroundXPos = 80 - scrolled/10;

    headerImg.style.backgroundPosition = `${backgroundXPos}%`;

    titles.style.left = `${newXPos}vw`;
  }
};

init();

