function HomePage()
{
  return <div className="section1">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <div className="nav">
        <nav>
            <h2 className="logo">D<span>Z</span></h2>
            <ul>
                <li>
                    <a href="#Aboutus">ABOUT</a>
                </li>
                <li>
                    <a href="#articles">ARTICLES</a>
                </li>
            </ul>
            <a href="#Subcription">
                <button type="button">SUBCRIBE</button>
            </a>
            
        </nav>
    </div>
    <div className="home-info">
        <div className="home-text">
     <div>
     <h1>DRONOTICZ</h1>
     </div>
     <div className="era">
     ThE ERA OF DRONES
     </div>
     <div className="line">
                    <div className="rectangle"></div>
                    </div>
        </div>
        
    </div>
  </div>;
  
  


}
export default HomePage;