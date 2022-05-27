/*jshint esversion: 6 */
import React, { Component } from 'react';
import {Typography, Row, Image} from "antd";
import Header from "../../header";
import Footer from "../../footer";
import Texts from "../../../utils/Text";
import img1 from './images/img1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import './project.css';
import bgIcon from "../../../utils/background.png";

const { Paragraph, Text } = Typography;

export default class Projects extends Component {
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
        return (
           <div className="full-height" style={{backgroundImage: `url(${bgIcon})`}}>
           <Header navColor={color}/>
           <div className="content mb-60">
               <Row justify="center">
                   <Text className={`${isMobile ? 'title-mobile': 'title'} white-text`}>{'Проекты'.toUpperCase()}</Text>
               </Row>
               <div className={`${isMobile ? 'mobile-content-container': 'project-content-container'}`}>
                   <Row justify={isMobile ? 'center' : ''}>
                       <div className={`${isMobile ? "width-x2 last" : ""} info`}>
                           <Paragraph className="text ta-center" strong>{Texts('projects', 'p1')}</Paragraph>
                           <Paragraph className="text ta-center">{Texts('projects', 't1')}</Paragraph>
                       </div>
                       <div className={`${isMobile ? "width-x2 last mt-24" : ""} info`}>
                           <Paragraph className="text ta-center" strong>{Texts('projects', 'p2')}</Paragraph>
                           <Paragraph className="text ta-center">{Texts('projects', 't2')}</Paragraph>
                       </div>
                       <div className={`${isMobile ? "width-x2 last mt-24" : ""} info`}>
                           <Paragraph className="text ta-center" strong>{Texts('projects', 'p3')}</Paragraph>
                           <Paragraph className="text ta-center">{Texts('projects', 't3')}</Paragraph>
                       </div>
                       <div className={`${isMobile ? "width-x2 mt-24" : ""} info last`}>
                           <Image preview={false} src={img1} width={isMobile ? window.screen.width<541 ? window.screen.width : 540 : 270} height={252}/>
                       </div>
                   </Row>
                   <Row style={{marginTop: 24}} justify={isMobile ? 'center' : ''}>
                       <div className={`${isMobile ? "width-x2 last" : ""} info`} style={{marginRight:isMobile ? 0 : 24}}>
                           <Image preview={false} src={image2} width={isMobile ? window.screen.width<541 ? window.screen.width : 540 : 564} height={252}/>
                       </div>
                       <div className={`${isMobile ? "width-x2 last mt-24" : ""} info`}>
                           <Paragraph className="text ta-center" strong>{Texts('projects', 'p4')}</Paragraph>
                           <Paragraph className="text ta-center">{Texts('projects', 't4')}</Paragraph>
                       </div>
                       <div className={`${isMobile ? "width-x2 mt-24" : ""} info last`}>
                           <Paragraph className="text ta-center" strong>{Texts('projects', 'p5')}</Paragraph>
                           <Paragraph className="text ta-center">{Texts('projects', 't5')}</Paragraph>
                       </div>
                   </Row>
                   <Row style={{marginTop: 24}} justify={isMobile ? 'center' : ''}>
                       <div className={`${isMobile ? "width-x2 last" : ""} info`}>
                           <Paragraph className="text ta-center" strong>{Texts('projects', 'p6')}</Paragraph>
                           <Paragraph className="text ta-center">{Texts('projects', 't6')}</Paragraph>
                       </div>
                       <div className={`${isMobile ? "width-x2 last mt-24" : ""} info`}>
                           <Paragraph className="text ta-center" strong>{Texts('projects', 'p7')}</Paragraph>
                           <Paragraph className="text ta-center">{Texts('projects', 't7')}</Paragraph>
                       </div>
                       <div className={`${isMobile ? "width-x2 last mt-24" : ""} info`}>
                           <Image preview={false} src={image3} width={isMobile ? window.screen.width<541 ? window.screen.width : 540 : 270} height={252}/>
                       </div>
                       <div className={`${isMobile ? "width-x2 mt-24" : ""} info last`}>
                           <Paragraph className="text ta-center" strong>{Texts('projects', 'p8')}</Paragraph>
                           <Paragraph className="text ta-center">{Texts('projects', 't8')}</Paragraph>
                       </div>
                   </Row>
                   <Row style={{marginTop: 24}} justify={isMobile ? 'center' : ''}>
                       <div className={`${isMobile ? "width-x2 last mt-24" : ""} info`}>
                           <Image preview={false} src={image4} width={isMobile ?  window.screen.width<541 ? window.screen.width : 540 : 270} height={252}/>
                       </div>
                       <div className={`${isMobile ? "width-x2 last mt-24" : ""} info`}>
                           <Paragraph className="text ta-center" strong>{Texts('projects', 'p9')}</Paragraph>
                           <Paragraph className="text ta-center">{Texts('projects', 't9')}</Paragraph>
                       </div>
                       <div className={`${isMobile ? "mt-24" : ""} info width-x2 last`}>
                           <Paragraph className="text ta-center" strong>{Texts('projects', 'p10')}</Paragraph>
                           <Paragraph className="text ta-center">{Texts('projects', 't10')}</Paragraph>
                       </div>
                   </Row>
               </div>
           </div>
           <Footer/>
       </div>
        );
  }
}

