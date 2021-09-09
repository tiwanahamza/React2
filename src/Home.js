import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Hamza');
    const [age, setAge] = useState(24);
    const handleClick= () => {
        setName('Mohsin');
        setAge('23');
    };
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is {age} years old.</p>
            <button onClick = {handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;
