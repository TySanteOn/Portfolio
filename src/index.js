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

const onScrollHandler = e => {
  // const headerNav = document.querySelector(".header-ul");
  // if (window.scrollY > 50) {
  //   headerNav.style.backgroundColor = "#191717";
  // } else {
  //   headerNav.style.backgroundColor = "rgba(0,0,0,0)";
  // };

  // console.log(e);
  // console.log(e.path[1].pageYOffset);

  const titles = document.querySelector(`.intro-titles`);
  const headerImg = document.querySelector(`.intro`);
  if (titles) {
    const constant = 80;
    const scrolled = e.path[1].pageYOffset / 2;
    console.log(scrolled);
    const newXPos = (constant + scrolled)/10;
    // const opacity = 1 - scrolled/200;
    // console.log(opacity);
    const backgroundXPos = 80 - scrolled/10;

    headerImg.style.backgroundPosition = `${backgroundXPos}%`;

    titles.style.left = `${newXPos}vw`;
    // titles.style.opacity = opacity;
    // headerImg.style.opacity = opacity;
  }
};

const writeApp = works => {
  ReactDOM.render(
    <BrowserRouter>
      <App works={works} />
    </BrowserRouter> , document.getElementById('content'));
  registerServiceWorker();
};

init();

