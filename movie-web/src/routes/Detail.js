import { useEffect, useState, useCallback } from 'react';
import { useParams } from "react-router-dom";
import CharacterDatail from '../components/CharacterDatail';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [characterDetail, setCharacterDetail] = useState([]);
  const getCharacter = useCallback(async() => {
    const json = await (
      await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`)
    ).json();
    setCharacterDetail(json.data.results);
    setLoading(false);
    }, [id]);
    useEffect(() => {
      getCharacter();
    }, [getCharacter]);
  return (
    <div className={styles.container}>
      {loading ? (
      <h2 className={styles.loader}>Loading Details...</h2>
      ) : (
      <div className={styles.character}>
        <CharacterDatail
          key={characterDetail.id}
          id={characterDetail.id}
          // coverImg={`${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`}
          heroName={characterDetail.name} 
          description={characterDetail.description}
          // url={characterDetail.urls}
        />
      </div>
      )}
    </div>
  );
};

export default Detail;