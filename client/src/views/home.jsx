import Footer from '../components/Footer';
import HeadingOne from '../components/headingOne';
import Navbar from '../components/navbar';
import Procard from '../components/procard';
import About from '../components/about';
import Map from '../components/map';

function Home() {
  return (
    <div>
      <Navbar/>
      <HeadingOne/>
      <About/>
      <Procard/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default Home;