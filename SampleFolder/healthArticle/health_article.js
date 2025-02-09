let newsReq = new XMLHttpRequest();
let urlNews = "./news.json";

// Loading articles
let xhr = new XMLHttpRequest();
let url = "./health_article.json";

// loading news
newsReq.open("GET", urlNews, true);
newsReq.responseType = "json";

// Handling articles
xhr.open("GET", url, true);
xhr.responseType = "json";

// handling news
newsReq.onload = function () {
  let news = newsReq.response.news;
  let newsDiv = document.getElementById("news");

  news.forEach((element) => {
    let newsItemsDiv = document.createElement("div");
    newsItemsDiv.classList.add("news");

    let title = document.createElement("h2");
    title.textContent = element.title;

    let source_title = document.createElement("h3");
    source_title.textContent = element.source_title;

    let keywords = document.createElement("p");
    element.keywords.forEach((keywordEl) => {
      let keyword = document.createElement("span");
      keyword.textContent = keywordEl + "  | ";
      keyword.style.fontWeight = "bold";
      keywords.appendChild(keyword);
    });

    let description = document.createElement("p");
    description.textContent = element.description;

    let content = document.createElement("p");
    content.textContent = element.content;

    newsItemsDiv.appendChild(title);
    newsItemsDiv.appendChild(source_title);
    newsItemsDiv.appendChild(description);
    newsItemsDiv.appendChild(keywords);
    newsItemsDiv.appendChild(content);

    newsDiv.appendChild(newsItemsDiv);
  });
};

xhr.onload = function () {
  let articles = xhr.response.articles;
  let articlesDiv = document.getElementById("articles");

  articles.forEach((article) => {
    let articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    let title = document.createElement("h2");
    title.textContent = article.title;

    let description = document.createElement("p");
    description.textContent = article.description;

    let waysHeader = document.createElement("h3");
    waysHeader.textContent = "Ways to Achieve";

    let waysList = document.createElement("ul");
    article.ways_to_achieve.forEach((way) => {
      let listIem = document.createElement("li");
      listIem.textContent = way;
      waysList.appendChild(listIem);
    });

    let benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Benefits";

    let benefitsList = document.createElement("ul");
    article.benefits.forEach((benefit) => {
      let listItem = document.createElement("li");
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });
};

console.log(xhr);
console.log(newsReq);
newsReq.send();
xhr.send();
