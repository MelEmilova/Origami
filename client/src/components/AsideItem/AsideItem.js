import style from './AsdeItem.module.css';

function AsideItem(props) {
  return (
    <li className={style.listItem}>
      <a className={style.asideListItem} href="/">Going to {props.children}</a>
    </li>

  );
};

export default AsideItem;