import {useEffect, useState} from 'react';

import {getChars} from '../../utils/fetchChars';
import Navbar from '../../components/navbar/navbar';
import Cards from '../../components/navbar/cards/cards';
import styles from './Home.module.css';

const Home = () => {
  const [data, setdata] = useState ([]); //se almacena toda la data
  const [search, setSearch] = useState (''); //se almacena la palabra de busqueda
  const [datafilter, setDatafilter] = useState (data); //se almacena la data filtrada

  useEffect (() => {
    CallCharacter ();
  }, []);

  const CallCharacter = async () => {
    const data = await getChars ();
    setdata (data);
  };

  useEffect (
    () => {
      const datafiltered = data.filter (el =>
        el.name.toLowerCase ().includes (search)
      );
      setDatafilter (datafiltered);
    },
    [search]
  );

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />

      <div className={styles.cardContain}>
        {search !== ''
          ? datafilter.map (el => (
              <Cards
                name={el.name}
                img={el.thumbnail.path}
                extension={el.thumbnail.extension}
              />
            ))
          : data.map (el => (
              <Cards
                name={el.name}
                img={el.thumbnail.path}
                extension={el.thumbnail.extension}
              />
            ))}
      </div>

    </div>
  );
};

export default Home;
