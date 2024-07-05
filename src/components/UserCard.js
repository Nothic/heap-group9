import Image from "next/image";

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
                </div>
            </div>
        </div>

    );
}