
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  stars: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Lost 30 lbs in 6 months",
      content: "The nutrition plan from FitTargetHub completely transformed my eating habits. The meal plans were easy to follow and delicious! I've never felt better.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Torres",
      role: "Gained 15 lbs of muscle",
      content: "The workout plans are well-structured and challenging. I've seen more progress in 3 months than I did in a year of working out on my own.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Jennifer Kim",
      role: "Marathon runner",
      content: "As an athlete, the all-in-one plan has helped me optimize both my nutrition and training. My recovery time has improved and I've set several personal records!",
      stars: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="section-padding bg-fit-neutral-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">Success Stories</h2>
          <p className="mt-4 text-fit-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our members have achieved with FitTargetHub.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-fit-neutral-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-fit-neutral-800">{testimonial.name}</h4>
                  <p className="text-fit-neutral-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
