<script setup lang="ts">
const props = defineProps({
    href: String
});
</script>

<template>
    <a :href="href"
        target="_blank"
        class="px-3 py-2 mb-2 rounded border-2 border-orange-600 bg-orange-500 hover:bg-orange-600 hover:text-white transition-colors"
        rel="noopener noreferrer"
    >
        <slot></slot>
    </a>
</template>