import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const IndexScreen = () => {
  return (
    <div>
      <h1>Welcome to CQ Technologies Library</h1>
      <Link
        style={{
          textDecoration: "none",
        }}
        to="viewstudents"
      >
        <Button style={{ margin: "20px" }} variant="contained" color="success">
          View Students
        </Button>
      </Link>
      <br />
      <Link style={{ textDecoration: "none" }} to="viewbooks">
        <Button variant="contained" color="success">
          View Books
        </Button>
      </Link>
    </div>
  );
};

export default IndexScreen;
