import { CustomHeader } from "./components/Header";
import { RoutesApp } from "./routes/routes";
import '../src/styles/globals.scss';
import{register} from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

register();

function App() {
  AOS.init();

  return (
    <div className="App">
      <RoutesApp/>
    </div>
  );
}

export default App;
