import DarkModeButton from "@/components/DarkModeButton";
export default function Navbar() {
    return (
        <div className="flex w-screen items-center bg-blue-700">
            <div className="font-bold p-2">Groupie</div>
            <ul className="list-none flex justify-end w-full items-center">
                <li><DarkModeButton></DarkModeButton></li>
                <li className="p-2 hover:bg-blue-700"><a href="/">Home</a></li>
                <li className="p-2 hover:bg-blue-700"><a href="/dashboard">Classes</a></li>
                <li className="p-2 hover:bg-blue-700"><a href="/account">Account</a></li>
                <li className="p-2 bg-amber-500 hover:bg-amber-700"><a href="/login">Login</a></li>

            </ul>

        </div>
    )
}