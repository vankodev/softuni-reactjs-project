import CTA from "./CTA";
import FeturedProducts from "./FeaturedProducts";
import Hero from "./Hero";

export default function Home() {
    return (
        <div className="home">
            <Hero />

            <FeturedProducts />

            <CTA />
        </div>
    );
}
