import {useEffect, useState} from 'react';

import {getChars} from '../../utils/fetchChars';
import Navbar from '../../components/navbar/navbar';
import Cards from '../../components/navbar/cards/cards';
import styles from './Home.module.css';
import Modal from '../../components/Modal/modal';

const Home = () => {
  const [data, setdata] = useState ([]); //se almacena toda la data
  const [search, setSearch] = useState (''); //se almacena la palabra de busqueda
  const [datafilter, setDatafilter] = useState (data); //se almacena la data filtrada
  const [openModal, setOpenModal] = useState (false); // abre el modal
  const [charSelected, setCharSelected] = useState ({}); //guarda la informacion de la card seleccionada para el modal
  const [Listfavourite, setListFavourite] = useState (false); //determina si mostrar la data de la api o los guardados
  const [favouritesChars, setFavouriteChars] = useState (
    JSON.parse (localStorage.getItem ('Favourites')) || []
  );

  useEffect (
    () => {
      CallCharacter ();
    },
    [Listfavourite]
  );

  const CallCharacter = async () => {
    const data = await getChars ();
    Listfavourite === false ? setdata (data) : setdata (favouritesChars); // si clickeo en mis favoritos muestra los favoritos sino todos
  };
  console.log (data);

  useEffect (
    () => {
      const datafiltered = data.filter (el =>
        el.name.toLowerCase ().includes (search)//filtra lo buscado por searchBar
      );
      setDatafilter (datafiltered);
    },
    [search]
  );

  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
        setListFavourite={setListFavourite}
        Listfavourite={Listfavourite}
      />

      <div className={styles.cardContain}>
        {search !== '' // en caso de haber algo en la barra de busqueda mapea la informacion filtrada
          ? datafilter.map (el => (
              <Cards
                setOpenModal={setOpenModal}
                data={el}
                setCharSelected={setCharSelected}
              />
            ))
          : data.map ((el) => ( // sino mapea todo
              <Cards
                setOpenModal={setOpenModal}
                data={el} //podria pasarle o los parametros necesarios para el mapeo o todo el objeto y luego manipularlo dentro del componente
                setCharSelected={setCharSelected}
              />
            ))}
      </div>

      {openModal === true
        ? <Modal setOpenModal={setOpenModal} character={charSelected} />
        : ''}
    </div>
  );
};

export default Home;
