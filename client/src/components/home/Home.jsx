import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

import CTA from "./CTA";
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";

export default function Home() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="home">
            <Hero />

            <FeaturedProducts />

            {!isAuthenticated && <CTA />}
        </div>
    );
}
