import Header from '../components/Header.js';
import { Image } from 'antd';
import { Col, Divider, Row } from 'antd';
import Login from '../components/Login';
import { Avatar } from 'antd';
import { Typography } from 'antd';
import './Home.css';
import { Card, Space } from 'antd';
const { Text } = Typography;
export default function Home() {
  return (

    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <Divider>
        <Row justify='center'>
          <Col span={12}>
            <Avatar
              size={{ xs: 80, sm: 80, md: 80, lg: 80, xl: 80, xxl: 100 }}
              src="img/capylogo.png"
            />
          </Col>
          <Col span={12}>
            <h1>Gaminspo</h1>
            <Text type="secondary">Your inspirational gaming gallery</Text>
          </Col>
        </Row>
      </Divider>
      <div></div>
      <div></div>
      <Row justify="space-around">
        <Col span={8} >
          <Login>
          </Login>
        </Col>
        <Col span={8} >
          <Login>
          </Login>
        </Col>
      </Row>

    </Space>

  );
}

