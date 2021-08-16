<template>
  <div class="task">
    <input type="checkbox" v-model="task.done" />
    <span :class="{ done: task.done }">{{ task.name }}</span>
  </div>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style>
.task {
  display: flex;
  align-items: center;
  margin: 1rem 0rem 1rem 1rem;
  font-size: 1.125rem;
}
.task > input {
  cursor: pointer;
  margin-right: 0.5rem;
  height: 1rem;
  width: 1rem;
}
.done {
  text-decoration: line-through;
}
</style>