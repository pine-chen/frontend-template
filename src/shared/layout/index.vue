<template>
  <el-container>
    <el-menu
        default-active="2"
        background-color="#0062B3"
        text-color="#fff"
        active-text-color="#FD8701"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <div class="system-name">
        <img src="@/assets/svgs/system_logo.svg" alt="">
      </div>
      <div class="collapse-btn">
        <el-button size="small" :icon="isCollapse ? Expand : Fold" @click="changeCollapse" />
      </div>
      <el-sub-menu v-for="(item, key) in menuData" :key="key" :index="item.value">
        <template #title>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <el-main></el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  Expand, Fold
} from '@element-plus/icons-vue';

const isCollapse = ref(false);

const menuData = ref([
  {
    name: 'Navigator Home',
    value: 'home',
    icon: 'location'
  },
  {
    name: 'Navigator About',
    value: 'about',
    icon: 'icon-menu'
  }
]);

const changeCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};

</script>

<style lang="scss" scoped>
.el-menu{
  background: $blue-dark;
  .system-name{
    @extend .flexCenter;
    img{
      width: 100%;
    }
  }
  .collapse-btn{
    @extend .alignCenter;
    justify-content: flex-end;
  }
}
</style>
