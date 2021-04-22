import style from './Footer.module.css';
import FooterItem from '../FooterItem/FooterItem';
import styles from '../FooterItem/FooterItem.module.css'

function Footer() {
  return (
    <footer className={style.footerContainer}>
      <ul>
        <FooterItem>Go to 1</FooterItem>
        <FooterItem>Go to 2</FooterItem>
        <FooterItem>Go to 3</FooterItem>
        <FooterItem>Go to 4</FooterItem>
        <FooterItem>Go to 5</FooterItem>
        <FooterItem>Go to 6</FooterItem>
        <FooterItem>Go to 7</FooterItem>
        <FooterItem>Go to 8</FooterItem>
        <FooterItem>Go to 9</FooterItem>
        <FooterItem>Go to 10</FooterItem>
        <FooterItem>Go to 11</FooterItem>
        <li><img src="/blue-origami-bird-flipped.png" alt="" className={styles.listItem} /></li>
      </ul>
      <p className={style.footerContainerP}>Software University &copy 2021</p>
    </footer>
  );
};

export default Footer;