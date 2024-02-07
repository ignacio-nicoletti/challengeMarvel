import {useEffect, useState} from 'react';

import {getChars} from '../../utils/fetchChars';

const Home = () => {
  const [data, setdata] = useState ([]);

  useEffect (() => {
    CallCharacter ();
  }, []);

  const CallCharacter = async () => {
    const data = await getChars ();
    setdata (data);
  };

  console.log (data);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
