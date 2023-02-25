import { createSlice } from "@reduxjs/toolkit";

//creating a new slice for reducers of news
export const newsSlice = createSlice({
  name: "News",
  //initial state of the news app goes here
  initialState: {
    topNews: {
      isEmpty: true,
      newsData: [],
    },
    customNewsQuery: "",
    customNewsData: "",
  },
  //reducers to alter the news state goes here
  reducers: {
    getTopNews: (state, action) => {
      state.topNews.newsData = action.payload;
      state.topNews.isEmpty = false;
    },
    getCustomNewsQuery: (state, action) => {
      state.customNewsQuery = action.payload;
    },
    getCustomNewsData: (state, action) => {
      state.customNewsData = action.payload;
    },
  },
});

//destructuring and exporting the reducer actions
export const { getTopNews, getCustomNewsQuery, getCustomNewsData } =
  newsSlice.actions;
export default newsSlice.reducer;
