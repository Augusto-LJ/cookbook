<script setup lang="ts">
const props = defineProps({
    href: String
});
</script>

<template>
    <a :href="href"
        target="_blank"
        class="px-3 py-2 mb-2 rounded border-2 border-red-600 bg-red-500 hover:bg-red-600 hover:text-white transition-colors"
        rel="noopener noreferrer"
    >
        <slot></slot>
    </a>
</template>