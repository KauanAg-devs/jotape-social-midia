import { ProfileAvatar } from "./profile-avatar";
import SearchIcon from "./search-icon";

export default function Header() {
    return (
        <header className="py-4 relative w-screen flex justify-between bg-white">
            <div></div>

            <div className="relative">
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="w-72 md:w-[25rem] lg:w-[35rem] h-12 px-4 py-2 border-0 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 placeholder:opacity-70"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors">
                    <SearchIcon className="w-5 h-5" />
                </button>
            </div>

            <div className="relative px-3">
                <ProfileAvatar 
                fillColor="gray" 
                strokeColor="gray" 
                size={48} 
                />
           </div>
        </header>
    )
}