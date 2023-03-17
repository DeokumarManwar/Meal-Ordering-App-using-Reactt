import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>The product Page</h1>
      <ul>
        <li>
          <Link to="/products/One_Punch_man">A Manga</Link>
        </li>
        <li>
          <Link to="/products/All_Might">A Hero</Link>
        </li>
        <li>
          <Link to="/products/Gomu_Gomu_No_Mi">A DevilFruit</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
