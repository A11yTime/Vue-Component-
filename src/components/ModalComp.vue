<template>
    <div class="backdrop" @click="closeDialog"></div>
    <dialog open 
    ref="modalContainer" 
    @keydown="checkKeyEvent">
      <header>
        <h2>{{ title }}</h2>
      </header>
      <div>
        <slot></slot>
      </div>
      <menu>
        <button 
        class="close-button" 
        @click="closeDialog"
        ref="closeBtn">
        Close
      </button>
      <Modal-child></Modal-child>
      </menu>
      
    </dialog>
  </template>     
  
  <script>
  import ModalChild from './ModalChild.vue';
  export default {
    components: {
      ModalChild,
    },
    props: ['title'],
    emits: ['close'],
    mounted(){
      const closeFocus = this.$refs.closeBtn;
      closeFocus.focus()
    },
    methods: {
      closeDialog() {
        this.$emit('close');
      },
      checkKeyEvent(event) {
        // close modal and return early if escape
        if (event.key === 'Escape') {
          this.modalOpen = false;
          return;
        }
        
        const focusableList = this.$refs.modalContainer.querySelectorAll(
          'button:not([disabled, hidden]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        // escape early if only 1 or no elements to focus
        if (focusableList.length < 2 && event.key === 'Tab') {
          event.preventDefault();
          return;
        }
        const last = focusableList.length - 1;
        if (
          event.key === 'Tab' &&
          event.shiftKey === false &&
          event.target === focusableList[last]
        ) {
          event.preventDefault();
          focusableList[0].focus();
        } else if (
          event.key === 'Tab' &&
          event.shiftKey === true &&
          event.target === focusableList[0]
        ) {
          event.preventDefault();
          focusableList[last].focus();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }
  
  dialog {
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    position: fixed;
    top: 30vh;
    left: calc(50% - 15rem);
    width: 30rem;
    background-color: white;
    z-index: 100;
    overflow: hidden;
  }
  
  header {
    width: 100%;
    padding: 1rem;
    background-color: #310131;
    color: white;
  }
  
  dialog div {
    padding: 1rem;
  }
  
  menu {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0;
  }
  .close-button {
    position: absolute;
    right: 5px;
    top: 5px;
   
}


  </style>
  