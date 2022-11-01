import { PageHeader } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
export default function Header(props) {
  const navigate = useNavigate();
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => navigate("/home")}
      title="Gaminspo"
      subTitle="Your inspirational gaming galleries"
      extra={props.name == "log" ?
        <Button type="primary" onClick={() => navigate("/Home")}>
          Log out
        </Button>
        : <Button type="primary" onClick={() => navigate("/Home")}>
          Create account!
        </Button>
      } />

  );
}