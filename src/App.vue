<template>
    <div class="h-screen bg-gray-700" id="app">
        <hero />
    </div>
</template>

<script>
import Hero from './pages/Hero.vue';

export default {
    name: 'App',
    components: {
        Hero,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
@font-face {
    font-family: UbuntuLight;
    src: url(statics/fonts/Ubuntu-Light.ttf);
}
@font-face {
    font-family: UbuntuRegular;
    src: url(statics/fonts/Ubuntu-Regular.ttf);
}
@font-face {
    font-family: RobotoSlab;
    src: url(statics/fonts/RobotoSlab-Regular.ttf);
}
@font-face {
    font-family: RobotoSlabLight;
    src: url(statics/fonts/RobotoSlab-Light.ttf);
}
@font-face {
    font-family: RobotoSlabThin;
    src: url(statics/fonts/RobotoSlab-Thin.ttf);
}
@font-face {
    font-family: RobotoSlabBold;
    src: url(statics/fonts/RobotoSlab-Bold.ttf);
}
.font-primary {
    font-family: RobotoSlab;
}

.font-primary-light {
    font-family: RobotoSlabLight;
}

.font-primary-thin {
    font-family: RobotoSlabThin;
}

.font-primary-bold {
    font-family: RobotoSlabBold;
}

.font-secondary-light {
    font-family: UbuntuLight;
}

.font-secondary-regular {
    font-family: UbuntuRegular;
}
</style>
