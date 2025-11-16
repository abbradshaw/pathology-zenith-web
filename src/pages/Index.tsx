import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import { Microscope, Award, Users, Cpu, TrendingUp, Mail, Phone, MapPin, ShieldCheck, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: TrendingUp,
      title: "Gap Analysis and Solutions Proposal",
      description:
        "Streamline your lab operations with proven methodologies that enhance efficiency, reduce turnaround times, and improve patient outcomes.",
    },
    {
      icon: Award,
      title: "Workflow & Process Optimization",
      description:
        "Expert guidance through accreditation processes including CAP, CLIA, and ISO standards. Ensure compliance and maintain excellence.",
    },
    {
      icon: Users,
      title: "Comprehensive Grossing Staff Training",
      description:
        "Comprehensive training programs designed to elevate your team's skills and ensure consistent, high-quality performance. Biopsy Processing and Simple Dissection training are also provided.",
    },
    {
      icon: Cpu,
      title: "SOP Development & Continuous Improvement",
      description:
        "Collaborate with staff and pathologists to develop site-specific standard operating procedures with high staff engagement, then support implementation through comprehensive change management strategies for all team levels.",
    },
    {
      icon: Microscope,
      title: "Provision of Casual Pathologists' Assistants",
      description:
        "Pathology Solutions provides experienced, certified casual Pathologists' Assistants who adapt quickly to your site's protocols and systems, with optional pre-placement site visits to ensure seamless integration.",
    },
    {
      icon: ShieldCheck,
      title: "Expertise in Standardization of Practice",
      description:
        "Optimize site diversity through best-practice standardization that enhances efficiency and reduces waste, while mediating between stakeholders to create practice guidelines that meet all members' needs.",
    },
    {
      icon: Settings,
      title: "Strategies to Enhance Staff Engagement",
      description:
        "Support supervisors and leaders in fostering staff engagement throughout solution implementation to maintain a positive, productive work environment.",
    },
  ];
  const faqs = [
    {
      question: "What is your consultation process?",
      answer:
        "Our consultation begins with a comprehensive assessment of your laboratory's current operations, workflows, and challenges. We then develop a customized action plan with clear milestones and deliverables, followed by hands-on implementation support and ongoing monitoring.",
    },
    {
      question: "How long does it take to see improvements?",
      answer:
        "While initial improvements can often be observed within 4-6 weeks, comprehensive transformation typically occurs over 3-6 months. The timeline varies based on the scope of changes and your laboratory's specific needs.",
    },
    {
      question: "What are your pricing and engagement models?",
      answer:
        "We offer flexible engagement models including project-based consulting, monthly retainers, and hourly consulting. Pricing is customized based on your laboratory's size, scope of work, and specific requirements. Contact us for a detailed proposal.",
    },
    {
      question: "Do you provide accreditation support?",
      answer:
        "Yes, we have extensive experience supporting laboratories through various accreditation processes including CAP, CLIA, ISO 15189, and other regulatory requirements. We guide you through documentation, process implementation, and preparation for inspections.",
    },
    {
      question: "What technology solutions do you recommend?",
      answer:
        "Our recommendations are tailored to your specific needs, but we commonly work with leading LIS systems, middleware solutions, and automation platforms. We help you select, implement, and optimize technologies that align with your goals and budget.",
    },
  ];
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden bg-hero text-white"
        style={{
          minHeight: "65vh",
        }}
      >
        {/* Diagonal Gradient Stripes */}
        <div
          className="hero-gradient-stripe absolute opacity-80"
          style={{
            width: "100px",
            height: "150%",
            top: "-50%",
            left: "-44px",
            transform: "rotate(-135deg)",
          }}
        />
        <div
          className="hero-gradient-stripe absolute opacity-80"
          style={{
            width: "100px",
            height: "150%",
            bottom: "-50%",
            right: "-5%",
            transform: "rotate(-135deg)",
          }}
        />

        <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-5 md:items-center">
            {/* Left Column - Content */}
            <div className="text-center md:text-left md:col-span-3">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl !text-[#b5c4c5] lg:text-6xl animate-fade-in">
                Optimizing Anatomical Pathology Lab Performance
              </h1>
              <p
                className="mb-8 text-lg text-gray-300 md:text-xl font-bold animate-fade-in"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "both",
                }}
              >
                Elevate your entire pathology team through{" "}
                <span className="bg-primary/30 px-1 rounded">customized standardization</span>,{" "}
                <span className="bg-primary/30 px-1 rounded">expert training</span>, and{" "}
                <span className="bg-primary/30 px-1 rounded">flexible staffing</span>
                <br />
                <span className="italic font-normal">—without compromising your site's unique needs.</span>
              </p>
              <div
                className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start animate-fade-in"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "both",
                }}
              >
                <Button
                  size="xl"
                  className="bg-primary text-primary-foreground hover:bg-primary-dark"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Get Started
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  onClick={() =>
                    document.getElementById("services")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="border-white text-white bg-transparent hover:bg-white hover:text-slate-900"
                >
                  Explore Services
                </Button>
              </div>
              <div
                className="flex items-start gap-3 p-3 rounded-lg bg-primary/20 border-l-4 border-primary max-w-lg mx-auto md:mx-0 animate-fade-in"
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "both",
                }}
              >
                <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-white font-medium text-lg">Trusted by pathology laboratories world-wide.</p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div
              className="relative animate-fade-in md:col-span-2"
              style={{
                animationDelay: "0.8s",
                animationFillMode: "both",
              }}
            >
              <img
                src={new URL("../assets/pathology-lab.jpg", import.meta.url).href}
                alt="Modern pathology laboratory with advanced equipment and professional environment"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Services Tailored to Every Site's Specific Needs</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We know that every gross room has unique challenges and dynamics that must be respected during change
              implementation.
            </p>
          </div>

          <Tabs defaultValue="health-authorities" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto mb-12 grid-cols-2 bg-primary/10 h-16">
              <TabsTrigger
                value="health-authorities"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xl px-8 py-4"
              >
                For Health Authorities
              </TabsTrigger>
              <TabsTrigger
                value="industry-partners"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xl px-8 py-4"
              >
                For Industry Partners
              </TabsTrigger>
            </TabsList>

            <TabsContent value="health-authorities">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    {...service}
                    className="animate-fade-in"
                    style={{
                      animationDelay: `${0.1 * (index + 1)}s`,
                      animationFillMode: "both",
                    }}
                  />
                ))}

                {/* CTA Card spanning 8th and 9th positions */}
                <div
                  className="md:col-span-2 rounded-lg bg-black p-8 flex flex-col justify-center animate-fade-in relative overflow-hidden"
                  style={{
                    animationDelay: "0.8s",
                    animationFillMode: "both",
                  }}
                >
                  {/* Diagonal Gradient Stripes */}
                  <div
                    className="hero-gradient-stripe absolute opacity-60"
                    style={{
                      width: "50px",
                      height: "150%",
                      top: "-48%",
                      left: "-4%",
                      transform: "rotate(-135deg)",
                    }}
                  />
                  <div
                    className="hero-gradient-stripe absolute opacity-60"
                    style={{
                      width: "50px",
                      height: "150%",
                      bottom: "-48%",
                      right: "-4%",
                      transform: "rotate(-135deg)",
                    }}
                  />

                  <h3 className="mb-3 font-semibold text-center relative z-10 !text-[#b5c4c5] text-3xl">
                    Explore All Our Services
                  </h3>
                  <p className="mb-6 text-center relative z-10 text-gray-300 text-balance text-lg">
                    Explore how we understand your unique challenges and provide tailored solutions to transform your
                    laboratory operations.
                  </p>
                  <div className="flex justify-center relative z-10">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => navigate("/services")}
                    >
                      View All Services
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="industry-partners">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    {...service}
                    className="animate-fade-in"
                    style={{
                      animationDelay: `${0.1 * (index + 1)}s`,
                      animationFillMode: "both",
                    }}
                  />
                ))}

                {/* CTA Card spanning 8th and 9th positions */}
                <div
                  className="md:col-span-2 rounded-lg bg-black p-8 flex flex-col justify-center animate-fade-in relative overflow-hidden"
                  style={{
                    animationDelay: "0.8s",
                    animationFillMode: "both",
                  }}
                >
                  {/* Diagonal Gradient Stripes */}
                  <div
                    className="hero-gradient-stripe absolute opacity-60"
                    style={{
                      width: "50px",
                      height: "150%",
                      top: "-48%",
                      left: "-4%",
                      transform: "rotate(-135deg)",
                    }}
                  />
                  <div
                    className="hero-gradient-stripe absolute opacity-60"
                    style={{
                      width: "50px",
                      height: "150%",
                      bottom: "-48%",
                      right: "-4%",
                      transform: "rotate(-135deg)",
                    }}
                  />

                  <h3 className="mb-3 font-semibold text-center relative z-10 !text-[#b5c4c5] text-3xl">
                    Explore All Our Services
                  </h3>
                  <p className="mb-6 text-center relative z-10 text-gray-300 text-balance text-lg">
                    Explore how we understand your unique challenges and provide tailored solutions to transform your
                    laboratory operations.
                  </p>
                  <div className="flex justify-center relative z-10">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => navigate("/services")}
                    >
                      View All Services
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Expert Pathology Consulting</h2>
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Pathology Solutions’ CEO and founder, Danielle Lee Davis, has extensive knowledge and experience with
                  process and procedure writing, standardization, training, and leading successful pathology teams.
                </p>
                <p>
                  She has over 30 years of grossing and histology experience as a Pathologists’ Assistant, Pathology
                  Scientist, Medical Laboratory Technologist, Laboratory Histotechnician, and Medical Laboratory
                  Assistant.
                </p>

                <p>
                  Danielle has worked with the Canadian Association of Pathologists (CAP-ACP) as a Canadian PA leader
                  for over 17 years, earning three national awards for standardizing the Pathologists' Assistant
                  profession and advancing continuing education:
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border-l-4 border-primary">
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">
                      Pathologists' Assistant Section Lloyd A. Kennedy Award (2014)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border-l-4 border-primary">
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">
                      Pathologists' Assistant Section Distinguished Service Award (2018)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border-l-4 border-primary">
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">CAP-ACP President's Award (2019)</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Read More About Our Expertise
                  </Button>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="flex flex-col items-center">
                <img
                  src={new URL("../assets/danielle-lee-davis.jpeg", import.meta.url).href}
                  alt="Danielle Lee Davis, CEO and pathology laboratory consulting expert"
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
                <p className="mt-4 text-center text-lg font-medium">Danielle Lee Davis, CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
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
                      <a
                        href="mailto:consultant@pathlabconsulting.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        info@pathologysolutions.ca
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">Serving laboratories nationwide</div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-lg bg-primary/5 p-6">
                    <h4 className="mb-2 font-semibold">Ready to get started?</h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Schedule a free 30-minute consultation to discuss your laboratory's needs and how we can help you
                      achieve your goals.
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
            © {new Date().getFullYear()} Pathology Solutions, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Index;
