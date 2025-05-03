
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC<{ items?: FAQItem[], title?: string }> = ({ 
  items,
  title = "Frequently Asked Questions" 
}) => {
  const defaultFAQs: FAQItem[] = items || [
    {
      question: "Can I switch plans later?",
      answer: "Absolutely! You can upgrade, downgrade, or switch between plans at any time. Any changes will be prorated and reflected in your next billing cycle."
    },
    {
      question: "Are the workouts beginner-friendly?",
      answer: "Yes, our workout plans are designed for all fitness levels. When you sign up, we'll ask about your experience level and adjust the workouts accordingly. We provide detailed instructions and videos for each exercise."
    },
    {
      question: "How customized are the meal plans?",
      answer: "Our meal plans are tailored to your goals, dietary restrictions, and preferences. You'll complete a comprehensive questionnaire when you sign up, and your nutrition coach will create a personalized plan based on your responses."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. We don't believe in long-term contracts or hidden fees. Simply go to your account settings and cancel with just a few clicks."
    },
    {
      question: "Do I need special equipment for the workouts?",
      answer: "Not necessarily. We offer home workouts that require minimal or no equipment, as well as gym-based routines. You'll be able to specify what equipment you have access to when setting up your plan."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient">
            {title}
          </h2>
          <p className="mt-4 text-fit-neutral-600 max-w-2xl mx-auto">
            Got questions? We have answers. If you don't see what you're looking for, feel free to contact our support team.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {defaultFAQs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium text-fit-neutral-800 hover:text-fit-green-700 hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-fit-neutral-600 pb-4 pt-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
