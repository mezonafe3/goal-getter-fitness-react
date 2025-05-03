
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-extrabold tracking-tight">
        <span className="text-fit-green-700">FitTarget</span>
        <span className="text-fit-lime-600">Hub</span>
      </span>
    </Link>
  );
};

export default Logo;
