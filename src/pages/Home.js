import styles from './Home.module.css';
import Cctv from './components/Cctv.js';
import Smallcctv from './components/Smallcctv.js';
import Kakao from './components/Kakao.js';
function Home() {

  return (
    <div className={styles.mainContainer}>
      <header className={styles.menubar}>
        <h1 className={styles.logo_box}>
          <a className={styles.link_logo} href='http://localhost:3000/'></a>
        </h1>
        <nav>
          <ul className={styles.list_navbar}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

        </nav>
      </header>
      <div className={styles.container}>
        <div className={styles.map_wrap}>
          <Kakao />
        </div>
        <div className={styles.cctvzone}>
          <div className={styles.cctv_container}></div>
          <div className={styles.cctv_list}>
            <Cctv />
            <Cctv />
            <Cctv />
            <Cctv />
            <Cctv />
            <Cctv />
            <Cctv />
            <Cctv />
            <Cctv />
            <Cctv />
          </div>
          <button class="next-button">다음</button>
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