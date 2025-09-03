import { Mail, Phone, MapPin, Send, MessageCircle, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help from our technical team",
    contact: "support@trustvc.org",
    availability: "24/7 Response"
  },
  {
    icon: Phone,
    title: "Phone Support", 
    description: "Speak with our solutions architects",
    contact: "+65 6123 4567",
    availability: "Mon-Fri 9AM-6PM SGT"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant help for quick questions", 
    contact: "Available on all pages",
    availability: "24/7 Available"
  }
];

const offices = [
  {
    city: "Singapore",
    address: "1 Marina Boulevard\nSingapore 018989",
    region: "APAC Headquarters"
  },
  {
    city: "London", 
    address: "123 Financial District\nLondon EC2V 8AB, UK",
    region: "European Operations"
  },
  {
    city: "San Francisco",
    address: "456 Innovation Street\nSan Francisco, CA 94107",
    region: "Americas Hub"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Get in{" "}
            <span className="bg-gradient-trust bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your document verification process? Our team is here 
            to help you implement TrustVC solutions for your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-background/50 backdrop-blur-glass border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+65 1234 5678" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Company Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="trade">International Trade</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and requirements..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full bg-gradient-trust hover:opacity-90">
                  Send Message
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method) => (
                <Card
                  key={method.title}
                  className="bg-background/50 backdrop-blur-glass border border-border/50 hover:shadow-glass transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-trust p-2 flex-shrink-0">
                        <method.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium text-primary mb-1">
                          {method.contact}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {method.availability}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Locations */}
            <Card className="bg-background/50 backdrop-blur-glass border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Our Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className="pb-4 border-b border-border/30 last:border-b-0 last:pb-0">
                    <div className="font-semibold text-primary mb-1">{office.city}</div>
                    <div className="text-sm text-muted-foreground mb-1 whitespace-pre-line">
                      {office.address}
                    </div>
                    <div className="text-xs text-muted-foreground">{office.region}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-background/50 backdrop-blur-glass border border-border/50 text-center p-4">
                <Building className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold text-primary">250+</div>
                <div className="text-xs text-muted-foreground">Organizations</div>
              </Card>
              <Card className="bg-background/50 backdrop-blur-glass border border-border/50 text-center p-4">
                <Users className="h-8 w-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold text-primary">60K+</div>
                <div className="text-xs text-muted-foreground">Active Users</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;