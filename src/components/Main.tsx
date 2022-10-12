import { useEffect, useState } from 'react';
import Post from '../models/Post';
import { getPostsBySearchterm, getTrendingPosts } from '../services/PostsServices';
import './Main.css'
import ResultsList from './ResultsList';



const Main = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=> {
        console.log("got:"+searchTerm);
        if(searchTerm){
            console.log("search:"+searchTerm);
            getPostsBySearchterm(searchTerm)
            .then((response)=>setPosts(response.children));
        }
        else {
            console.log("No search term")
            getTrendingPosts().then((response)=>{setPosts(response.children)});
       }
    }, [searchTerm, posts]);

  return (
    <div className='Main'>
        <ResultsList posts={posts}/>
    </div>
  )
};

export default Main;
