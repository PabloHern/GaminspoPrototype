import Header from '../components/Header.js';
import { Button, Checkbox, Form, Input } from 'antd';
import { Image } from 'antd';
import { Col, Divider, Row } from 'antd';
import { Typography } from 'antd';
import '../styles/MainPage.css';
import { Card, Space } from 'antd';
import Footer from '../components/Footer';
import Menu from '../components/MainMenu';
import {
  PlusSquareOutlined,
  PlusSquareFilled,
} from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
const { Title } = Typography;
const { Link } = Typography;
export default function MainPagenolog() {
  const { Search } = Input;
  const { Meta } = Card;
  const onSearch = (value) => setValue(value);
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const getData = () => {
    fetch('/data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <Header name="nolog"></Header>
      <div className='first_row'>
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} ></Search>
      </div>
      <span></span>
      <div className='content'>
        <Menu name="nolog" page="1"></Menu>
        <div className='gallery'>
          <Row justify="space-around">
            {(data && data.length > 0 && (value == "" || value == null)) ? data.map(e => (
              <Col span={8}>
                <div className="card_div">
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={e.img} />}>
                    <Meta title={e.name} description={e.info} />

                  </Card>
                </div>
              </Col>
            )) : data.filter(e => e.name == value).map(e => (
              <Col span={8}>
                <div className="card_div">
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={e.img} />}>
                    <Meta title={e.name} description={e.info} />
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </Space>
  )
}