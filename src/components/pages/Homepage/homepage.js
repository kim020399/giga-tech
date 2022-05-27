/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from "../../header";
import Footer from "../../footer";
import {Image, Row, Typography, Col} from "antd";
import './homepage.css';
import Texts from "../../../utils/Text";
import ServicesContent from './servicesContent';
import icon1 from './icons/advantages/icon7.svg';
import icon2 from './icons/advantages/icon8.svg';
import icon3 from './icons/advantages/icon9.svg';
import PartnersContent from "./partnersContent";
import bgIcon from '../../../utils/background.png';


const { Text, Paragraph } = Typography;

export default class Homepage extends Component {
  state = {
      color: 'white',
      isMobile: window.screen.width < 769,
  };
  listenScrollEvent = e => {
      if (window.scrollY > 550) {
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
    return (
       <div className="full-height" style={{backgroundImage: `url(${bgIcon})`}}>
           <Header navColor={color}/>
                <div className="content">
                    <Row justify="center" style={{margin: '60px 0px'}}>
                        <Text className={`${isMobile ? 'title-mobile white-text' : 'title heading'}`}>{Texts('homepage', 'title').toUpperCase()}</Text>
                    </Row>
                    <Row className={`${isMobile ? 'homepage-mobile-content' : 'homepage-content'}`}>
                        <Row className="w100" justify="center" style={{ marginBottom: 20}}>
                            <Text className={`${isMobile ? 'title-mobile' : 'title'}`}>{Texts('homepage', 'services').toUpperCase()}</Text>
                        </Row>
                        <ServicesContent isMobile={isMobile}/>
                    </Row>
                    <Row className={`${isMobile ? "advantage-mobile" : "advantage w100"}`} justify="center">
                        <Row className="ta-center">
                            <Text className={`${isMobile ? 'title-mobile' : 'title'}`}>{Texts('homepage', 'advantage').toUpperCase()}</Text>
                        </Row>
                                <Row className="mt-60">
                                    <Col span={isMobile? 24 : 8} className="ta-center w-336">
                                        <Image preview={false} src={icon1} width={96} height={96}/>
                                        <Paragraph className="open-sans fs-16 mt-20" strong={true} >{Texts('homepage','adv1').toUpperCase()}</Paragraph>
                                    </Col>
                                    <Col span={isMobile? 24 : 8} className="ta-center w-336">
                                        <Image preview={false} src={icon2} width={96} height={96}/>
                                        <Paragraph className="open-sans fs-16 mt-20" strong={true} >{Texts('homepage','adv2').toUpperCase()}</Paragraph>
                                    </Col>
                                    <Col span={isMobile? 24 : 8} className="ta-center w-336" >
                                        <Image preview={false} src={icon3} width={96} height={96}/>
                                        <Paragraph className="open-sans fs-16 mt-20" strong={true} >{Texts('homepage','adv3').toUpperCase()}</Paragraph>
                                    </Col>
                                </Row>
                            </Row>
                </div>
               <Row className={`${isMobile ? "partners-mobile" : "partners w100"}`} justify="center">
                   <Row className="ta-center mt-60">
                       <Text className={`${isMobile ? 'title-mobile' : 'title'}`}>{Texts('homepage', 'partners').toUpperCase()}
                       </Text>
                   </Row>
                   <PartnersContent isMobile={isMobile}/>
               </Row>
           <Footer/>
       </div>
      );
  }
}

