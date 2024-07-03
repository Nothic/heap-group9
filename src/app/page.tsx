import Navbar from "@/components/Navbar";
import Placeholder from "../components/Placeholder";
import Carousel from "../components/Carousel";
import ProfileList from "../components/ProfilesList";

export default function Home(){
    return (
        <div>
            <Navbar></Navbar>
            <div>HOMEPAGE</div>
            {/* <Carousel>
                <Placeholder children="Person 1" desc="I am Ryan"></Placeholder>
                <Placeholder children="Person 2" desc="I am Yan Hui"></Placeholder>
                <Placeholder children="Person 3" desc="I am Kaung"></Placeholder>
                <Placeholder children="Person 4" desc="I am Hnin"></Placeholder>
                <Placeholder children="Person 5" desc="I am Nee"></Placeholder>
            </Carousel> */}
            <Placeholder name="Ryan" education="Singapore Management University" year="Sophomore" desc="Python Programming, OOP, React"/>
            
        </div>
    )
}
