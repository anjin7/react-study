import PropTypes from "prop-types";
import styles from './CharacterDetail.module.css'


function CharacterDatail({ coverImg, heroName, description, comics }) {
  return (
    <div className={styles.character_detail}>
      <img src={coverImg} alt={heroName} className={styles.cd__img} />
      <div className={styles.cd__container}>
        <h2 className={styles.cd__title}>{heroName}</h2>
        <div className={styles.cd__description}>
          {description.length > 15 ? <p>{description}</p> : <div className={styles.cd__block}></div>}
        </div>
        <ul className={styles.cd__comics}>
          {comics === null ?  "" : comics.map(c => (
            <li key={c.name}>{c.name}</li>
          ))}
        </ul>
      </div>
      
    </div>
  )
};

CharacterDatail.propTypes ={
  coverImg: PropTypes.string.isRequired,
  heroName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  comics: PropTypes.object.isRequired
}
export default CharacterDatail;