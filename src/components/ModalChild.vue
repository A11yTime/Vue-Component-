<template>
    <div>
 <h1>Add user Information </h1>
<form action="/action_page.php">
  <fieldset>
  <legend>Personalia:</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday"><br><br>
  <input type="submit" value="Submit">
 </fieldset>
</form>
<!-- <slot></slot> -->
</div>
<!-- <button class="dbutton" aria-disabled="true" >Test!</button> -->
<button class="dbutton2" >Test!</button>
<button   class="dbutton1">Test2</button>
</template>
<script>
import focusTrap from '@/mixins/focusTrap';
export default {
    mixins: [focusTrap],
    data(){
        return{
            visibilityButton: false
        }
    },
    // methods: {
    //     toggleDisabled(){
    //         const button = document.querySelector('button');
    //         if(button.disabled = "true"){
    //             Index = -1
    //         }else{
    //             Index = ""
    //         }

    //     }
        
    // }

}
</script>
<style scoped>
fieldset {
    border: 0;
}
.dbutton{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
.dbutton1 {
    display: none;
}
</style>