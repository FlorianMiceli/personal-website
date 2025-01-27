'use client';
import React from 'react';
import { TextEffect, PresetType, PerType } from './text-effect';

export function PresentationTextEffect() {
  return (
    <div className="flex flex-col space-y-8">
      <TextEffect
        preset="blur"
        per="char"
        delay={0.5}
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-normal"
      >
        ✦ Hello, I'm Florian, trainee software engineer based in France.
      </TextEffect>

      <TextEffect
        preset="blur"
        per="char"
        delay={3.5}
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-normal"
      >
        ✦ I'm currently working at{' '}
        <a 
          href="https://www.sensome.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 relative transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_0.3rem_#2563EB50] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600/50 after:transition-all after:duration-300 hover:after:w-full"
        >
          Sensome
        </a>
        , helping to save lives.
      </TextEffect>

      <TextEffect
        preset="blur"
        per="char"
        delay={6}
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-normal"
      >
        ✦ Also studying computer science at{' '}
        <a 
          href="https://www.polytech.universite-paris-saclay.fr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 relative transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_0.3rem_#2563EB50] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600/50 after:transition-all after:duration-300 hover:after:w-full"
        >
          Polytech Paris-Saclay
        </a>
        .
      </TextEffect>
    </div>
  );
} 