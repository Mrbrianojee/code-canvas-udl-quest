
import { Challenge } from "../types";

export const lruCacheChallenge: Challenge = {
  id: "lru-cache",
  title: "LRU Cache",
  description: "Design and implement a data structure for a Least Recently Used (LRU) cache. It should support operations get and put.\n\nget(key) - Get the value of the key if the key exists in the cache, otherwise return -1.\nput(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least recently used item before inserting a new item.",
  difficulty: "hard",
  solutions: {
    javascript: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    
    // Get the value
    const value = this.cache.get(key);
    
    // Remove the key and re-insert it to mark it as most recently used
    this.cache.delete(key);
    this.cache.set(key, value);
    
    return value;
  }
  
  put(key, value) {
    // Remove the key if it already exists to update its position
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // If at capacity, remove the least recently used item (first item in Map)
    else if (this.cache.size >= this.capacity) {
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }
    
    // Add the key-value pair
    this.cache.set(key, value);
  }
}`,
    python: `class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.order = []  # To track order of usage
    
    def get(self, key):
        if key not in self.cache:
            return -1
        
        # Mark as recently used by moving to the end
        self.order.remove(key)
        self.order.append(key)
        
        return self.cache[key]
    
    def put(self, key, value):
        # If key exists, remove it first
        if key in self.cache:
            self.order.remove(key)
        # If at capacity, remove the least recently used item
        elif len(self.cache) >= self.capacity:
            lru_key = self.order.pop(0)  # Remove from front (least recently used)
            del self.cache[lru_key]
        
        # Add the new key-value pair
        self.cache[key] = value
        self.order.append(key)  # Add to end (most recently used)`
  },
  example: `const cache = new LRUCache(2);
cache.put(1, 1);        // cache is {1=1}
cache.put(2, 2);        // cache is {1=1, 2=2}
cache.get(1);           // returns 1
cache.put(3, 3);        // cache is {1=1, 3=3}, evicts key 2
cache.get(2);           // returns -1 (not found)
cache.put(4, 4);        // cache is {3=3, 4=4}, evicts key 1
cache.get(1);           // returns -1 (not found)
cache.get(3);           // returns 3
cache.get(4);           // returns 4`,
  categories: ["Data Structures", "Design", "Hash Tables"],
  createdAt: "2023-04-21",
  timeComplexity: "O(1) for both get and put operations",
  explanation: "This solution uses JavaScript's Map object (or a combination of dict and list in Python) to implement the LRU functionality.\n\nThe key insight is that we can use the Map's built-in order to implement the LRU functionality. When we access or insert an item, we delete it and re-add it to make it the most recently used.\n\nWhen we need to evict an item, we remove the first item in the Map (or list in Python), which is the least recently used item.",
  hints: [
    "In JavaScript, use a Map object to maintain insertion order of keys, which helps implement LRU behavior.",
    "For the get operation, after retrieving a value, you need to mark it as recently used by removing and re-adding it.",
    "For the put operation, first check if the key already exists. If it does, update it and mark it as recently used.",
    "If the key doesn't exist and the cache is at capacity, remove the least recently used item (first item in your Map).",
    "The JavaScript Map preserves insertion order, making the first item the oldest and the last item the most recent."
  ]
};
