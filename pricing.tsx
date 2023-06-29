import React from 'react';
import Carousel from "../carousel/carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom"

const Pricing = () => {
  const navigate = useNavigate();

  const WarehouseDetails = () => {
    navigate('/WarehouseDetails');
  }

  const addToCart = () => {
    navigate('/cart');
  }



    return (
      <>
      <section id="pricing" className="pricing-area pricing-fifteen">
        <div className="section-title-three">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h2>Choose your plan</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Custom Carousel*/}
        <div
          style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 64,
          }}
        >
          <Carousel show={3} slide={true}>
          <Card border="warning" style={{ width: "18rem", marginRight: "25px", boxShadow: '1px 3px 9px #F4AAB9'}}>
              
              <Card.Body className="text-center">
                <Card.Title>Basic Plan</Card.Title>
                
                <Card.Text>
                  lorem lipsum dummy text anything
                </Card.Text>
                <h6 className="amount">
                   $ 54 <span className="duration">/month</span>
                </h6><br/>
                <li>Free acress to video class</li>
                <li>Free acress to video class</li>
                <li>Free acress to video class</li>
                <br/>
                <button className="btn primary-btn btn-sm" onClick={WarehouseDetails} >Start Free Trial</button>
                
              </Card.Body>
            </Card>
            <Card border="warning" style={{ width: "18rem", marginRight: "25px", boxShadow: '1px 3px 9px #F4AAB9'}}>
              
              <Card.Body className="text-center">
                <Card.Title>Basic Plan</Card.Title>
                
                <Card.Text>
                  lorem lipsum dummy text anything
                </Card.Text>
                <h6 className="amount">
                   $ 54 <span className="duration">/month</span>
                </h6><br/>
                <li>Free acress to video class</li>
                <li>Free acress to video class</li>
                <li>Free acress to video class</li>
                <br/>
                <button className="btn primary-btn btn-sm" onClick={WarehouseDetails} >Start Free Trial</button>
                
              </Card.Body>
            </Card>
            <Card border="warning" style={{ width: "18rem", marginRight: "25px", boxShadow: '1px 3px 9px #F4AAB9'}}>
              <Card.Body className="text-center">
                <Card.Title>Basic Plan</Card.Title>
                
                <Card.Text>
                  lorem lipsum dummy text anything
                </Card.Text>
                <h6 className="amount">
                   $ 54 <span className="duration">/month</span>
                </h6><br/>
                <li>Free acress to video class</li>
                <li>Free acress to video class</li>
                <li>Free acress to video class</li>
                <br/>
                <button className="btn primary-btn btn-sm" onClick={WarehouseDetails} >Start Free Trial</button>
                
              </Card.Body>
            </Card>
            
            
            

            {/* <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300/09f/fff.png"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div> */}
          </Carousel>
        </div>
      </section>
      </>
    );
};
export default Pricing;