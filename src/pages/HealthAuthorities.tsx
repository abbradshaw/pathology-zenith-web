import { Button } from "@/components/ui/button";
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

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden bg-hero text-white"
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
