<template>
    <div class="relative h-screen">
        <div
            class="absolute inset-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <ParticlesBg class="absolute inset-0 z-0" :quantity="100" :ease="100" :color="'#FFF'" :staticity="10"
                refresh />
        </div>

        <div class="relative z-10 h-screen flex flex-col">
            <div class="text-center w-full items-center justify-center pb-20 pt-20 mt-20">
                <TextRoll text="Socials" :duration="0.4"
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white" />
            </div>
            <SocialsDock />
        </div>
    </div>
</template>