//import logo from './logo.svg';
import './App.css';
import './Home'
import HomePage from './Home';
import MyArticles from './Articles';
import MyAboutUs from './About';
import Myfooter from './Footer';
import MySub from './Subscription';



function App() {
  return (
    <div>
   <HomePage></HomePage>
   <MyArticles/>
   <MyAboutUs/>
   <MySub/>
   <Myfooter/>
    </div>
  
   
  );
}

export default App;
