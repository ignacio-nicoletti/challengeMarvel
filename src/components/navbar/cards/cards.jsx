import {useEffect, useState} from 'react';
import styles from './cards.module.css';

const Cards = ({data,setOpenModal,setCharSelected}) => {
  const [inFavourite, setInFavourite] = useState (false);

  //Chequea al montar la card que se encuentre en favoritos
  useEffect (() => {
    let favourite = JSON.parse (localStorage.getItem ('Favourites')) || [];
    let pos = favourite.findIndex (el => el.name == data.name);
    if (pos > -1) {
      setInFavourite (true);
    }
  }, [data]);

  //Agrega a favoritos
  const AddFavourites = title => {
    let favourite = JSON.parse (localStorage.getItem ('Favourites')) || [];
    let pos = favourite.findIndex (el => el.name == title);
    if (pos > -1) {
      //   localStorage.setItem("Favourites", JSON.stringify(favourite));
      //poner un alert que ya esta el producto
    } else {
      favourite.push (data);
      localStorage.setItem ('Favourites', JSON.stringify (favourite));
      setInFavourite (true);
    }
  };

  //Elimina de favoritos a la card
  const DeleteFavourites = title => {
    let favourite = JSON.parse (localStorage.getItem ('Favourites')) || [];
    let favoriteFilter = favourite.filter (el => el.name.toLowerCase() != title.toLowerCase());
    console.log(favoriteFilter);
    localStorage.setItem ('Favourites', JSON.stringify (favoriteFilter));
    setInFavourite (false);
  };


  return (
    <div className={styles.contain}>
      <div className={styles.favourite}>
        {inFavourite === false
          ? <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-star"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="gainsboro"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              onClick={() => AddFavourites (data.name)}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
          : <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-star-filled"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="gainsboro"
              stroke-linecap="round"
              stroke-linejoin="round"
              onClick={() => DeleteFavourites (data.name)}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                stroke-width="0"
                fill="gainsboro"
              />
            </svg>}
      </div>

      <div>
        <img src={data.thumbnail.path + '.' + data.thumbnail.extension} alt={`${data.name}`} onClick={()=>setOpenModal(true)&setCharSelected(data)}/>
      </div>

      <div className={styles.title}>
        <p>{data.name}</p>
      </div>
    </div>
  );
};

export default Cards;
