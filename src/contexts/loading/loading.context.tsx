import React, { useContext, useState, createContext } from 'react';
import { LoadingProviderProps, LoadingStateProps } from './loading.types';

const LoadingContext = createContext<LoadingStateProps>({
  loading: false,
  setLoading: () => {},
});

const LoadingProvider: React.FunctionComponent<LoadingProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const value: LoadingStateProps = {
    loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

const useLoading = () => {
  return useContext(LoadingContext);
};

export { LoadingProvider, useLoading };
