
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Clock, Award, Users, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Nutrition Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Sarah has a Ph.D. in Nutritional Sciences and has helped thousands of clients transform their relationship with food over her 15-year career."
    },
    {
      name: "Michael Rodriguez",
      role: "Head Fitness Coach",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Michael is an NSCA-certified strength coach with experience training professional athletes and everyday fitness enthusiasts alike."
    },
    {
      name: "Jennifer Lee",
      role: "Wellness Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Jennifer specializes in creating holistic wellness programs that combine fitness, nutrition, and mindfulness practices."
    },
    {
      name: "David Thompson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "David founded FitTargetHub after his own transformative fitness journey, with the mission of making personalized fitness accessible to everyone."
    }
  ];

  const values = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Sustainable Results",
      description: "We focus on long-term success through sustainable habits, not quick fixes. Our approach creates lasting change."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Guidance",
      description: "All our programs are created by certified professionals with years of experience in their respective fields."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalization",
      description: "We believe there's no one-size-fits-all approach to fitness. Every plan is tailored to your unique needs and goals."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Holistic Wellness",
      description: "We consider all aspects of health, from nutrition and exercise to recovery and mental wellbeing."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-fit-neutral-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 heading-gradient">
            Our Mission & Story
          </h1>
          <p className="text-lg md:text-xl text-fit-neutral-700 max-w-3xl mx-auto">
            At FitTargetHub, we're committed to providing personalized fitness and nutrition solutions that help you achieve your goals and transform your life.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <img 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our story" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold heading-gradient mb-6">Our Story</h2>
              <p className="text-fit-neutral-700 mb-4">
                FitTargetHub was founded in 2019 with a simple mission: to make personalized fitness and nutrition accessible to everyone. Our founder, David Thompson, struggled for years trying to find a fitness solution that worked for his unique needs and busy schedule.
              </p>
              <p className="text-fit-neutral-700 mb-4">
                After transforming his own health through personalized nutrition and workout plans, David assembled a team of top fitness and nutrition experts to create a platform that could provide the same level of customization to others.
              </p>
              <p className="text-fit-neutral-700">
                Today, FitTargetHub has helped thousands of members worldwide achieve their goals through science-based, personalized approaches to health and fitness. We're proud to be part of so many incredible transformation journeys.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-fit-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold heading-gradient mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-fit-neutral-100">
                <div className="h-12 w-12 bg-fit-green-100 rounded-full flex items-center justify-center mb-4 text-fit-green-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-fit-neutral-800 mb-2">{value.title}</h3>
                <p className="text-fit-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold heading-gradient mb-12 text-center">Meet Our Expert Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-fit-neutral-50 rounded-xl overflow-hidden shadow-sm border border-fit-neutral-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-fit-neutral-800">{member.name}</h3>
                  <p className="text-fit-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-fit-neutral-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-fit-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-fit-green-600 mb-2">10,000+</div>
              <p className="text-fit-neutral-700 font-medium">Members Worldwide</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-fit-green-600 mb-2">95%</div>
              <p className="text-fit-neutral-700 font-medium">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-fit-green-600 mb-2">15+</div>
              <p className="text-fit-neutral-700 font-medium">Expert Trainers & Nutritionists</p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to join our community?"
        description="Start your fitness journey with guidance from our expert team."
      />
      
      <Footer />
    </>
  );
};

export default AboutUs;
