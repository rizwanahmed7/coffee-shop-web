import Item from "../components/Item";
import { getItems, deleteItem } from "../api/Items";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, CardGroup } from "react-bootstrap";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems().then((response) => setItems(response));
  }, []);
  const removeItem = async (id) => {
    const deleteResponse = await deleteItem(id);
    if (deleteResponse.status >= 200 && deleteResponse.status < 300) {
      getItems().then((response) => setItems(response));
    } else {
      alert("Item not deleted");
    }
  };
  const itemsList =
    items &&
    items.map((i, index) => (
      <Item item={i} key={index} deleteItem={removeItem} />
    ));

  return (
    <div>
      <div class="container d-flex justify-content-end m-3">
        <Button className="btn btn-primary btn-lg pt-2 text-light">
          <Link to="/new_item" className="text-light text-decoration-none">
            Add Item
          </Link>
        </Button>
      </div>
      {itemsList.length === 0 ? (
        <div>No Data Retrieved</div>
      ) : (
        <div class="container">
          <CardGroup>{itemsList}</CardGroup>
        </div>
      )}
    </div>
  );
};

export default Items;
