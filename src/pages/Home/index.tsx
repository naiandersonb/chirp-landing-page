import { Benefits } from '../../components/Benefits';
import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';
import { Navbar } from '../../components/Navbar';
import { Price } from '../../components/Price';
import { Testimonials } from '../../components/Testimonials';

import './styles.scss';

export function Home() {
    return (
        <section id="home">
            <div className="container_hero">
                <div className="container_hero_content">
                    <Navbar />
                    <Hero />
                    <Benefits />
                </div>
                <Testimonials />
                <Price/>
                <Footer/>
            </div>
        </section>
    )
}