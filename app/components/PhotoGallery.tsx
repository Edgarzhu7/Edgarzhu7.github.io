'use client';

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Photography Data
const photoCollections = [
  {
    location: "Half-moon Bay",
    images: [
      "/photography/Half-moon Bay/7451763659806_.pic.jpg",
      "/photography/Half-moon Bay/7461763659809_.pic.jpg",
      "/photography/Half-moon Bay/7471763659855_.pic.jpg",
    ]
  },
  {
    location: "Hangzhou",
    images: [
      "/photography/Hangzhou/7301763659600_.pic.jpg",
      "/photography/Hangzhou/7311763659608_.pic.jpg",
      "/photography/Hangzhou/7321763659611_.pic.jpg",
      "/photography/Hangzhou/7331763659614_.pic.jpg",
      "/photography/Hangzhou/7341763659631_.pic.jpg",
    ]
  },
  {
    location: "Qingdao",
    images: [
      "/photography/Qingdao/7351763659644_.pic.jpg",
    ]
  },
  {
    location: "Southern California",
    images: [
      "/photography/Southern California/7381763659701_.pic.jpg",
      "/photography/Southern California/7391763659763_.pic.jpg",
    ]
  },
  {
    location: "Southwest China",
    images: [
      "/photography/Southwest China/7361763659667_.pic.jpg",
      "/photography/Southwest China/7371763659673_.pic.jpg",
    ]
  },
  {
    location: "Upper Peninsula",
    images: [
      "/photography/Upper Penisula/7401763659777_.pic.jpg",
      "/photography/Upper Penisula/7411763659784_.pic.jpg",
      "/photography/Upper Penisula/7421763659787_.pic.jpg",
      "/photography/Upper Penisula/7431763659793_.pic.jpg",
      "/photography/Upper Penisula/7441763659797_.pic.jpg",
    ]
  }
];

export function PhotoGallery() {
  const [openLocation, setOpenLocation] = useState<string | null>(null);

  const toggleLocation = (location: string) => {
    setOpenLocation(openLocation === location ? null : location);
  };

  return (
    <div className="space-y-0 divide-y divide-border">
      {photoCollections.map((collection) => {
        const isOpen = openLocation === collection.location;
        
        return (
          <div key={collection.location} className="group">
            {/* Accordion Header */}
            <button 
              onClick={() => toggleLocation(collection.location)}
              className="w-full py-8 flex items-center justify-between group text-left focus:outline-none"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-foreground/80 group-hover:text-foreground transition-colors flex items-center gap-4 font-light">
                <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isOpen ? 'bg-accent shadow-[0_0_10px_rgba(217,94,56,0.5)]' : 'bg-muted-foreground/30 group-hover:bg-accent'}`}></span>
                <span className={isOpen ? 'italic' : ''}>{collection.location}</span>
              </h3>
              <span className={`text-xs font-mono uppercase tracking-widest text-muted-foreground transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                {collection.images.length} Photos
              </span>
            </button>

            {/* Accordion Content */}
            <div 
              className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-[2000px] opacity-100 pb-12' : 'max-h-0 opacity-0'}`}
            >
              {/* Horizontal Scroll Container for Cinematic feel */}
              <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-0 md:px-0 scrollbar-hide">
                {collection.images.map((src, idx) => (
                  <div key={idx} className="relative h-[400px] min-w-[300px] md:h-[500px] md:min-w-[400px] shrink-0 group/image rounded-sm overflow-hidden bg-muted">
                    <Image
                      src={src}
                      alt={`${collection.location} photo ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover/image:scale-105"
                      sizes="(max-width: 768px) 80vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
