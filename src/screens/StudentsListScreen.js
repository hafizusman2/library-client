import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SnackbarContent from "@mui/material/SnackbarContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import StudentsListMaterialTable from "../data/StudentsListMaterialTable";

const StudentsListScreen = () => {
  return (
    <div>
      <main>
        <Container maxWidth="lg">
          <Grid
            // justifyContent="center"
            container
            // style={{ justifyContent: "center", alignItems: "center" }}
          >
            {/* <br />
              <br />
              <br /> */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <SnackbarContent
                style={{
                  border: "1px solid #C4C4C4",
                  backgroundColor: "#FFFFFF",
                  color: "#696363",
                }}
                message={
                  <Typography
                    // style={{ backgroundColor: "#F8F8F8", color: "#696363" }}
                    // component="h1"
                    // variant="h6"
                    // color="inherit"
                    // className={classes.title}
                    style={{
                      fontWeight: 700,
                      fontSize: "160%",
                    }}
                  >
                    Students List
                  </Typography>
                }
                noWrap
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} align="left" noWrap>
              <div
                style={{
                  padding: "2%",
                  marginTop: "3%",
                }}
              >
                <Button
                  style={{
                    border: "1px solid #C4C4C4",
                    backgroundColor: "white",
                    color: "#FD7C27",
                    fontWeight: 600,
                  }}
                  variant="contained"
                >
                  Add Student
                </Button>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12}>
              <StudentsListMaterialTable />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default StudentsListScreen;
