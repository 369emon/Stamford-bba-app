document.addEventListener("DOMContentLoaded", function() {
  // Example dynamic news feed data (replace or extend with API/JSON data)
  const newsData = [
    {
      title: "Call for Papers - Stamford Journal of Economics",
      description: "Submit your research papers for the upcoming issue. Deadline: March 20, 2025.",
      link: "https://www.stamforduniversity.edu.bd/index.php/stamford/all_news"
    },
    {
      title: "Holidays for Eid-ul-Fitr",
      description: "The university will remain closed from March 27 to April 4, 2025.",
      link: "https://www.stamforduniversity.edu.bd/index.php/stamford/all_news"
    }
  ];
  
  // Example dynamic notice board data
  const noticeData = [
    {
      title: "Midterm Examination Schedule",
      description: "The midterm exams for Spring 2025 will begin on March 20, 2025.",
      link: "https://www.stamforduniversity.edu.bd/index.php/stamford/all_notice"
    },
    {
      title: "Independence Day Celebration",
      description: "Join us on March 26, 2025, to celebrate Independence Day with special events.",
      link: "https://www.stamforduniversity.edu.bd/index.php/stamford/all_notice"
    }
  ];
  
  // Get container elements
  const newsContainer = document.getElementById("newsfeed-container");
  const noticeContainer = document.getElementById("notice-container");
  
  // Function to create a news item element
  function createNewsItem(news) {
    const div = document.createElement("div");
    div.className = "news-item";
    div.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.description}</p>
      <a href="${news.link}" target="_blank">Read More</a>
    `;
    return div;
  }
  
  // Function to create a notice item element
  function createNoticeItem(notice) {
    const div = document.createElement("div");
    div.className = "notice-item";
    div.innerHTML = `
      <h3>${notice.title}</h3>
      <p>${notice.description}</p>
      <a href="${notice.link}" target="_blank">Read More</a>
    `;
    return div;
  }
  
  // Populate the newsfeed section dynamically
  newsData.forEach(news => {
    const newsElement = createNewsItem(news);
    newsContainer.appendChild(newsElement);
  });
  
  // Populate the notice board section dynamically
  noticeData.forEach(notice => {
    const noticeElement = createNoticeItem(notice);
    noticeContainer.appendChild(noticeElement);
  });
});
