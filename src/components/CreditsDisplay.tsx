import { CreditCard } from "lucide-react";

const CreditsDisplay = ({ credits }: { credits: number }) => {
    return (
        <div className="flex items-center gap-1 bg-blue-50 px-3 py-1 5 rounded-full text-blue-700">
            <CreditCard size={16} />
            <span className="font-medium">{credits} Credits</span>
        </div>
    )
}

export default CreditsDisplay;