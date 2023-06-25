<template>
    <div class="grid grid-cols-1 grid-cols-2 max-w-screen-lg mx-auto">
        <div v-for="p in projects" class="justify-center ml-auto mr-auto" >
        <div>
                <NuxtLink id="about" class="pg" :to='"/projects/"+p.id'>
                    <cardProject 
                    :projectName="p.name"
                    :img="p.img_url"
                    :area="p.area"/>
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

