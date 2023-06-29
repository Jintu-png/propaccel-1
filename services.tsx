import React from "react";
import Modal from "react-bootstrap/Modal";

const Services = () => {

  const [modalShow, setModalShow] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({
    Header: '',
    Text: ''
  });

  

  const DiscoverMoreModal = (props) => {

  return (
    <>
      <section id="services" className="services-area services-seven">
        <div className="section-title-four">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  
                  <h2 className="fw-bold">About the Course</h2>
                  <p>
                    lorem lepsim simply the test of printing industry standard dummy text ever since the 90 when linko
                  </p>
                  
                </div>
                <button
                      className="btn primary-btn btn-sm"
                      
                    >
                      {" "}
                      Read More{" "}
                    </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="single-head">
            <div className="row">
              <div className=" col-lg-3 col-md-4 col-12">
                <div className="single-service">
                  
                  <div className='font-xlg'>Interactive Features</div>
                  <p>
                  lorem lepsim simply the test of printing industry standard dummy text ever since the 90 when linko
                  </p>
                  
                </div>
              </div>
              <div className="col-lg-31 col-md-4 col-12">
                <div className="single-service">
                  
                  <div className='font-xlg'>Interactive Features</div>
                  <p>
                  lorem lepsim simply the test of printing industry standard dummy text ever since the 90 when linko
                  </p>
                  <div className="light-rounded-buttons">
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-31 col-md-4 col-12">
                <div className="single-service">
                  
                  <div className='font-xlg'>Interactive Features</div>
                  <p>lorem lepsim simply the test of printing industry standard dummy text ever since the 90 when linko</p>
                  <div className="light-rounded-buttons">
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="single-service">
                  
                  <div className='font-xlg'>Interactive Features</div>
                  <p>lorem lepsim simply the test of printing industry standard dummy text ever since the 90 when linko.</p>
                  <div className="light-rounded-buttons">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};
};

export default Services;
