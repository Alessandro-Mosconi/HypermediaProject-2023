<!--
    Page description for a single location.
    As described in the SmallCard component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <div class="profile-page">
            <NuxtLink id="about" class="pg" to="/team/" style="font-size: 20px;">
                <i class="fa-solid fa-arrow-left" ></i> See all
            </NuxtLink>
            <div class="div">
                <div class="left">
                    <div class="content mr-10 ">
                        <ImageProfileCard :img_link = "person.img_url"  :alt = "person.name + ' ' + person.surname"/>
                    </div>
                </div>
                <div class="right">
                    <div class="content md:ml-5">
                        <div class="title">
                            {{person.name}}<br>{{person.surname}} 
                        </div>
                        <div class="role">
                            {{person.role.toUpperCase()}}
                        </div>
                        <div>
                            <i class="fa-regular fa-envelope"  ></i>
                            <i class="fa-brands fa-linkedin-in" ></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="description">
            <div class="description-content">
                <SmallTextParagraph :smallText="'About ' + person.name + ' ' + person.surname" :paragraph="'Sophia obtained a Bachelor\'s degree in Electrical Engineering from the Massachusetts Institute of Technology (MIT). She later got a Ph.D. in Electrical Engineering from Stanford University. She has conducted extensive research in satellite communication systems, focusing on next-generation technologies and advancements. Sophia has previously worked as a Technology Analyst at SpaceTech Innovations, where she evaluated emerging technologies and identified strategic opportunities for collaboration. Her technical expertise and keen eye for innovative solutions play a crucial role in scouting cutting-edge technologies and identifying disruptive advancements for our portfolio companies.'"></SmallTextParagraph>
            </div>
            <div class="description-content" v-if="supervisedProjects && supervisedProjects.length>0">
                <SmallTextList :smallText="'Supervised projects'" :list="supervisedProjects"></SmallTextList>
            </div>
            <div class="description-content" v-if="listWorkingProject && listWorkingProject.length>0">
                <SmallTextList :smallText="'Worked at'" :list="listWorkingProject"></SmallTextList>
            </div>
            </div>
        </div>  
    </main>
</template>

<script>
    export default defineNuxtComponent({
        async asyncData() {
            
            const route = useRoute()
            const person = await $fetch('/api/people/' + route.params.id)

            const worker =  await $fetch('/api/projects/worked/' + route.params.id)
            let listWorkingProject = [];
            for(let p of worker){
                listWorkingProject.push({
                    text: p.name,
                    link: '/projects/' + p.id,
                })
            }

            const supervisor = await $fetch('/api/projects/supervised/' + route.params.id)            
            let listSupervisedProject = [];
            for(let p of supervisor){
                listSupervisedProject.push({
                    text: p.name,
                    link: '/projects/' + p.id,
                })
            }

            return {
                person: person,
                supervisedProjects: listWorkingProject,
                workingProjects: listWorkingProject,
            }
        }
    })
    
</script>

<style scoped>
main{
    display: inline-block!important;
}
.content{
    width: 100%;

}

.div{
  display: flex;
  align-items: center;
  height: fit-content;
}

.description {
    margin-top: 4em;
}

.description-content {
    margin-bottom: 4em;
}

.left {
    width: 40%;         
    display: inline-block!important;
}
.role {
    color: #bb86fc;
    font-family: ABCWhyte-Regular!important;
    letter-spacing: .05em;
    font-size: 2em;
    margin-top: 0.5em;
}

.right {
    margin-top: 5em;
    width: auto;  
    display: inline-block!important;
}

.right i {
    margin-top: 0.5em;
    font-size: 2.5em;
    margin-right: 1em;
}

.profile-page {
    margin-top: 2em;
    margin-left: 3em;
}

.title {
    font-size: 4em;
    font-family: Bold;
}

.prova {
    margin-top: 5rem;
    margin-left: 5rem;
}

@media screen and (max-width: 55em) {
  .title{
    margin-top: 0px!important;
  }
  .left {
    width: 100%;
  }
  .left2 {
    width: 100%;
  }
  .right {
    margin-top: 3em;
    width: 100%;
    display: block!important;
  }

  .div{
    display: block;
  }
  .content{
    width: fit-content;
  }
}

</style>