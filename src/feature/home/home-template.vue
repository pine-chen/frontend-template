<template>
  <div>
    <div class="name" @click="getList">{{store.name}}</div>
    <common-test></common-test>
  </div>
</template>

<script setup lang="ts">
import { userStore } from '@/store';
import { IUser } from '@/feature/home/home-template.dto';
import { user } from '@/service/api';

const store:IUser = userStore();
const arr1 = [1, 2, 3];
const arr = arr1.sort((a, b) => a - b).some((item) => item === 2);
const getList = () => {
  user.getUser({})
    .then((res) => {
      // console.log('res', res);
    });
};
</script>

<style lang="scss" scoped>
</style>
