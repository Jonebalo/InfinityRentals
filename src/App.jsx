import "./App.css"; 
import  {Header}  from "./Components/Header/Header";
import {Carrusel} from "./Components/Carrusel/Carrusel";
import { Houses } from "./Components/Cards/Houses";
import { Services } from "./Components/Works/Services";
import { Phrase } from "./Components/Works/Phrase";
import { Rrss } from "./Components/Footer/Rrss";
import { Legal } from "./Components/Footer/Legal";
// import { Blog } from "./Components/Footer/Blog";




function App() {
  return (
  <>
  
  <Header/>
  <Carrusel/> 
  <Houses/> 
  <Services/>
  <Phrase/>
  <Rrss/>
  <Legal/>
  {/* <Blog/> */}

  
  </>
  );
}

export default App;