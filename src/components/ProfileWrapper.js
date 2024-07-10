import Image from "next/image";
import Button from "../components/Button";

export default function ProfileWrapper() {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md w-80">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">About Me</h2>
                    <Image src="/cat.jpg" alt="person" className="h-48 w-full object-cover md:h-full md:w-48 rounded-full" width={320} height={320} />

                    <form>
                        <div className="mb-4">

                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Darren Lee"
                            />
                            <label htmlFor="yearofstudy" className="block text-sm font-medium text-gray-600">
                                Year of Study
                            </label>
                            <input
                                type="text"
                                id="yearofstudy"
                                name="yearofstudy"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="2"
                            />
                            <label htmlFor="major" className="block text-sm font-medium text-gray-600">
                               Major
                            </label>
                            <input
                                type="text"
                                id="major"
                                name="major"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Software Engineering"
                            />
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-600">
                                Bio
                            </label>
                            <textarea
                                rows="4"
                                id="bio"
                                name="bio"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="I love cycling, coding and reading books!"
                            />
                            <Button classname="" name="Update"></Button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}