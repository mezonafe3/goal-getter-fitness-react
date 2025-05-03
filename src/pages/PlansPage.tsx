
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanCard from '@/components/PlanCard';
import CTASection from '@/components/CTASection';
import { Utensils, Dumbbell, Activity } from 'lucide-react';

const PlansPage: React.FC = () => {
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
      
      {/* Page Header */}
      <div className="bg-fit-green-50 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 heading-gradient">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg md:text-xl text-fit-neutral-700 max-w-3xl mx-auto">
            Whether you're focused on nutrition, workouts, or a holistic approach, we have a plan designed to help you reach your goals.
          </p>
        </div>
      </div>
      
      {/* Plan Comparison Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
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
      
      {/* Plan Features Section */}
      <section className="section-padding bg-fit-neutral-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 heading-gradient">Detailed Plan Features</h2>
          
          {/* Nutrition Plan */}
          <div className="mb-12 p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-fit-green-700 mb-6">Nutrition Plan Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-fit-neutral-800 mb-2">What's Included:</h4>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Weekly customized meal plans based on your preferences and goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Complete grocery shopping lists for each week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Nutrition education and guidance to help you develop healthy eating habits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Access to our extensive recipe database with 500+ healthy meals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Calorie and macro tracking tools to monitor your intake</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-fit-neutral-800 mb-2">Perfect For:</h4>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>People looking to improve their eating habits and relationship with food</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>Those with specific weight goals (loss, gain, or maintenance)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>Anyone who wants to fuel their body optimally for health or performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>Individuals with busy schedules who want simplified meal planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Workout Plan */}
          <div className="mb-12 p-6 bg-white rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-fit-green-700 mb-6">Workout Plan Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-fit-neutral-800 mb-2">What's Included:</h4>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Tailored workout programs designed for your specific goals and fitness level</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>HD video demonstrations of each exercise with proper form guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Progress tracking tools to monitor your improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Quarterly fitness assessments to adjust your program as needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Access to our comprehensive workout library with 200+ exercises</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-fit-neutral-800 mb-2">Perfect For:</h4>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>Individuals looking to start or enhance their fitness journey</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>People who want guidance on proper exercise form and technique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>Those needing structure and accountability in their workouts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>Anyone looking to build strength, improve endurance, or enhance mobility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* All-In-One Plan */}
          <div className="p-6 bg-white rounded-xl shadow-sm border-2 border-fit-green-200">
            <h3 className="text-2xl font-bold text-fit-green-700 mb-6">All-In-One Plan Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-fit-neutral-800 mb-2">What's Included:</h4>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Everything in both the Nutrition and Workout plans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Monthly 1:1 coaching sessions with our certified fitness experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Premium recipe collection including gourmet healthy options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Exclusive content including specialized workouts and nutrition guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Priority support with 24-hour response guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">✓</span>
                    <span>Monthly progress reports with personalized adjustment recommendations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-fit-neutral-800 mb-2">Perfect For:</h4>
                <ul className="space-y-2 text-fit-neutral-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>Those serious about making comprehensive lifestyle changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>People who want an integrated approach to fitness and nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>Individuals seeking personalized guidance and accountability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>Anyone looking to maximize results with expert coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-fit-green-500">→</span>
                    <span>Those who value comprehensive support in their fitness journey</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </>
  );
};

export default PlansPage;
