import Banner from "../components/Banner/Banner";
import Header from "../components/Header";
import Speciality from "../components/Speciality";
import TopDoctors from "../components/TopDoctors";


const Home = () => {
    return (
        <div>
            <Header></Header>

            <Speciality></Speciality>

            <TopDoctors></TopDoctors>

            <Banner></Banner>

            
        </div>
    );
};

export default Home;