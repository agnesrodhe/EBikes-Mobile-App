import React, { useState, useEffect, Fragment } from 'react';
import Start from '../tabs/Start';
import TabNav from './TabNav';

export default function IsLoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

    useEffect(() => {
      setIsLoggedIn(false);
    }, []);
  return (
    <Fragment>
        {isLoggedIn ? 
            <TabNav setIsLoggedIn={setIsLoggedIn} />
        :
            <Start setIsLoggedIn={setIsLoggedIn} />
        }
    </Fragment>
  );
}
