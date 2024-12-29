
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';


export default function Home() {
  return (
    <div className={styles.App}>

      <main>
        <div className={styles.middleHome}>
        <div className={styles.middleLeftHome}>
        <h2 className={styles.headingTwo}>Located at:</h2>
        <a
          href="https://www.google.com/maps?q=915+W+Red+Cliffs+Dr,+Washington,+UT+84780"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.addressLink}
        >
          915 W Red Cliffs Dr, Washington, UT 84780
        </a>
        <div className={styles.timeOpenContainer}>
          <h3 className={styles.hoursHeading}>Hours of Operation:</h3>
          <ul className={styles.hoursList}>
            <li>Mon: 10am - 6pm</li>
            <li>Tue: 10am - 6pm</li>
            <li>Thu: 10am - 6pm</li>
            <li>Fri: 10am - 6pm</li>
            <li>Sat: 10am - 6pm</li>
          </ul>
        </div>
      </div>

      <div className={styles.middleRightHome}>
        <h2 className={styles.headingTwo}>About Us</h2>
        <p className={styles.aboutParagraph}>
          Welcome to our flavorful world at Los Carnales! Delight in the authentic taste of Mexico crafted by two brothers, Carmelo and Floriberto Gatica, seasoned veterans in the restaurant industry, with a combined experience of over 20+ years. Join us on this thrilling culinary journey as we bring our passion for Mexican cuisine to life!
        </p>
        <p className={styles.aboutParagraph}>
          Indulge in a fiesta of flavors at Los Carnales where every dish tells a story steeped in tradition and culinary expertise. Carmelo and Floriberto Gatica's deep-rooted knowledge and dedication to creating an unforgettable dining experience shine through each delectable bite. Join us as we infuse every meal with the rich heritage and vibrant spirit of Mexico, inviting you to savor the true essence of our culture in every meticulously crafted dish.
        </p>
        <h2 className={styles.headingTwo}>Catering</h2>
        <p className={styles.cateringParagraph}>
          For catering information and scheduling, please contact us at{' '}
          <a className={styles.contactLink} href="mailto:loscarnalesut@gmail.com">loscarnalesut@gmail.com</a>, or call/text{' '}
          <a className={styles.contactLink} href="tel:4352294272">(435)-229-4272</a> or{' '}
          <a className={styles.contactLink} href="tel:4352567827">(435)-256-7827</a>. You can also reach out to us on our social media.
        </p>
      </div>

        </div>
      </main>
    </div>
  );
}
