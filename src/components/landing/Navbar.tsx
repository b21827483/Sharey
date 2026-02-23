import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Menu, Share2, Wallet, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    return (
        <div className="flex items-center justify-between ga5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-4 sm:px-7 sticky top-0 z-30">
            <div className="flex items-center gap-5">
                <button
                    onClick={() => setOpenSideMenu(!openSideMenu)}
                    className="block lg:hidden text-black hover:bg-gray-100 p-1 rounded transition-colors">
                        {openSideMenu ? (
                            <X className="text-2xl" />
                        ) : (
                            <Menu className="text-2xl" />
                        )}
                </button>

                <div className="flex items-center gap-2">
                    <Share2 className="text-blue-600" />
                     <span className="text-lg font-medium text-black truncate">Sharey</span>
                </div>
            </div>
            <SignedIn>
                <div className="flex items-center gap-4">
                    <Link to="/subscription">
                        <Wallet/>
                    </Link>
                    <div className="relative pt-2">
                        <UserButton />
                    </div>
                </div>
            </SignedIn>
            
        </div>
    )
}

export default Navbar;