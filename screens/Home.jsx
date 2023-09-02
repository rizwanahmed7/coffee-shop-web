import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="row mt-5">
      <div className="col-5"></div>
      <div className="col-4">
        <Link to="/order">Place Order</Link>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default Home;
