import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button, Container, Typography } from "@mui/material";
import DataTable from "../../components/DataTable";
import { useAuthContext } from "../../contexts/AuthContext";
import auth from "../../utils/api/auth";
import user from "../../utils/api/user";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
];

const rows = [
  { id: 1, name: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const paginationModel = { page: 0, pageSize: 1 };

const Home =async () =>{
    const { logOut } = useAuthContext();
    let page=1,limit=10,search="";
    const users = await user.getAllUsers({page,limit,search});

  return (
    <Container maxWidth="lg">
        <Button onClick={(e)=>logOut()}> Logout</Button>
        <DataTable
        columns={columns}
        rows={rows}
        paginationModel={{page: 0, pageSize: 1}}
        pageSizeOptionsData={[5,10]}
        />
      
    </Container>
  );


}
export default  Home;