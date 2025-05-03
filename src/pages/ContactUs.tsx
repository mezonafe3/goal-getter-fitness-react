
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-fit-green-50 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 heading-gradient">
            Get In Touch
          </h1>
          <p className="text-lg text-fit-neutral-700 max-w-2xl mx-auto">
            Have questions, feedback, or need assistance? We're here to help. Reach out to our team and we'll respond as soon as possible.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-fit-neutral-50 rounded-xl border border-fit-neutral-100 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-fit-green-100 rounded-full flex items-center justify-center mb-4 text-fit-green-600">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-fit-neutral-800 mb-2">Email Us</h3>
              <p className="text-fit-neutral-600 mb-2">For general inquiries:</p>
              <a href="mailto:info@fittargethub.com" className="text-fit-green-600 hover:text-fit-green-700">info@fittargethub.com</a>
              <p className="text-fit-neutral-600 mt-2 mb-2">For support:</p>
              <a href="mailto:support@fittargethub.com" className="text-fit-green-600 hover:text-fit-green-700">support@fittargethub.com</a>
            </div>
            
            <div className="p-6 bg-fit-neutral-50 rounded-xl border border-fit-neutral-100 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-fit-green-100 rounded-full flex items-center justify-center mb-4 text-fit-green-600">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-fit-neutral-800 mb-2">Call Us</h3>
              <p className="text-fit-neutral-600 mb-2">Customer Service:</p>
              <a href="tel:+11234567890" className="text-fit-green-600 hover:text-fit-green-700">+1 (123) 456-7890</a>
              <p className="text-fit-neutral-600 mt-4 mb-2">Hours of Operation:</p>
              <p className="text-fit-neutral-600">Monday - Friday: 9am - 5pm EST</p>
            </div>
            
            <div className="p-6 bg-fit-neutral-50 rounded-xl border border-fit-neutral-100 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-fit-green-100 rounded-full flex items-center justify-center mb-4 text-fit-green-600">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-fit-neutral-800 mb-2">Office Location</h3>
              <p className="text-fit-neutral-600">
                123 Fitness Street<br />
                Health City, HC 12345<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-fit-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8 border border-fit-neutral-100">
            <h2 className="text-2xl font-bold heading-gradient mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={formData.subject} onValueChange={handleSelectChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-fit-green-600 hover:bg-fit-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold heading-gradient mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <h3 className="text-lg font-semibold text-fit-neutral-800 mb-2">What are your response times?</h3>
              <p className="text-fit-neutral-600">We aim to respond to all inquiries within 24 hours during business days. Premium plan members receive priority support with faster response times.</p>
            </div>
            
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <h3 className="text-lg font-semibold text-fit-neutral-800 mb-2">How can I change or cancel my subscription?</h3>
              <p className="text-fit-neutral-600">You can manage your subscription through your account settings or by contacting our support team. We're happy to assist with any changes you need.</p>
            </div>
            
            <div className="bg-fit-neutral-50 p-6 rounded-lg border border-fit-neutral-100">
              <h3 className="text-lg font-semibold text-fit-neutral-800 mb-2">Do you offer refunds?</h3>
              <p className="text-fit-neutral-600">Yes, we offer a 14-day money-back guarantee on all our plans. If you're not satisfied with our service, contact us within 14 days of your purchase for a full refund.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ContactUs;
