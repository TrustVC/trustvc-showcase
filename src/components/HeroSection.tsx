import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const heroVariants = [
  {
    title: "Simple Trustworthy\nVerifiable Credentials",
    subtitle: "All",
    stats: [
      { label: "Documents Verified", value: "2.5M+" },
      { label: "Active Users", value: "60K+" },
      { label: "Organizations", value: "250+" },
      { label: "Countries", value: "65+" },
    ],
  },
  {
    title: "Simple Trade\nVerifiable Credentials", 
    subtitle: "TradeTrust",
    stats: [
      { label: "Documents Verified", value: "500K+" },
      { label: "Active Users", value: "10K+" },
      { label: "Organizations", value: "###" },
      { label: "Countries", value: "50+" },
    ],
  },
  {
    title: "Simple Academic\nVerifiable Credentials",
    subtitle: "OpenCerts", 
    stats: [
      { label: "Documents Verified", value: "2.0M+" },
      { label: "Active Users", value: "50K+" },
      { label: "Organizations", value: "###" },
      { label: "Countries", value: "###" },
    ],
  },
  {
    title: "Simple Legal\nVerifiable Credentials",
    subtitle: "E-Apostilles",
    stats: [
      { label: "Documents Verified", value: "###" },
      { label: "Active Users", value: "###" },
      { label: "Organizations", value: "###" },
      { label: "Countries", value: "Coming Soon" },
    ],
  },
];

const HeroSection = () => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentVariant((prev) => (prev + 1) % heroVariants.length);
        setIsAnimating(false);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const variant = heroVariants[currentVariant];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-trust-blue/5 to-trust-indigo/10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-trust-blue/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-trust-indigo/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-trust-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Title */}
        <div className="mb-8">
          <h1 
            className={cn(
              "text-6xl md:text-7xl font-bold leading-tight transition-all duration-500",
              isAnimating ? "opacity-0 transform -translate-y-4" : "opacity-100 transform translate-y-0"
            )}
          >
            <span className="bg-gradient-trust bg-clip-text text-transparent">
              {variant.title.split('\n').map((line, idx) => (
                <span key={idx} className="block">{line}</span>
              ))}
            </span>
          </h1>
        </div>

        {/* Subtitle Badge */}
        <div className="mb-12">
          <Badge 
            variant="outline" 
            className={cn(
              "text-lg px-6 py-2 bg-background/50 backdrop-blur-glass border border-primary/20 transition-all duration-500",
              isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
            )}
          >
            {variant.subtitle}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          TrustVC is an open-source SDK and reference stack that makes 
          credentials verification easy and interoperable for various domains.
        </p>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gradient-trust hover:opacity-90 text-lg px-8 py-6 rounded-full shadow-float"
        >
          Get Started
        </Button>

        {/* Stats Section */}
        <div className="mt-20">
          <div 
            className={cn(
              "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-500",
              isAnimating ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
            )}
          >
            {variant.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            —— {new Date().getFullYear()} growth to date
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;