<template>
    <div
        class="flex flex-col md:flex-row md:justify-center p-6 h-full container md:mx-auto items-center justify-around"
    >
        <div class="md:flex md:flex-col md:items-center md:justify-around md:max-w-md ">
            <h1 class="w-full text-center md:text-left text-3xl md:text-5xl text-white my-2 font-primary-thin">
                <span class="font-primary-bold font-extrabold">Mastermind,</span> <br />
                can you crack it?
            </h1>
            <p class="hidden md:flex font-secondary-regular text-base text-white text-left py-6">
                Mastermind or Master Mind is a code-breaking game. You will have to pick from 12 different colors and
                try to find the full code before you run out of rounds.
            </p>
            <div
                @click="startPlaying()"
                class="hidden md:flex items-center justify-center bg-green-600 h-12 w-full rounded-md shadow-xl text-white text-base cursor-pointer hover:shadow-2xl md:transition-all md:duration-200 font-secondary-regular font-bold"
            >
                I want to play
            </div>
        </div>
        <mastermind-board />
        <div
            @click="startPlaying()"
            class="md:hidden flex items-center max-w-md justify-center bg-green-600 h-12 w-full rounded-md shadow-xl text-white text-base cursor-pointer hover:shadow-xl md:transition-all md:duration-200 font-secondary-regular font-bold"
        >
            I want to play
        </div>
    </div>
</template>

<script>
import MastermindBoard from '../components/MastermindBoard.vue';
export default {
    methods: {
        startPlaying() {
            this.$store.commit('startPlaying');
        },
    },
    components: {
        MastermindBoard,
    },
};
</script>
