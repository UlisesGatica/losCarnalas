import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Create a CSS module for Navbar styles

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.linkContainer}>
        <Link href="/">
          Home
        </Link>
        <Link href="/menu">
          Menu
        </Link>
      </div>
      <Image
        className={styles.imagelogo}
        src="/Logo.jpeg" // Replace with your logo path
        alt="Food Truck Logo"
        width={0} // Set width and height to 0 to let CSS take over
        height={0}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optional for responsive loading
        />
    </nav>
  );
};

export default Navbar;
