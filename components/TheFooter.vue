<!--
    Footer of the website
-->
<template>
    <hr class="solid mt-16 mb-16 ">
    <div class="w-auto ml-7 mr-7  lg:text-xl text-xs ">
        
        <div class="md:grid md:grid-cols-2 md:gap-10flex flex-col  space-y-4">
            <div class="flex flex-col  space-y-4">
                <div>
                    <a :href = "'mailto: '+contacts.email">
                        {{contacts.email}}
                    </a>
                </div>
                <div v-for="phoneNumber in contacts.phoneNumbers">
                    <a :href = "'tel: '+phoneNumber">
                        {{phoneNumber}}
                    </a>
                </div>
            </div>
            <div class="flex flex-col  space-y-4">
                <div>
                    <a href="https://policies.google.com/technologies/cookies?hl=en-US" target=”_blank”>
                        Cookies
                    </a>
                </div>
                <div>
                    <a href="https://policies.google.com/privacy?hl=en-US" target=”_blank”>
                        Privacy
                    </a>
                </div>
            </div>
        </div>
        <p>© 2023 Capital Ventures</p>
    </div>
    <h2 class="text-2xl ml-auto mr-auto mt-20 mb-10 md:text-5xl lg:text-7xl">striving to ignite possibilities</h2>
</template>

<script setup>
    const contacts = useContact()
</script>

<style scoped>

hr.solid {
  border-top: 5px solid white;
}

p {
    padding: 3em 0 0 0;
    font-size: 1.3em;
}

h2 {
    font-weight:600;
    text-transform: uppercase;
    text-align:center;
}


a {
    display: inline-block;
    position: relative;
    color: white;
  }
  
  a::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }


footer {
    background-color: rgb(0, 0, 0);
    /*flex-shrink: 0;*/
    text-align: left;
    padding: 5em 3em;
    color: white;
    min-height: 1vh;
    border-top: 4px solid white;
}

table {
    /* make the table wide as its parent */
    width: 100%;

}

td {
    font-size: 1.3em;
}
</style>