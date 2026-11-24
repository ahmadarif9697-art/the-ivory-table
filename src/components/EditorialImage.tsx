import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  aspectClass = '',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#2A1419] via-[#1B1817] to-[#34261E] px-6 text-center text-[#FAF7F2] ${aspectClass} ${className}`}
      >
        <Utensils className="mb-3 h-6 w-6 text-[#C5A059] opacity-80" aria-hidden="true" />
        <p className="font-serif text-lg tracking-wide text-[#FAF7F2]/90">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#1B1817] ${aspectClass}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    </div>
  );
}
