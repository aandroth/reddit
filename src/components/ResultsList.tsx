import Post from '../models/Post';
import Result from './Result';
import './ResultsList.css'

interface Props {
    posts: Post[];
}

const ResultsList = ({posts}: Props) => {
  return (
    <div className='ResultsList'>
        <ul>
            {posts.map((post)=> (
                <Result post={post} key={post.data.url}/>
            ))}
        </ul>
    </div>
  )
};

export default ResultsList;
