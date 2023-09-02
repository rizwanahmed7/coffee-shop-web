const OrderItems = ({ item, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.tax_rate}</td>
    </tr>
  );
};

export default OrderItems;
