<template>
    <modal-dialog>
      <template #modal-content="slotProps">
        <div class="modal">
        <div role="dialog"
        aria-labelledby="title"
        aria-modal="true"
        >
        <h1 id="title">Oh hai! Wanna contribute Accessibility</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div modal-guts>
        <div class="field">
            <label for="fullname">First name: </label>
            <input type="text" name="fullname" id="fullname">
        </div>
        <div class="field">
            <label for="lastname">Last name: </label>
            <input type="text" name="lastname" id="lastname">
        </div>
        <div class="field">
            <label for="email">E-mail Address: </label>
            <input type="email" id="email">
        </div>
        <div class="field">
            <label for="tel">Phone Number: </label>
            <input type="tel" id="tel">
        </div>
        <button id="signup">Sign me up already!</button>
       </div>
    </div>
    </div>
      </template>
    </modal-dialog>
</template>
<script>
export default {
  
}
</script>
<style scoped>
@import 'https://fonts.googleapis.com/css?family=Prompt:400,700';
/* * {
  box-sizing: border-box;
} */

.modal {
  /* This way it could be display flex or grid or whatever also. */
  /* display: none; */
  
  /* Probably need media queries here */
  width: 600px;
  max-width: 100%;
  
  height: 400px;
  max-height: 100%;
  
  position: fixed;
  
  z-index: 100;
  
  left: 50%;
  top: 50%;
  
  /* Use this for centering if unknown width/height */
  transform: translate(-50%, -50%);
  
  /* If known, negative margins are probably better (less chance of blurry text). */
  /* margin: -200px 0 0 -200px; */
  
  background: white;
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
}

.modal-toggle {
  margin-top: 15px;
  margin-left: 15px;
}         
.field{
  margin-top: 10px;
  margin-left: 5px;
}
 #signup{
  margin-top: 20px;
  margin-left: 450px;
}
.close-button{
  margin-top: 8px;
  margin-left: 545px;
}
.modal-overlay{
  height: 1500px;
  width: 1000px;
}
p, h1{
  margin-left: 5px;
  margin-right: 5px;
}
</style>