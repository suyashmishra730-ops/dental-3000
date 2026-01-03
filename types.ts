import React, { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  metric: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
}