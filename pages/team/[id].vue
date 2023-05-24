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
            <div class="container">
                <div class="left">
                    <div class="content">
                        <ImageProfileCard :img_link = "person.img_url"/>
                    </div>
                </div>
                <div class="right">
                    <div class="content">
                        <div class="title-name">
                            {{person.name}}<br>{{person.surname}} 
                        </div>
                        <div class="role-main">
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
            <div class="description-content">
                <SmallTextList :smallText="'Supervised projects'" :list="projects"></SmallTextList>
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
            const projects =  await $fetch('/api/projects/')
            let listProject = [];

            for(let p of projects){
                listProject.push({
                    text: p.name,
                    link: '/projects/' + p.id,
                })
                console.log(listProject)
            }
            console.log(projects)
            console.log(listProject)

            return {
                person: person,
                projects: listProject
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

.container{
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
.role-main {
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
    margin-left: 4em;
}

.title-name {
    font-size: 4em;
    font-family: Bold;
}

.prova {
    margin-top: 5rem;
    margin-left: 5rem;
}

@media screen and (max-width: 55em) {
  .title-name{
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

  .container{
    display: block;
  }
  .content{
    width: fit-content;
  }
}

</style>