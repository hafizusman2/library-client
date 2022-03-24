import { Link } from "react-router-dom";

export default function PageNotFoundScreen() {
  return (
    <>
      <div container>
        <div
            style={
            {
              // display: "flex",
              // flex: "1",
              // flexDirection: "column",
              // justifyContent: "center",
              // alignItems: "center",
            }
          }
          align="center"
        >
          <div>
            <h1>Page Not Found</h1>
          </div>
          <Link to="/">
            <button>Go to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}
