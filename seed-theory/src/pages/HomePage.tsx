import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
        <div>
            <h1>Bring your home to life</h1>
            <p>Elevate your living space with a touch of nature.</p>
            <p>We offer a range of easy-care houseplants.</p>
            <Link to='/items'>Browse plants</Link>
            {/* Image to follow */}
        </div>
        </>
    )
}

export default HomePage;