import React from "react";

export function Table01({ reports }) {
  
   let tr = [];

      tr.push(
        reports.map((data) => (
          //  <tr key={data.businessEntityID}>
          //  {Object.keys(data).map((props) =>
          //  <td>{data[props]}</td>
          //  )}
          //  </tr>
          <tr key={data.businessEntityID}>
            <td>{data.name}</td>
            <td>{data.lastName}</td>
            <td>{data.jan}</td>
            <td>{data.feb}</td>
            <td>{data.mar}</td>
            <td>{data.apr}</td>
            <td>{data.may}</td>
            <td>{data.jun}</td>
            <td>{data.jul}</td>
            <td>{data.aug}</td>
            <td>{data.sep}</td>
            <td>{data.oct}</td>
            <td>{data.nov}</td>
            <td>{data.dec}</td>
          </tr>
        ))
      );

    return (
      <React.Fragment>
        <table className="table table-light ">
          <thead className=" table-head thead-light">
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Apr</th>
              <th>May</th>
              <th>Jun</th>
              <th>Jul</th>
              <th>Aug</th>
              <th>Sep</th>
              <th>Oct</th>
              <th>Nov</th>
              <th>Dec</th>
            </tr>
          </thead>
          <tbody>{tr}</tbody>
          <tfoot>
            <tr>
              <th>#Page</th>
            </tr>
          </tfoot>
        </table>
      </React.Fragment>
    );
}