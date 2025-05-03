
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/AuthForm';

const SignupPage: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <section className="py-16 bg-fit-neutral-50 min-h-[calc(100vh-6rem)]">
        <div className="container mx-auto px-4">
          <AuthForm type="signup" />
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default SignupPage;
