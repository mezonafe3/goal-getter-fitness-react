
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FreeResources from '@/components/FreeResources';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import PlanCard from '@/components/PlanCard';
import { Utensils, Dumbbell, Activity } from 'lucide-react';

const Index: React.FC = () => {
  const plans = [
    {
      title: "Nutrition Plan",
      description: "Customized meal plans and nutrition guidance",
      price: "$29.99",
      icon: <Utensils size={32} />,
      features: [
        "Weekly personalized meal plans",
        "Grocery shopping lists",
        "Nutritional guidance",
        "Recipe collection",
        "Calorie and macro tracking"
      ],
      path: "/plans/nutrition",
      popular: false
    },
    {
      title: "Workout Plan",
      description: "Structured workouts for your fitness goals",
      price: "$29.99",
      icon: <Dumbbell size={32} />,
      features: [
        "Personalized workout routines",
        "Video exercise demonstrations",
        "Progress tracking tools",
        "Fitness assessments",
        "Access to workout library"
      ],
      path: "/plans/workout",
      popular: false
    },
    {
      title: "All-In-One Plan",
      description: "Complete fitness and nutrition solution",
      price: "$49.99",
      icon: <Activity size={32} />,
      features: [
        "Everything in Nutrition & Workout plans",
        "1:1 coaching sessions monthly",
        "Premium recipe collection",
        "Exclusive content",
        "Priority support"
      ],
      path: "/plans/all-in-one",
      popular: true
    }
  ];
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="heading-gradient">Personalized Fitness &</span>
                <br />
                <span className="heading-gradient">Nutrition Plans</span>
              </h1>
              <p className="text-lg md:text-xl text-fit-neutral-700 mb-8">
                Customized workout routines and meal plans designed specifically for your goals. Take the guesswork out of your fitness journey.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-fit-green-600 hover:bg-fit-green-700 text-white font-medium px-8">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/plans">
                  <Button size="lg" variant="outline" className="border-fit-green-600 text-fit-green-700 hover:bg-fit-green-50">
                    Explore Plans
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-fit-lime-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-fit-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
                <img
                  src="public/lovable-uploads/80a5e2a2-fb8a-4647-a9fb-265cc2c405e9.png"
                  alt="Fitness target concept"
                  className="relative z-10 rounded-xl shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Plans Section */}
      <section className="section-padding bg-fit-neutral-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Choose Your Plan</h2>
            <p className="mt-4 text-fit-neutral-600 max-w-2xl mx-auto">
              Select the plan that best fits your goals. All plans come with a 14-day money-back guarantee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                description={plan.description}
                price={plan.price}
                features={plan.features}
                icon={plan.icon}
                popular={plan.popular}
                path={plan.path}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Free Resources Section */}
      <FreeResources />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </>
  );
};

export default Index;
