const werken = [];

var init = function init() {
  fetchData();
  window.addEventListener("scroll", onScrollHandler);
};

var fetchData = function fetchData() {
  fetch("./data/portfolioShowcase.json").then(r => r.json()).then(parseData);
};

var onScrollHandler = function onScrollHandler() {
  var headerNav = document.querySelector(".header-ul");
  // const headerLogo = document.getElementById(`logo-in-header`);
  if (window.scrollY > 50) {
    headerNav.style.backgroundColor = "#191717";
    // headerLogo.classList.remove(`hidden`);
  } else {
    headerNav.style.backgroundColor = "rgba(0,0,0,0)";
    // headerLogo.classList.add(`hidden`);
  };
};

var parseData = function parseData(data) {
  const datatje = Object.entries(data);
  werken.push(datatje);
  makeWorkScroller(werken);
};

var makeWorkScroller = function makeWorkScroller(data) {
  var $worksLijst = document.querySelector(".works-lijst");
  if (data.length > 0) {
    data.forEach(work => {
      work.forEach(werk => {
        var $li = document.createElement(`li`);
        $li.innerHTML = `<a href="${werk[1].link}"><img class="works-list-pic" src="assets/${werk[1].pic}" alt="" width="250" height="250" /></a>`;
        $li.classList = "works-list-item"
        $worksLijst.appendChild($li);
      })
    });
  }
};

init();
