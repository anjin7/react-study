import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import styles from "./Character.module.css";

function Character({ id, heroName, coverImg, description }) {
  return (
    <div className={styles.character}>
      <img src={coverImg} alt={heroName} className={styles.character__img} />
      <h2 className={styles.character__title}>
        <Link to={`/character/${id}`}>{heroName}</Link>
      </h2>
      {/* <div className={styles.character__container}>
        <p className={styles.character__description}>{description.length > 235 ? `${description.slice(0, 235)}...` : (description.length>15 ? description : "")}</p>
      </div> */}
    </div>
  )
};

Character.propTypes ={
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  heroName: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  
}

export default Character;