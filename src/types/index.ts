import React from 'react';

export interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  label: string;
}

export interface Screenshot {
  id: string;
  title: string;
  subtitle: string;
  url: string;
}
