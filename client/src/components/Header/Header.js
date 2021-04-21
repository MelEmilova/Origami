import style from './Header.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from '../NavigationItem/NavigationItem.module.css';
function Header () {
  return (
    <nav className={style.navigation}>
      <ul>
        <li className={styles.listItem}><img src="/white-origami-bird.png" alt="" /></li>
        <NavigationItem>Goingto 1</NavigationItem>
        <NavigationItem>Goingto 2</NavigationItem>
        <NavigationItem>Goingto 3</NavigationItem>
        <NavigationItem>Goingto 4</NavigationItem>
        <NavigationItem>Goingto 5</NavigationItem>
        <NavigationItem>Goingto 6</NavigationItem>
        <NavigationItem>Goingto 7</NavigationItem>
        <NavigationItem>Goingto 8</NavigationItem>
        <NavigationItem>Goingto 9</NavigationItem>
        <NavigationItem>Goingto 10</NavigationItem>
        <NavigationItem>Goingto 11</NavigationItem>


      </ul>
    </nav>
  );
};

export default Header;