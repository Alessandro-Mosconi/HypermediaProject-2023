<template>
    <main>
        <ProjectBanner
            :name="project.name"
            :areaCode="project.area"
            :img="project.img_url"
            :area="area"
            :top="project.top" />
        <div class="md:ml-10 ml-5 mr-5 mt-[2em]">
            <div class="mt-10 md:mt-20">
                <div class="mb-10">
                    <ProjectDetails
                        :img="project.logo_url"
                        :investment="project.capital_mln"
                        :dates="project.starting_date + ' - ' + project.ending_date"
                        :areaCode="project.area"
                        :area="area"
                        />
                </div>
                <div class="mb-10 ">
                    <SmallTextList :smallText="'Supervised by'" :list="supervisors"/>
                </div>
                <div class="mb-10 ">
                    <SmallTextList :smallText="'Team'" :list="team"/>
                </div>
                <div class="mb-10 md:mb-20">
                    <SmallTextParagraph :smallText="'Project Description'"
                                        :paragraph="project.description"></SmallTextParagraph>
                </div>
            </div>
        </div>
        <LittleCarousel
            :imageLeft="prevProject.img_url"
            :subtitleLeft="'previous project'"
            :titleLeft="prevProject.name"
            :linkLeft="'/projects/' + prevProject.id"
            :imageRight="nextProject.img_url"
            :subtitleRight="'next project'"
            :titleRight="nextProject.name"
            :linkRight="'/projects/' + nextProject.id">
        </LittleCarousel>
    </main>
</template>

<script>


export default defineNuxtComponent({
        async asyncData() {
            const route = useRoute()

            const project = await  $fetch('/api/projects/' + route.params.id);
            const [supervisor, team, area] = await Promise.all([
                $fetch('/api/people/' + project.id_supervisor),
                $fetch('/api/people/team/' + project.id),
                $fetch('/api/areas/' + project.area)
                ]);
                
            project.top = project?.top?.toString() || '';

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

            project.capital_mln = project.capital_mln + ' mln';
            
            console.log('/api/projects/' + ((project.id - 1) % 16))

            const prevProject = await $fetch('/api/projects/2'); // + ((project.id - 1) % 16)); //todox
console.log('2')
            const nextProject = await $fetch('/api/projects/3');// + ((project.id + 1) % 16)); //todo
console.log('3')
            console.log(project.name)


            return {
                project,
                supervisors: listSupervisor,
                team: listWorkersProject,
                prevProject,
                nextProject,
                area
            }
        }
    })


</script>

