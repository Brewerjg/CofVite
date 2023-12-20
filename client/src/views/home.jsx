import Footer from '../components/Footer';
import HeadingOne from '../components/headingOne';
import Navbar from '../components/navbar';
import Procard from '../components/procard';

function Home() {
  return (
    <div>
      <Navbar/>
      <HeadingOne/>
      <Procard/>
      <Footer/>
    </div>
  );
}

export default Home;