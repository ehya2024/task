<template>
  <div class="main">
    <div class="main_header">APP BAR</div>
    <div class="main_boxs">
      <div class="main_left_box">
        <button @click="dashboardShow" ref="dashboardBtn">Dashboard</button>
        <button @click="todosShow" ref="todosBtn">Todos</button>
        <button @click="weatherShow" ref="weatherBtn">Weather</button>
      </div>
      <div class="main_right_box">
        <div class="main_right_box_content" ref="dashboardBox">
          <div><DigitalClock /></div>
        </div>
        <div class="main_right_box_content" ref="todosBox">
          <div class="todo_list_div"><TodoList class="todo-list"/></div>
        </div>
        <div class="main_right_box_content" ref="weatherBox">
          <div><WeatherData /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DigitalClock from "./components/DigitalClock.vue";
import TodoList from "./components/TodoList.vue";
import WeatherData from "./components/WeatherData.vue";

const dashboardBox = ref(null);
const todosBox = ref(null);
const weatherBox = ref(null);

const dashboardBtn = ref(null)
const todosBtn = ref(null);
const weatherBtn = ref(null);

function dashboardShow() {
  dashboardBox.value.style.display = 'block';
  todosBox.value.style.display = 'none';
  weatherBox.value.style.display = 'none';

  dashboardBtn.value.style.fontWeight = 'bold';
  todosBtn.value.style.fontWeight = 'normal';
  weatherBtn.value.style.fontWeight = 'normal';
}

function todosShow() {
  dashboardBox.value.style.display = 'none';
  todosBox.value.style.display = 'block';
  weatherBox.value.style.display = 'none';

  dashboardBtn.value.style.fontWeight = 'normal';
  todosBtn.value.style.fontWeight = 'bold';
  weatherBtn.value.style.fontWeight = 'normal';
}

function weatherShow() {
  dashboardBox.value.style.display = 'none';
  todosBox.value.style.display = 'none';
  weatherBox.value.style.display = 'block';

  dashboardBtn.value.style.fontWeight = 'normal';
  todosBtn.value.style.fontWeight = 'normal';
  weatherBtn.value.style.fontWeight = 'bold';
}

function profileShow() {
  dashboardBox.value.style.display = 'none';
  todosBox.value.style.display = 'none';
  weatherBox.value.style.display = 'none';

  dashboardBtn.value.style.fontWeight = 'normal';
  todosBtn.value.style.fontWeight = 'normal';
  weatherBtn.value.style.fontWeight = 'normal';
}
</script>

<style>
body {
  background-color: rgb(34, 0, 34);
}

.main {
  width: 45rem;
  height: 27rem;
  background-color: rgb(235, 235, 235);
  margin: 4rem auto;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(173, 173, 173);
  overflow: hidden;
}

.main_header {
  height: 2.4rem;
  background-color: gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-bottom: 1px solid rgb(173, 173, 173);
}

.main_boxs {
  display: flex;
  height: 100%;
}

.main_left_box {
  width: 23%;
  border-right: 1px solid rgb(173, 173, 173);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem 0;
  padding-top: 1rem;
  box-sizing: border-box;
}

.main_left_box button {
  width: fit-content;
  cursor: pointer;
  padding: 0.20rem 0.40rem;
  box-sizing: border-box;
  border: 1px solid rgb(173, 173, 173);
  border-radius: 3px;
}

.main_left_box button:first-child {
  font-weight: bold;
}

.main_right_box {
  width: 77%;
}

.main_right_box_content {
  width: 100%;
  height: 100%;
}

.main_right_box_content > div {
  width: 100%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.todo-list {
  width: 100%;
}

.todo_list_div {
  overflow: scroll;
}

.todo_list_div::-webkit-scrollbar {
  width: 6px;
  height: 0;
  background-color: gainsboro;
}

.todo_list_div::-webkit-scrollbar-thumb {
  background-color: rgb(184, 184, 184);
}

@media screen and (max-width: 768px){
  .main {
    width: 34rem;
    height: 25rem;
  }
}

@media screen and (max-width: 576px){
  .main {
    width: 24rem;
    height: 19rem;
  }

  .main_left_box {
    width: 30%;
  }

  .main_right_box {
    width: 70%;
  }
}
</style>
