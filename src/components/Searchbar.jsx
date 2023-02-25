import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import search from "../assets/loupe.png";
import { useDispatch } from "react-redux";
import { getCustomNewsData, getCustomNewsQuery } from "../redux/newsData";
import { api } from "./api"; // getting the api key from api.js file
import axios from "axios";

function Searchbar() {
  var searchQuery;
  const dispatch = useDispatch();
  const handleSearch = (value) => {
    searchQuery = value;
  };

  async function fetchCustomNews() {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&searchIn=title,content&language=en&sortBy=popularity&apiKey=${api}`
      );
      //storing the top news data in a state
      dispatch(getCustomNewsData(response.data.articles));
      console.log(searchQuery);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    dispatch(getCustomNewsQuery(true));
    fetchCustomNews();
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <img
            src={search}
            alt="Search Icon"
            height="30"
            width="30"
            title="Search icons created by Freepik.com - Flaticon"
          />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search specific topics"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button variant="dark" id="button-addon2" onClick={handleClick}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
}

export default Searchbar;
