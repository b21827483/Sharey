import { useUser } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";

const DasboardLayout = ({children, activeMenu}: {children: React.ReactNode, activeMenu: string}) => {
    const {user} = useUser();
    return (
        <div>
            <Navbar activeMenu={activeMenu} />
            {user && (
                <div className="flex">
                    <div className="max-[1080px]:hidden">
                        {/*Sidebar*/}
                        <SideMenu activeMenu={activeMenu} />
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