

<template>
    <main>
        <ProjectBanner :name="pro.name" :areaCode="pro.area" :img="pro.img_url" ></ProjectBanner>
        <div class="md:ml-10 ml-5 mr-5 mt-[2em]">
            <div class="mt-10 md:mt-20">
                <div class="mb-10 ">
                    <SmallTextList :smallText="'Supervised by'" :list="supervisor" />
                </div>
                <div class="mb-10 ">
                    <SmallTextList :smallText="'Team'" :list="team" />
                </div>
                <div class="mb-10 md:mb-20">
                    <SmallTextParagraph :smallText="'Project Description'"
                                        :paragraph="pro.description"></SmallTextParagraph>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default defineNuxtComponent({
    async asyncData() {
        const route = useRoute()
        const pro = await $fetch('/api/projects/' + route.params.id)
        const supervisor = await $fetch('/api/people/' + pro.id_supervisor)
        const team = await $fetch('/api/people/team/' + pro.id)
        
        let listWorkersProject = [];
        for (let p of team) {
            listWorkersProject.push({
                text: p.name + ' ' + p.surname,
                link: '/team/' + p.id,
            })
        }

        let listSupervisor = [];
        listSupervisor.push({
            text: supervisor.name + ' ' + supervisor.surname,
            link: '/team/' + supervisor.id,
        })

        return {
            pro,
            supervisor: listSupervisor,
            team: listWorkersProject,
        }
    }
})
</script>

