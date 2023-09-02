import { useNavigate } from "react-router-dom";
import { Modal, Button, Table } from "react-bootstrap";
import OrderItems from "../components/OrderItems";

const OrderDetail = ({ isVisible, setModal, orderDetail }) => {
  console.log(orderDetail);
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/items");
  };
  const itemsList =
    orderDetail &&
    orderDetail.items &&
    orderDetail.items.map((i, index) => (
      <OrderItems item={i} key={index} index={index} />
    ));

  return (
    <Modal
      show={isVisible}
      onHide={closeModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Order Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>
          <b>Name: </b> {orderDetail.customer.name} <b>Email: </b>{" "}
          {orderDetail.customer.email}{" "}
        </span>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Tax Rate</th>
            </tr>
          </thead>
          <tbody>{itemsList}</tbody>
        </Table>

        <span>
          <b>Total Amount: </b>
          {orderDetail.total_amount.toFixed(2)}
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetail;
