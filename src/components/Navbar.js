export default function Navbar() {
    return (
        <div>
            <div className="font-bold ">Groupie</div>
            <ul className="list-none flex bg-blue-900 ">
                <li className="p-2 hover:bg-blue-700"><a href="/">Home</a></li>
                <li className="p-2 hover:bg-blue-700"><a href="/dashboard">Classes</a></li>
                <li className="p-2 hover:bg-blue-700"><a href="/account">Account</a></li>
                <li className="p-2 hover:bg-blue-700"><a href="/login">Login</a></li>
            </ul>
        </div>
    )
}