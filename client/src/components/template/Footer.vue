<template>
    <footer class="footer"> 
        <span>Pepega is <strong>noice</strong> @2019 </span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: rgb(44, 44, 44);
        color: rgb(168, 168, 168);

        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
    }
</style>
