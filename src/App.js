import "./App.css";
import ContactDetails from "./ContactDetails/ContactDetails";
import Feature from "./Features/Feature";
import Performance from "./Features/Performance";
import Footer from "./Footer/Footer";
import GetApp from "./GetApp/GetApp";
import Navbar from "./Header/Navbar";
import WorkTech from "./HowToWork/WorkTech";
import Pages from "./Page/Pages";
import PowerData from "./PowerOfData/PowerData";

function App() {
  return (
    <div>
      <Navbar />
      <Feature />
      <Performance />
      <PowerData />
      <WorkTech />
      <GetApp />
      <ContactDetails />
      <Footer />
      <Pages />
    </div>
  );
}

export default App;
