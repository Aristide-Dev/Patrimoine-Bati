export const Skeleton = ({ className = "", ...props }) => (
    <div
        role="status"
        aria-live="polite"
        className={`animate-pulse bg-gray-400 rounded-lg [animation-duration:3s] ${className}`}
        {...props}
    >
        <span className="sr-only">Chargement en cours...</span>
        <div className="aria-hidden" aria-hidden="true">
        {props.children}
        </div>
    </div>
);
  
export const MediaCardSkeleton = () => (
    <div className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-[16/9]">
        <Skeleton className="absolute inset-0 rounded-none" />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex gap-2 flex-wrap">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-32 rounded-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </div>
);
  
export const MediaModalSkeleton = () => (
    <div className="space-y-6 max-w-4xl mx-auto p-2">
        <div className="relative aspect-[21/9] bg-gray-900 rounded-xl overflow-hidden">
        <Skeleton className="absolute inset-0 rounded-none opacity-20" />
        </div>
        
        <div className="space-y-4 px-4 pb-4">
        <div className="flex gap-3 flex-wrap">
            <Skeleton className="h-7 w-24 rounded-full opacity-75" />
            <Skeleton className="h-7 w-32 rounded-full opacity-75" />
        </div>
        
        <div className="space-y-3">
            <Skeleton className="h-8 w-3/4 opacity-90" />
            <div className="space-y-2">
            <Skeleton className="h-4 w-full opacity-60" />
            <Skeleton className="h-4 w-2/3 opacity-60" />
            <Skeleton className="h-4 w-1/2 opacity-60" />
            </div>
        </div>
        
        <div className="flex gap-4 pt-4">
            <Skeleton className="h-10 w-24 rounded-lg opacity-80" />
            <Skeleton className="h-10 w-32 rounded-lg opacity-80" />
        </div>
        </div>
    </div>
);

export const ReportCardSkeleton = () => (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
      {/* En-tête */}
      <div className="flex justify-between items-start mb-4">
        <Skeleton className="h-6 w-32 rounded-lg" />
        <Skeleton className="h-4 w-16 rounded-full" />
      </div>
  
      {/* Graphique */}
      <div className="relative aspect-video bg-gray-100 rounded-lg mb-4">
        <Skeleton className="absolute inset-0 rounded-lg opacity-80" />
      </div>
  
      {/* Métriques */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
  
      {/* Bouton d'action */}
      <div className="mt-4 flex justify-end">
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
);
