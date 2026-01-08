import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Trash2, Check, Shield } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";

// Review data type
interface Review {
  id: string;
  name: string;
  email?: string;
  message: string;
  rating: number;
  date: string;
  approved: boolean;
}

// Replace with your secret admin key
const ADMIN_KEY = "your-secret-admin-key";

// Sample admin reviews data (replace with API call in production)
const sampleAdminReviews: Review[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    message: "Incredible work!",
    rating: 5,
    date: "2024-01-15",
    approved: true,
  },
  {
    id: "2",
    name: "Michael Chen",
    message: "Professional and responsive.",
    rating: 5,
    date: "2024-01-10",
    approved: true,
  },
  {
    id: "3",
    name: "New User",
    email: "new@test.com",
    message: "Pending review submission.",
    rating: 4,
    date: "2024-01-20",
    approved: false,
  },
];

const AdminReviews = () => {
  // Get URL search params
  const [searchParams] = useSearchParams();

  // State: is the user authorized?
  const [isAuthorized, setIsAuthorized] = useState(false);

  // State: list of reviews
  const [reviews, setReviews] = useState<Review[]>([]);

  // Check authorization on page load
  useEffect(() => {
    const keyFromUrl = searchParams.get("key");
    const isValidKey = keyFromUrl === ADMIN_KEY;

    if (isValidKey) {
      setIsAuthorized(true);
      // Load reviews (replace with API call in production)
      setReviews(sampleAdminReviews);
    }
  }, [searchParams]);

  // Approve a review
  const handleApprove = (reviewId: string) => {
    // Update the review in state
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return { ...review, approved: true };
      }
      return review;
    });
    setReviews(updatedReviews);

    // TODO: Make API call to approve review in database
  };

  // Delete a review
  const handleDelete = (reviewId: string) => {
    // Remove the review from state
    const remainingReviews = reviews.filter((review) => review.id !== reviewId);
    setReviews(remainingReviews);

    // TODO: Make API call to delete review from database
  };

  // If not authorized, show access denied page
  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GlassCard className="text-center max-w-md">
          <Shield className="w-16 h-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
          <p className="text-muted-foreground">Invalid or missing admin key.</p>
          <p className="text-sm text-muted-foreground mt-4">
            Use: /admin/reviews?key=your-secret-admin-key
          </p>
        </GlassCard>
      </div>
    );
  }

  // Authorized view
  return (
    <div className="pt-24 pb-12 container mx-auto px-6">
      <h1 className="text-3xl font-display font-bold gradient-text mb-8">
        Admin: Manage Reviews
      </h1>

      <div className="space-y-4">
        {reviews.map((review) => {
          // Determine status badge styles
          const statusBadgeClasses = review.approved
            ? "px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400"
            : "px-2 py-0.5 text-xs rounded-full bg-yellow-500/20 text-yellow-400";
          const statusText = review.approved ? "Approved" : "Pending";

          return (
            <GlassCard
              key={review.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Review content */}
              <div className="flex-1">
                {/* Name and status */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{review.name}</span>
                  <span className={statusBadgeClasses}>{statusText}</span>
                </div>

                {/* Email if present */}
                {review.email && (
                  <p className="text-xs text-muted-foreground">{review.email}</p>
                )}

                {/* Message */}
                <p className="text-muted-foreground mt-2">{review.message}</p>

                {/* Rating and date */}
                <p className="text-xs text-muted-foreground mt-1">
                  Rating: {review.rating}/5 • {review.date}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2">
                {/* Show approve button only if not yet approved */}
                {!review.approved && (
                  <GlowButton
                    variant="primary"
                    size="sm"
                    onClick={() => handleApprove(review.id)}
                  >
                    <Check className="w-4 h-4" />
                  </GlowButton>
                )}

                {/* Delete button */}
                <GlowButton
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(review.id)}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </GlowButton>
              </div>
            </GlassCard>
          );
        })}

        {/* Show message if no reviews */}
        {reviews.length === 0 && (
          <p className="text-center text-muted-foreground">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminReviews;
