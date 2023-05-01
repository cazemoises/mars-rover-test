import { HomeStyles } from "./Home.styles";

const Home = () => {

    return (

        <HomeStyles.Container>

            <HomeStyles.Title>Rover Mars Mission</HomeStyles.Title>
            <HomeStyles.Subtitle>Control your missions like never seen before.</HomeStyles.Subtitle>
            <HomeStyles.Button to={"/projects"}>Start</HomeStyles.Button>

            <HomeStyles.Copyright>Copyright &#169;, 2023 Moises Cazé</HomeStyles.Copyright>

        </HomeStyles.Container>     

    );

}

export default Home;