import style from './Aside.module.css';
import AsideItem from '../AsideItem/AsideItem'

function Aside (props){
  return(
    <aside className={style.aside}>
      <ul>
        <AsideItem> 1</AsideItem>
        <AsideItem> 2</AsideItem>
        <AsideItem> 3</AsideItem>
        <AsideItem> 4</AsideItem>
        <AsideItem> 5</AsideItem>
        <AsideItem> 6</AsideItem>
        <AsideItem> 7</AsideItem>
        <AsideItem> 8</AsideItem>
        <AsideItem> 9</AsideItem>
        <AsideItem> 10</AsideItem>
        <AsideItem> 11</AsideItem>

      </ul>

    </aside>

  );
};

export default Aside;