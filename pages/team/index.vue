<!--
    Page with the list of all the location.
    As described in the Card component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <CenterTitlewithLateralImage
            title="MEET OUR TEAM"
            description="A FUSION OF VISIONARY STRATEGISTS, SEASONED INVESTORS, AND INDUSTRY PIONEERS, UNITED BY A PASSION FOR FUELLING SPACE INNOVATION AND DRIVING TRANSFORMATIVE IMPACT." 
            />
        <div class="team-container">
            <TeamList :people="people"/>
        </div>
        
    </main>
</template>

<script>
    export default defineNuxtComponent({
        async asyncData() {
            const people = await $fetch('/api/people')
            return {
                people
            }
        }
    })
</script>

<style>
.team-container{
    padding: 5%;
}
</style>