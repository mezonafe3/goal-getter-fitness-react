
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (type === 'login') {
        // Login logic would go here in a real app
        toast.success('Successfully logged in!');
      } else {
        // Signup logic would go here in a real app
        toast.success('Account created! Welcome to FitTargetHub!');
      }
      
      navigate('/');
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-fit-neutral-800">
          {type === 'login' ? 'Log in to your account' : 'Create your account'}
        </h2>
        <p className="text-fit-neutral-600 mt-2">
          {type === 'login' 
            ? 'Enter your credentials to access your account'
            : 'Sign up to start your fitness journey with us'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {type === 'signup' && (
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name"
              name="name"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email"
            name="email"
            type="email"
            placeholder="your-email@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            {type === 'login' && (
              <Link to="/forgot-password" className="text-sm text-fit-green-600 hover:text-fit-green-700">
                Forgot password?
              </Link>
            )}
          </div>
          <Input 
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full"
            minLength={8}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-fit-green-600 hover:bg-fit-green-700"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {type === 'login' ? 'Logging in...' : 'Creating account...'}
            </span>
          ) : (
            type === 'login' ? 'Log in' : 'Sign up'
          )}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-fit-neutral-600">
          {type === 'login' 
            ? "Don't have an account? " 
            : "Already have an account? "}
          <Link to={type === 'login' ? '/signup' : '/login'} className="text-fit-green-600 hover:text-fit-green-700 font-medium">
            {type === 'login' ? 'Sign up' : 'Log in'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
