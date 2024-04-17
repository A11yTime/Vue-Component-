<template>
    <div>
        <input v-focus type="text" placeholder="setfocus ...">
        <button @click="setFocus">Set focus</button>
    </div>
</template>
<script>
const focus = {
    mounted: (el) =>el.focus()
}
export default{
    directives: {
    // enables v-focus in template
    focus
  },
  methods: {
    setFocus: (el)=>el.focus()
    
  }
}
</script>