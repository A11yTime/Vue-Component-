<template>
<div class="btncontainer">
   <button>Keyboard Only Focus</button>
</div>

</template>
<style scoped>
button:focus { outline: 2px solid rgb(8, 8, 20); }
button:focus:not(:focus-visible) {
    outline: none;
}
button:focus-visible { 
    outline: 2px solid blue; 
    outline-offset: 1px;
    border-radius: 0px;
}
.btncontainer {
    margin: 50px;

}
</style>