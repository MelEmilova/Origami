import style from './NavigationItem.module.css';

function NavigationItem(props) {
  return (
    <li className={style.listItem} key={props._id}>
      <a className={style.navListItem} href="/">{props.children}</a>
    </li>

  );
};

export default NavigationItem;