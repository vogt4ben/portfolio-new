'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface InlineImageWithLoadingProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function InlineImageWithLoading({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: InlineImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        'transition-opacity duration-300',
        isLoading ? 'opacity-0' : 'opacity-100',
        className
      )}
      onLoad={() => setIsLoading(false)}
      priority={priority}
    />
  );
}
