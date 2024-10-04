import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the structure for the subscription plan
interface SubscriptionPlan {
  type: string;
  plan: string;
  service: string;
  populaire: boolean;
  price: string;
  desc: string;
  benefits: string[];
}

// Define the context properties
interface SubscriptionContextProps {
  isSubscriptionOpen: boolean;
  setIsSubscriptionOpen: (value: boolean) => void;
  subscription: SubscriptionPlan | null;
  setSubscription: (plan: SubscriptionPlan) => void;
}

// Create the context
const SubscriptionContext = createContext<SubscriptionContextProps | undefined>(undefined);

// Create a provider component
export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [subscription, setSubscription] = useState<SubscriptionPlan | null>(null);

  // Side effect to handle body overflow based on isSubscriptionOpen
  useEffect(() => {
    if (isSubscriptionOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSubscriptionOpen]);

  return (
    <SubscriptionContext.Provider value={{ isSubscriptionOpen, setIsSubscriptionOpen, subscription, setSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

// Create a custom hook for easier use
export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};
