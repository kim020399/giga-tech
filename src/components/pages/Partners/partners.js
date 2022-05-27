/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from "../../header";
import Footer from "../../footer";
import {Row, Col, Typography, Image} from "antd";
import { pdfFiles, certificates} from "./content";
import './partners.css';
import bgIcon from "../../../utils/background.png";


const { Text } = Typography;

export default class Partners extends Component {
    state = {
        color: 'white',
        isMobile: window.screen.width < 769,
    };
    listenScrollEvent = e => {
        if (window.scrollY > 230) {
            this.setState({color: 'black'})
        } else {
            this.setState({color: 'white'})
        }
    }
    updateIsMobile  = () => {
        this.setState({
            isMobile: window.screen.width < 769
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
        window.addEventListener('resize', this.updateIsMobile);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateIsMobile);
    }
  render() {
      const {color, isMobile} = this.state;
    const cert = pdfFiles.map((item, index) => (
        <Col span={8} key={index} style={{marginBottom: 16}}>
            <a href = {item} target = "_blank">
                <Image src={certificates[index]} width={346} height={245} preview={false}/>
            </a>
        </Col>
    ));
      const mobileCert = pdfFiles.map((item, index) => (
          <Row key={index} justify="space-between" style={{marginRight: window.screen.width > 691 && index%2===0 ? 10: 0}}>
              <a href = {item} target = "_blank">
                  <Image src={certificates[index]} width={346} height={245} preview={false}/>
              </a>
          </Row>
      ));
    return (
       <div className="full-height" style={{backgroundImage: `url(${bgIcon})`}}>
           <Header navColor={color}/>
           <div className="content open-sans fs-16">
               <Row justify="center">
                   <Text className={`${isMobile ? 'title-mobile': 'title'} white-text`}>{'Сертификаты'.toUpperCase()}</Text>
               </Row>
               <Row justify="center" className={`${isMobile ? "mobile-content-container" : "content-container"}`} style={{marginBottom: 36}}>{isMobile ? mobileCert : cert}</Row>
           </div>
           <Footer/>
       </div>
      );
  }
}

