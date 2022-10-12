import axios from "axios";
import PostResponse from "../models/PostResponse";

export const getTrendingPosts = (): Promise<PostResponse> => {
    return axios
    .get("https://www.reddit.com/r/aww.json", {})                    
    .then((response)=>{
        //console.log(response.data.data);
        return response.data.data;
    })
}

export const getPostsBySearchterm = (term: string): Promise<PostResponse> => {
    return axios
    .get(`https://www.reddit.com/r/${encodeURIComponent(term)}.json`, {})        
    .then((response)=>{
        return response.data;
    })
}