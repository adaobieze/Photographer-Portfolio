import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Feedback from './Feedback';

const FeedbackSection = () => {
  const feedbackItems = useMemo(
    () => [
      {
        text: "Thanks for capturing my wedding so beautifully. It's an amazing experience every time I go through the albums",
        author: 'John Doe',
        photo: 'https://images.unsplash.com/photo-1606490208247-b65be3d94cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXxGUWlmclNwdGFpNHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        text: 'Amazing service. Highly recommended!',
        author: 'Joshua Smith',
        photo: 'https://images.unsplash.com/photo-1621788455015-e48161cb187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      },
      {
        text: 'That studio session was so much fun!',
        author: 'Samantha Benedict',
        photo: 'https://images.unsplash.com/photo-1612904372219-885abc44dfa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      },
      // Add more feedback items as needed
    ],
    []
  );

  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  const handlePrevious = useCallback(() => {
    setCurrentFeedbackIndex((prevIndex) => (prevIndex === 0 ? feedbackItems.length - 1 : prevIndex - 1));
  }, [feedbackItems]);

  const handleNext = useCallback(() => {
    setCurrentFeedbackIndex((prevIndex) => (prevIndex === feedbackItems.length - 1 ? 0 : prevIndex + 1));
  }, [feedbackItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [handleNext]);

  const currentFeedback = feedbackItems[currentFeedbackIndex];

  return (
    <div id='feedback' className="p-20 bg-primary/50 mobile:p-10 mobile:h-screen">
      <h2 className="text-3xl font-semibold uppercase text-white text-center">FEEDBACK</h2>
      <div className="flex justify-between transition-all duration-500 ease-in-out text-white">
        <button className="font-semibold text-3xl mobile:hidden" onClick={handlePrevious}>
          &#10229;
        </button>
        <Feedback text={currentFeedback.text} author={currentFeedback.author} photo={currentFeedback.photo} />
        <button className="font-semibold text-3xl mobile:hidden" onClick={handleNext}>
          &#10230;
        </button>
      </div>
    </div>
  );
};

export default FeedbackSection;
