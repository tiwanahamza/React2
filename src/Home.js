import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // const [name, setName] = useState('Hamza');
    // const [age, setAge] = useState(24);
    // const handleClick= () => {
    //     setName('Mohsin');
    //     setAge('23');
    // };
    const [blogs, setBlogs] = useState([
        {title: "My new website", body: "lorem ipsum....", author: "Hamza", id: 1},
        {title: "Welcome Party!", body: "lorem ipsum....", author: "Mohsin", id: 2},
        {title: "Web Development", body: "lorem ipsum....", author: "Tiwana", id: 3}
    ]);

    const [name, setName] = useState('Tiwana');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };
    useEffect(() => {
        console.log("use effect ran");
        console.log(name);
    }, [name]);
    return ( 
        <div className="home">
            
            {/* <p>{ name } is {age} years old.</p>
            <button onClick = {handleClick}>Click Me</button> */}
            <BlogList  blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}/>
            <button onClick = {() => setName('Hamza')}>Change Name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;
