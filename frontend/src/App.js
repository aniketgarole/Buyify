// import Addproduct from "./Admin/pages/Addproduct/Addproduct";
import "./App.css";
import Cart from "./User/pages/Cart";

import Checkout from "./User/pages/Checkout";

import Men from "./User/pages/Products/Men/Men";
import SingleProduct from "./User/pages/Products/SingleProduct";
import AllRoutes from "./routes/AllRoutes";
import { UpperNavbar } from "./User/pages/Homepage/UpperNavbar";
import Footer from "./User/pages/Homepage/Footer";

function App() {
  return (
    <div>
      {/* <Men/> */}
      {/* <SingleProduct/> */}

      {/* <Checkout/> */}

      {/* <UpperNavbar /> */}
      <AllRoutes />
      {/* <Footer /> */}
      {/* <Addproduct/> */}
    </div>
  );
}

export default App;
