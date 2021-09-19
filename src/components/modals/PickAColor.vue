<template>
    <transition name="modal">
        <div class="modal-mask fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center">
            <div class="bg-white w-auto h-auto p-8 m-6 rounded-md flex flex-col mx-auto justify-between">
                <div class="grid grid-cols-3 gap-8 w-full h-full">
                    <div
                        v-for="(item, index) in colors"
                        :key="index"
                        class="flex flex-col items-center justify-center cursor-pointer"
                        @click="selectColor(item, index)"
                    >
                        <div :class="item.background" class="h-8 w-8 rounded-full"></div>
                        <div class="text-base text-center font-secondary-regular">
                            {{ item.slug }}
                        </div>
                    </div>
                </div>
                <div
                    @click="closeModal"
                    class="w-auto m-3 p-2 mt-8 bg-red-600 text-white flex items-center justify-center rounded-md shadow-md font-secondary-regular hover:shadow-lg md:transition-all md:duration-200 cursor-pointer font-bold"
                >
                    Close
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
            this.$store.commit('showModal', false);
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
