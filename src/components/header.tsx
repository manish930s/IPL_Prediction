import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"; // Import SheetHeader and SheetTitle
import { Menu, ShieldCheck } from "lucide-react"; // Using ShieldCheck as a cricket-related icon placeholder

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              Cricket Oracle
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Dashboard
            </Link>
             {/* Add other navigation links here if needed */}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pt-10 pr-0">
            {/* Add SheetHeader and SheetTitle for accessibility */}
            <SheetHeader className="sr-only"> {/* Hide visually but keep for screen readers */}
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>
            <Link href="/" className="flex items-center space-x-2 mb-6 px-6">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="font-bold">Cricket Oracle</span>
            </Link>
            <div className="flex flex-col space-y-3 px-6">
              <Link
                href="/"
                className="transition-colors hover:text-foreground text-foreground/60"
              >
                Dashboard
              </Link>
               {/* Add other mobile navigation links here */}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Placeholder for User profile/login button */}
           {/* <Button variant="outline">Login</Button> */}
        </div>
      </div>
    </header>
  );
}
