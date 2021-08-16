import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "react-bootstrap/navbar";
import Container from "react-bootstrap/container";
import Carousel from "react-bootstrap/Carousel";
import "./App.css";
import image from "./Image1.png";
import image2 from "./Image2.png";
import image3 from "./Image3.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'



function App() {
  const [data, setData] = useState(null);

  
  useEffect(() => {
    async function dataFetch() {
      const res = await axios.get("/post");
      console.log(res);
      setData(res.data.message);
    }
    dataFetch()
  }, []);

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
    axios.post("/post",this.state.username)
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name, and submit:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
    );
  }
}

  

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="https://thinking-feet.com/">
            <img
              src="https://thinking-feet.com/wp-content/uploads/2018/06/logo.png"
              alt="Thinking Feet"
            />
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">Home</a>
            </Navbar.Text>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">Aug Open House</a>
            </Navbar.Text>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">Programs</a>
            </Navbar.Text>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">About Us</a>
            </Navbar.Text>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">Enrollments</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="//thinking-feet.com/wp-content/uploads/2020/08/Subjects1.png"
            alt="Second slide"
            id="Image1"
          />

          <Carousel.Caption className="caption">
            <a
              className="n2-style-4be88eda415d12fb569da3df51ef7098-heading  n2-ow "
              id="button"
              href="https://thinking-feet.com/tfregister/"
              type="button"
            >
              <div>
                <div>Register</div>
              </div>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" id="Image2" src={image} alt="Second slide" />

          <Carousel.Caption className="caption">
            <a
              className="n2-style-4be88eda415d12fb569da3df51ef7098-heading  n2-ow "
              id="button"
              href="https://thinking-feet.com/tfregister/"
              type="button"
            >
              <div>
                <div>Register</div>
              </div>
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            id="Image3"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption className="caption">
            <a
              className="n2-style-4be88eda415d12fb569da3df51ef7098-heading  n2-ow "
              id="button"
              href="https://thinking-feet.com/tfregister/"
              type="button"
            >
              <div>
                <div>Register</div>
              </div>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <Container>
          <Row>
            <Col id="col1">
              <h1 id="title">Welcome To Thinking Feet</h1>
            </Col>
          </Row>
          <img id="image3" alt="Arrow" src={image3}></img>
          <Row>
            <Col>
              <img src="http://thinking-feet.com/wp-content/uploads/2018/06/children.png"></img>
            </Col>
            <Col>
              <p id="headingBold">From a Parent:</p>
              <br></br>
              <p>
                "Thinking Feet creates an atmosphere of learning that is not
                achievable in regular school. A classroom of kids excited to
                learn fosters an appreciation for learning. The classes are
                provided at the ability of the student, instead of at the age of
                the student. My son is always excited to go to class and
                bubbling with all the cool stuff he did when I pick him up.
                Thinking Feet as been invaluable to our family."
              </p>
              <br></br>
              <br></br>
              <p>
                Your child is unique in their capabilities and potential. Our
                goal is to develop them into future leaders and creative problem
                solvers of tomorrow.
              </p>
              <br></br>
              <br></br>
              <p>
                We are the trusted enrichment partner for many schools (public
                and private) across Charlotte and Union County and more than 400
                families across Charlotte trust us with their child's
                enrichment.
              </p>
              <a
                className="n2-style-4be88eda415d12fb569da3df51ef7098-heading  n2-ow "
                id="button"
                href="https://thinking-feet.com/tfregister/"
                type="button"
              >
                <div>
                  <div>Register</div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="cardDiv">
          <h2 id="cardHeader">Our Programs</h2>
          <Container>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card>
                  
                  <Card.Body>
                    <img src="https://via.placeholder.com/350x150" id="image4"></img>
                    <Card.Title id="cardTitle">Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          </Container>
      </div>
      <div>
        <Container>
        
      </Container>
      </div>
    </>
  );
}

export default App;
