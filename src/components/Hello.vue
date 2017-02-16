<template>
    <div>
        <p>{{ message }}</p>
        <div class="flex">flex1</div>
        <div class="flex">flex2</div>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'av-ts'

    @Component
    export default class Hello extends Vue {
        message = 'hello, linzebingo!!!'
    }
</script>
