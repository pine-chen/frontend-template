import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => ({
    name: 'chen',
    age: 100
  }),
  getters: {
    getName: (state) => state.name,
    getAge: (state) => state.age
  },
  actions: {
    changeAge(age:number) {
      this.age = age;
    },
    changeName(name:string) {
      this.name = name;
    },
    logout() {}
  }
});
