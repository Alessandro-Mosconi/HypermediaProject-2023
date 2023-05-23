<!--
    Page description for a single location.
    As described in the SmallCard component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main class="profile-page">
        <div class="container">
            <div class="left">
            <NuxtLink id="about" class="pg" to="/team/" style="font-size: 20px;">
                <i class="fa-solid fa-arrow-left" ></i> See all
            </NuxtLink>
            <ImageProfileCard :img_link = "person.img_url"/>
            </div>
            <div class="right">
                <div class="title-name">
                    {{person.name}}<br>{{person.surname}} 
                </div>
            </div>
        </div>

    </main>
</template>

<script>
    /*
        The defineNuxtComponent gets us acceFss to the asyncData property.
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

.container {
    width: 100%;
  display: flex;
  justify-content: space-between;
}

.left {
}

.right {
  flex: 1;
}

.profile-page {
    margin-top: 2em;
    margin-left: 2em;
}

.title-name {
    margin-left: .2em;
    margin-top: 3em;
    font-size: 4em;
    font-family: Bold;
    line-height: 1.2em;
}

.prova {
    margin-top: 5rem;
    margin-left: 5rem;
}
</style>