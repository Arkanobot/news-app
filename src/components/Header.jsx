import React from "react";
import newspaper from "../assets/newspaper.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { getCustomNewsQuery } from "../redux/newsData";

function Header() {
  const dispatch = useDispatch();
  //clears the custom news data from redux store on click of nav header
  const handleClick = () => {
    dispatch(getCustomNewsQuery(false));
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" onClick={handleClick}>
          <Container>
            <img
              alt="News Paper"
              src={newspaper}
              title="newspaper icons Newspaper icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/news"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Newspaper
          </Container>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
