import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import { TrendingUp, Zap, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const featureCards = [
  {
    icon: TrendingUp,
    title: 'Real-Time Data',
    description: 'Track metrics and trends as they happen with zero latency, ensuring you always have the latest insights.',
  },
  {
    icon: Zap,
    title: 'Instant Deployment',
    description: 'Go from development to production in minutes. Our streamlined process makes deployment lightning-fast.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is encrypted and secure. We adhere to the highest standards of privacy and protection.',
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-x-dark">
      <Navbar/>
      <main>
        <HeroSection/>
      </main>
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="text-center py-20 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-purple-50">
            Draft Tweet or Chat genrel <span className="text-primary-blue">Smoothly</span>
          </h1>
          <p className="text-xl text-x-subtext mb-8 max-w-3xl mx-auto">
            Built with LangGraph and powered by real-time APIs from Twitter and more.
            Generate, analyze, and chat with live data — instantly.
            Smooth, smart, and always up to date.
          </p>
          <button className="bg-primary-blue text-x-text font-semibold py-3 px-8 rounded-full shadow-lg shadow-primary-blue/50 hover:bg-primary-blue/80 transition-all duration-300 transform hover:scale-[1.02]" onClick={()=>navigate("/tweetcopilot")}>
            Get Started Now
            <ArrowRight className="w-5 h-5 inline-block ml-2" />
          </button>
        </section>

        {/* FEATURE CARDS SECTION (The new 'hero section' part) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}/>
            ))}
          </div>
        </section>
      </main>
    <Footer />
    </div>
  );
};

export default Home;