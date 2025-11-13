import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import { Microscope, Award, Users, Cpu, TrendingUp, Mail, Phone, MapPin, ShieldCheck, Settings } from "lucide-react";
const Index = () => {
  const services = [{
    icon: TrendingUp,
    title: "Gap Analysis and Solutions Proposal",
    description: "Streamline your lab operations with proven methodologies that enhance efficiency, reduce turnaround times, and improve patient outcomes."
  }, {
    icon: Award,
    title: "Quality Assurance & Accreditation",
    description: "Expert guidance through accreditation processes including CAP, CLIA, and ISO standards. Ensure compliance and maintain excellence."
  }, {
    icon: Users,
    title: "Staff Training & Development",
    description: "Comprehensive training programs designed to elevate your team's skills and ensure consistent, high-quality performance."
  }, {
    icon: Cpu,
    title: "Technology Integration",
    description: "Seamlessly integrate cutting-edge laboratory information systems and automation solutions to modernize your operations."
  }, {
    icon: Microscope,
    title: "Process Improvement Consulting",
    description: "Data-driven analysis and strategic recommendations to optimize every aspect of your laboratory's performance."
  }, {
    icon: ShieldCheck,
    title: "Laboratory Safety & Compliance",
    description: "Comprehensive safety program development and regulatory compliance guidance to protect your staff and patients while meeting all industry standards."
  }, {
    icon: Settings,
    title: "Equipment Management & Optimization",
    description: "Strategic equipment planning, maintenance programs, and utilization analysis to maximize ROI and ensure reliable laboratory operations."
  }];
  const faqs = [{
    question: "What is your consultation process?",
    answer: "Our consultation begins with a comprehensive assessment of your laboratory's current operations, workflows, and challenges. We then develop a customized action plan with clear milestones and deliverables, followed by hands-on implementation support and ongoing monitoring."
  }, {
    question: "How long does it take to see improvements?",
    answer: "While initial improvements can often be observed within 4-6 weeks, comprehensive transformation typically occurs over 3-6 months. The timeline varies based on the scope of changes and your laboratory's specific needs."
  }, {
    question: "What are your pricing and engagement models?",
    answer: "We offer flexible engagement models including project-based consulting, monthly retainers, and hourly consulting. Pricing is customized based on your laboratory's size, scope of work, and specific requirements. Contact us for a detailed proposal."
  }, {
    question: "Do you provide accreditation support?",
    answer: "Yes, we have extensive experience supporting laboratories through various accreditation processes including CAP, CLIA, ISO 15189, and other regulatory requirements. We guide you through documentation, process implementation, and preparation for inspections."
  }, {
    question: "What technology solutions do you recommend?",
    answer: "Our recommendations are tailored to your specific needs, but we commonly work with leading LIS systems, middleware solutions, and automation platforms. We help you select, implement, and optimize technologies that align with your goals and budget."
  }];
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-hero text-white" style={{
      minHeight: "65vh"
    }}>
        {/* Diagonal Gradient Stripes */}
        <div className="hero-gradient-stripe absolute opacity-80" style={{
        width: "100px",
        height: "150%",
        top: "-50%",
        left: "-5%",
        transform: "rotate(-135deg)"
      }} />
        <div className="hero-gradient-stripe absolute opacity-80" style={{
        width: "100px",
        height: "150%",
        bottom: "-50%",
        right: "-5%",
        transform: "rotate(-135deg)"
      }} />
        
        <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Left Column - Content */}
            <div className="text-center md:text-left">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl !text-[#b5c4c5] lg:text-6xl">
                Transforming Pathology Lab Performance
              </h1>
              <p className="mb-8 text-lg text-gray-300 md:text-xl">
                Expert consulting to optimize laboratory operations, ensure quality standards, 
                and elevate your team's capabilities
              </p>
              <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                Get Started
              </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({
                behavior: 'smooth'
              })} className="border-white hover:bg-white text-slate-900">
                  Explore Services
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                Trusted by leading pathology laboratories to achieve accreditation excellence 
                and operational efficiency
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <img src={new URL('../assets/pathology-lab.jpg', import.meta.url).href} alt="Modern pathology laboratory with advanced equipment and professional environment" className="w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Comprehensive Laboratory Solutions</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Expert consulting services designed to transform your laboratory's performance, 
              compliance, and operational excellence
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              Expert Pathology Consulting
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                With over 15 years of experience in pathology laboratory management and quality 
                systems, I provide strategic consulting to help laboratories achieve operational 
                excellence and regulatory compliance.
              </p>
              <p>
                My expertise spans all aspects of laboratory operations, from workflow optimization 
                and staff development to technology implementation and accreditation preparation. 
                I've successfully guided numerous laboratories through CAP, CLIA, and ISO 
                accreditation processes.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-background p-6 text-center shadow-sm">
                  <div className="mb-2 text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="rounded-lg bg-background p-6 text-center shadow-sm">
                  <div className="mb-2 text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Labs Consulted</div>
                </div>
                <div className="rounded-lg bg-background p-6 text-center shadow-sm">
                  <div className="mb-2 text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Accreditation Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Ready to transform your laboratory? Schedule a consultation today.
              </p>
            </div>
            
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>
                <ContactForm />
              </div>
              
              <div>
                <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:consultant@pathlabconsulting.com" className="text-muted-foreground hover:text-primary">
                        consultant@pathlabconsulting.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">
                        Serving laboratories nationwide
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 rounded-lg bg-primary/5 p-6">
                    <h4 className="mb-2 font-semibold">Ready to get started?</h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Schedule a free 30-minute consultation to discuss your laboratory's needs 
                      and how we can help you achieve your goals.
                    </p>
                    <Button className="w-full">Book Free Consultation</Button>
                  </div>
                </div>
              </div>
            </div>
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
    </div>;
};
export default Index;