<template>
    <div>
        <p>{{ message }}</p>
        <div class="flex">flex1</div>
        <div class="flex">flex2</div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'av-ts'

    @Component
    export default class Hello extends Vue {
        message = 'hello, linzebingo!!!'
    }
</script>
