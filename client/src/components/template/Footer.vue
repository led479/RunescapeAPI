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
        background: linear-gradient(to right, rgb(19, 19, 19), #202020);
        color: rgba(255, 255, 255, 0.815);

        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
    }
</style>
