<template>
    <li class="list-inline-item m-2 cate-item p-1" id="#mostViewsAria">
      <div class="d-flex align-items-center w-100 pl-1 pr-1">
        <span class="avatar-img d-inline-block">  
          {{ category | sub-Text(10) }}
        </span>
      </div>
    </li>
</template>

<script>
export default {
  props:["category"],
  name: "active_categoris"
};
</script>

<style lang="scss" scoped>
    .cate-item{
       border-radius: 10px;
       background: #959595;
        color: #FFF;
    }
</style>