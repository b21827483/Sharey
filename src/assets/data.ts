export const features = [
    {
        iconName: "ArrowUpCircle",
        iconColor: "text-purple-500",
        title: "Easy File Upload",
        description: "Upload your files with a simple and intuitive interface."
    },
    {
        iconName: "Shield",
        iconColor: "text-green-500",
        title: "Secure Storage",
        description: "Your files are stored securely with end-to-end encryption."
    },
    {
        iconName: "Share2",
        iconColor: "text-purple-500",
        title: "Simple Sharing",
        description: "Share your files easily with customizable links and permissions."
    },
    {
        iconName: "CreditCard",
        iconColor: "text-orange-500",
        title: "Flexible Credits",
        description: "Pay as you go with our credit-based system for maximum flexibility."
    },
    {
        iconName: "FileText",
        iconColor: "text-red-500",
        title: "File Management",
        description: "Organize and manage your files with our user-friendly dashboard."
    },
    {
        iconName: "Clock",
        iconColor: "text-indigo-500",
        title: "Transaction History",
        description: "Keep track of all your uploads, downloads, and payments in one place."
    }
];

export interface PricingPlan {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
    {
        name: "Free",
        price: "0",
        description: "Basic plan with limited features.",
        features: [
            "Up to 5 files",
            "Basic file management",
            "Email support"
        ],
        cta: "Get Started",
        highlighted: false
    },
    {
        name: "Pro",
        price: "9.99",
        description: "Advanced plan for professionals.",
        cta: "Upgrade Now",
        highlighted: true,
        features: [
            "Unlimited files",
            "Advanced file management",
            "Enhanced sharing options"
        ]
    },
    {
        name: "Enterprise",
        price: "29.99",
        description: "Comprehensive plan for businesses.",
        cta: "Contact Sales",
        highlighted: false,
        features: [
            "Unlimited files",
            "Advanced file management",
            "Enhanced sharing options",
            "Priority support"
        ]
    }
];

export interface Testimonial {
    name: string;
    role: string;
    avatarUrl: string;
    company: string;
    quote: string;
    rating: number;
};

export const testimonials = [
    {
        name: "Alice Johnson",
        role: "Freelancer",
        avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
        company: "Creative Solutions",
        quote: "This service has revolutionized the way I manage my files. It's fast, secure, and incredibly easy to use!",
        rating: 5
    },
    {
        name: "Mark Thompson",
        role: "Project Manager",
        avatarUrl: "https://randomuser.me/api/portraits/men/36.jpg",
        company: "Tech Innovators",
        quote: "The Pro plan offers fantastic features that have greatly improved our team's productivity. Highly recommended!",
        rating: 4   
    },
    {
        name: "Sophie Lee",
        role: "Entrepreneur",
        avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg",  
        company: "Startup Hub",
        quote: "As a business owner, I appreciate the security and flexibility this service provides. The Enterprise plan is worth every penny.",
        rating: 5
    },
    {
        name: "David Kim",
        role: "Developer",
        avatarUrl: "https://randomuser.me/api/portraits/men/22.jpg",
        company: "CodeCrafters",
        quote: "The user interface is intuitive and the file sharing options are top-notch. It has made collaboration with my team so much easier.",
        rating: 4
    },
    {
        name: "Emma Wilson",
        role: "Designer",
        avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg",
        company: "Design Studio",
        quote: "I love how secure and reliable this service is. It gives me peace of mind knowing my files are safe.",
        rating: 5
    }
];