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
        "Collaborate with your staff and pathologists to create standard operating procedures tailored to your site's needs, ensuring team buy-in throughout development and supporting implementation with change management strategies across all levels.",
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
      question: "How long does it take to complete a gap analysis and receive a solutions proposal?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      question: "Can you work with our existing staff, or do you require complete staffing changes?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What accreditation standards do your training programs meet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      question: "How do you ensure standardization without disrupting our site's unique workflow?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Do your casual Pathologists' Assistants need extensive onboarding time?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      question: "What types and sizes of pathology labs do you work with?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "How do you measure the success of your training and competency programs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      question: "Can you provide support for just one service (like training), or do we need a complete package?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is the typical cost structure for your services?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden bg-hero text-white pt-20"
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
            left: "-5%",
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

      {/* CTA Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg bg-black p-12 flex flex-col items-center justify-center relative overflow-hidden">
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

              <h2 className="mb-4 text-center relative z-10 !text-[#b5c4c5] text-3xl md:text-4xl font-bold">
                Ready to Transform Your Anatomical Pathology Lab?
              </h2>
              <p className="mb-8 text-center relative z-10 text-gray-300 text-balance text-lg max-w-2xl">
                Discover how customized solutions can help your team work more efficiently.
              </p>
              <div className="flex justify-center relative z-10">
                <Button
                  size="xl"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => navigate('/contact')}
                >
                  Get In Touch
                </Button>
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
