import './App.css'
import { HomePage } from './pages/home'

import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <>
      <HomePage />
    </>
  )
}

export default App
