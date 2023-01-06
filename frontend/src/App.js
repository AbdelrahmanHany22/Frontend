import {
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Routes/Shop/Shop";
import Category from "./Routes/Category/Category"
import Success from "./Routes/Success/Success";
import Failed from "./Routes/Failed/Failed";
import Payment from "./Routes/Payment/Payment";
import Reserved from "./Routes/Reserved/Reserved";
import Analysis from "./Routes/Analysis/Analysis";

export default function App() {

  return (

    <div className="App">

    <Navbar />
        
        <Routes>  
        
          <Route path="/" element={<Shop/>} />  

          <Route path="/category/:matchno" element={<Category/>} />  

          <Route path="/success/:matchno/:category/:quantity" element={<Success/>} />

          <Route path="/Payment" element={<Payment/>} />

          <Route path="/failed" element={<Failed/>} />

          <Route path="/analysis" element={<Analysis/>} />

          <Route path="/Reserved" element={<Reserved />} />

        </Routes>

    </div>

  );
}

