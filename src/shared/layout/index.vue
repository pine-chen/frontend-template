<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
          default-active="2"
          background-color="#293750"
          text-color="#fff"
          active-text-color="#FD8701"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
      >
        <div class="system-name">
          <img src="@/assets/svgs/system_logo.svg" alt="">
        </div>
        <!--      <div class="collapse-btn">-->
        <!--        <el-button size="small" :icon="isCollapse ? Expand : Fold" @click="changeCollapse" />-->
        <!--      </div>-->
        <el-sub-menu v-for="(item, key) in menuData" :key="key" :index="item.value">
          <template #title>
<!--            <img :src="item.icon" alt="" style="width: 25px; margin-right: 8px">-->
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item :index="item.value">{{ item.children }}</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isCollapse = ref(false);

const menuData = ref([
  {
    name: 'Navigator Home',
    value: 'home',
    icon: '@/assets/svgs/icon_home.svg',
    children: [
      {
        name: 'Item Home1',
        value: 'home1'
      },
      {
        name: 'Item Home2',
        value: 'home2'
      }
    ]
  },
  {
    name: 'Navigator About',
    value: 'about',
    icon: '@/assets/svgs/icon_about.svg',
    children: [
      {
        name: 'Item About',
        value: 'about'
      }
    ]
  }
]);

// console.log('3123123', router.options.routes);
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
.el-aside{
  background: $gray-darkest;
  .el-menu{
    border-right: $gray-darkest;
  }
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
