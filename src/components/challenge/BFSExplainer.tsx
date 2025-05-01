
import { Card } from "@/components/ui/card";

const BFSExplainer = () => {
  return (
    <Card className="mt-4 p-4 bg-indigo-50 border border-indigo-200">
      <h4 className="text-md font-medium mb-2 text-indigo-800">Breadth-First Search (BFS) Explained</h4>
      
      <div className="space-y-3 text-sm text-indigo-700">
        <div className="mb-4">
          <h5 className="font-medium">Trees and Graphs: The Basics</h5>
          <p className="mt-1">
            <strong>Graphs</strong> are collections of nodes (or vertices) connected by edges. Think of a social network where people are nodes and friendships are edges.
          </p>
          <p className="mt-1">
            <strong>Trees</strong> are special types of graphs where nodes form a hierarchy - like a family tree or folder structure on your computer.
          </p>
          <div className="mt-2 p-2 bg-indigo-100 rounded-md">
            <p>In the Word Ladder problem, we can think of each word as a node, and two words are connected (have an edge between them) if they differ by exactly one letter.</p>
          </div>
        </div>
        
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
        
        <div className="mt-3 p-2 bg-indigo-100 rounded-md">
          <p className="font-medium">Real-world example:</p>
          <p>Imagine finding the shortest route on a map - BFS would explore all locations that are one step away, then two steps away, and so on - guaranteeing the shortest path when all steps have equal "cost".</p>
        </div>
      </div>
    </Card>
  );
};

export default BFSExplainer;
