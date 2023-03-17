import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();
  console.log(params.productkey);
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productkey}</p>
    </section>
  );
};

export default ProductDetail;
