import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    // const [name, setName] = useState('Hamza');
    // const [age, setAge] = useState(24);
    // const handleClick= () => {
    //     setName('Mohsin');
    //     setAge('23');
    // };
    

    // const [name, setName] = useState('Tiwana');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // };
    
    return ( 
        <div className="home">
            {/* <p>{ name } is {age} years old.</p>
            <button onClick = {handleClick}>Click Me</button> */} 
            { error && <div> {error} </div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList  blogs = {blogs} title = "All Blogs!" />}
            {/* <button onClick = {() => setName('Hamza')}>Change Name</button>
            <p>{ name }</p> */}
        </div>
     );
}
 
export default Home;
