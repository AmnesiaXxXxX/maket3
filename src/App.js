import './App.css';

function App() {
  return (
    <div className="main">
        <header className="main__header">
          <div className="main__header__div">
            <div className="main__header__nav-buttons">
              <a id='about_us_button' href="#about_us"><p>About us</p></a>
              <a id='careers_button' href="#careers"><p>Careers</p></a>
              <a id='resourses_button' href="#resourses"><p>Resourses</p></a>
            </div>
            <div>
              <a id='login_button' href="#resourses"><p>Login</p></a>
              <a id='get_access_button' href="#resourses"><p>Get Access</p></a>
            </div>
          </div>
        </header>
        <div className='thumb'>
          <img id="img1" src="./img1.png" alt="img1" />
          <img id="img2" src="./img2.png" alt="img2" />
          <h1 id='where_creators'>Where creators</h1>
          <h1 id='do_business'>do business</h1>
          <p id="content">Passionfroot lets you handle sponsorships, collaboration requests, bookings, and payments – in one single place. Stop feeling overwhelmed by the opportunities. Start seizing them.</p>
          <img id="img3" src="./img3.png" alt="img3" />
          <img id="img4" src="./img4.png" alt="img4" />
          <a id='get_access_button' href="#resourses"><p>Get Access</p></a>
        </div>
        <div className="rest">
          <h1 id='for_all_creators'>For all creators</h1>
          <p id='podcasters'>Podcasters</p>
          <p id='youtubers'>Youtubers</p>
          <p id='newsletter_writers'>Newsletter Writers</p>
          <p id='media_companies'>Media companies</p>
          <p id='tiktokers'>TikTokers</p>
          <p id='influencers'>Influencers</p>
          
        </div>
        <div id='about_us'>
          <div className="panel" id="panel1">
            <div id="panel1_content">
              <h2>Is running the show running you down, too?</h2>
              <li id="panel1_list_element1">You waste 70% of time on admin work</li>
              <li id="panel1_list_element2">Juggling 10+ tools to handle requests and payments</li>
              <li id="panel1_list_element3">Losing track, details and your spark due to constant back and forth</li>
            </div>
            
            <img id='panel1_img' src='panel1_img.png'></img>
          </div>
          <div className="panel" id="panel2">

          </div>
        </div>
    </div>
  );
}

export default App;
