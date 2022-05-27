/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from "../../header";
import Footer from "../../footer";
import {Col, Image, Row, Typography} from "antd";
import Texts from "../../../utils/Text";
import icon1 from './images/1.png';
import icon2 from './images/2.png';
import icon3 from './images/3.png';
import icon4 from './images/4.png';
import icon5 from './images/5.png';
import icon6 from './images/6.png';
import icon7 from './images/7.png';
import './solutions.css';
import bgIcon from "../../../utils/background.png";

const { Paragraph, Text } = Typography;

export default class Solutions extends Component {
    state = {
        icons: [ icon1, icon2, icon3, icon4, icon5, icon6, icon7],
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
        const content = this.state.icons.map((item, index) => (
            <Row className="open-sans fs-16" style={{margin: '50px 0px'}} key={index}>
                <Col span={7}><Image preview={false} src={item} width={270} height={242}/></Col>
                <Col span={17} style={{margin: 'auto', textAlign: 'left !important'}}>
                    <Paragraph className="solutions-cont" strong>{Texts('solutions', `h${index + 1}`).toUpperCase()}</Paragraph>
                    <Paragraph className="solutions-cont">{Texts('solutions', `p${index + 1}`)}</Paragraph>
                </Col>
            </Row>
        ))
        const mobileContent = this.state.icons.map((item, index) => (
            <Row className="open-sans fs-16" style={{margin: '50px 20px'}} key={index}>
                <Row className="mb-20"><Image preview={false} src={item} width={270} height={242}/></Row>
                <Row style={{margin: 'auto', textAlign: 'left !important'}}>
                    <Paragraph className="solutions-cont" strong>{Texts('solutions', `h${index + 1}`).toUpperCase()}</Paragraph>
                    <Paragraph className="solutions-cont">{Texts('solutions', `p${index + 1}`)}</Paragraph>
                </Row>
            </Row>
        ))
        return (
           <div className="full-height" style={{backgroundImage: `url(${bgIcon})`}}>
               <Header navColor={color}/>
                    <div className="content">
                        <Row justify="center">
                            <Text className={`${isMobile ? 'title-mobile': 'title'} white-text`}>{'Решения'.toUpperCase()}</Text>
                        </Row>
                        <div className={`${isMobile ? "mobile-content-container" : "content-container"}`} style={{margin: '0px 0px 60px'}}>
                            {isMobile? mobileContent : content}
                        </div>
                    </div>
               <Footer/>
           </div>
          );
      }
}

