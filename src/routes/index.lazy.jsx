import { createLazyFileRoute } from '@tanstack/react-router';
import HeroSection from '../components/HeroSection';
import FeaturedCourses from '../components/FeaturedCourses';
import TestimonialCards from '../components/TestimonialCards';
import UpcomingWebinars from '../components/UpcomingWebinars';
import Footer from '../components/Footer';
import { WhyChooseUs } from '../components/WhyChooseUs';

export const Route = createLazyFileRoute('/')({
    component: HomePage,
});

function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturedCourses />
            <WhyChooseUs />
            <TestimonialCards />
            <UpcomingWebinars />
            <Footer />
        </>
    );
}
