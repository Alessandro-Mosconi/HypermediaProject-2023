<template>
    <div  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="p in projects" class="justify-center ml-auto mr-auto" >
        <div>
                <NuxtLink id="about" class="pg" :to='"/projects/"+p.id'>
                    <cardProject 
                    :projectName="p.name"
                    img="https://media.npr.org/assets/img/2016/04/05/ackbar_wide-f0a673c875361830e84eaa3b98f7f886a750b0e5.jpg"
                    :area="p.area"
                    colorArea="green"/>
                </NuxtLink>
            </div>
    </div>
    </div>
</template>

<script>
export default {
    props: [
        'projects'
    ]
}
</script>

