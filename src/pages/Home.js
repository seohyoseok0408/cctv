import styles from './Home.module.css';
import Cctv from './components/Cctv.js';
import Smallcctv from './components/Smallcctv.js';

function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.menubar}>
        <p className={styles.logo}></p>
      </div>
      <div className={styles.container}>
        <div className={styles.map}>
          <img className={styles.exmap} src="image/ex_map.jpg" alt="map" />
        </div>
        <div className={styles.cctvzone}>
          <div className={styles.cctv}>
            <Cctv />
            <Cctv />
          </div>
          <div className={styles.smallContainer}>
            <Smallcctv />
            <Smallcctv />
            <Smallcctv />
            <Smallcctv />
            <Smallcctv />
            <Smallcctv />
            <Smallcctv />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;