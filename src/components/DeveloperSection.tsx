import { Code, GitBranch, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const developerFeatures = [
  "Quick Integration: Simple SDK with TypeScript support and comprehensive examples",
  "Full Documentation: Interactive guides, API references, and real-world examples", 
  "Open Source: Community-driven development with transparent roadmap",
  "Enterprise Ready: Scalable architecture designed for production workloads",
];

const DeveloperSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-trust p-2">
                <Code className="w-full h-full text-white" />
              </div>
              <h2 className="text-4xl font-bold">
                Built for Developers,{" "}
                <span className="bg-gradient-trust bg-clip-text text-transparent">
                  Trusted by Enterprises
                </span>
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get started in minutes with our intuitive APIs and 
              comprehensive documentation. TrustVC abstracts away the 
              complexity while maintaining full control and transparency.
            </p>

            <ul className="space-y-4 mb-8">
              {developerFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-trust hover:opacity-90">
                <Link to="/support">TrustVC Documentation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://github.com/trustvc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <GitBranch className="w-4 h-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Developer Stats Cards */}
          <div className="space-y-6">
            <Card className="bg-background/50 backdrop-blur-glass border border-border/50 hover:shadow-glass transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-trust-blue to-trust-indigo p-2.5">
                    <BookOpen className="w-full h-full text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">99%</div>
                    <div className="text-sm text-muted-foreground">API Uptime</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-glass border border-border/50 hover:shadow-glass transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-trust-indigo to-trust-purple p-2.5">
                    <Users className="w-full h-full text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Developer Community</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-glass border border-border/50 hover:shadow-glass transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-trust-purple to-primary p-2.5">
                    <GitBranch className="w-full h-full text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Contributors</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;