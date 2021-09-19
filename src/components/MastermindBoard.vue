<template>
    <div class="h-auto m-4 flex flex-col items-center mx-auto md:mx-10 md:w-auto w-full">
        <div class="board items-center justify-center md:mx-2 mx-auto p-4 rounded-xl shadow-xl">
            <div v-for="(row, row_index) in boardPoints" :key="row_index" :class="{'border rounded-md' : row_index == currentRow}" class="flex flex-row">
                <div
                    v-for="(point, index) in row"
                    :key="index"
                    :class="checkStyle(point)"
                    class="h-8 w-8 rounded-full m-2"
                    @click="pickAColor(index)"
                ></div>
            </div>
        </div>
        <div v-if="code" class="flex flex-col pt-3 md:pt-6">
            <div class="font-secondary-light text-base text-white py-2">
                The secret code:
            </div>
            <div class="flex flex-row  ">
                <div v-for="(point, index) in code" :key="index" class=" mx-auto flex items-center justify-center px-2">
                    <div :class="checkCode(point)" class="h-8 w-8 rounded-full"></div>
                </div>
            </div>
        </div>
        <you-lose v-if="youLose" />
        <pick-a-color v-if="showModal" />
        <code-cracked v-if="codeCracked" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PickAColor from './modals/PickAColor.vue';
import CodeCracked from './modals/CodeCracked.vue';
import YouLose from './modals/YouLose.vue';
export default {
    components: {
        PickAColor,
        CodeCracked,
        YouLose,
    },
    methods: {
        pickAColor(index) {
            this.$store.commit('showModal', { item: true, pointer: index });
        },
        checkStyle(point) {
            if (point.row === this.currentRow && point.active)
                return point.background + ' ' + 'cursor-pointer shadow-inner';
            if (point.row === this.currentRow && !point.active)
                return point.background + ' ' + 'cursor-not-allowed pointer-events-none';
            if (point.cracked) return 'bg-white cursor-not-allowed pointer-events-none';
            return 'bg-red-400 cursor-not-allowed pointer-events-none';
        },
        checkCode(point) {
            if (!point.hidden) return point.background;
            if (point.hidden) return 'bg-gray-400';
        },
    },
    computed: {
        ...mapGetters([
            'showModal',
            'code',
            'boardPoints',
            'currentRow',
            'codeCracked',
            'boardPoints',
            'youLose',
        ]),
    },
};
</script>

<style lang="css">
.board {
    background-color: #9c4221;
}
</style>
