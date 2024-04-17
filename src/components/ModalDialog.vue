<template>
  <div>
    <slot
      name="trigger"
      :open="open"
    > <button @click="open" ref="openBtn">Open</button></slot>

    <transition name="v-fade">
      <div
        v-if="modalOpen"
        ref="modalContainer"
        class="modal"
        role="dialog"
        :aria-hidden="open ? 'false' : 'true'"
        @keydown="checkKeyEvent"
      >
        <button
          
          class="btn btn_light modal-close"
          aria-label="close"
          @click="close"
          ref="close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path
              d="M0 0h24v24H0z"
              fill="none"
            />
          </svg>
          <span class="u-is-visually-hidden">Close</span>
        </button>
        <div class="modal-inner">
          <slot
            name="modal-content"
            :close-modal="close"
          ></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>

export default {
  
  name: 'ModalDialog',
  // directives: {
  //   focus: {
  //       inserted: function(el){
  //           el.focus()
  //       }
  //   }
  // },
  data(){
    return{
        intialFocus: null,
        modalOpen: false,
    }
  },
    methods: {
      setFocus(){
        this.$refs.close.focus()
      },
    open(event){
        // this.intialFocus = event.target;
        this.modalOpen = true;
        setTimeout(() =>{
          this.setFocus
        }, 200)
    },
    close(){
        this.modalOpen = false;
        this.intialFocus.focus()
    },
    checkKeyEvent(event) {
      // close modal and return early if escape
      if (event.key === 'Escape') {
        this.modalOpen = false;
        return;
      }
      const focusableList = this.$refs.modalContainer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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
  }
}
</script>
<style>
.u-is-visually-hidden {
position:absolute;
left:-10000px;
top:auto;
width:1px;
height:1px;
overflow:hidden;
}
/* .modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  z-index: 200;
}
.modal-inner {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-inner .video {
  width: 100%;
 } */
.modal-close {
  position: absolute;
  top: 25%;
  right: 15%;
  z-index: 100;
} 
.v-fade-enter-active,
.v-fade-leave-active {
  transition: opacity 300ms;
}
.v-fade-enter-to,
.v-fade-leave {
  opacity: 1;
}
.v-fade-enter,
.v-fade-leave-to {
  opacity: 0;
}
</style>