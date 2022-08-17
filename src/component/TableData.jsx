import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const TableData = () => {
  const [datalist, setDatalist] = useState(null);
  useEffect(() => {
    getemployees();
  }, []);

  const getemployees = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setDatalist(result);
        },
        (error) => {
          setDatalist(null);
          alert(error);
        }
      );
  };
  if (!datalist) return <div>No Record Found</div>;
  const handleDelete = (id, e) => {
    setDatalist(datalist.filter((v, i) => i !== id));
  };
  return (
    <div>
      <h1 style={{textAlign:'center', margin:'10px'}}>List Data With Fuctional Components</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {datalist.map((data, id) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
              <td>
                <Button variant="danger" onClick={(e) => handleDelete(id, e)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default TableData;
