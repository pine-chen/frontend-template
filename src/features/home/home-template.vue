<template>
  <div class="flex">
    <div class="name">{{store.name}}</div>
    <el-button @click="getList()">test</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { userStore } from '@/store';
import { IUser } from '@/features/home/home-template.dto';
import { user } from '@/service/api';

export default defineComponent({
  name: 'home-template',

  setup() {
    const store:IUser = userStore();
    const arr1 = [1, 2, 3];
    const arr = arr1.sort((a, b) => a - b).some((item) => item === 2);
    const getList = () => {
      user.getUser({}).then((res) => {
        //
      });
    };
    return {
      store,
      arr,
      getList
    };
  }
});
</script>

<style lang="scss" scoped>
.flex{
  width: 400px;
  height: 400px;
  @extend .flexCenter;
  .name{
    color: $blue;
  }
}
</style>
