
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const FreeResources: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">
            Free Resources
          </h2>
          <p className="mt-4 text-fit-neutral-600 max-w-2xl mx-auto">
            Try a taste of what we offer with our free sample plans and resources. No commitment required!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-fit-green-50 rounded-lg p-6 border border-fit-green-100">
            <div className="h-12 w-12 bg-fit-green-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-fit-green-600" />
            </div>
            <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">3-Day Sample Meal Plan</h3>
            <p className="text-fit-neutral-600 mb-4">Get started with our 3-day sample meal plan, complete with recipes and nutrition information.</p>
            <Button className="bg-fit-green-600 hover:bg-fit-green-700">
              <Download className="mr-2 h-4 w-4" /> Download Free
            </Button>
          </div>
          
          <div className="bg-fit-lime-50 rounded-lg p-6 border border-fit-lime-100">
            <div className="h-12 w-12 bg-fit-lime-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-fit-lime-600" />
            </div>
            <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">Beginner Workout Guide</h3>
            <p className="text-fit-neutral-600 mb-4">Learn the fundamentals of effective workouts with our beginner's guide to fitness.</p>
            <Button className="bg-fit-lime-600 hover:bg-fit-lime-700">
              <Download className="mr-2 h-4 w-4" /> Download Free
            </Button>
          </div>
          
          <div className="bg-fit-neutral-50 rounded-lg p-6 border border-fit-neutral-100 md:col-span-2 xl:col-span-1">
            <div className="h-12 w-12 bg-fit-neutral-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-fit-neutral-600" />
            </div>
            <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">Fitness Tracker Template</h3>
            <p className="text-fit-neutral-600 mb-4">Track your progress with our easy-to-use fitness tracker template. Set goals and monitor improvements.</p>
            <Button className="bg-fit-neutral-600 hover:bg-fit-neutral-700">
              <Download className="mr-2 h-4 w-4" /> Download Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
