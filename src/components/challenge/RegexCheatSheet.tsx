
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const RegexCheatSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mt-4">
      <Button 
        onClick={() => setIsOpen(!isOpen)} 
        variant="outline"
        size="sm"
        className="w-full justify-start text-left mb-2"
      >
        <span>{isOpen ? "Hide" : "Show"} Regular Expression Cheat Sheet</span>
      </Button>
      
      {isOpen && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-4">
            <h4 className="font-medium mb-2 text-blue-800">Regular Expression Quick Reference</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-blue-700 mb-1">Character Classes</h5>
                <ul className="space-y-1">
                  <li><code className="bg-blue-100 px-1 rounded">.</code> - Any character except newline</li>
                  <li><code className="bg-blue-100 px-1 rounded">\w</code> - Word character [a-zA-Z0-9_]</li>
                  <li><code className="bg-blue-100 px-1 rounded">\d</code> - Digit [0-9]</li>
                  <li><code className="bg-blue-100 px-1 rounded">\s</code> - Whitespace character</li>
                  <li><code className="bg-blue-100 px-1 rounded">[abc]</code> - Any character in the set</li>
                  <li><code className="bg-blue-100 px-1 rounded">[^abc]</code> - Any character not in the set</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-700 mb-1">Quantifiers</h5>
                <ul className="space-y-1">
                  <li><code className="bg-blue-100 px-1 rounded">*</code> - 0 or more</li>
                  <li><code className="bg-blue-100 px-1 rounded">+</code> - 1 or more</li>
                  <li><code className="bg-blue-100 px-1 rounded">?</code> - 0 or 1 (optional)</li>
                  <li><code className="bg-blue-100 px-1 rounded">{"{n}"}</code> - Exactly n times</li>
                  <li><code className="bg-blue-100 px-1 rounded">{"{n,}"}</code> - n or more times</li>
                  <li><code className="bg-blue-100 px-1 rounded">{"{n,m}"}</code> - Between n and m times</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-700 mb-1">Common Patterns</h5>
                <ul className="space-y-1">
                  <li><code className="bg-blue-100 px-1 rounded">[a-z0-9]</code> - Alphanumeric characters</li>
                  <li><code className="bg-blue-100 px-1 rounded">[^a-zA-Z0-9]</code> - Non-alphanumeric characters</li>
                  <li><code className="bg-blue-100 px-1 rounded">^</code> - Start of string</li>
                  <li><code className="bg-blue-100 px-1 rounded">$</code> - End of string</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-700 mb-1">In JavaScript</h5>
                <ul className="space-y-1">
                  <li><code className="bg-blue-100 px-1 rounded">/pattern/</code> - Literal notation</li>
                  <li><code className="bg-blue-100 px-1 rounded">/pattern/g</code> - Global match</li>
                  <li><code className="bg-blue-100 px-1 rounded">/pattern/i</code> - Case-insensitive</li>
                  <li><code className="bg-blue-100 px-1 rounded">str.replace(/pattern/, 'new')</code> - Replace</li>
                  <li><code className="bg-blue-100 px-1 rounded">str.match(/pattern/)</code> - Find matches</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RegexCheatSheet;
