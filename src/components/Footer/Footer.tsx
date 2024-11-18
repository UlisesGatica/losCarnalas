import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.instagram.com/los.carnales_foodtruck/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://i.imgur.com/yGCxHPk.jpeg"
          alt="Instagram"
          className={styles.socialIcon}
        />
      </a>
      <a href="https://www.facebook.com/loscarnales.ut" target="_blank" rel="noopener noreferrer">
        <img
          src="https://i.imgur.com/CdMjkcs.jpeg"
          alt="Facebook"
          className={styles.socialIcon}
        />
      </a>
      <a href="https://www.yelp.com/biz/los-carnales-mexican-food-st-george" target="_blank" rel="noopener noreferrer">
        <img
          src="https://i.imgur.com/P8hi2TU.jpeg"
          alt="Yelp"
          className={styles.socialIcon}
        />
      </a>
    </footer>
  );
};

export default Footer;
