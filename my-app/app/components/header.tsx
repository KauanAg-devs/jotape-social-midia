import { ProfileAvatar } from "./profile-avatar";
import SearchIcon from "./search-icon";

export default function Header() {
    return (
        <header className="py-4 relative w-screen flex justify-between">
            <div></div>
            <div></div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-56 md:w-[25rem] lg:w-[35rem] h-10 pl-4 pr-10 border rounded-md" 
                />
                <SearchIcon 
                  className="absolute right-3 top-2 text-gray-400 cursor-pointer" 
                />
            </div>

            <div className="relative px-3">
                <ProfileAvatar 
                fillColor="gray" 
                strokeColor="gray" 
                size={35} 
                />
           </div>
        </header>
    )
}