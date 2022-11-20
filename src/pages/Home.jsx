import { Container } from "react-bootstrap";
import NavbarH from "./Home/Navbar";
import Header from "./Home/Header";
import PoweredBy from "./Home/PoweredBy";
import Team from "./Home/Team";
import FAQ from "./Home/FAQ";
import Footer from "./Home/Footer";

function Home() {
  return (
    <>
      <Container>
        <NavbarH />
        <Header />
        <PoweredBy />
        <Team />
        <FAQ />
        <Footer />
      </Container>
    </>
  );
}

export default Home;
