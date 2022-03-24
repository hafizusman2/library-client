import MaterialTable from "material-table";
import { Link } from "react-router-dom";

const headCells = [
  { field: "sr", title: "Sr. No", type: "numeric" },
  {
    field: "firstname",
    title: "First Name",
  },
  {
    field: "lastname",
    title: "Last Name",
  },
];
const rows = [
  {
    sr: 1,
    firstname: "Hafiz",
    lastname: "Usman",
  },
  {
    sr: 2,
    firstname: "Usman",
    lastname: "Najmi",
  },
];
export default function StudentsListMaterialTable() {
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={headCells}
        data={rows}
        options={{
          headerStyle: {
            backgroundColor: "#FD7C27",
            color: "#FFF",
            fontWeight: 700,
            fontSize: "110%",
          },
          rowStyle: {
            fontWeight: 700,
            fontSize: "100%",
            color: "#000000",
          },
          exportButton: true,
        }}
        title="Students List"
      />
    </div>
  );
}
