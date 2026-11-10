
import { useState } from "react";
import "./App.css";

import logo from "../../assests/logo.svg";
import poster1 from "../../assests/img1.webp";
import poster2 from "../../assests/img2.webp";
import poster3 from "../../assests/img3.webp";
import poster4 from "../../assests/img4.webp";
import poster5 from "../../assests/img5.webp";
import poster6 from "../../assests/img6.webp";
import poster7 from "../../assests/img7.webp";
import poster8 from "../../assests/img8.webp";
import poster9 from "../../assests/img9.webp";
import poster10 from "../../assests/img10.webp";

const movies = [
  poster1, poster2, poster3, poster4, poster5,
  poster6, poster7, poster8, poster9, poster10
];

const questions = [
  "What is Netflix?",
  "How does Netflix work?",
  "How much does Netflix cost?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix?",
  "Is Netflix good for kids?"
];

function App() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <img className="logo" src={logo} alt="Netflix" />

          <div className="nav-actions">
            <select aria-label="Select language">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
            <button className="sign-in">Sign In</button>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Unlimited movies, shows, and more</h1>
          <h3>Starts at ₹149. Cancel at any time.</h3>
          <p>
            Ready to watch? Enter your email to create or restart
            your membership.
          </p>

          <div className="email-form">
  <input
    type="email"
    placeholder="Email Address"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
      setMessage("");
    }}
  />
  <button
    onClick={() => {
      if (!email.trim()) {
        setMessage("Please enter your email address.");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setMessage("Please enter a valid email address.");
      } else {
        setMessage("Email submitted successfully!");
      }
    }}
  >
    Get Started &gt;
  </button>
</div>
{message && <p className="form-message">{message}</p>}
        </div>
      </header>

      <main>
        <section className="trending section">
          <h2>Trending Now</h2>

          <div className="movie-list">
            {movies.map((movie, index) => (
              <div className="movie-card" key={index}>
                <img src={movie} alt={`Trending title ${index + 1}`} />
                <span>{index + 1}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>More reasons to join</h2>

          <div className="reasons">
            <div className="reason-card">
              <h3>Enjoy on your TV</h3>
              <p>Watch on smart TVs, PlayStation, Xbox, Chromecast and more.</p>
            </div>

            <div className="reason-card">
              <h3>Download your shows</h3>
              <p>Save your favourites easily and always have something to watch.</p>
            </div>

            <div className="reason-card">
              <h3>Watch everywhere</h3>
              <p>Stream movies and shows on your phone, tablet and laptop.</p>
            </div>

            <div className="reason-card">
              <h3>Create profiles for kids</h3>
              <p>Give kids their own space to enjoy their favourite characters.</p>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <h2>Frequently Asked Questions</h2>

          {questions.map((question, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
              >
                {question}
                <span>{openQuestion === index ? "−" : "+"}</span>
              </button>

              {openQuestion === index && (
                <div className="faq-answer">
                  Netflix is a streaming service where you can watch
                  movies, TV shows and more.
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="bottom-email section">
          <p>
            Ready to watch? Enter your email to create or restart
            your membership.
          </p>
          <div className="email-form">
            <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
    setMessage("");
  }}
/>
           <button
  onClick={() => {
    if (!email.trim()) {
      setMessage("Please enter your email address.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage("Email submitted successfully!");
    }
  }}
>
  Get Started &gt;
</button>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <p>Questions? Call 000-800-919-1743</p>

        <div className="footer-links">
          <a href="#">FAQ</a>
          <a href="#">Help Centre</a>
          <a href="#">Account</a>
          <a href="#">Media Centre</a>
          <a href="#">Investor Relations</a>
          <a href="#">Jobs</a>
          <a href="#">Privacy</a>
          <a href="#">Terms of Use</a>
        </div>

        <p>Netflix India</p>
        <small>
          This is a personal educational project created by Vishal Kumar Mishra.
          It is not affiliated with Netflix.
        </small>
      </footer>
    </div>
  );
}

export default App;
