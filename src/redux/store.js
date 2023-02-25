import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsData"; // news reducer from the newsData

//creating a store for the app
export default configureStore({
  reducer: {
    news: newsReducer,
  },
});
