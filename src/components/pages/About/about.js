/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from "../../header";
import Footer from "../../footer";
import { Row, Col, Typography, Image} from "antd";
import Texts from "../../../utils/Text";
import about from "./images/about.png";
import dipIcon from "./images/dip.svg";
import officesIcon from "./images/offices.svg";
import partnersIcon from "./images/partners.svg";
import rocketIcon from "./images/rocket.svg";
import starIcon from "./images/star.svg";
import './about.css';
import bgIcon from "../../../utils/background.png";

const { Text, Paragraph } = Typography;


export default class About extends Component {
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
        const {isMobile, color} = this.state;
        return (
           <div className="full-height" style={{backgroundImage: `url(${bgIcon})`}}>
               <Header navColor={color}/>
               <div className="content">
                   <Row justify="center">
                       <Text className={`${isMobile ? 'title-mobile': 'title'} white-text`}>{'О Компании'.toUpperCase()}</Text>
                   </Row>
                   <Row className="cont" justify="space-between">
                       <Text className="montserrat" style={{marginBottom: 60, fontSize: isMobile ? '18px' : '24px'}}>{Texts('about', 'about')}</Text>
                       <Col span={24} style={{textAlign: 'center'}}><Image preview={false} src={about} height={isMobile? '': 400} width={isMobile? '':700}/></Col>
                   </Row>
               </div>
                   {isMobile ?
                       <Row justify="center" style={{backgroundColor: '#F7F7F7', padding: '0px 16px 50px'}}>
                           <Row justify="center">
                               <Image preview={false} src={dipIcon} width={96} height={96}/>
                               <Paragraph className="mt-20 mb-20" strong={true} >{Texts('about','exp')}</Paragraph>
                           </Row>
                           <Row justify="center">
                               <Image preview={false} src={officesIcon} width={96} height={96}/>
                               <Paragraph className="mt-20 mb-20" strong={true} >{Texts('about','office').toUpperCase()}</Paragraph>
                           </Row>
                           <Row justify="center">
                               <Image preview={false} src={starIcon} width={96} height={96}/>
                               <Paragraph className="mt-20 mb-20" strong={true} >{Texts('about','qual').toUpperCase()}</Paragraph>
                           </Row>
                           <Row justify="center">
                               <Image preview={false} src={rocketIcon} width={96} height={96}/>
                               <Paragraph className="mt-20 mb-20" strong={true} >{Texts('about','projects').toUpperCase()}</Paragraph>
                           </Row>
                           <Row justify="center">
                               <Image preview={false} src={partnersIcon} width={96} height={96}/>
                               <Paragraph className="mt-20 mb-20" strong={true} >{Texts('about','partners').toUpperCase()}</Paragraph>
                           </Row>
                       </Row>
                       :
                       <Row justify="center" style={{backgroundColor: '#F7F7F7', paddingRight: 175, paddingLeft: 175}}>
                           <Row className="ta-center mt-60 open-sans fs-16" >
                               <Col span={8}>
                                   <Image preview={false} src={dipIcon} width={96} height={96}/>
                                   <Paragraph className="mt-20" strong={true} >{Texts('about','exp')}</Paragraph>
                               </Col>
                               <Col span={8}>
                                   <Image preview={false} src={officesIcon} width={96} height={96}/>
                                   <Paragraph className="mt-20" strong={true} >{Texts('about','office').toUpperCase()}</Paragraph>
                               </Col>
                               <Col span={8}>
                                   <Image preview={false} src={starIcon} width={96} height={96}/>
                                   <Paragraph className="mt-20" strong={true} >{Texts('about','qual').toUpperCase()}</Paragraph>
                               </Col>
                           </Row>
                           <Row className="ta-center mb-60 mt-30 open-sans fs-16" justify="center">
                               <Col span={12}>
                                   <Image preview={false} src={rocketIcon} width={96} height={96}/>
                                   <Paragraph className="mt-20" strong={true} >{Texts('about','projects').toUpperCase()}</Paragraph>
                               </Col>
                               <Col span={12}>
                                   <Image preview={false} src={partnersIcon} width={96} height={96}/>
                                   <Paragraph className="mt-20" strong={true} >{Texts('about','partners').toUpperCase()}</Paragraph>
                               </Col>
                           </Row>
                       </Row>
                   }
               <Footer/>
           </div>
          );
      }
}

