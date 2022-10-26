import React from 'react';
import { Col, Divider, Row } from 'antd';
import { Typography } from 'antd';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css';
const { Link, Text } = Typography;
export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <Divider className='footer_div'>
        <Divider>
          <Link onClick={() => navigate("/contact")}>Contact us</Link>
          <p></p>
          <Text type="secondary">Gaminspo version 1.2.3 All rights reserved </Text>
        </Divider>
      </Divider>
    </>
  );
}