const Customer = ({ customer, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
    </tr>
  );
};

export default Customer;
