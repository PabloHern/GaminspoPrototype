import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Main Page', '1'),
  getItem('Your Collections', '2')
];
const itemsnolog = [
  getItem('Main Page', '1'),
];

export default function MainMenu(props) {
  const navigate = useNavigate();
  const onClick = (e) => {
    if (e.key == "1") {
      navigate("/MainPage");
      console.log('uwu');
    } else {
      navigate("/YourCollection");
      console.log('click ', e);
    }

  };
  return (

    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={props.page}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={props.name == "log" ? items : itemsnolog}
    />
  );
}