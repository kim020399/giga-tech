/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from "../../header";
import Footer from "../../footer";
import { Typography, Row, Col } from "antd";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {MailOutlined, PhoneOutlined, EnvironmentOutlined} from "@ant-design/icons";
import './contact.css';
import bgIcon from "../../../utils/background.png";
import icon1 from "../Solutions/images/1.png";
import icon2 from "../Solutions/images/2.png";
import icon3 from "../Solutions/images/3.png";
import icon4 from "../Solutions/images/4.png";
import icon5 from "../Solutions/images/5.png";
import icon6 from "../Solutions/images/6.png";
import icon7 from "../Solutions/images/7.png";

const { Text } = Typography;

export default class Contacts extends Component {
    state = {
        icons: [ icon1, icon2, icon3, icon4, icon5, icon6, icon7],
        color: 'white',
        isMobile: window.screen.width < 768,
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
            isMobile: window.screen.width < 768
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
      const mapData = {
          center: [51.136063, 71.414206],
          zoom: 17,
      };
      const {color, isMobile} = this.state;
    return (
       <div className="full-height-contacts" style={{backgroundImage: `url(${bgIcon})`}}>
           <Header navColor={color}/>
           <div className="content">
               <Row justify="center">
                   <Text className={`${isMobile ? 'title-mobile': 'title'} white-text`}>{'Контакты'.toUpperCase()}</Text>
               </Row>
               <div style={{width: isMobile ? '363' : '100%', height: '450px'}}>
                   <YMaps>
                       <Map
                           defaultState={mapData}
                           width="100%"
                           height="100%"
                       >
                           <Placemark
                               geometry={[51.136063, 71.414206]}
                               options={{
                                   iconColor: 'red',
                               }}/>
                       </Map>
                   </YMaps>
               </div>
               <Row className={`${isMobile ? 'address-mobile': 'address' } montserrat fs-16`} justify="center">
                   <Col span={isMobile ? 24 : 12} className={`${isMobile ? 'ta-center': ''}`}>
                       <EnvironmentOutlined className="icons"/>
                       <Text className="white-text">город Нур-Султан, район Есиль,
                           Проспект Қабанбай Батыр 15А</Text>
                   </Col>
                   <Col span={isMobile ? 24 : 6} className={`${isMobile ? 'mt-20': ''} ta-center`}>
                       <PhoneOutlined className="icons"/>
                       <Text className="white-text">+7 7172 46 97 01</Text>
                   </Col>
                   <Col span={isMobile ? 24 : 6} className={`${isMobile ? 'mt-20': ''} ta-center`}>
                       <MailOutlined className="icons"/>
                       <Text className="white-text">info@giga.tech</Text>
                   </Col>
               </Row >
           </div>
           <Footer/>
       </div>
      );
  }
}

