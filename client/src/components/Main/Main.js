import {Component} from 'react';

import style from './Main.module.css' 
import Post from '../Post/Post';
import urlList from '../../services/urlList'


class Main extends Component{
  constructor(props){
    super(props)

    this.state = {
      posts:[]
    }
  }

  componentDidMount(){
    fetch(urlList.allPosts)
    .then(res => res.json())
    .then(posts => {
      this.setState({posts})
    })
    
    .catch(err => console.log(err))
  }



  render(){
    return(
      <main className={style.mainContainer}>
        <h1 className={style.heading1}>Sooooooome Heading!</h1>
        <div className={style.posts}>

        {this.state.posts.map(el => <Post posts={el} key={el.id}/>)}

        </div>
      </main>
    )
  }
}

export default Main;