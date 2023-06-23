<!--
    Footer of the page
-->

<template>
    <hr class="solid mt-16 mb-16 ">
    <div class="w-auto ml-10 mr-10">
        
        <div class="md:grid md:grid-cols-2 md:gap-10 text-xl flex flex-col  space-y-4">
            <div class="flex flex-col  space-y-4">
                <div>
                    venture.agency@mail.com 
                </div>
                <div>
                    +39 333 12345678
                </div>
                <div>
                    +39 333 12345678 
                </div>
            </div>
            <div class="flex flex-col  space-y-4">
                <div>
                    Cookies 
                </div>
                <div>
                    Privacy
                </div>
            </div>
        </div>
        <p>© 2023 Capital Ventures</p>
    </div>
    <h2 class="text-4xl ml-auto mr-auto mt-20 mb-10 md:text-5xl lg:text-7xl">striving to ignite possibilities</h2>
</template>


<script>
export default {
  data() {
    return {
      myVariable: false
    }
  },
  
  methods: {
    toggleVariable() {
      this.myVariable = !this.myVariable;
    }
  }
}
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