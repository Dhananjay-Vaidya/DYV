import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-laptop-medical"></i>
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9031510/">Counterfeit Detection</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="Info" />
            <Link href="#works" title="How it works" />
            <Link href="#contact" title="Contact Us" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="Info" />
              <Link href="#works" title="How it works" />
              <Link href="#contact" title="Contact Us" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;