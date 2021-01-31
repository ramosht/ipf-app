import React from 'react';

export interface LoadingProviderProps {
  children: React.ReactNode;
}

export interface LoadingStateProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<any>>;
}
