import styles from './Cctv.module.css';

function Cctv() {
  return (
    <div className={styles.cctvdiv}>
      <img className={styles.cctv} src="image/ex_cctv.jpg" alt="cctv" />
    </div>
  )
}

export default Cctv;