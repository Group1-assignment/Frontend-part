import Header from "./Parts/Header"
import Footer from "./Parts/Footer";
import Right from "./Parts/Right";
import Left from "./Parts/Left";
import Middle from "./Parts/Middle";

function App() {
return (
  <>
  <Header class ="Header"/>
  <Left class ="Split Left"/>
  <Middle class ="Split Middle"/>
  <Right class ="Split Right"/>
  
  <Footer Class="Footer" />

  </>
  

);
}

export default App
