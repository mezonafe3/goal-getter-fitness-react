
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  bgClass?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to crush your fitness goals?",
  description = "Join thousands of members who have transformed their lives with our customized plans.",
  buttonText = "Join FitTargetHub Now",
  buttonLink = "/signup",
  bgClass = "bg-gradient-to-r from-fit-green-600 to-fit-lime-500"
}) => {
  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <Link to={buttonLink}>
          <Button size="lg" className="bg-white text-fit-green-700 hover:bg-fit-neutral-100">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
