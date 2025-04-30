
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <CodeIcon className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">CodeCanvas</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link to="/?difficulty=easy">
            <Button variant="ghost">Easy</Button>
          </Link>
          <Link to="/?difficulty=medium">
            <Button variant="ghost">Medium</Button>
          </Link>
          <Link to="/?difficulty=hard">
            <Button variant="ghost">Hard</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
