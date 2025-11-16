import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Contact Section */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h1 className="mb-4 text-3xl font-bold md:text-4xl">Get in Touch</h1>
                <p className="text-lg text-muted-foreground">
                  Ready to transform your laboratory? Schedule a consultation today.
                </p>
              </div>

              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>
                  <ContactForm />
                </div>

                <div>
                  <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
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
                      <h3 className="mb-2 font-semibold">Ready to get started?</h3>
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

export default Contact;
