import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { getCustomers } from "../api/Customer";
import Customer from "../components/Customer";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    getCustomers().then((res) => setCustomers(res));
  }, []);

  const customersList =
    customers &&
    customers.map((c, index) => (
      <Customer customer={c} key={index} index={index} />
    ));

  return (
    <div>
      {customersList.length === 0 ? (
        <div>No Data Retrieved</div>
      ) : (
        <div>
          <h1>Customers List</h1>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{customersList}</tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Customers;
