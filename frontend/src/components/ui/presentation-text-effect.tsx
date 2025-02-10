'use client';
import React from 'react';
import { TextEffect, PresetType, PerType } from './text-effect';
import wavingHandEmoji from '../../assets/emojis/waving_hand_color_default.svg';

export function PresentationTextEffect() {
  return (
    <div className="flex flex-col ">
      <TextEffect
        preset="blur"
        per="char"
        delay={0.5}
        className="text-3xl md:text-4xl lg:text-[3.5rem] xl:text-[4.5rem] text-center"
      >
        <span className="relative leading-tight">
          Hello
          <span 
            className="absolute inline-block w-[80px] h-[80px] bg-no-repeat bg-contain opacity-0 transform -rotate-12 scale-100 sm:scale-80 md:scale-80 xl:scale-80 -translate-x-10 -translate-y-10 sm:-translate-y-10 md:-translate-y-10 xl:-translate-y-12 pointer-events-none animate-[fadeIn_0.5s_ease-in-out_0.6s_forwards]"
            style={{ backgroundImage: `url(${wavingHandEmoji})`, backgroundPosition: 'center' }}
          />
        </span>, I'm Florian, trainee software engineer based in France.
      </TextEffect>

      <TextEffect
        preset="blur"
        per="char"
        delay={3.5}
        className="text-3xl md:text-4xl lg:text-[3.5rem] xl:text-[4.5rem] text-center mt-6"
      >
        I'm currently working at{' '}
        <a 
          href="https://www.sensome.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 relative transition-all duration-300 ease-in-out drop-shadow-[0_0_0.3rem_#2563EB50] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600/50 after:transition-all after:duration-300 hover:after:w-full leading-tight"
        >
          Sensome
        </a>
        , helping to create life-saving devices.
      </TextEffect>

      <TextEffect
        preset="blur"
        per="char"
        delay={6}
        className="text-3xl md:text-4xl lg:text-[3.5rem] xl:text-[4.5rem] text-center mt-10"
      >
        Also studying computer science at{' '}
        <a 
          href="https://www.polytech.universite-paris-saclay.fr/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-500 relative transition-all duration-300 ease-in-out drop-shadow-[0_0_0.3rem_#2563EB50] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600/50 after:transition-all after:duration-300 hover:after:w-full leading-tight"
        >
          Polytech Paris-Saclay
        </a>
        .
      </TextEffect>
    </div>
  );
} 