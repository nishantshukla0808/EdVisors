import React from 'react';

const Banner2 = () => {
  return (
    <div className="container my-5">
      {/* Main Title */}
      <h2
        className="text-center fw-bold py-4"
        style={{
          background: 'linear-gradient(to right, #00c6ff, #0072ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Why You Should Choose EdVisors
      </h2>

      {/* Card Rows */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* First Row of Cards */}
        <div className="col" data-aos="fade-up">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <h5 className="card-title fw-bold mb-3 text-primary">Expert Guidance</h5>
              <p className="card-text">
                Receive personalized advice from experienced counsellors who understand your unique needs. Our experts
                are certified and have years of experience in guiding students toward their ideal career paths.
              </p>
            </div>
          </div>
        </div>

        <div className="col" data-aos="fade-up" data-aos-delay="100">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <h5 className="card-title fw-bold mb-3 text-primary">Career Roadmaps</h5>
              <p className="card-text">
                Get clear, actionable career paths tailored to your strengths and interests. Our step-by-step roadmaps
                help you understand the necessary skills, qualifications, and experiences required to achieve your
                dream career.
              </p>
            </div>
          </div>
        </div>

        <div className="col" data-aos="fade-up" data-aos-delay="200">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <h5 className="card-title fw-bold mb-3 text-primary">24/7 Support</h5>
              <p className="card-text">
              Get 24/7 support for all your needs. Whether you require career guidance, assistance with applications, or just a boost of encouragement, our team is always available to help you stay on track.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="col" data-aos="fade-up" data-aos-delay="300">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <h5 className="card-title fw-bold mb-3 text-primary">Exclusive Resources</h5>
              <p className="card-text">
                Unlock a wealth of resources, including articles, webinars, and success stories to guide your journey.
                Stay updated with the latest industry trends and gain access to valuable materials that help you excel.
              </p>
            </div>
          </div>
        </div>

        <div className="col" data-aos="fade-up" data-aos-delay="400">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <h5 className="card-title fw-bold mb-3 text-primary">Networking Opportunities</h5>
              <p className="card-text">
                Connect with industry experts, mentors, and like-minded peers to expand your professional network. Our
                platform provides opportunities to attend exclusive events and join communities that foster growth.
              </p>
            </div>
          </div>
        </div>

        <div className="col" data-aos="fade-up" data-aos-delay="500">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <h5 className="card-title fw-bold mb-3 text-primary">Proven Success</h5>
              <p className="card-text">
                Join thousands of students who have achieved their career goals with EduVisors' expert guidance. Our
                track record speaks volumes, with countless success stories of students excelling in their chosen fields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
