import styles from './navbar.module.css';
import logoMarvel from '../../assets/logomarvel.png';

const Navbar = ({
  search,
  setSearch,
  setListFavourite,
  Listfavourite,
  setCurrentPage,
  darkMode,
  setDarkMode,
}) => {
  const handleSearch = e => {
    setSearch (e.target.value.toLowerCase ());
    setCurrentPage (1);
  };

  return (
    <div>

      <div className={styles.contain}>
        <div className={styles.logo}>
          <img src={logoMarvel} alt="" />
        </div>

        <div className={styles.searchbar}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-search"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="gray"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={handleSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-moon"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke={darkMode === true ? 'white' : 'black'}
            fill={darkMode === true ? 'black' : 'none'}
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={() => setDarkMode (!darkMode)}
            className={styles.darkMode}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
        </div>

        <div className={styles.favourite}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-star"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="gray"
            fill={Listfavourite === true ? 'gray' : 'none'}
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={() => {
              setListFavourite(!Listfavourite);
              setCurrentPage(1);
            }}
            
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>

        </div>
      </div>

      <div className={styles.navbarMobile}>
        <div className={styles.logo}>
          <img src={logoMarvel} alt="" />
        </div>

        <div className={styles.ContainSearchabarMobile}>
          <div className={styles.searchbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>

            <input
              type="text"
              placeholder="Buscar"
              value={search}
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-moon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke={darkMode === true ? 'white' : 'black'}
              fill={darkMode === true ? 'black' : 'none'}
              stroke-linecap="round"
              stroke-linejoin="round"
              onClick={() => setDarkMode (!darkMode)}
              className={styles.darkMode}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
          </div>

          <div className={styles.favourite}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-star"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="gray"
              fill={Listfavourite === true ? 'gray' : 'none'}
              stroke-linecap="round"
              stroke-linejoin="round"
              onClick={() => setListFavourite (!Listfavourite)}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
