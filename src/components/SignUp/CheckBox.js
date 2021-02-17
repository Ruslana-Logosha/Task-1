import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Checkbox from '@material-ui/core/Checkbox';

const CheckBox = ({ ...props }) => {
  const [checked, setChecked] = useState(false);
  // event.target.checked;
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      label={
        <div>
          <span>I accept the </span>
          <Link to={'/terms'}>Terms of Service</Link>,
          <Link to={'/privacy'}>Privacy Policy</Link>
          <span> and our default </span>
          <Link to={'/notification'}>Notification Settings</Link>
        </div>
      }
      {...props}
    />
  );
};

export default CheckBox;
