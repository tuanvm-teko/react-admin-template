import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import navigation from '_nav';
import { browserHistory } from 'helpers';
import { withRouter, RouterProps } from 'react-router';
const { Sider: SiderAntd } = Layout;

const changeRoute = (url: string) => () => {
  browserHistory.push(url);
};

interface Props extends RouterProps {}

const Sider: React.FC<Props> = props => {
  const { pathname } = props.history.location;
  let [defaultSelectedKey] = useState(
    navigation.items.findIndex(i => i.url === pathname),
  );
  return (
    <SiderAntd
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo">Time for logo</div>
      <Menu theme="dark" defaultSelectedKeys={[defaultSelectedKey.toString()]}>
        {navigation.items.map((item, i) => (
          <Menu.Item key={i} onClick={changeRoute(item.url)}>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </Menu.Item>
        ))}
      </Menu>
    </SiderAntd>
  );
};

export default withRouter(Sider);
