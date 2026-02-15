import { features, pricingPlans, testimonials } from "../assets/data"
import CTASection from "../components/landing/CTASection"
import FeaturesSection from "../components/landing/FeaturesSection"
import HeroSection from "../components/landing/HeroSection"
import PricingSection from "../components/landing/PricingSection"
import TestimonialsSection from "../components/landing/TestimonialsSection"
import Footer from "./Footer"

const Landing = () => {
    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
            <HeroSection />
            <FeaturesSection features={features}/>
            <PricingSection pricingPlans={pricingPlans}/>
            <TestimonialsSection testimonials={testimonials} />
            <CTASection />
            <Footer />
        </div>
    )
}

export default Landing