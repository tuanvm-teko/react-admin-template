// @flow
import React from 'react';
import { regions } from 'localization';

const Region = (props: any) => {
  const { language } = props;
  const data = regions[language];

  return (
    <div className="d-flex align-items-center">
      <i className={`${data.icon} m-0 mr-2 h4`} />
      <span className="white-space-nowrap">{data.name}</span>
    </div>
  );
};

export default Region;
