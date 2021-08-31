import "./styles.css";
import ProductCarousel from "./ProductCarousel";

function ProductView(props) {
  return <ProductCarousel size={props.size} products={[11, 2, 3, 4]} />;
}

export default function App() {
  return <ProductView size={300} />;
}
