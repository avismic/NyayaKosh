import { useState } from 'react';

const useReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return { isExpanded, toggleReadMore };
};

export default useReadMore;
