<template>
    <div v-if="!isHidden" class="container-fluid g-0" id="landingpage">
        <div class="row justify-content-center g-0 section-height">
          <div class="col-12 g-0 first-container"></div>
          <div class="col-md-8 col-10 g-0 image-container d-flex flex-column align-items-center justify-content-center text-center">
  
            <img :src="picture" class="rounded-circle img-fluid rounded-circle-image" id="startPicture" alt="startPicture" />
            <div class="mt-50">
                <h1>{{name}}</h1>
                <h3>E-Mail: {{email}}</h3>
                <button class="btn btn-lg btn-dark" v-on:click="isHidden = true; startMemory();">Memory starten</button>
            </div>
          </div>
        </div>
      </div>
  
  </template>

<script>

    const emits = defineEmits(['startMemory']);

    export default {
        data() {
            return {
                name: 'Mandy Lewerenz',
                email: 'mandy.lwrz@gmail.com',
                picture: require('@/assets/bewerbungsbild.jpg'),
                isHidden: false,
            }
        }
    }
</script>