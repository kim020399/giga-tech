import pdf1 from './certificates/cert1.pdf';import pdf3 from './certificates/cert3.pdf';import pdf4 from './certificates/cert4.pdf';
import pdf5 from './certificates/cert5.pdf';import pdf6 from './certificates/cert6.pdf';import pdf7 from './certificates/cert7.pdf';
import pdf8 from './certificates/cert8.pdf';import pdf9 from './certificates/cert9.pdf';import pdf10 from './certificates/cert10.pdf';
import pdf11 from './certificates/cert11.pdf';import pdf12 from './certificates/cert12.pdf';import pdf13 from './certificates/cert13.pdf';
import pdf14 from './certificates/cert14.pdf';import pdf15 from './certificates/cert15.pdf';import pdf19 from './certificates/cert19.pdf';
import pdf20 from './certificates/cert20.pdf';import pdf21 from './certificates/cert21.pdf';import cert1 from './certificates/cert1.png';
import cert3 from './certificates/cert3.png';import cert4 from './certificates/cert4.png';import cert5 from './certificates/cert5.png';
import cert6 from './certificates/cert6.png';import cert7 from './certificates/cert7.png';import cert8 from './certificates/cert8.png';
import cert9 from './certificates/cert9.png';import cert10 from './certificates/cert10.png';import cert11 from './certificates/cert11.png';
import cert12 from './certificates/cert12.png';import cert13 from './certificates/cert13.png';import cert14 from './certificates/cert14.png';
import cert15 from './certificates/cert15.png';import cert19 from './certificates/cert19.png';import cert20 from './certificates/cert20.png';
import cert21 from './certificates/cert21.png';

export const pdfFiles = [
    pdf1, pdf3, pdf4, pdf5, pdf6, pdf7, pdf8, pdf9, pdf10, pdf11,
    pdf12, pdf13, pdf14, pdf15, pdf19, pdf20, pdf21
];
export const certificates = [
    cert1, cert3, cert4, cert5, cert6, cert7, cert8, cert9, cert10, cert11,
    cert12, cert13, cert14, cert15, cert19, cert20, cert21
];
export const dataSource = [
    {key: '1', vendor: 'Cisco', type:'Premier Integrator'},
    {key: '2', vendor: 'Vmware', type: 'Partner Connect \n' +
            'Enrolled, Partner Connect\n' +
            'Partner\n' +
            'Data Center Virtualization'},
    {key: '3', vendor: 'Lenovo', type:'Registered Partner'},
    {key: '4', vendor: 'Juniper', type:'Reseller'},
    {key: '5', vendor: 'IBM', type:'Authorized Warranty Service Provider ( IBM Power & Storage Products) Silver Partner'},
    {key: '6', vendor: 'Dell EMC', type:'Solution Provider — Авторизованный партнер'},
    {key: '7', vendor: 'Forcepoint', type:'Associate'},
    {key: '8', vendor: 'Citrix', type:'Silver'},
    {key: '9', vendor: 'Veeam', type:'Registered Reseller'},
    {key: '10', vendor: 'APC', type:'Registered Reseller'},
    {key: '11', vendor: 'Axis', type:'Registered Reseller'},
    {key: '12', vendor: 'Fortinet', type:'Select Partner'},
    {key: '13', vendor: 'HPE', type:'HPE Business Partner'},
    {key: '14', vendor: 'Extreme Networks', type:'Authorized Partner'},
    {key: '15', vendor: 'Snom', type:'Registered Partner'},
    {key: '16', vendor: 'EnGenius', type:'Registered'},
    {key: '17', vendor: 'Aruba (HPE Company)', type:'Business Partner'},
    {key: '18', vendor: 'Crowdstrike', type:'Registered Partner'},
    {key: '19', vendor: 'Microsoft', type:'Authorized Partner'},
    {key: '20', vendor: 'Milestone', type:'Silver Partner'},
    {key: '21', vendor: 'Checkpoint', type:'Authorized Reseller'},
    {key: '22', vendor: 'Tripplite', type:'Associate Manager'},
    {key: '23', vendor: 'Tableau', type:'Reseller'},
    {key: '24', vendor: 'Positive Technologies', type:'Authorized Partner '},
    {key: '25', vendor: 'Adobe', type:'Certified Partner '},
    {key: '26', vendor: 'H3C', type:'Registered partner '},
    {key: '27', vendor: 'Polycom', type:'Registered partner'},
];

export const columns = [
    {
        title: () => {return(<b>ВЕНДОР</b>);},
        dataIndex: 'vendor',
        key: 'vendor',
        width: '32%',
    },
    {
        title: () => {return(<b>ВИД ПАРТНЕРСТВА</b>);},
        dataIndex: 'type',
        key: 'type',
        width: '68',
    },
];