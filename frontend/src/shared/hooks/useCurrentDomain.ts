import { useState, useEffect } from 'react';

export function useCurrentDomain() {
  const [currentDomain, setCurrentDomain] = useState('');

  useEffect(() => {
    setCurrentDomain(window.location.origin);
  }, []);

  return currentDomain;
}