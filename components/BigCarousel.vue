<template>
    <v-app>
        <v-carousel>
            <v-carousel-item v-for="color in colors" :key="color">
                <v-sheet :color="color" height="100%" tile>
                    <v-row class="fill-height" align="center" justify="center">
                        <div class="text-h2">
                            {{ color }}
                        </div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </v-app>
</template>
<script>
export default {
    data: () => ({
        colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', '#7f00ff'],
    }),
};
</script>