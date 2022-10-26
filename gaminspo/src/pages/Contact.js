import { Col, Divider, Row } from 'antd';
import { Typography } from 'antd';
import '../styles/Home.css';
import ContactForm from '../components/ContactForm';
import { Card, Space } from 'antd';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import { Input } from 'antd';
import Footer from '../components/Footer';
export default function Contact() {
  const { Link, Text, Title } = Typography;
  return (
    <>
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <div className="logo_div">
          <Row justify='center'>
            <Col span={12}>
              <img className="logo_img" src="img/png_logo.png" ></img>
            </Col>
          </Row>
        </div>
        <div>
          <Row justify="center">
            <Col span={8}>
              <ContactForm></ContactForm>
            </Col>
          </Row>
        </div>
        <Footer></Footer>
      </Space>
    </>
  )
}