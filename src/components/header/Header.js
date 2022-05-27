/*jshint esversion: 6 */
import React, { Component } from 'react';
import {Image, Row, Col, Typography, Menu, Button} from 'antd';
import './header.css';
import logo from './logo-giga.svg';
import whiteLogo from './white-logo-giga.svg';
import { NavLink } from 'react-router-dom';
import {MenuUnfoldOutlined, MenuFoldOutlined, ProfileTwoTone, MenuOutlined, ProfileFilled} from "@ant-design/icons";

const { Text } = Typography;

export default class Header extends Component {
  state = {
      activeTab: window.location.pathname,
      isMobile: window.screen.width < 769,
    //  isLongMobile: window.screen.width > 375 && window.screen.width < 460,
      isOpenMenu: false,
  };

    updateIsMobile  = () => {
        this.setState({
            isMobile: window.screen.width < 769,
     //       isLongMobile: window.screen.width > 375 && window.screen.width < 460,
        });
    }

    toggleMenu  = () => {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateIsMobile);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateIsMobile);
    }

  render() {
      const {navColor} = this.props;
      const {activeTab, isMobile, isOpenMenu, isLongMobile} = this.state;
      const toPage = (route) => {
          window.location.href=`/${route}`;
      }
    return (
        <div className={`header-form montserrat fs-16 ${navColor === 'white' ? '' : 'drop-shadow'}`}>
            {isMobile ?
                <Row style={{margin: '0px 10px', padding: '10px 0px'}}>
                    <Col span={12}>
                        <NavLink to={'/'}><Image preview={false} src={navColor === 'white' ? whiteLogo : logo}/></NavLink>
                    </Col>
                    <Col span={12} style={{textAlign: 'right', marginTop: 10, paddingRight: 5}}>
                        <MenuOutlined style={{fontSize: '32px', color: navColor}} onClick={() => this.toggleMenu()}/>
                        { isOpenMenu && (
                            <Menu defaultSelectedKeys={[window.location.pathname]}>
                                <Menu.Item key="/about"><NavLink to={'/about'}> О КОМПАНИИ </NavLink></Menu.Item>
                                <Menu.Item key="/solutions"><NavLink to={'/solutions'}>РЕШЕНИЯ</NavLink></Menu.Item>
                                <Menu.Item key="/projects"><NavLink to={'/projects'}>ПРОЕКТЫ</NavLink></Menu.Item>
                                <Menu.Item key="/partners"><NavLink to={'/partners'}>ПАРТНЕРЫ</NavLink></Menu.Item>
                                <Menu.Item key="/support">
                                    <a href={' https://gigatech.helpdeskeddy.com'} target={'_blank'}>
                                        ПОДДЕРЖКА
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="/contacts"><NavLink to={'/contacts'}>КОНТАКТЫ</NavLink></Menu.Item>
                            </Menu>
                        )}
                    </Col>
                </Row>
                :
                <Row justify="start" className="header-row">
                    <Col span={4}>
                        <NavLink to={'/'}><Image preview={false}
                                                 src={navColor === 'white' ? whiteLogo : logo}/></NavLink>
                    </Col>
                    <Col span={20} style={{textAlign: 'right', color: '#000000', margin: 'auto'}}>
                        <Row justify="end">
                            <div className="navTab" style={{width: 124}}>
                                <NavLink to={'/about'}>
                                    <Text style={{color: this.props.navColor}} strong={activeTab === '/about'}>
                                        О КОМПАНИИ
                                    </Text>
                                </NavLink>
                            </div>
                            <div className="navTab" style={{width: 89}}>
                                <NavLink to={'/solutions'}>
                                    <Text style={{color: this.props.navColor}} strong={activeTab === '/solutions'}>
                                        РЕШЕНИЯ
                                    </Text>
                                </NavLink>
                            </div>
                            <div className="navTab" style={{width: 86}}>
                                <NavLink to={'/projects'}>
                                    <Text style={{color: this.props.navColor}} strong={activeTab === '/projects'}> ПРОЕКТЫ</Text>
                                </NavLink>
                            </div>
                            <div className="navTab" style={{width: 97}}>
                                <NavLink to={'/partners'}>
                                    <Text style={{color: this.props.navColor}} strong={activeTab === '/partners'}>
                                        ПАРТНЕРЫ
                                    </Text>
                                </NavLink>
                                </div>
                            <div className="navTab" style={{width: 120}}>
                                <a href={' https://gigatech.helpdeskeddy.com'} target={'_blank'}>
                                    <Text style={{color: this.props.navColor}} strong={activeTab === '/contacts'}>
                                        ПОДДЕРЖКА
                                    </Text>
                                </a>
                            </div>
                            <div className="navTab" style={{width: 96}}>
                                <NavLink to={'/contacts'}>
                                    <Text style={{color: this.props.navColor}} strong={activeTab === '/contacts'}>
                                        КОНТАКТЫ
                                    </Text>
                                </NavLink>
                            </div>
                        </Row>
                    </Col>
                </Row>
            }
        </div>
    );
  }
}
