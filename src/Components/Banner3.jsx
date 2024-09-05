import React from 'react';

const Banner3 = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="display-4" style={{
          background: 'linear-gradient(to right, #00c6ff, #0072ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Frequently Asked Questions
        </h2>
        <p className="lead" style={{ color: '#6c757d' }}>
          Here are some of the common questions we receive. If you need further assistance, feel free to contact us.
        </p>
      </div>
      
      <div className="accordion" id="faqAccordion">
        {/* Question 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ borderRadius: '0.25rem', backgroundColor: '#e9ecef', color: '#495057' }}
            >
              Can EdVisors provide career counselling for primary level students?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body" style={{ fontSize: '1.1rem', color: '#212529' }}>
              EdVisors offers a comprehensive platform that allows users to select mentors tailored to their specific academic needs, ranging from high school through postgraduate levels. Whether you’re seeking guidance for college applications, career planning, or advanced research projects, EdVisors connects you with experienced mentors who can provide personalized support and insights.
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ borderRadius: '0.25rem', backgroundColor: '#e9ecef', color: '#495057' }}
            >
              Is there a cost associated with career counseling services on EdVisors?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body" style={{ fontSize: '1.1rem', color: '#212529' }}>
              While career counseling services on EdVisors are available at various price points, it's important to note that you don't necessarily have to pay for these services. EdVisors offers a range of free resources and introductory consultations to help you get started. This flexibility ensures that you can access valuable career advice and mentorship regardless of your budget.
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ borderRadius: '0.25rem', backgroundColor: '#e9ecef', color: '#495057' }}
            >
              Can I access EduVisors from my mobile device?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body" style={{ fontSize: '1.1rem', color: '#212529' }}>
              Yes, EduVisors is mobile-friendly and can be accessed from various devices including smartphones and tablets. Simply visit our site through your mobile browser.
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={{ borderRadius: '0.25rem', backgroundColor: '#e9ecef', color: '#495057' }}
            >
              What should I do if a feature is not working properly?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body" style={{ fontSize: '1.1rem', color: '#212529' }}>
              If a feature isn’t working as expected, try refreshing the page or clearing your browser’s cache. If the issue persists, please report it through our Feedback form.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
