<template>
  <div class="switch">
    <button
      class="switch__favorite"
      @click="$emit('someEvent'),switched()"
      :style="{backgroundColor: value.active?'orange':'inherit',borderRadius: value.active?'16px':'0' }"
    >
      تاریخچه پخش
    </button>
    <button
      class="switch__history"
       @click="switched()"
      :style="{backgroundColor: value.active?'inherit':'orange',borderRadius: !value.active?'16px':'0' }"
    >
      محبوب ترین اهنگ ها
    </button>
    
  </div>
</template>

<script setup>
import {reactive} from "vue"
    const  value =reactive( {active:true});

function switched() {
  value.active = !value.active;
}

</script>

<style lang="scss">
.switch {
  width: 20vw;
  height: 56px;
  background: rgba(70, 70, 70, 0.4);
  border-radius: 16px;
  margin: 2em 0;
  button {
    background-color: inherit;
    border: none;
    color: white;
    height: inherit;
    width: 50%;
    
  }
  
}
</style>
