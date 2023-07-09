<template>
    <main>
        <div class="profile-page md:ml-10 ml-5 mr-5 md:mt-[6em]">
            <NuxtLink id="about" class="pg" to="/team/" style="font-size: 20px;">
                <i class="fa-solid fa-arrow-left"></i> See all
            </NuxtLink>
            <div class="flex flex-col md:flex-row items-center h-fit">
                <div class="basis-auto md:basis-2/5 inline-block">
                    <div>
                        <ImageProfileCard class="w-auto md:mr-[5%]" :img_link="person.img_url"
                                          :alt="person.name + ' ' + person.surname"/>
                    </div>
                </div>
                <div class="basis-auto inline-block">
                    <div class="content mt-[25%]">
                        <div
                            class="title md:text-left text-center text-4xl md:text-6xl uppercase  leading-snug md:leading-snug">
                            {{ person.name }}<br>{{ person.surname }}
                        </div>
                        <div
                            class="role text-[#bb86fc] md:text-left text-center md:text-4xl text-xl uppercase leading-snug md:leading-snug mt-5 mb-10 md:mb-5">
                            {{ person.role.toUpperCase() }}
                        </div>
                        <div class="md:text-left text-center text-2xl md:text-4xl">
                            <a v-if="person.linkedin_url" :href="person.linkedin_url"  target="_blank"><i class="fa-brands fa-linkedin-in ml-1 mr-8 "></i></a>
                            <a v-if="person.email" :href = "'mailto: '+person.email"><i class="fa-regular fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-10 md:mt-20">
                <div class="mb-10 md:mb-20">
                    <SmallTextParagraph :smallText="'About ' + person.name + ' ' + person.surname"
                                        :paragraph="person.description"></SmallTextParagraph>
                </div>
                <div class="mb-10 md:mb-20" v-if="supervisedProjects && supervisedProjects.length>0">
                    <SmallTextList :hideTitle="true" :smallText="'Supervised projects'" :list="supervisedProjects"></SmallTextList>
                </div>
                <div class="mb-10 md:mb-20" v-if="workingProjects && workingProjects.length>0">
                    <SmallTextList :hideTitle="true"  :smallText="'Worked at'" :list="workingProjects"></SmallTextList>
                </div>
            </div>
        </div>
    </main>
</template>

<script scoped>
export default defineNuxtComponent({
    async asyncData() {

        const route = useRoute()
        const person = await $fetch('/api/people/' + route.params.id)

        const worker = await $fetch('/api/projects/worked/' + route.params.id)
        let listWorkingProject = [];
        for (let p of worker) {
            listWorkingProject.push({
                text: p.name,
                link: '/projects/' + p.id,
                img: p.logo_url,
            })
        }

        const supervisor = await $fetch('/api/projects/supervised/' + route.params.id)
        let listSupervisedProject = [];
        for (let p of supervisor) {
            listSupervisedProject.push({
                text: p.name,
                link: '/projects/' + p.id,
                img: p.logo_url,
            })
        }

        return {
            person: person,
            supervisedProjects: listSupervisedProject,
            workingProjects: listWorkingProject,
        }
    }
})

</script>

<style scoped>

.role {
    font-family: ABCWhyte-Regular !important;
}

.title {
    font-family: Bold;
}


</style>