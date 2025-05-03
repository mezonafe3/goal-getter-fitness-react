
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlanCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  path: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  price,
  features,
  icon,
  popular,
  path
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 flex flex-col h-full plan-hover ${
      popular ? 'border-2 border-fit-green-500 relative' : 'border border-gray-200'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-fit-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className="mx-auto w-16 h-16 flex items-center justify-center bg-fit-green-100 rounded-full text-fit-green-700">
          {icon}
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
      
      <div className="text-center mb-6">
        <span className="text-4xl font-extrabold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">/month</span>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-fit-green-500 shrink-0 mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Link to={path}>
          <Button className={`w-full ${
            popular 
              ? 'bg-fit-green-600 hover:bg-fit-green-700' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}>
            Choose Plan
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PlanCard;
