<template>
    <h4 class="text-center mb-4">
        I <span class="heartBeatAnimation d-inline-block" style="color: red"><i class="fa fa-heart"></i></span> Coding
    </h4>
</template>
<script>
export default {
    name:"login_header"
}
</script>

<style lang="scss" scoped>
    @keyframes hearBeat {
        0%{
            transform: scale(1.1);
        }
        50%{
            transform: scale(1.2);
        }
        80%{
             transform: scale(1.3);
        }
        100%{
            transform: scale(1);
        }
    }

    .heartBeatAnimation{
        transition: all .5s ease-in-out;
        animation: hearBeat .5s cubic-bezier(0.04, 1.74, 1, -0.57) infinite ;
    }
</style>