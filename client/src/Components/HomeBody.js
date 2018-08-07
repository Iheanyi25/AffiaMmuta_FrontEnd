import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import './HomeBody.css';

 export default class HomeBody extends Component {
  render() {
    return (
      <div className="home-books">
          <Row className="head" >
          <Col lg={6} xs={6} sm={6} className="span"></Col>
          <Col lg={6} xs={6} sm={6} className= "span-title">MOST POPULAR</Col>
          </Row>
          <Grid className= "grid">
            <Row className= "show-grid text-center">
              <Col xs={12} sm={4} className= "wrapper" >
              <p> The grid may just be working</p>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
              <p> The grid may just be working</p>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
              <p> The grid may just be working</p>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
              <p> The grid may just be working</p>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
              <p> The grid may just be working</p>
              </Col>
            </Row>
          </Grid>
          <Row className="head head-below" >
              <Col lg={6} xs={6} sm={4} className="span"></Col>
              <Col lg={6} xs={6} sm={4} className= "span-title">NEW RELEASES</Col>
            </Row>
          <Grid className="grid">  
            <Row className= "show-grid text-center">
              <Col xs={12} sm={4} className= "wrapper" >
              <p> The grid may just be working</p>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
              <p> The grid may just be working</p>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
              <p> The grid may just be working</p>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
              <p> The grid may just be working</p>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
              <p> The grid may just be working</p>
              </Col>
            </Row>
            </Grid>
            <Row className="head head-below" >
              <Col lg={6} xs={6} sm={4} className="span"></Col>
              <Col lg={6} xs={6} sm={4} className= "span-title">COMICS</Col>
            </Row>
            <Grid className= "grid">
              <Row className= "show-grid text-center">
                <Col xs={12} sm={4} className= "wrapper" >
                <p> The grid may just be working</p>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                <p> The grid may just be working</p>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                <p> The grid may just be working</p>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                <p> The grid may just be working</p>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                <p> The grid may just be working</p>
                
                </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}