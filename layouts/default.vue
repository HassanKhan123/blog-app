<template>
<div>
    <TheHeader @sidenavToggle="displaySideNav=!displaySideNav" />
    <TheSideNav :show="displaySideNav" @close="displaySideNav=false" />
    <Nuxt />
</div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader"
import TheSideNav from "@/components/Navigation/TheSideNav"

export default {
    data() {
        return {
            displaySideNav: false
        }
    },
    components: {
        TheHeader,
        TheSideNav
    }
}
</script>

<style>
html {
    font-family: 'Open Sans', sans-serif;
}

body {
    margin: 0;
}
</style>
