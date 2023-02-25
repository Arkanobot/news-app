import React from "react";
import Searchbar from "./Searchbar";
import News from "./News";

function Main() {
  return (
    <div className="m-2 p-lg-2">
      <Searchbar />
      <News />
    </div>
  );
}

export default Main;
