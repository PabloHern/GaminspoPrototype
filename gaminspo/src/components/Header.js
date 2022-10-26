import { PageHeader } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
export default function Header() {
  const navigate = useNavigate();
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => navigate(-1)}
      title="Gaminspo"
      subTitle="Your inspirational gaming galleries"
      extra={[
        <Button type="primary" onClick={() => navigate("/Home")}>
          Log out
        </Button>,
      ]} />

  );
}