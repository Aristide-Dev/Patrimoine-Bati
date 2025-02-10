import React from 'react';

export function Map() {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.0007368642982!2d-13.718802400000001!3d9.5086643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd10a7ec5db25%3A0xba590feeee4290d0!2sDirection%20G%C3%A9n%C3%A9rale%20du%20Patrimoine%20B%C3%A2ti%20Publique!5e0!3m2!1sfr!2s!4v1739178093817!5m2!1sfr!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
    </div>
  );
} 