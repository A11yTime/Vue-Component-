export default {
    data(){
        return {

        }
    },
    methods: {
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