
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ChallengeHintsProps {
  hints?: string[];
}

const ChallengeHints = ({ hints }: ChallengeHintsProps) => {
  const [showHints, setShowHints] = useState(false);
  const [visibleHints, setVisibleHints] = useState<number>(0);
  
  if (!hints || hints.length === 0) {
    return null;
  }
  
  const showNextHint = () => {
    if (visibleHints < hints.length) {
      setVisibleHints(visibleHints + 1);
    }
  };

  const resetHints = () => {
    setVisibleHints(0);
    setShowHints(false);
  };
  
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Hints:</h4>
        <div className="flex gap-2">
          {showHints && visibleHints > 0 && (
            <Button 
              onClick={resetHints} 
              variant="outline" 
              size="sm" 
              className="text-xs"
            >
              Reset Hints
            </Button>
          )}
          <Button 
            onClick={() => setShowHints(!showHints)} 
            variant="outline" 
            size="sm" 
            className="text-xs"
          >
            {showHints ? "Hide Hints" : "Show Hints"}
          </Button>
        </div>
      </div>
      
      {showHints && (
        <div className="mt-2 space-y-2">
          {hints.slice(0, visibleHints).map((hint, index) => (
            <div 
              key={index} 
              className="p-3 bg-blue-50 border border-blue-200 rounded-md"
            >
              <p className="text-blue-800 font-medium text-sm mb-1">Hint {index + 1}:</p>
              <p className="text-blue-700 text-sm">{hint}</p>
            </div>
          ))}
          
          {visibleHints < hints.length && (
            <Button
              onClick={showNextHint}
              variant="ghost"
              size="sm"
              className="w-full border border-dashed border-blue-200 text-blue-600 hover:bg-blue-50 py-2 mt-2"
            >
              Show Next Hint ({visibleHints + 1} of {hints.length})
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ChallengeHints;
