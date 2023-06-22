<!--
    Card to display information in the list page.
    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - persona_id: main information to display
    - desc: second information to display
    - link: link to the page description
-->
<template>
    <div class="text-[white]">
        <div v-for="p in people" class="inline-table ml-5 mt-5">
            <ImageCard :img_link="p.img_url" :alt="p.name + ' ' + p.surname" />
            <p class="mt-0 pt-0">{{ p.name + ' ' + p.surname }}</p>
            <div>{{ p.role }}</div>
            <NuxtLink id="about" class="pg" :to='"/team/" + p.id'><i class="fa-solid fa-arrow-right"
                    style="font-size: 30px;"></i></NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'people'
    ]
}
</script>