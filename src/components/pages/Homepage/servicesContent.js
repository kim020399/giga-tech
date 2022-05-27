import React, { Component } from 'react';
import icon1 from './icons/services/icon1.svg';
import icon2 from './icons/services/icon2.svg';
import icon3 from './icons/services/icon3.svg';
import icon4 from './icons/services/icon4.svg';
import icon5 from './icons/services/icon5.svg';
import icon6 from './icons/services/icon6.svg';
import {Row, Col, Image} from 'antd';
import Texts from "../../../utils/Text";
import './homepage.css';

export default class ServicesContent extends Component {
    state = {
        icons : [icon1, icon2, icon3, icon4, icon5, icon6],
        listItem: [
            [ 'Сетевое оборудование', 'IP –телефония', 'Видеоконференции','Программно-аппаратные комплексы контроля качества работы сети'],
            [ 'Портальные решения', 'Проектирование и внедрение интеграционных информационных систем', 'Анализ и оптимизация бизнес-процессов', 'Управление жизненным циклом информации'],
            [ 'Системы информационной безопасности', 'Видеонаблюдение', 'Пожарная и охранная сигнализация', 'Система контроля доступа'],
            [ 'Системы отказоустойчивого электропитания любой сложности', 'Системы прецизионного кондиционирования и вентиляции'],
            [ 'Широкая продуктовая линейка позволяет компании предлагать решения для любого Заказчика с оптимальным соотношением цена/качество'],
            [ ''],
        ],
    };
    render() {
        const {isMobile} = this.props;
        const {listItem} = this.state;
        const servicesContent = (
            isMobile ?
                <Row>
                    <Row>
                        <Col span={4} className="ta-center">
                            <Image preview={false} src={icon1} width="48" height="48"/>
                        </Col>
                        <Col span={20} className="pl-16 open-sans fs-16">
                            <b>{Texts('homepage', 'h1').toUpperCase()}</b>
                            <ul>{listItem[0].map((list, index2) => (
                                <li key={index2}>{list}</li>
                            ))}
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} className="ta-center">
                            <Image preview={false} src={icon2} width="48" height="48"/>
                        </Col>
                        <Col span={20} className="pl-16 open-sans fs-16">
                            <b>{Texts('homepage', 'h2').toUpperCase()}</b>
                            <ul>{listItem[1].map((list, index2) => (
                                <li key={index2}>{list}</li>
                            ))}
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} className="ta-center">
                            <Image preview={false} src={icon3} width="48" height="48"/>
                        </Col>
                        <Col span={20} className="pl-16 open-sans fs-16">
                            <b>{Texts('homepage', 'h3').toUpperCase()}</b>
                            <ul>{listItem[2].map((list, index2) => (
                                <li key={index2}>{list}</li>
                            ))}
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} className="ta-center">
                            <Image preview={false} src={icon4} width="48" height="48"/>
                        </Col>
                        <Col span={20} className="pl-16 open-sans fs-16">
                            <b>{Texts('homepage', 'h4').toUpperCase()}</b>
                            <ul>{listItem[3].map((list, index2) => (
                                <li key={index2}>{list}</li>
                            ))}
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} className="ta-center">
                            <Image preview={false} src={icon5} width="48" height="48"/>
                        </Col>
                        <Col span={20} className="pl-16 open-sans fs-16">
                            <b>{Texts('homepage', 'h5').toUpperCase()}</b>
                            <ul>{listItem[4].map((list, index2) => (
                                <li key={index2}>{list}</li>
                            ))}
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} className="ta-center">
                            <Image preview={false} src={icon6} width="48" height="48"/>
                        </Col>
                        <Col span={20} className="pl-16 open-sans fs-16">
                            <b>{Texts('homepage', 'h6').toUpperCase()}</b>
                            {/*<ul>{listItem[5].map((list, index2) => (*/}
                            {/*    <li key={index2}>{list}</li>*/}
                            {/*))}*/}
                            {/*</ul>*/}
                        </Col>
                    </Row>
                </Row>
                :
                <>
                    <Row className="w100 mt-40">
                            <Col span={2} className="ta-center">
                                <Image preview={false} src={icon1} width="48" height="48"/>
                            </Col>
                            <Col span={10} className="pl-16 open-sans fs-16">
                                <b>{Texts('homepage', 'h1').toUpperCase()}</b>
                                <ul>{listItem[0].map((list, index2) => (
                                    <li key={index2}>{list}</li>
                                ))}
                                </ul>
                            </Col>
                            <Col span={2} className="ta-center">
                                <Image preview={false} src={icon2} width="48" height="48"/>
                            </Col>
                            <Col span={10} className="pl-16 open-sans fs-16">
                                <b>{Texts('homepage', 'h2').toUpperCase()}</b>
                                <ul>{listItem[1].map((list, index2) => (
                                    <li key={index2}>{list}</li>
                                ))}
                                </ul>
                            </Col>
                        </Row>
                    <Row className="w100 mt-40">
                            <Col span={2} className="ta-center">
                                <Image preview={false} src={icon3} width="48" height="48"/>
                            </Col>
                            <Col span={10} className="pl-16 open-sans fs-16">
                                <b>{Texts('homepage', 'h3').toUpperCase()}</b>
                                <ul>{listItem[2].map((list, index2) => (
                                    <li key={index2}>{list}</li>
                                ))}
                                </ul>
                            </Col>
                            <Col span={2} className="ta-center">
                                <Image preview={false} src={icon4} width="48" height="48"/>
                            </Col>
                            <Col span={10} className="pl-16 open-sans fs-16">
                                <b>{Texts('homepage', 'h4').toUpperCase()}</b>
                                <ul>{listItem[3].map((list, index2) => (
                                    <li key={index2}>{list}</li>
                                ))}
                                </ul>
                            </Col>
                        </Row>
                    <Row className="w100 mt-40">
                            <Col span={2} className="ta-center">
                                <Image preview={false} src={icon5} width="48" height="48"/>
                            </Col>
                            <Col span={10} className="pl-16 open-sans fs-16">
                                <b>{Texts('homepage', 'h5').toUpperCase()}</b>
                                <ul>{listItem[4].map((list, index2) => (
                                    <li key={index2}>{list}</li>
                                ))}
                                </ul>
                            </Col>
                            <Col span={2} className="ta-center">
                                <Image preview={false} src={icon6} width="48" height="48"/>
                            </Col>
                            <Col span={10} className="pl-16 open-sans fs-16">
                                <b>{Texts('homepage', 'h6').toUpperCase()}</b>
                                <ul>{listItem[5].map((list, index2) => (
                                    <li key={index2}>{list}</li>
                                ))}
                                </ul>
                            </Col>
                        </Row>
                </>
        );
        return (<>{servicesContent}</>);
    }
}
