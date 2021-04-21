import style from './NavigationItem.module.css';

function NavigationItem(props) {
  return (
    <li className={style.listItem}>
      <a className={style.navListItem} href="/">Going to {props.children}</a>
    </li>

  );
};

export default NavigationItem;