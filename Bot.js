// ==UserScript==
// @name         My New BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Sergey Zhuravkin
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let sf = document.getElementsByName("search")[0];
let keywords = ["Автомобили", "Авто", "Купить авто"];
let keyword = keywords[getRandom(0, keywords.length)];

if (sf != undefined) {
  document.getElementsByName("q")[0].value = keyword;
  sf.click();
} else {
  for(let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("auto.ru") != -1) {
      let link = links[i];
      console.log("Нашел строку " + link);
      link.click();
      break;
    }
  }
}

function getRandom(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}
