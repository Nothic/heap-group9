import ClassGrid from "@/components/ClassGrid";
import Navbar from "@/components/Navbar";
import UserGrid from "@/components/UserGrid";

export default function Home(){
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>

            <ClassGrid></ClassGrid>
        </div>
    )
}
