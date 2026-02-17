"use client";
import ContactForm from "@/components/contact-form";
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 pt-24 pb-12 md:pt-32 md:pb-20">
      <ContactForm />
    </div>
  );
}
