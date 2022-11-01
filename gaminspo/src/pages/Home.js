import Header from '../components/Header.js';
import { Image } from 'antd';
import { Col, Divider, Row } from 'antd';
import Login from '../components/Login';
import { Avatar } from 'antd';
import { Typography } from 'antd';
import '../styles/Home.css';
import { Card, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
const { Title } = Typography;
const { Link } = Typography;
export default function Home() {
  const navigate = useNavigate();
  return (

    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <div className="logo_div">
        <Row justify='center'>
          <Col span={12}>
            <img className="logo_img" src="img/png_logo.png" ></img>
          </Col>
        </Row>
      </div>
      <Row justify="space-around">
        <Col span={8} >
          <Divider>
            <Title level={2}>Log in!</Title>
          </Divider>
          <Login name="Log in">
          </Login>
        </Col>
        <Col span={8} >
          <Divider>
            <Title level={2}>Don't have an account? Sign in!</Title>
          </Divider>
          <Login name="Sign in">
          </Login>
        </Col>
      </Row>
      <div className="no_log">
        <Link onClick={() => navigate("/mainPagenolog")}>Continue without logging in</Link>
      </div>
      <Footer></Footer>
    </Space>

  );
}

