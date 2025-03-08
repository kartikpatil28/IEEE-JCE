import React, { useState, useEffect } from 'react';
import heic2any from 'heic2any';

const HeicImage = ({ src, alt, className, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const convertHeicToJpeg = async () => {
      try {
        setLoading(true);
        
        // If it's not a HEIC image, use it directly
        if (!src.toLowerCase().endsWith('.heic')) {
          setImageSrc(src);
          setLoading(false);
          return;
        }

        // Fetch the HEIC image
        const response = await fetch(src);
        const blob = await response.blob();

        // Convert HEIC to JPEG
        const jpegBlob = await heic2any({
          blob,
          toType: 'image/jpeg',
          quality: 0.8
        });

        // Create URL for the converted image
        const jpegUrl = URL.createObjectURL(jpegBlob);
        setImageSrc(jpegUrl);
        setLoading(false);

        // Cleanup function to revoke the URL when component unmounts
        return () => {
          URL.revokeObjectURL(jpegUrl);
        };
      } catch (err) {
        console.error('Error converting HEIC image:', err);
        setError('Failed to load image');
        setLoading(false);
      }
    };

    convertHeicToJpeg();
  }, [src]);

  if (loading) {
    return (
      <div className={`animate-pulse bg-gray-200 ${className}`}>
        <div className="w-full h-full bg-gray-300"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

export default HeicImage; 