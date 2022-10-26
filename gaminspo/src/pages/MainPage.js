import Header from '../components/Header.js';
import { Button, Checkbox, Form, Input } from 'antd';
import { Image } from 'antd';
import { Col, Divider, Row } from 'antd';
import { Typography } from 'antd';
import '../styles/MainPage.css';
import { Card, Space } from 'antd';
import Footer from '../components/Footer';
import Menu from '../components/MainMenu';
const { Title } = Typography;
const { Link } = Typography;
export default function MainPage() {
  const { Search } = Input;
  const { Meta } = Card;
  const onSearch = (value) => console.log(value);
  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <Header></Header>
      <div className='first_row'>
        <Button type="primary">Add your image</Button>
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} ></Search>
      </div>
      <span></span>
      <div className='content'>
        <Menu></Menu>
        <div className='gallery'>
          <Row justify="space-around">
            <div className="card_div">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="img/capylogo.png" />}>
                <Meta title="Epic Carpincho" description="Carpinchos are the best" />
              </Card>
            </div>
            <div className="card_div">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="img/capylogo.png" />}>
                <Meta title="Epic Carpincho" description="Carpinchos are the best" />
              </Card>
            </div>
          </Row>
          <Row justify="space-around">
            <div className="card_div">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="img/capylogo.png" />}>
                <Meta title="Epic Carpincho" description="Carpinchos are the best" />
              </Card>
            </div>
            <div className="card_div">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="img/capylogo.png" />}>
                <Meta title="Epic Carpincho" description="Carpinchos are the best" />
              </Card>
            </div>
          </Row>
          <Row justify="space-around">
            <div className="card_div">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="img/capylogo.png" />}>
                <Meta title="Epic Carpincho" description="Carpinchos are the best" />
              </Card>
            </div>
            <div className="card_div">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="img/capylogo.png" />}>
                <Meta title="Epic Carpincho" description="Carpinchos are the best" />
              </Card>
            </div>
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </Space>
  )
}