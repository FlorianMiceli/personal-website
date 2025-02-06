<template>
    <div class="relative">
        <div
            class="absolute inset-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <ParticlesBg class="absolute inset-0 z-0" :quantity="100" :ease="100" :color="'#FFF'" :staticity="10" refresh />
        </div>
    </div>


    <div class="min-h-screen flex flex-col items-center justify-center relative py-20">
        <div class="absolute top-24 sm:top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-4">
            <TextRoll text="Socials" :duration="0.4"
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white" />
        </div>
        <SocialsDock />
    </div>

</template>