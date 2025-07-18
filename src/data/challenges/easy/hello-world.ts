
import { Challenge } from '../types';

export const helloWorldChallenge: Challenge = {
  id: "hello-world",
  title: "Hello World Variations",
  description: "The first program most people learn in a new programming language is the 'Hello World' program. It's a simple code that shows the message 'Hello World' on your screen. Here are some easy and fun ways to change up the Hello World program:\n\n1. Try It in a Different Language\nYou can write 'Hello World' in another language, like:\n- Spanish - 'Hola Mundo'\n- French - 'Bonjour le monde'\n- Japanese - 'Kon'nichiwa sekai'\n\n2. Make It About You\nChange 'Hello World' to 'Hello [Your Name]'. Just replace [Your Name] with your actual name.\n\n3. Say More Than Hello\nAdd a new line to say 'Hello World' and then 'Have a nice day!' right after.\n\n4. Create a Picture\nYou can also use letters and symbols to draw something.\n\n5. Do It Over and Over\nWrite a loop in your code to print 'Hello World' 10 times.",
  difficulty: "easy",
  solutions: {
    javascript: `// JavaScript
function helloWorld() {
  console.log("Hello, World!");
}

// Different language
function holaMundo() {
  console.log("Hola Mundo!");
}

// Personalized greeting with template literals (modern)
function helloName(name) {
  console.log(\`Hello, \${name}!\`);
}

// Personalized greeting with concatenation (traditional)
function helloNameConcat(name) {
  console.log("Hello, " + name + "!");
}

// Multiple lines
function helloWorldPlus() {
  console.log("Hello, World!");
  console.log("Have a nice day!");
}

// Print multiple times
function helloWorldLoop() {
  for (let i = 0; i < 10; i++) {
    console.log("Hello, World!");
  }
}`,
    python: `# Python 
def hello_world():
    print("Hello, World!")

# Different language
def hola_mundo():
    print("Hola Mundo!")

# Personalized greeting with f-strings (modern)
def hello_name(name):
    print(f"Hello, {name}!")

# Personalized greeting with concatenation (traditional)
def hello_name_concat(name):
    print("Hello, " + name + "!")

# Multiple lines
def hello_world_plus():
    print("Hello, World!")
    print("Have a nice day!")

# Print multiple times
def hello_world_loop():
    for i in range(10):
        print("Hello, World!")`
  },
  categories: ["Fundamentals", "Syntax"],
  createdAt: "2023-04-15",
  example: `helloWorld(); // Output: Hello, World!
holaMundo(); // Output: Hola Mundo!
helloName("Alice"); // Output: Hello, Alice! (using template literals)
helloNameConcat("Bob"); // Output: Hello, Bob! (using string concatenation)
helloWorldPlus(); // Output: Hello, World! followed by Have a nice day!
helloWorldLoop(); // Prints Hello, World! 10 times`,
  explanation: "This challenge introduces syntax differences between programming languages and basic programming concepts like variables, function definitions, string formatting, and loops.\n\nEach language has its own way of defining functions, printing to the console, and implementing loops, but they all accomplish the same tasks.\n\nYou can also see different approaches to string concatenation - modern methods like template literals in JavaScript and f-strings in Python, versus traditional concatenation with the + operator. Both achieve the same result but with different syntax.",
  hints: [
    "Remember that in JavaScript, you can use console.log() to print to the console.",
    "Function declarations in JavaScript start with the 'function' keyword.",
    "To create a personalized greeting, use string interpolation with template literals in JavaScript (`Hello, ${name}!`) or f-strings in Python (f\"Hello, {name}!\").",
    "Alternatively, you can concatenate strings using the + operator in both JavaScript and Python.",
    "For loops in JavaScript use the syntax: for (let i = 0; i < count; i++) { ... }",
    "For loops in Python use the syntax: for i in range(count): ..."
  ],
  steps: [
    "Set up a basic function that uses console.log() (JavaScript) or print() (Python) to output 'Hello, World!'",
    "Create a variation that outputs 'Hello, World!' in a different language like Spanish ('Hola Mundo!')",
    "Create a personalized greeting function that takes a name parameter and includes it in the output",
    "Try different string formatting methods like template literals in JavaScript or f-strings in Python",
    "Write a function that prints multiple lines of text",
    "Implement a loop that prints 'Hello, World!' multiple times"
  ]
};
