<!--
    Contact Page
-->
<template>        
    <centerTitleImg 
        class="md:!h-[120vh] !h-[60vh] mb-20 md:mb-40"
        title="CONTACT US" 
        :posImage="'left'"
        :widthImage="'clamp(50vh, 50vw, 50vw) auto'"
        img="https://kcrxtzylutpqgnipxzbq.supabase.co/storage/v1/object/public/wallpaper/image%2012.png"/>
<div class="flex flex-col md:flex-row ml-[5%] mr-[5%] z-10">
    <div class="basis-1/2">
        <div class="flex flex-col space-y-4">
            <div class="pb-10">
                <div class="md:text-3xl text-xl font-light uppercase mb-5">Email</div>
                <div class="md:text-3xl text-xl font-ABCbold">
                    <a :href = "'mailto: '+contacts.email">
                        {{contacts.email}}
                    </a></div>
            </div>
            <div class="pb-10">
                <div class="md:text-3xl text-xl font-light uppercase mb-5">Phone number</div>
                <div v-for="number in contacts.phoneNumbers" class="md:text-3xl text-xl font-ABCbold last:mb-0 mb-5">
                    <a :href = "'tel: '+number">
                        {{number}}
                    </a></div>
            </div>
            <div class="pb-10">
                <div class="md:text-3xl text-xl font-light uppercase mb-5">Address</div>
                <div class="md:text-3xl text-xl font-ABCbold">
                    <a :href="'http://www.google.com/maps/place/' + contacts.addressX + ',' + contacts.addressY" target="_blank">
                        {{contacts.address}}
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="basis-1/2">
        <div class="flex flex-col space-y-4">
            <div class="md:text-3xl text-2xl font-ABCbold">Have an investment to propose?<br>Drop us a line!</div>
            <form  id="contactForm" class="flex flex-col">
                <input 
                    type = "text" 
                    id = "name" 
                    v-model="form.name"
                    required
                    class="md:text-2xl placeholder-white placeholder-opacity-100 mt-5" 
                    placeholder = "NAME">
                <input 
                    type = "email" 
                    id = "mail" 
                    required
                    v-model="form.mail"
                    class="md:text-2xl placeholder-white placeholder-opacity-100 mt-5"  
                    placeholder = "EMAIL">
                <textarea 
                    id = "message" 
                    v-model="form.message"
                    required
                    class="md:text-2xl text-lg placeholder-white placeholder-opacity-100 mt-5"  
                    placeholder = "MESSAGE"></textarea>  
                <div class="flex md:flex-row flex-col mt-10">
                    <label class="ml-auto mr-auto checkbox">
                        <input 
                            class="accent-transparent" 
                            type="checkbox"
                            id = "termAndCondition" 
                            required
                            v-model="form.termAndCondition">
                        <span class="absolute">
                        </span>
                    </label>
                    <div class="lg:text-lg md:text:sm text:xs md:ml-5 text-center align-middle">
                        <a href="https://policies.google.com/terms?hl=en-US" class="leading-[2.5]" target="_blank">I ACCEPT THE TERMS & CONDITIONS OF THE WEBSITE*</a>
                    </div> 
                </div>
                <button type="submit" form="contactForm" value="Submit" class="mt-10 ml-auto mr-auto md:mr-0 text-xs md:text-2xl" @click="handleSubmit">
                    <Chip
                        :text="'SEND'"
                        :isButton="true" >
                    </Chip>
                </button>
            </form>
        </div>
    </div>
</div>

</template>

<script>
export default defineNuxtComponent({
  name: 'ContactUs',
  data() {
    return {
        form : {
            name: '',
            mail: '',
            message: '',
            termAndCondition: false
        }      
    }
  },
  methods: {
    async handleSubmit() {
        const isValidForm =document.getElementById('termAndCondition').checkValidity() && document.getElementById('mail').checkValidity() && document.getElementById('name').checkValidity() && document.getElementById('message').checkValidity();
        if(!isValidForm) {
            return
        }
        
        const { data: response } = await useFetch('/api/message', {
                method: 'post',
                body: {
                    data: this.form
                },
                headers: useRequestHeaders()
            })
            
            
        alert(response.value);
    }
}
})
</script>

<script setup>
const contacts = useContact()
</script>

<style scoped>


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
    transition: transform 0.5s ease-out;
  }
  
  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }


main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

form {
    width: 100%;
}
input::placeholder {
    font-weight: 300;
    font-size: x-large;
}
textarea::placeholder {
    font-weight: 300;
    font-size: x-large;
}

.checkbox {
    display: inline-flex;
    cursor: pointer;
    position: relative;
}

.checkbox > span {
    color: #34495E;
    padding: 0.5rem 0.5rem;
}

.checkbox > input {
    height: 25px;
    width: 25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid white;
    border-radius: 4px;
    outline: none;
    transition-duration: 0.3s;
    background-color: transparent;
    cursor: pointer;
  }

.checkbox > input:checked {
    background-color: whitesmoke;
}

.checkbox > input:checked + span::before {
    content: '\2713';
    display: block;
    text-align: center;
    color: black;
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
}

.checkbox > input:active {
    border: 2px solid #34495E;
}

input {
    background-color: transparent;
    height: 3.5em;
    width: 100%;
    padding: 12px 12px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
}
textarea {
    background-color: transparent;
    height: 5em;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    padding: 12px 12px;
}
@media screen and (max-width: 650px) {
    .checkbox > span {
    padding: 12px 12px;
}

    input::placeholder {
        font-weight: 300;
        font-size: large;
    }
    textarea::placeholder {
        font-weight: 300;
        font-size: large;
    }
input {
    background-color: transparent;
    height: 2.5em;
    width: 100%;
    padding: 12px 12px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
}
    }
</style>