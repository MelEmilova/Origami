import style from './FooterItem.module.css'

function FooterItem(props){
  return(
    <li className={style.listItem}>
      <a href="/">{props.children}</a>
    </li>
  );
}

export default FooterItem;