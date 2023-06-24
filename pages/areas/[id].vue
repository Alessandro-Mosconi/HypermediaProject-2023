<template>
    <main>
        <h1>
            eskere
        </h1>
        <h2>{{ area.name }}</h2>
    </main>
</template>

<script scoped>
export default defineNuxtComponent({
    async asyncData() {
        const route = useRoute()
        const area = await $fetch('/api/areas/' + route.params.id)

        return {
            area
        }
    }
})
</script>

<style scoped>

</style>