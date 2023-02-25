import React from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";

function TopNews() {
  const { topNews } = useSelector((state) => state.news);

  return (
    <Accordion defaultActiveKey="0">
      {topNews.newsData.map((news, i) => {
        return (
          <Accordion.Item eventKey={i} key={i}>
            <Accordion.Header>
              {news.title} ~ {news.source?.name}
            </Accordion.Header>
            <Accordion.Body>
              <div>{news.description}</div>
              {news.urlToImage ? (
                <div>
                  <img
                    src={news.urlToImage}
                    alt={news.title}
                    // className="w-75 h-75"
                    style={{ height: "25em" }}
                  />
                </div>
              ) : null}

              <div>{news.content}</div>
              <div>Source: {news.source?.name}</div>
              {news.author ? <div>Author:{news.author}</div> : null}
              {news.url ? (
                <div>
                  <a target="_blank" rel="noreferrer" href={news.url}>
                    Read more
                  </a>
                </div>
              ) : null}
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default TopNews;
