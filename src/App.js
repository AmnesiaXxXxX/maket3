import './App.css';

function App() {
  return (
    <div className="main">
      <header className="main__header">
        <nav className="main__header__nav">
          <a id='about_us_button' href="#about_us">About us</a>
          <a id='careers_button' href="#careers">Careers</a>
          <a id='resourses_button' href="#resourses">Resourses</a>
          <a id='login_button' href="#resourses">Login</a>
          <a id='get_access_button' href="#resourses">Get Access</a>
        </nav>
      </header>
      <section className='thumb'>
        <img id="img1" src="./img1.png" alt="img1" />
        <img id="img2" src="./img2.png" alt="img2" />
        <h1 id='where_creators'>Where creators</h1>
        <h1 id='do_business'>do business</h1>
        <p id="content">Passionfroot lets you handle sponsorships, collaboration requests, bookings, and payments – in one single place. Stop feeling overwhelmed by the opportunities. Start seizing them.</p>
        <img id="img3" src="./img3.png" alt="img3" />
        <img id="img4" src="./img4.png" alt="img4" />
        <a id='get_access_button' href="#resourses">Get Access</a>
      </section>
      <section className="rest">
        <h1 id='for_all_creators'>For all creators</h1>
        <ul>
          <li id='podcasters'>Podcasters</li>
          <li id='youtubers'>Youtubers</li>
          <li id='newsletter_writers'>Newsletter Writers</li>
          <li id='media_companies'>Media companies</li>
          <li id='tiktokers'>TikTokers</li>
          <li id='influencers'>Influencers</li>
        </ul>
      </section>
      <section className="panels">
        <section className="panel" id="panel1">
          <div id="panel1_content">
            <h2>Is running the show running you down, too?</h2>
            <ul>
              <li id="panel1_list_element1">You waste 70% of time on admin work</li>
              <li id="panel1_list_element2">Juggling 10+ tools to handle requests and payments</li>
              <li id="panel1_list_element3">Losing track, details and your spark due to constant back and forth</li>
            </ul>
            <img id='panel_img' alt='panel1_img' src='panel1_img.png'></img>
          </div>
        </section>
        <section className="panel" id="panel2">
          <div id="panel2_content">
            <h2>Get over the overwhelm</h2>
            <ul>
              <li id="panel2_list_element1">Free up your time (and mind) to create more</li>
              <li id="panel2_list_element2">Handle all partnerships in one place</li>
              <li id="panel2_list_element3">Streamline your workflows to save time</li>
              <img id='panel_img' alt='panel1_img' src='panel1_img.png'></img>
            </ul>
          </div>
        </section>
      </section>
      <section id="hamburger">
      <div id="hamburger_content">
        <h1 id='ur_talent'>You’ve got the talent.</h1>
        <h1 id='we_tools'>We’ve got the tools</h1>
        <div id='buttons'>
          <a href="" id="button1">Storefront</a>
          <a href="" id="button2">Plan Better</a>
          <a href="" id="button3">Collaborate</a>
          <a href="" id="button4">Get Paid</a>
        </div>
      </div>
      </section>
    </div>
  );
}

export default App;
