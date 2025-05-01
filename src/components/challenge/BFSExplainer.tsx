
import { Card } from "@/components/ui/card";

const BFSExplainer = () => {
  return (
    <Card className="mt-4 p-4 bg-indigo-50 border border-indigo-200">
      <h4 className="text-md font-medium mb-2 text-indigo-800">Breadth-First Search (BFS) Explained</h4>
      
      <div className="space-y-3 text-sm text-indigo-700">
        <p>
          <strong>What is BFS?</strong> Breadth-First Search is an algorithm for traversing or searching tree or graph data structures. 
          It starts at a chosen node and explores all neighbors at the current depth before moving on to nodes at the next depth level.
        </p>
        
        <p>
          <strong>How it works:</strong>
        </p>
        
        <ol className="list-decimal ml-5 space-y-1">
          <li>Start at a source node and add it to a queue</li>
          <li>Dequeue a node and examine it:
            <ul className="list-disc ml-5">
              <li>If it's the target node, we're done!</li>
              <li>If not, add all unvisited adjacent nodes to the queue and mark them as visited</li>
            </ul>
          </li>
          <li>Repeat until the queue is empty or the target is found</li>
        </ol>
        
        <p>
          <strong>When to use BFS:</strong>
        </p>
        <ul className="list-disc ml-5">
          <li>Finding the shortest path in an unweighted graph</li>
          <li>Level-order traversal of a tree</li>
          <li>Finding connected components</li>
          <li>Solving puzzles with the fewest moves</li>
        </ul>
        
        <p>
          <strong>Word Ladder Connection:</strong> In this challenge, each word is a node, and two words are connected (adjacent) 
          if they differ by exactly one letter. BFS helps us find the shortest transformation sequence from the start word to the target word.
        </p>
      </div>
    </Card>
  );
};

export default BFSExplainer;
