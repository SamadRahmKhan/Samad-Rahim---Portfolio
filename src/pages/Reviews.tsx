
import React, { useState, useEffect } from "react";
import { Star, Quote, Send, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";


// Review data type
interface Review {
  id: string;
  name: string;
  message: string;
  rating: number;
  date: string;
}

// Sample reviews data (replace with API call in production)
const sampleReviews: Review[] = []
// [
//   {
//     id: "1",
//     name: "Sarah Johnson",
//     message: "Incredible work! The attention to detail and creativity exceeded all expectations. Highly recommend!",
//     rating: 5,
//     date: "2024-01-15",
//   },
//   {
//     id: "2",
//     name: "Michael Chen",
//     message: "Professional, responsive, and delivered exactly what we needed. A pleasure to work with.",
//     rating: 5,
//     date: "2024-01-10",
//   },
//   {
//     id: "3",
//     name: "Emily Davis",
//     message: "Outstanding design skills and technical expertise. Our project was completed ahead of schedule.",
//     rating: 5,
//     date: "2024-01-05",
//   },
// ];

// Reviews list state
const Reviews: React.FC = () => {
  // All state and hooks go INSIDE here
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("https://samad-rahim-portfolio.vercel.app/api/review");
        const data = await res.json();
        if (data.success) setReviews(data.data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };
    fetchReviews();
  }, []);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reviews", {  // note: /api/reviews
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          message: formMessage,
          rating: formRating,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit review");

      const data = await response.json();
      if (data.success) {
        setReviews([data.data, ...reviews]); // add new review at top
        setFormName("");
        setFormEmail("");
        setFormMessage("");
        setFormRating(5);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  // Handle rating star click
  const handleRatingClick = (starNumber: number) => {
    setFormRating(starNumber);
  };

  // Helper function to render star icons
  const renderStars = (rating: number, interactive: boolean = false) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= rating;
      const starClasses = isFilled
        ? "w-4 h-4 text-yellow-500 fill-yellow-500"
        : "w-4 h-4 text-muted";

      if (interactive) {
        stars.push(
          <button
            key={i}
            type="button"
            onClick={() => handleRatingClick(i)}
            className="p-1 hover:scale-110 transition-transform"
          >
            <Star className={isFilled ? "w-6 h-6 text-yellow-500 fill-yellow-500" : "w-6 h-6 text-muted hover:text-yellow-500"} />
          </button>
        );
      } else {
        stars.push(<Star key={i} className={starClasses} />);
      }
    }
    return stars;
  };

  // Format date for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Greetings, Traveler"
          subtitle="Leave a thought before you go"
        />

        {/* ============================================ */}
        {/* REVIEWS GRID */}
        {/* ============================================ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review) => (
            <GlassCard key={review.id} className="h-full">
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Review message */}
              <p className="text-muted-foreground mb-4">{review.message}</p>

              {/* Star rating */}
              <div className="flex gap-1 mb-3">
                {renderStars(review.rating)}
              </div>

              {/* Reviewer name */}
              <p className="font-semibold text-foreground">{review.name}</p>

              {/* Review date */}
              <p className="text-xs text-muted-foreground">{formatDate(review.date)}</p>
            </GlassCard>
          ))}
        </div>

        {/* ============================================ */}
        {/* SUBMIT REVIEW FORM */}
        {/* ============================================ */}
        <div className="max-w-2xl mx-auto">
          <GlassCard>
            <h3 className="text-2xl font-display font-bold gradient-text mb-6 text-center">
              Right, Here!
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email row */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Rating selector */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Rating:</span>
                {renderStars(formRating, true)}
              </div>

              {/* Message textarea */}
              <textarea
                placeholder="Your message *"
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                required
              />

              {/* Submit button */}
              <GlowButton
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Review
                  </>
                )}
              </GlowButton>

              {/* Success message */}
              {isSubmitted && (
                <div className="flex items-center gap-2 text-green-400 justify-center">
                  <CheckCircle className="w-5 h-5" />
                  Thank you! Your review has been submitted for approval.
                </div>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
