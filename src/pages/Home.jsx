import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="container text-center my-5">
      {/* Store Introduction */}
      <h1 className="text-success fw-bold">Welcome to SS Store</h1>
      <p className="lead">
        Your one-stop shop for top-quality products at unbeatable prices!  
        From stylish fashion to the latest electronics, we bring you the best deals every day.  
        Shop with confidence and enjoy seamless shopping from the comfort of your home.
      </p>

      {/* Shop Now Button */}
      <button className="btn btn-primary btn-lg mt-3" onClick={() => navigate('/product')}>
        Shop Now
      </button>
    </div>
  );
};

export default Home;
