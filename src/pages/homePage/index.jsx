import BlogItem from "../../components/BlogItem"
import { useEffect, useState } from "react"
import axios from "axios"
const HomePage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/post')
                // console.log(response?.data)
                setPosts(response?.data)
            } catch (error) {
                console.error('Error fetching posts:', error)
            }
        }
        fetchPosts()
    }, [])
    console.log("posts", posts)
    return (
        <>
            <div className="container">
                {posts.map((item, index) => (
                    <BlogItem key={index} item={item} />
                )
                )}
            </div>
        </>
    )
}

export default HomePage