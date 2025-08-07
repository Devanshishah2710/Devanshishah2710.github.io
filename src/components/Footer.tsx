import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} Devanshi Shah. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start mt-2">
              Built with <Heart className="w-4 h-4 mx-1 text-primary fill-current" /> by Devanshi Shah
            </p>
          </div>

          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="group"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;