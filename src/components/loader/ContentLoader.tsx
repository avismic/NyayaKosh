import { Skeleton } from "@/components/ui/skeleton";

export default function ContentSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Main content container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column */}
        <div className="flex-1 space-y-6">
          {/* Large header section */}
          <div className="space-y-4">
            <Skeleton className="h-24 w-full rounded-lg" />
            <Skeleton className="h-12 w-3/4 rounded-lg" />
          </div>

          {/* Content sections */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>

          {/* Author info */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>

        {/* Right column - Horizontal cards */}
        <div className="lg:w-1/3 space-y-4">
          <div className="flex overflow-x-auto gap-4 pb-4 lg:flex-col">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-shrink-0 w-64 lg:w-full">
                <Skeleton className="h-40 w-full rounded-lg" />
                <div className="mt-2 space-y-2">
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-3 w-4/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
