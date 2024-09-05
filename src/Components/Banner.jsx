import React from 'react';
import scholarshipslide from '../assets/Scholarship.jpg';
import hackthonslide from '../assets/Hackthon.jpg';
import counsellorslide from '../assets/Counselling.png';

const Banner = () => {
  return (
    <div id="eduvisorsCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <ol className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#eduvisorsCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#eduvisorsCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#eduvisorsCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </ol>

      {/* Carousel Slides */}
      <div className="carousel-inner">
        {/* Slide 1: Contact Your Counsellors */}
        <div className="carousel-item active">
          <img
            src={counsellorslide}
            className="d-block w-100"
            alt="Contact Your Counsellors"
            style={{ height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Contact Your Counsellors</h5>
            <p>Get instant guidance from expert counsellors to navigate your career path.</p>
          </div>
        </div>

        {/* Slide 2: Apply for Hackathons */}
        <div className="carousel-item">
          <img
            src={hackthonslide}
            className="d-block w-100"
            alt="Apply for Hackathons"
            style={{ height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Apply for Hackathons</h5>
            <p>Join competitive hackathons and showcase your skills on a global platform.</p>
          </div>
        </div>

        {/* Slide 3: Apply for Scholarships */}
        <div className="carousel-item">
          <img
            src={scholarshipslide}
            className="d-block w-100"
            alt="Apply for Scholarships"
            style={{ height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-dark">Apply for Scholarships</h5>
            <p className="text-dark">Explore various scholarship opportunities to fund your education journey.</p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#eduvisorsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#eduvisorsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <div className="text-center py-4 quote">
        <h3 className="fw-bold text-secondary">
          Empower your career journey | Know your strengths | Achieve your goals
        </h3>
      </div>
    </div>
  );
};

export default Banner;
