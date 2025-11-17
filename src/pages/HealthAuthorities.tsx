import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import { TrendingUp, Award, Users, Cpu, Microscope, ShieldCheck, Settings, Mail, MapPin } from "lucide-react";

const HealthAuthorities = () => {
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
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden bg-hero text-white pt-20"
          style={{
            minHeight: "50vh",
          }}
        >
          {/* Diagonal Gradient Stripes */}
          <div className="service-gradient-stripe-left" />
          <div className="service-gradient-stripe-right" />

          <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl !text-[#b5c4c5] lg:text-6xl animate-fade-in">
                Health Authorities
              </h1>
              <p
                className="text-lg text-gray-300 md:text-xl animate-fade-in"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "both",
                }}
              >
                Comprehensive solutions tailored to meet the unique needs of your health authority's pathology services.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center animate-fade-in">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Services Tailored to Your Specific Needs</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We know that every gross room has unique challenges and dynamics that must be respected during change
                implementation.
              </p>
            </div>

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
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-background py-20 md:py-28">
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
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-secondary py-20 md:py-28">
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
                          href="mailto:info@pathologysolutions.ca"
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
      </main>
    </>
  );
};

export default HealthAuthorities;
