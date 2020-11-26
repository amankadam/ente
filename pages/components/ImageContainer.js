import React from 'react';
import axios from 'axios';
import BottomScrollListener from 'react-bottom-scroll-listener'
import Loader from './Loader';
import Images from './Images';
import styles from '../../styles/ImageContainer.module.css';
class ImageContainer extends React.Component{
   state={items:[],after:'',loading:false};
 
   componentDidMount(){
     this.getPosts();
   }
  
   getPosts= async ()=>{
     var res;
      if(this.state.after ==''){
      res=await axios.get('https://www.reddit.com/r/memes.json?limit=1000');
      }else{
        this.setState({loading:true});
      res=await axios.get('https://www.reddit.com/r/memes.json?limit=1000&after='+this.state.after);
      }
      const modifiedList=res.data.data.children.map((v,i)=>({
          src:v.data.thumbnail,
          thumbnail:v.data.thumbnail,
          title:v.data.title,
          width:3,height:4
      }));
      const newList=[...this.state.items,...modifiedList];
      this.setState({items:newList,after:res.data.data.after,loading:false});
   }

      render() {
        if(this.state.items.length<1)
        return <><Loader/></>;

      return( <div>

<Images photos={this.state.items}/>
{this.state.loading ? <Loader/>:null}
<BottomScrollListener onBottom={this.getPosts} />
      </div>)
      }
}
export default ImageContainer;

