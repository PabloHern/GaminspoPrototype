import { PageHeader } from 'antd';
import React from 'react';
export default function Header() {
  return (

    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle" />

  );
}