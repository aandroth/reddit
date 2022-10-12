import Post from '../models/Post';
import './Result.css'


interface Props {
  post: Post;
}

const Result = ({post}: Props) => {
  return (
    <li className='Result'>
        <h2>{post.data.title}</h2>
        <img src={post.data.thumbnail} alt={post.data.title} />
        <a href={post.data.url}>Link to original</a>
    </li>
  )
};

export default Result;
