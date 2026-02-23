import { UserButton } from "@clerk/clerk-react";
import DasboardLayout from "../layout/DashboardLayout";

const Dashboard = () => {
    return (
        <DasboardLayout>
            <div>
                <UserButton />
            </div>
        </DasboardLayout>
    )
}

export default Dashboard;   