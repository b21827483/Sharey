import { useUser } from "@clerk/clerk-react";
import Navbar from "../components/landing/Navbar";

const DasboardLayout = ({children}: {children: React.ReactNode}) => {
    const {user} = useUser();
    return (
        <div>
            <Navbar />
            {user && (
                <div className="flex">
                    <div className="max-[1080px]:hidden">
                        {/*Sidebar*/}
                        side menu
                    </div>
                    <div className="grow mx-5">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DasboardLayout;