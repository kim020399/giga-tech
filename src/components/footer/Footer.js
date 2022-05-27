/*jshint esversion: 6 */
import React, {Component} from 'react';
import './footer.css';
import { Row, Col } from 'antd';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';

export default class Footer extends Component {
    state = {
        activeTab: window.location.pathname,
        isMobile: window.screen.width < 769,
        isOpenMenu: false,
    };

    updateIsMobile  = () => {
        this.setState({
            isMobile: window.screen.width < 769
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateIsMobile);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateIsMobile);
    }
    render() {
        return (
            <div className="footer-form">
                {this.state.isMobile ?
                        <Row style={{ padding: 16}} justify={"space-between"}>
                            <Row>
                                <Col>
                                    <div style={{width: 165}}>
                                        <PhoneOutlined style={{marginRight: 10}}/>
                                        +7 7172 46 97 01
                                    </div>
                                </Col>
                                <Col>
                                    <div style={{width: 156}}>
                                        <MailOutlined style={{marginRight: 10}}/>
                                        info@giga.tech
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{marginTop: window.screen.width < 547 ? 10 : 0}}>
                                <Col>
                                    <div>
                                        г. Нур-Султан, район Есиль, Проспект Қабанбай Батыр 15А
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{marginTop: window.screen.width < 547 ? 10 : 0}}>
                                <div style={{ color: '#A3B1BF', width: 194}}>
                                    © 2021 ТОО «Giga Tech»
                                </div>
                            </Row>
                        </Row>
                    :
                    <Row justify="start" className="footer-row montserrat fs-16">
                        <Col span={4}>
                            <div style={{width: 165}}>
                                <PhoneOutlined style={{marginRight: 10}}/>
                                +7 7172 46 97 01
                            </div>
                        </Col>
                        <Col span={4}>
                            <div style={{width: 156}}>
                                <MailOutlined style={{marginRight: 10}}/>
                                info@giga.tech
                            </div>
                        </Col>
                        <Col span={10}>
                            <div>
                                г. Нур-Султан, район Есиль, Проспект Қабанбай Батыр 15А
                            </div>
                        </Col>
                        <Col span={6} style={{textAlign: 'right'}}>
                            <div style={{float: 'right', color: '#A3B1BF', width: 194}}>
                                © 2021 ТОО «Giga Tech»
                            </div>
                        </Col>
                    </Row>
                }
            </div>
        );
    }
};
