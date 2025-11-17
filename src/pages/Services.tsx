import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import { TrendingUp, Award, Users, Cpu, Microscope, ShieldCheck, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  
  const services = [{
    icon: TrendingUp,
    title: "Gap Analysis and Solutions Proposal",
    description: "Streamline your lab operations with proven methodologies that enhance efficiency, reduce turnaround times, and improve patient outcomes."
  }, {
    icon: Award,
    title: "Workflow & Process Optimization",
    description: "Expert guidance through accreditation processes including CAP, CLIA, and ISO standards. Ensure compliance and maintain excellence."
  }, {
    icon: Users,
    title: "Comprehensive Grossing Staff Training",
    description: "Comprehensive training programs designed to elevate your team's skills and ensure consistent, high-quality performance."
  }, {
    icon: Cpu,
    title: "SOP Development & Continuous Improvement",
    description: "Collaborate with your staff and pathologists to create standard operating procedures tailored to your site's needs, ensuring team buy-in throughout development and supporting implementation with change management strategies across all levels."
  }, {
    icon: Microscope,
    title: "Provision of Casual Pathologists' Assistants",
    description: "Pathology Solutions provides experienced, certified casual Pathologists' Assistants who adapt quickly to your site's protocols and systems, with optional pre-placement site visits to ensure seamless integration."
  }, {
    icon: ShieldCheck,
    title: "Expertise in Standardization of Practice",
    description: "Optimize site diversity through best-practice standardization that enhances efficiency and reduces waste, while mediating between stakeholders to create practice guidelines that meet all members' needs."
  }, {
    icon: Settings,
    title: "Strategies to Enhance Staff Engagement",
    description: "Support supervisors and leaders in fostering staff engagement throughout solution implementation to maintain a positive, productive work environment."
  }];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl !text-[#b5c4c5]">
              Our Services
            </h1>
            <p className="text-lg text-gray-300 md:text-xl">
              Comprehensive pathology consulting solutions tailored to your laboratory's unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Services Tailored to Every Site's Specific Needs</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We know that every gross room exhibits unique challenges and dynamics that must be honououred during any change process
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto rounded-lg bg-primary/5 p-8 text-center">
            <h3 className="mb-3 text-2xl font-semibold">Ready to Transform Your Lab?</h3>
            <p className="mb-6 text-base text-muted-foreground">
              Schedule a free consultation to discuss your laboratory's specific needs 
              and discover how our tailored solutions can elevate your team's performance.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => navigate('/#contact')}
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hero py-8 text-center text-white">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Pathology Lab Consulting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
