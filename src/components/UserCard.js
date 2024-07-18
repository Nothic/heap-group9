import Image from "next/image";
import Button from "./Button";

export default function UserCard(){
    return (
        <div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <Image src="/person.png" alt="person" className="h-48 w-full object-scale-down md:h-full md:w-48" width={320} height={320} />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">William Lee</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Information
                            Systems</a>
                        <p className="mt-2 text-slate-500">I like reading and playing the guitar sometimes. Hit me up if
                            you want someone skilled in Java!</p>
                    </div>
                    <div>
                    <a
                    href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Connect
                        <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                        >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
        </div>

    );
}