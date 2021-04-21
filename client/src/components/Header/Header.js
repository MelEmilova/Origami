import style from './Header.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from '../NavigationItem/NavigationItem.module.css';
function Header () {
  return (
    <nav className={style.navigation}>
      <ul>
        <li className={styles.listItem}><img src="/white-origami-bird.png" alt="" /></li>
        <NavigationItem>Go to 1</NavigationItem>
        <NavigationItem>Go to 2</NavigationItem>
        <NavigationItem>Go to 3</NavigationItem>
        <NavigationItem>Go to 4</NavigationItem>
        <NavigationItem>Go to 5</NavigationItem>
        <NavigationItem>Go to 6</NavigationItem>
        <NavigationItem>Go to 7</NavigationItem>
        <NavigationItem>Go to 8</NavigationItem>
        <NavigationItem>Go to 9</NavigationItem>
        <NavigationItem>Go to 10</NavigationItem>
        <NavigationItem>Go to 11</NavigationItem>


      </ul>
    </nav>
  );
};

export default Header;