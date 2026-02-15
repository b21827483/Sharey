import { useClerk } from "@clerk/clerk-react"
import { features, pricingPlans, testimonials } from "../assets/data"
import CTASection from "../components/landing/CTASection"
import FeaturesSection from "../components/landing/FeaturesSection"
import HeroSection from "../components/landing/HeroSection"
import PricingSection from "../components/landing/PricingSection"
import TestimonialsSection from "../components/landing/TestimonialsSection"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Landing = () => {
    const {openSignIn, openSignUp} = useClerk();
    const {isSignedIn} = useClerk();
    const navigate = useNavigate(); 

    useEffect(() => {
        if (isSignedIn) {
            navigate("/dashboard");
        }
    }, [isSignedIn, navigate]);

    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
            <HeroSection openSignIn={openSignIn} openSignUp={openSignUp} />
            <FeaturesSection features={features}/>
            <PricingSection pricingPlans={pricingPlans} openSignUp={openSignUp} />
            <TestimonialsSection testimonials={testimonials} />
            <CTASection openSignUp={openSignUp} />
            <Footer />
        </div>
    )
}

export default Landing