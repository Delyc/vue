<template>
    <button :type="type"></button>
    <slot></slot>
</template>

<script>
export default {
   props: ['type']
}
</script>