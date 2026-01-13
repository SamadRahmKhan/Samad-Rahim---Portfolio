import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";

// Form data type
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Form validation errors type
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Contact information data
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "samadrahim47@gmail.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "03335549833",
    href: "03335549833",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

const Contact = () => {
  // Form data state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validation errors state
  const [errors, setErrors] = useState<FormErrors>({});

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  // Validate the form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Check name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Check email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      // Simple email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailPattern.test(formData.email);
      if (!isValidEmail) {
        newErrors.email = "Please enter a valid email";
      }
    }

    // Check message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    // Return true if no errors
    const hasNoErrors = Object.keys(newErrors).length === 0;
    return hasNoErrors;
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://samad-rahim-portfolio.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };



  // Handle input changes
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    // Update form data
    setFormData((previousData) => ({
      ...previousData,
      [fieldName]: fieldValue,
    }));

    // Clear error for this field when user starts typing
    if (errors[fieldName as keyof FormErrors]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [fieldName]: undefined,
      }));
    }
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have a project in mind? Let's work together to create something amazing"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ============================================ */}
          {/* CONTACT FORM */}
          {/* ============================================ */}
          <div className="animate-fade-in">
            <GlassCard className="relative overflow-hidden">
              {/* Background glow effects */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg bg-muted border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-muted-foreground ${errors.name
                      ? "border-destructive"
                      : "border-border hover:border-primary/50"
                      }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg bg-muted border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-muted-foreground ${errors.email
                      ? "border-destructive"
                      : "border-border hover:border-primary/50"
                      }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field (optional) */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-muted-foreground hover:border-primary/50"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`w-full px-4 py-3 rounded-lg bg-muted border transition-all duration-300 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-muted-foreground ${errors.message
                      ? "border-destructive"
                      : "border-border hover:border-primary/50"
                      }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <GlowButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </GlowButton>

                {/* Success/Error Message */}
                {submitStatus === "success" && (
                  <div className="p-4 rounded-lg bg-green-500/10 text-green-400 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 rounded-lg bg-destructive/10 text-destructive flex items-center gap-3">
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </GlassCard>
          </div>

          {/* ============================================ */}
          {/* CONTACT INFO SIDEBAR */}
          {/* ============================================ */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Let's <span className="gradient-text">Connect</span>
              </h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                through the form or any of the channels below.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="block hover:translate-x-2 transition-transform"
                  >
                    <GlassCard className="flex items-center gap-4 hover:border-primary/50">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </GlassCard>
                  </a>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <GlassCard className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3 opacity-50" />
                <p className="text-muted-foreground text-sm">
                  San Francisco Bay Area
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
