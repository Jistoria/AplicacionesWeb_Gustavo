<template>
    <div>
        <header>
            
            <nav class="navbar navbar-expand-lg bg-body-tertiary header-car">
                <div class="container-fluid">
                    <a class="navbar-brand item-header" >ULEAM --- Usuario {{ username }}</a>
                    <a class="navbar-brand item-header" >{{ currentDate.toLocaleDateString() }}</a>
                    <a class="navbar-brand item-header" >{{ currentDate.toLocaleTimeString() }}</a>
                </div>
            </nav>
        </header>
    </div>
    
        
</template>

<script setup>
    defineProps({
        username: String
    })
    import { ref, onMounted } from 'vue';
    const currentDate = ref(new Date());
    onMounted(() => {
        setInterval(() => {
            currentDate.value = new Date();
        }, 1000);
    });
</script>

<style scoped>
    

</style>
