<template>
  <main>
    <input v-model.trim="query" @keypress="fetchWeather" type="text" placeholder="city or country..."
      class="search-bar">
    <div v-if="typeof weather.main != 'undefined'">
      <div class="location-box">
        <span class="location">{{ weather.name }}, {{ weatherCountry.country }}</span>
        <span class="date">{{ date.toLocaleDateString() }}</span>
      </div>
      <div class="weather-box">
        <span class="temp">{{ Math.floor(weather.main.temp) - 273 }} C</span>
        <span class="weather">{{ weather.weather[0].main }}</span>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const api = ref("https://api.openweathermap.org/data/2.5/");
const api_key = ref("7f9f88ae5fa257adca4f2e57807ef557");
const query = ref("");

const weather = ref({});
const weatherCountry = ref({});
const date = new Date();

function fetchWeather(e) {
  if (e.key == 'Enter') {
    axios.get(`${api.value}/weather?q=${query.value}&appid=${api_key.value}`)
      .then(function (response) {
        weather.value = response.data;
        weatherCountry.value = response.data.sys
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

main {
  width: 70%;
}

.search-bar {
  width: 100%;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: rgb(37, 37, 37);
  padding: 0 7px;
  color: whitesmoke
}

.location-box {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 5px 0;
}

.location {
  font-weight: bold;
  font-size: 19px;
}

.weather-box {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  align-items: center;
  gap: 5px 0;
}

.temp {
  font-weight: bold;
  font-size: 22px;
  background-color: rgb(37, 37, 37);
  color: gainsboro;
  width: fit-content;
  padding: 5px 8px;
  border-radius: 4px;
}
</style>