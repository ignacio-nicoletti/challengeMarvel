import {useEffect, useState} from 'react';

import {getChars} from '../../utils/fetchChars';
import Navbar from '../../components/navbar/navbar';
import Cards from '../../components/cards/cards';
import styles from './Home.module.css';
import Modal from '../../components/Modal/modal';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/pagination';

const Home = () => {
  const [data, setdata] = useState ([]); //se almacena toda la data
  const [search, setSearch] = useState (''); //se almacena la palabra de busqueda
  const [datafilter, setDatafilter] = useState (data); //se almacena la data filtrada
  const [openModal, setOpenModal] = useState (false); // abre el modal
  const [charSelected, setCharSelected] = useState ({}); //guarda la informacion de la card seleccionada para el modal
  const [Listfavourite, setListFavourite] = useState (false); //determina si mostrar la data de la api o los guardados

  const [currentPage, setCurrentPage] = useState (1);
  const itemsPerPage = 20; // número de elementos por página

  useEffect (
    () => {
      const CallCharacter = async () => {
        const data = await getChars (); //llamada a la api
        Listfavourite === false
          ? setdata (data)
          : setdata (JSON.parse (localStorage.getItem ('Favourites'))); // si clickeo en mis favoritos muestra los favoritos sino todos
      };

      CallCharacter ();
    },
    [Listfavourite]
  );
  console.log (data[0]);
  useEffect (
    () => {
      let datafiltered;
      if (search.includes ('http')) {
        datafiltered = data.filter (
          el => el.comics.collectionURI.includes (search) //Si lo buscado es un link
        );
      } else {
        datafiltered = data.filter (
          el => el.name.toLowerCase ().includes (search) //filtra lo buscado por searchBar
        );
      }
      setDatafilter (datafiltered);
    },
    [search, data]
  );

  //paginado
  const totalPages = Math.ceil (datafilter.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = datafilter.slice (startIndex, endIndex);

  const handlePageChange = page => {
    setCurrentPage (page);
  };

  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
        setListFavourite={setListFavourite}
        Listfavourite={Listfavourite}
        setCurrentPage={setCurrentPage}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <div className={styles.cardContain}>
        {search !== '' // en caso de haber algo en la barra de busqueda mapea la informacion filtrada
          ? currentItems.map ((el, indice) => (
              <div key={indice}>

                <Cards
                  setOpenModal={setOpenModal}
                  data={el}
                  setCharSelected={setCharSelected}
                />
              </div>
            ))
          : currentItems.map ((el, indice) => ( // sino mapea todo
              <div key={indice}>
                <Cards
                  setOpenModal={setOpenModal}
                  data={el} //podria pasarle o los parametros necesarios para el mapeo o todo el objeto y luego manipularlo dentro del componente
                  setCharSelected={setCharSelected}
                />
              </div>
            ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* En caso de estar vacia la lista de favoritos un mensaje  */}
      {data.length !== 0
        ? ''
        : <div className={styles.advice}>
            <p>Lista de favoritos vacia</p>
          </div>}

      {/* Abre el modal al hacer click en un card */}
      {openModal === true
        ? <Modal setOpenModal={setOpenModal} character={charSelected} />
        : ''}

      <Footer />
    </div>
  );
};

export default Home;
