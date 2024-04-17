<template>
  <modal-comp 
  v-if="alertIsVisible"
  

  title="Add a User?" 
  @close="hideAlert"
  @keydown="checkKeyEvent">
    <p>Do you want to continue with adding a user?</p>
  </modal-comp>
  <section>
    <h2>Add a User</h2>
    <button 
    @click="showAlert" 
    ref="showBtn">
    Add User
    </button>
  </section>
</template>

<script>
import ModalComp from './ModalComp.vue';
//import counterMixins from '@/mixins/counter.js';
import focusTrap from '@/mixins/focusTrap';

export default {
  mixins: [focusTrap],
  components: {
    ModalComp,
    
  },
    data() {
      return {
        alertIsVisible: false,
      };
    },
    methods: {
      showAlert() {
        this.alertIsVisible = true;
      },
      hideAlert() {
        this.alertIsVisible = false;
        this.$refs.showBtn.focus()
      },
      
    },
  };
  </script>