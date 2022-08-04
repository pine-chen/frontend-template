<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
          background-color="#293750"
          text-color="#fff"
          active-text-color="#FD8701"
          :collapse="isCollapse"
          router
      >
        <div class="system-name">
          <img src="@/assets/svgs/system_logo.svg" alt="">
        </div>
        <!--      <div class="collapse-btn">-->
        <!--        <el-button size="small" :icon="isCollapse ? Expand : Fold" @click="changeCollapse" />-->
        <!--      </div>-->
        <el-sub-menu v-for="(item, key) in menuData" :key="key" :index="item.path">
          <template #title>
<!--            <img :src="item.icon" alt="" style="width: 25px; margin-right: 8px">-->
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item
              v-for="(childItem, childKey) in item.children"
              :key="childKey"
              :index="resolvePath(item.path, childItem.path)">
            {{ childItem.meta.title }}
          </el-menu-item>
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
import { isExternal } from '@/utils/validate';

const router = useRouter();
const isCollapse = ref(false);

const menuData = router.options.routes[0].children;

const changeCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
const resolvePath = (basePath:string, routePath:string) => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(basePath)) {
    return basePath;
  }
  return `/${basePath}/${routePath}`;
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
