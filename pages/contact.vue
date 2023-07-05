<!--
    Contact Page
-->
<template>
    <CenterTitlewithLateralImage
        title="CONTACT US"
        :widthImage="'30em'"
        class="z-0 mt-20 md:mt-0" />
<div class="flex flex-col md:flex-row mt-44 md:mt-20 ml-[5%] mr-[5%] z-10">
    <div class="basis-1/2">
        <div class="flex flex-col space-y-4">
            <div class="pb-10">
                <div class="md:text-3xl text-xl font-light uppercase mb-5">Email</div>
                <div class="md:text-3xl text-xl font-ABCbold">{{contacts.email}}</div>
            </div>
            <div class="pb-10">
                <div class="md:text-3xl text-xl font-light uppercase mb-5">Phone number</div>
                <div v-for="n in contacts.phoneNumbers" class="md:text-3xl text-xl font-ABCbold last:mb-0 mb-5">{{n}}</div>
            </div>
            <div class="pb-10">
                <div class="md:text-3xl text-xl font-light uppercase mb-5">Address</div>
                <div class="md:text-3xl text-xl font-ABCbold">{{contacts.address}}</div>
            </div>
        </div>
    </div>
    <div class="basis-1/2">
        <div class="flex flex-col space-y-4">
            <div class="md:text-3xl text-2xl font-ABCbold">Have an investment to propose?<br>Drop us a line!</div>
            <form class="flex flex-col">
                <input 
                    type = "text" 
                    id = "name" 
                    v-model="name"
                    class="md:text-2xl placeholder-white placeholder-opacity-100 mt-5" 
                    placeholder = "NAME">
                <input 
                    type = "email" 
                    id = "mail" 
                    v-model="mail"
                    class="md:text-2xl placeholder-white placeholder-opacity-100 mt-5"  
                    placeholder = "EMAIL">
                <textarea 
                    id = "message" 
                    v-model="message"
                    class="md:text-2xl text-lg placeholder-white placeholder-opacity-100 mt-5"  
                    placeholder = "MESSAGE"></textarea>  
                <div class="flex flex-row mt-10">
                    <label class="checkbox">
                        <input 
                            class="accent-transparent" 
                            type="checkbox"
                            id = "termAndCondition" 
                            v-model="termAndCondition">
                        <span>
                        </span>
                    </label>
                    <span class="lg:text-lg md:text:sm text:xs ml-5">
                        I ACCEPT THE TERMS & CONDITIONS OF THE WEBSITE*
                    </span> 
                </div>
                <button class="mt-10" @click="sendEmail()">
                    <Chip
                        :text="'SEND'">
                    </Chip>
                </button>

                
            </form>
        </div>
    </div>
</div>


<!--
<main>
    <main>
        <p>
            This are our contacts:
            <ul>
                <li>E-mail: mail@shelter.it</li>
                <li>Tel: 053684864351</li>
            </ul>
        </p>
        <form>
            <div>
                <label for = "name">Name & Surname</label>
                <input type = "text" id = "name" placeholder = "Name & Surname">
            </div>
            <div>
                <label for = "mail">E-mail</label>
                <input type = "email" id = "mail" placeholder = "E-mail">
            </div>
            <div id = "message-div">
                <label for = "message">Message</label>
                <textarea id = "message" placeholder = "Write your message here"></textarea>  
            </div>
            <button>Send Message</button>
        </form>
    </main>
</main>-->
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      mail: '',
      message: '',
      termAndCondition: false
    }
  },
  methods: {
    sendEmail() {
      try {/*
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
        'YOUR_USER_ID', {
          name: this.name,
          email: this.email,
          message: this.message
        })*/
        console.log(this.name + this.mail + this.message + this.termAndCondition)

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<script setup>
const contacts = useContact()
</script>

<style>
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
    padding: 0.5rem 0.25rem;
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
    left: 0.4rem;
    top: 0.1rem;
}

.checkbox > input:active {
    border: 2px solid #34495E;
}

input {
    background-color: transparent;
    height: 3.5em;
    width: 100%;
    padding: 12px 20px;
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
}
    @media screen and (max-width: 650px) {
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
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
}
    }
</style>