interface Data {
    url: string;
    title: string;
    thumbnail?: string;
}

export default interface Post {
    data: Data;
}