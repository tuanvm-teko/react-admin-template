import React from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from 'assets/img/brand/logoPV.svg';
import {
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler,
  // @ts-ignore
} from '@coreui/react';
import Region from 'components/Region';
import { regions } from 'localization';

const Header: React.FC = (props: any) => {
  const { onLogout, onChangeLanguage, language } = props;

  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{
          src: logo,
          width: 45,
          height: 45,
          alt: 'Logo',
        }}
        minimized={{
          src: logo,
          width: 35,
          height: 35,
          alt: 'Logo',
        }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />

      <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
          <NavLink href="/">Center</NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <AppHeaderDropdown direction="down">
          <DropdownToggle nav>
            <Region language={language} />
          </DropdownToggle>
          <DropdownMenu>
            {Object.keys(regions).map(el => (
              <DropdownItem key={el} onClick={() => onChangeLanguage(el)}>
                <Region language={el} />
              </DropdownItem>
            ))}
          </DropdownMenu>
        </AppHeaderDropdown>

        {/* <AppHeaderDropdown direction="down">
          <DropdownToggle nav>
            <span>{`Hi, ${currentUser && currentUser.name}`}</span>
            <img
              src={
                (currentUser && currentUser.avatarUrl) ||
                'https://s3.amazonaws.com/uifaces/faces/twitter/alexivanichkin/128.jpg'
              }
              className="img-avatar"
              alt="User"
            />
          </DropdownToggle>
          <DropdownMenu right style={{ right: 'auto' }}>
            <DropdownItem id="log-out-btn" onClick={e => onLogout(e)}>
              <i className="fa fa-lock" /> Đăng xuất
            </DropdownItem>
          </DropdownMenu>
        </AppHeaderDropdown> */}
      </Nav>
      {/* {modalVisible && (
        <NotificationModal
          visible={modalVisible}
          onCancel={closeModal}
          notifications={sortedNotifications}
        />
      )} */}
    </React.Fragment>
  );
};

export default Header;
