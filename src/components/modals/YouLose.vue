<template>
    <transition name="modal">
        <div class="modal-mask fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center">
            <div class="bg-white w-auto h-auto p-8 m-6 rounded-md flex flex-col mx-auto justify-between">
                <div class="flex flex-col">
                    <h1>You lost!</h1>
                </div>
                <div
                    @click="closeModal"
                    class="w-auto m-3 p-2 mt-8 bg-red-600 text-white flex items-center justify-center rounded-md shadow-md hover:shadow-lg md:transition-all md:duration-200 cursor-pointer font-secondary-regular font-bold"
                >
                    Try again
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {};
    },
    methods: {
        closeModal() {
            this.$store.commit('youLose', false);
        },
        selectColor(item, index) {
            this.$store.commit('selectColor', { item: item, index: index });
        },
    },
    computed: {
        ...mapGetters(['colors']),
    },
};
</script>

<style>
.modal-mask {
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
}
</style>
