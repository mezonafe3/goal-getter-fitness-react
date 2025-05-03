
import React from 'react';
import { CheckCircle, Clock, BarChart3 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <CheckCircle className="h-10 w-10 text-fit-green-500 mb-3" />,
      title: "Choose Your Plan",
      description: "Select a nutrition plan, workout plan, or combine both for maximum results."
    },
    {
      icon: <Clock className="h-10 w-10 text-fit-green-500 mb-3" />,
      title: "Get Customized Content Weekly",
      description: "Receive personalized meal plans and workout routines tailored to your specific goals."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-fit-green-500 mb-3" />,
      title: "Track Your Progress",
      description: "Use our intuitive tools to monitor your improvements and stay motivated."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">How It Works</h2>
          <p className="mt-4 text-fit-neutral-600 max-w-2xl mx-auto">
            Getting started with FitTargetHub is simple. Follow these three steps to begin your fitness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">
                {step.title}
              </h3>
              <p className="text-fit-neutral-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
