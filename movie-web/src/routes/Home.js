import { useEffect, useState} from 'react';
import Character from '../components/Character';
import styles from "./Home.module.css";

function Home(){
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const getCharacters = async() => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setCharacters(json.data.results);
    setLoading(false)
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
      <h2 className={styles.loader}>Loading...</h2>
      ) : (
      <div className={styles.characters}>
        <h2 className={styles.title}>MARVEL Characters</h2>
        
        {characters.map(character => (
          <Character
            key={character.id}
            id={character.id}
            coverImg={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            heroName={character.name} 
            // description={character.description}
          />
        ))}
      </div>
      )}
    </div>
  );
};
export default Home;