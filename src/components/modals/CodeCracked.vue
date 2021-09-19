<template>
    <transition name="modal">
        <div class="modal-mask fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center">
            <div class="bg-white w-auto h-auto p-8 m-6 rounded-md flex flex-col mx-auto justify-between">
                <div class="flex flex-col">
                    <h1>Congrats! You cracked the code.</h1>
                </div>
                <div
                    @click="closeModal"
                    class="w-auto m-3 p-2 mt-8 bg-red-600 text-white flex items-center justify-center rounded shadow-md hover:shadow-lg md:transition-all md:duration-200 cursor-pointer"
                >
                    Nice! I want to play again.
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$store.commit('codeCracked', false);
        },
    },
};
</script>

<style>
.modal-mask {
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
}
</style>
