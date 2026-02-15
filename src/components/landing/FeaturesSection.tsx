import { ArrowUpCircle, Clock, CreditCard, FileText, Share2, Shield } from "lucide-react";

const FeaturesSection = ({features}: {features: any[]}) => {
    const renderIcon = (iconName: string, iconColor: string) => {
        const iconProps = {size: 24, className: iconColor};

        switch (iconName) {
            case "ArrowUpCircle":
                return <ArrowUpCircle {...iconProps} />;    
            case "Shield":
                return <Shield {...iconProps} />;
            case "Share2":
                return <Share2 {...iconProps} />;
            case "CreditCard":
                return <CreditCard {...iconProps} />;
            case "FileText":
                return <FileText {...iconProps} />;
            case "Clock":
                return <Clock {...iconProps} />;    
            default:
                return <FileText {...iconProps} />;
        }
    }

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Everything You Need to Share Files Securely
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Sharey offers a comprehensive set of features designed to make file sharing easy, secure, and efficient. From end-to-end encryption to seamless collaboration tools, we have everything you need to share your files with confidence.
                    </p>
                </div>
                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature: any, index: number) => (
                            <div key={index} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                    <div className="-mt-6">
                                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                                            {renderIcon(feature.iconName, feature.iconColor)}
                                        </div>
                                        <h3 className="mt-5 text-lg font-medium text-gray-900 tracking-tight ">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturesSection