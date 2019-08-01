import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import navigation from '_nav';
import { browserHistory } from 'helpers';
const { Sider: SiderAntd } = Layout;

const Sider: React.FC = props => {
  const changeRoute = (url: string) => () => {
    browserHistory.push(url);
  };

  return (
    <SiderAntd collapsible>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
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

export default Sider;
