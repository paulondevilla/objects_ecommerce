import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';

import './homepage.styles.scss';

const Homepage = ({ history }) => {
  return (
    <main className="homepage">
      <section className="hero-container">
        <header className="hero-header">
          <h1>
            Modern furnishing & stylish decorations for your personal space
          </h1>
        </header>
        <CustomButton onClick={() => history.push('/shop/all')}>
          Shop now
        </CustomButton>
      </section>

      <div className="boxes-header">
        <h2>Proudly made in the USA</h2>
      </div>

      <section className="boxes">
        <div className="box">
          <i className="fas fa-couch" />
          <h4>Unbeatable Selection</h4>
          <p>All things home, all in one place</p>
        </div>
        <div className="box">
          <i className="fas fa-award" />
          <h4>Expert Customer Service</h4>
          <p>Our friendly team's on hand seven days a week</p>
        </div>
        <div className="box">
          <i className="fas fa-tags" />
          <h4>Amazing Value Everyday</h4>
          <p>Items you love at prices that fit your budget</p>
        </div>
      </section>

      <section className="promotions">
        <div className="open-box">
          <h4>Open Box</h4>
          <p>Save big on returned and like-new items</p>
        </div>
        <div className="sale-items">
          <h4>Sale Items</h4>
          <p>Discover all of today's best savings</p>
        </div>
      </section>

      <section className="callout">
        <h3>Objects has quality products that lasts a long time</h3>
        <p>Astrid Collins</p>
      </section>

      <section className="newsletter-container">
        <label htmlFor="newsletter">Newsletter:</label>
        <input type="email" name="newsletter" className="newsletter" />
      </section>
    </main>
  );
};

export default Homepage;
