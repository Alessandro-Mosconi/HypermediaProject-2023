<template>
    <main>
        <ProjectBanner
            :name="project.name"
            :areaCode="project.area"
            :img="project.img_url"
            :area="area.name"
            :top="project.top"/>
        <div class="md:ml-10 ml-5 mr-5 ">
            <div class="mt-16">
                <div class="mb-10">
                    <ProjectDetails
                        :img="project.logo_url"
                        :investment="project.capital_mln"
                        :dates="getDate(project.starting_date) + ' - ' + getDate(project.ending_date)"
                        :areaCode="project.area"
                        :area="area.name"
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

        const project = await $fetch('/api/projects/' + route.params.id);
        const [supervisor, team, area, projects] = await Promise.all([
            $fetch('/api/people/' + project.id_supervisor),
            $fetch('/api/people/team/' + project.id),
            $fetch('/api/areas/' + project.area),
            $fetch('/api/projects/')
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
        const totalProjects = projects.length;
        const prevProjectId = (project.id - 1 + totalProjects) % totalProjects || totalProjects;
        const nextProjectId = (project.id + 1) % totalProjects || totalProjects;

        const prevProject = await $fetch('/api/projects/' + prevProjectId); //todox
        const nextProject = await $fetch('/api/projects/' + nextProjectId); //todo
        
        return {
            project,
            supervisors: listSupervisor,
            team: listWorkersProject,
            prevProject,
            nextProject,
            area: area
        }
    },
    methods: {
        getDate(value) {
            const date = new Date(value)
            const month = date.toLocaleString( 'en-US', { month: 'long' });
            const capitalMont = month.charAt(0).toUpperCase() + month.slice(1);
            const stringDate = capitalMont + ' ' + date.getUTCFullYear() ;
            return stringDate;
        }
    }
})


</script>

