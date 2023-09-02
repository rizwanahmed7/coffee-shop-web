import { Card } from "react-bootstrap";
import { COFFEE_CUP } from "../utils/assets";

const Item = ({ item, deleteItem }) => {
  return (
    <div class="col-3 pt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={COFFEE_CUP} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Price: {item.price}
            <br />
            Tax Rate: {item.tax_rate}
          </Card.Text>
          <div class="display-flex">
            <Card.Link href="#" onClick={() => deleteItem(item.id)}>
              Delete
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
