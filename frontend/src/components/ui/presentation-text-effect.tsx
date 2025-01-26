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
        className="text-4xl md:text-5xl lg:text-6xl font-bold"
      >
        Hello, I'm Florian, trainee software engineer based in France.
      </TextEffect>

      <TextEffect
        preset="blur"
        per="char"
        delay={3.5}
        className="text-4xl md:text-5xl lg:text-6xl font-bold"
      >
        I'm currently working at{' '}
        <a 
          href="https://www.sensome.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Sensome
        </a>
        , helping to save lives.
      </TextEffect>

      <TextEffect
        preset="blur"
        per="char"
        delay={6}
        className="text-4xl md:text-5xl lg:text-6xl font-bold"
      >
        Also studying computer science at{' '}
        <a 
          href="https://www.polytech.universite-paris-saclay.fr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Polytech Paris-Saclay
        </a>
        .
      </TextEffect>
    </div>
  );
} 