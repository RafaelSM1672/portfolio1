import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import Work from "./components/Work";
import Values from "./components/Values";
import Example from "./components/Example";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App font-['Poppins'] bg-[#11071F] min-h-screen text-white">
      <Navbar />
      <Header />
      <Description />
      <Work />
      <Values />
      <Example />
      <Footer />
      
    </div>
  )
}

export default App
