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
  // State to track which section is open (null means all closed)
  const [openLocation, setOpenLocation] = useState<string | null>(null);

  const toggleLocation = (location: string) => {
    setOpenLocation(openLocation === location ? null : location);
  };

  return (
    <div className="space-y-4">
      {photoCollections.map((collection) => {
        const isOpen = openLocation === collection.location;
        
        return (
          <div key={collection.location} className="border-b border-border last:border-0">
            {/* Accordion Header */}
            <button 
              onClick={() => toggleLocation(collection.location)}
              className="w-full py-6 flex items-center justify-between group text-left focus:outline-none"
            >
              <h3 className="font-serif text-xl text-foreground/80 group-hover:text-accent transition-colors flex items-center gap-3">
                <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isOpen ? 'bg-accent' : 'bg-muted-foreground/50 group-hover:bg-accent'}`}></span>
                {collection.location}
              </h3>
              <ChevronDown 
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`} 
              />
            </button>

            {/* Accordion Content */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
            >
              <div className="flex flex-wrap gap-4">
                {collection.images.map((src, idx) => (
                  <div key={idx} className="relative h-[200px] w-auto shrink-0 group rounded-sm overflow-hidden bg-muted/20">
                    <Image
                      src={src}
                      alt={`${collection.location} photo ${idx + 1}`}
                      width={400}
                      height={600}
                      className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                      sizes="300px"
                    />
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
