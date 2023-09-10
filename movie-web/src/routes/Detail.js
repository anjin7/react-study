import { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from "react-router-dom";
import CharacterDetail from '../components/CharacterDetail';
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
  const history = useHistory();
  const goHome = () => { history.push('/') };
  return (
    <div className={styles.container}>
      {loading ? (
      <h2 className={styles.loader}>Loading Details...</h2>
      ) : (
      <div className={styles.character}>
        <button onClick={goHome} className={styles.back}>← back</button>
        <CharacterDetail
          key={characterDetail[0].id}
          id={characterDetail[0].id}
          coverImg={`${characterDetail[0].thumbnail.path}.${characterDetail[0].thumbnail.extension}`}
          heroName={characterDetail[0].name} 
          description={characterDetail[0].description}
          comics={characterDetail[0].comics.items}
        />
      </div>
      )}
    </div>
  );
};

export default Detail;