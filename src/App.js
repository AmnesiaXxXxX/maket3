import './App.css';

function App() {
  return (
    <div className="main">
      <header className="header">
        <nav className="header__nav">
          <a className='header__nav-button' href="#about_us">About us</a>
          <a className='header__nav-button' href="#careers">Careers</a>
          <a className='header__nav-button' href="#resources">Resources</a>
          <a className='header__nav-button' href="#login">Login</a>
          <a className='header__nav-button header__nav-button--access' href="#resources">Get Access</a>
        </nav>
      </header>
      
      <section className='thumb'>
        <img className="thumb__img thumb__img--large" src="./img1.png" alt="img1" />
        <img className="thumb__img thumb__img--small" src="./img2.png" alt="img2" />
        <h1 className='thumb__title thumb__title--where'>Where creators</h1>
        <h1 className='thumb__title thumb__title--business'>do business</h1>
        <p className="thumb__content">Passionfroot lets you handle sponsorships, collaboration requests, bookings, and payments – in one single place. Stop feeling overwhelmed by the opportunities. Start seizing them.</p>
        <img className="thumb__img thumb__img--medium" src="./img3.png" alt="img3" />
        <img className="thumb__img thumb__img--large" src="./img4.png" alt="img4" />
        <a className='thumb__access-button' href="#resources">Get Access</a>
      </section>
      
      <section className="creators">
        <h1 className='creators__title'>For all creators</h1>
        <ul className='creators__list'>
          <li className='creators__item'>Podcasters</li>
          <li className='creators__item'>Youtubers</li>
          <li className='creators__item'>Newsletter Writers</li>
          <li className='creators__item'>Media companies</li>
          <li className='creators__item'>TikTokers</li>
          <li className='creators__item'>Influencers</li>
        </ul>
      </section>
      
      <section className="panels">
        <section className="panel panel--primary">
          <div className="panel__content">
            <h2 className="panel__title">Is running the show running you down, too?</h2>
            <ul className="panel__list">
              <li className="panel__list-item">You waste 70% of time on admin work</li>
              <li className="panel__list-item">Juggling 10+ tools to handle requests and payments</li>
              <li className="panel__list-item">Losing track, details and your spark due to constant back and forth</li>
            </ul>
            <img className='panel__img' alt='panel_img' src='panel1_img.png' />
          </div>
        </section>
        
        <section className="panel panel--secondary">
          <div className="panel__content">
            <h2 className="panel__title">Get over the overwhelm</h2>
            <ul className="panel__list">
              <li className="panel__list-item">Free up your time (and mind) to create more</li>
              <li className="panel__list-item">Handle all partnerships in one place</li>
              <li className="panel__list-item">Streamline your workflows to save time</li>
            </ul>
            <img className='panel__img' alt='panel_img' src='panel1_img.png' />
          </div>
        </section>
      </section>
      
      <section className="hamburger">
        <div className="hamburger__content">
          <h1 className='hamburger__title hamburger__title--talent'>You’ve got the talent.</h1>
          <h1 className='hamburger__title hamburger__title--tools'>We’ve got the tools</h1>
          <div className='hamburger__buttons'>
            <a href="#" className="hamburger__button">Storefront</a>
            <a href="#" className="hamburger__button">Plan Better</a>
            <a href="#" className="hamburger__button">Collaborate</a>
            <a href="#" className="hamburger__button">Get Paid</a>
          </div>
        </div>
      </section>
      
      <section className='two-panels'>
        <div className="two-panels__panel two-panels__panel--left">
          <div className="two-panels__content">
            <h1 className="two-panels__title">A space for all your requests</h1>
          </div>
          <img src="app_screenshot.png" alt="screenshot1" className="two-panels__img" />
        </div>
        <div className="two-panels__panel two-panels__panel--right"></div>
        <div className="two-panels__panel two-panels__panel--extra"></div>
      </section>
    </div>
  );
}

export default App;
