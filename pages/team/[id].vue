<!--
    Page description for a single location.
    As described in the SmallCard component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <ImageProfileCard class="" :img_link = "person.img_url"/>
    </main>
</template>

<script>
    /*
        The defineNuxtComponent gets us access to the asyncData property.
        This is the first function that is called by nuxt when the page is called.
        We can use this to pre-load the data to make it available to the user.
    */
    export default defineNuxtComponent({
        async asyncData() {
            // Despite using the options API, this.$route is not available in asyncData.
            const route = useRoute()
            const person = await $fetch('/api/people/' + route.params.id)

            return {
                person
            }
        }
    })
    
</script>

<style>
main{
    
    background-color: aliceblue;
}
</style>