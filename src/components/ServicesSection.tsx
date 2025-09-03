import { ArrowRight, Shield, GraduationCap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Shield,
    title: "TradeTrust",
    description: "Secure trade document verification and interoperability. Build trust in international trade with cryptographically secure documents.",
    link: "/tradetrust",
    available: true,
    gradient: "from-trust-blue to-trust-indigo",
  },
  {
    icon: GraduationCap,
    title: "OpenCerts",
    description: "Educational credential verification system. Verify academic certificates, diplomas, and professional certifications instantly.",
    link: "/opencerts", 
    available: true,
    gradient: "from-trust-indigo to-trust-purple",
  },
  {
    icon: FileText,
    title: "E-Apostilles",
    description: "Digital apostille verification for legal documents. The future of international document authentication and legalization.",
    link: "#",
    available: false,
    gradient: "from-trust-purple to-primary",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Industries{" "}
            <span className="bg-gradient-trust bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple specialized frameworks, one powerful engine. See how TrustVC powers 
            verification across industries and transforms how the world handles digital documents.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden bg-background/50 backdrop-blur-glass border border-border/50 hover:shadow-float transition-all duration-300"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardHeader className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-2.5 mb-4`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                {service.available ? (
                  <Button asChild variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                    <Link to={service.link} className="flex items-center gap-2 text-primary font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                ) : (
                  <Button disabled variant="ghost" className="p-0 h-auto cursor-not-allowed">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      Coming Soon
                    </span>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;