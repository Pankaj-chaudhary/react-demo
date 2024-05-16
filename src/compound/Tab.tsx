import React from 'react';

export interface TabProps {
    children: React.ReactNode;
    label: string;
  }

export const Tab = ({ children }: TabProps): JSX.Element => {
  return <>{children}</>;
};