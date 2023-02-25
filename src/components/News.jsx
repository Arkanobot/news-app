import React from "react";
import axios from "axios";
import { api } from "./api"; // getting the api key from api.js file
import { useDispatch, useSelector } from "react-redux";
import { getTopNews } from "../redux/newsData";
import TopNews from "./TopNews";
import CustomNews from "./CustomNews";

function News() {
  const dispatch = useDispatch();
  const link = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}`;
  const { topNews, customNewsData } = useSelector((state) => state.news);
  //getting top news data from news api
  async function fetchNews() {
    try {
      const response = await axios.get(link);
      //storing the top news data in a state
      dispatch(getTopNews(response.data.articles));
    } catch (error) {
      console.log(error);
    }
  }
  // if topnews data is empty, then call function
  if (topNews.isEmpty === true) {
    fetchNews();
  }
  return <div>{customNewsData !== "" ? <CustomNews /> : <TopNews />}</div>;
}

export default News;
