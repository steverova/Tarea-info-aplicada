import React from "react"
import TableHeader from './table/TableHeader';
import Navbar from "./page/navbar";
import '../public/css/table.css';

function Details() {

  return (

    <React.Fragment>
      <Navbar />
      <TableHeader />
    </React.Fragment>
  );
}
export default Details;