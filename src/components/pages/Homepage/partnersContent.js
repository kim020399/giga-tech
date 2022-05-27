import React, { Component } from 'react';
import {Row, Col, Image} from 'antd';
import './homepage.css';
import cisco from './icons/partners/cisco.svg';
import ibm from './icons/partners/ibm.svg';
import vmvare from './icons/partners/vmvare.svg';
import axis from './icons/partners/axis.svg';
import citrix from './icons/partners/citrix.svg';
import fortinet from './icons/partners/fortinet.svg';
import apc from './icons/partners/apc.svg';
import lenovo from './icons/partners/lenovo.svg';
import idnet from './icons/partners/idnet.svg';
import juniper from './icons/partners/juniper.svg';
import dell from './icons/partners/dell.svg';
import veeam from './icons/partners/veeam.svg';
import ciscoHover from './icons/partners/cisco-hover.svg';
import ibmHover from './icons/partners/ibm-hover.svg';
import vmvareHover from './icons/partners/vmvare-hover.svg';
import axisHover from './icons/partners/axis-hover.svg';
import citrixHover from './icons/partners/citrix-hover.svg';
import fortinetHover from './icons/partners/fortinet-hover.svg';
import apcHover from './icons/partners/apc-hover.svg';
import lenovoHover from './icons/partners/lenovo-hover.svg';
import idnetHover from './icons/partners/idnet-hover.svg';
import juniperHover from './icons/partners/juniper-hover.svg';
import dellHover from './icons/partners/dell-hover.svg';
import veeamHover from './icons/partners/veeam-hover.svg';

export default class PartnersContent extends Component {
    state = {
        icons: [
            [cisco, ibm, vmvare, axis],
            [citrix, fortinet, apc, lenovo],
            [idnet, juniper, dell, veeam]
        ],
        iconsHover: [
            [ciscoHover, ibmHover, vmvareHover, axisHover],
            [citrixHover, fortinetHover, apcHover, lenovoHover],
            [idnetHover, juniperHover, dellHover, veeamHover]
        ],
        icons2: [
            [cisco, ibm, vmvare, axis],
            [citrix, fortinet, apc, lenovo],
            [idnet, juniper, dell, veeam]
        ],
        links: [
            ['https://www.cisco.com/', 'https://www.ibm.com/kz-en', 'https://www.vmware.com/', 'https://www.axis.com/ru'],
            ['https://www.citrix.com/', 'https://www.fortinet.com/ru', 'https://www.apc.com/us/en/country-selector/?ref_url=/', 'https://www.lenovo.com/us/en/'],
            ['https://www.identiv.com/', 'https://www.juniper.net/us/en.html', 'https://www.delltechnologies.com/en-us/index.htm', 'https://www.veeam.com/ru']
        ],
    };
    onHover = (index1, index2) => () => {
        const {icons, iconsHover} = this.state;
        icons[index1][index2] = iconsHover[index1][index2];
         this.setState({icons});
    }
    onLeave = (index1, index2) => () => {
        const {icons, icons2} = this.state;
        icons[index1][index2] = icons2[index1][index2];
        this.setState({icons});
    }
    render() {
        const {isMobile} = this.props;
        const {icons, links} = this.state;
        const partnersContent =
            isMobile ?
                <>
                    <Row className="w100 mt-20 ta-center" justify="space-between">
                        {icons[0].map((item, index) => (
                            <Row className="ta-center part-col-mobile" justify="center">
                                <a href = {links[0][index]} target = "_blank">
                                    <Image value={item} onMouseOver={this.onHover(0, index)} onMouseLeave={this.onLeave(0,index)} preview={false} src={item} width={120} height={60} />
                                </a>
                            </Row>
                        ))}
                    </Row>
                    <Row className="w100 mt-20" justify="space-between">
                        {icons[1].map((item, index) => (
                            <Row className="ta-center part-col-mobile" justify="center">
                                <a href = {links[1][index]} target = "_blank">
                                <Image onMouseOver={this.onHover(1, index)} onMouseLeave={this.onLeave(1,index)} preview={false} src={item} width={120} height={60}/>
                                </a>
                            </Row>
                        ))}
                    </Row>
                    <Row className="w100 mt-20 mb-60" justify="space-between">
                        {icons[2].map((item, index) => (
                            <Row className="ta-center part-col-mobile" justify="center">
                                <a href = {links[2][index]} target = "_blank">
                                <Image onMouseOver={this.onHover(2, index)} onMouseLeave={this.onLeave(2,index)} preview={false} src={item} width={120} height={60}/>
                                </a>
                            </Row>
                        ))}
                    </Row>
                </>
                :
                <>
                    <Row className="w100 mt-60" justify="space-between">
                        {icons[0].map((item, index) => (
                            <Col span={6} className="ta-center part-col">
                                <a href ={links[0][index]} target = "_blank">
                                    <Image value={item} onMouseOver={this.onHover(0, index)} onMouseLeave={this.onLeave(0,index)} preview={false} src={item} width={180} height={80} />
                                </a>
                            </Col>
                        ))}
                    </Row>
                    <Row className="w100 mt-60" justify="space-between">
                        {icons[1].map((item, index) => (
                            <Col span={6} className="ta-center part-col">
                                <a href = {links[1][index]} target = "_blank">
                                    <Image onMouseOver={this.onHover(1, index)} onMouseLeave={this.onLeave(1,index)} preview={false} src={item} width={180} height={80}/>
                                </a>
                            </Col>
                        ))}
                    </Row>
                    <Row className="w100 mt-60 mb-60" justify="space-between">
                        {icons[2].map((item, index) => (
                            <Col span={6} className="ta-center part-col">
                                <a href = {links[2][index]} target = "_blank">
                                <Image onMouseOver={this.onHover(2, index)} onMouseLeave={this.onLeave(2,index)} preview={false} src={item} width={180} height={80}/>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </>
        return (<>{partnersContent}</>);
    }
}
