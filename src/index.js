import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";

const works = [];

const init = () => {
  fetch(`./data/portfolioShowcase.json`)
    .then(r => r.json())
    .then(parse);

  window.addEventListener("scroll", onScrollHandler);
};

const parse = (data) => {
  const workData = Object.entries(data);
  works.push(workData);
  writeApp(works);
};

// var makeWorkScroller = function makeWorkScroller(data) {
//   var $worksLijst = document.querySelector(".works-lijst");
//   if (data.length > 0) {
//     data.forEach(work => {
//       work.forEach(werk => {
//         var $li = document.createElement(`li`);
//         $li.innerHTML = `<a href="${werk[1].link}"><img class="works-list-pic" src="assets/${werk[1].pic}" alt="" width="250" height="250" /></a>`;
//         $li.classList = "works-list-item"
//         $worksLijst.appendChild($li);
//       })
//     });
//   }
// };

const onScrollHandler = () => {
  const headerNav = document.querySelector(".header-ul");
  if (window.scrollY > 50) {
    headerNav.style.backgroundColor = "#191717";
  } else {
    headerNav.style.backgroundColor = "rgba(0,0,0,0)";
  };
};

const writeApp = works => {
  ReactDOM.render(
    <BrowserRouter>
      <App works={works} />
    </BrowserRouter> , document.getElementById('content'));
  registerServiceWorker();
};

init();

