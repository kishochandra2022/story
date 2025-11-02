
import React from 'react';

interface StoryDisplayProps {
  story: string;
  isLoading: boolean;
}

const StoryDisplay: React.FC<StoryDisplayProps> = ({ story, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-700 min-h-[200px] flex items-center justify-center">
        <p className="text-gray-400 animate-pulse">The AI is weaving its magic...</p>
      </div>
    );
  }
  
  if (!story) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-700 min-h-[200px] flex items-center justify-center">
        <p className="text-gray-500 text-center">Your generated story will appear here. <br/> Let your imagination run wild!</p>
      </div>
    );
  }

  // Simple formatter to add paragraphs for newlines
  const formattedStory = story.split('\n').map((paragraph, index) => (
    <p key={index} className="mb-4 last:mb-0">
      {paragraph}
    </p>
  ));

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">Your Story</h3>
      <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
        {formattedStory}
      </div>
    </div>
  );
};

export default StoryDisplay;
