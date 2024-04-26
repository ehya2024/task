<template>
    <main>
        <header class="header">
            <span>Todo List</span>
            <form>
                <input type="text" v-model.lazy.trim="textTodo" placeholder="Title">
                <button type="button" @click="addTodo">Add</button>
            </form>
        </header>

        <ul class="myUl">
            <li v-for="(todo,index) in todos" :key="index" @click="selectTodo(todo)" :class="{checked:todo.status}">
                <span>{{ todo.text }}</span>
                <button type="button" @click="removeTodo(index)">
                    <FontIcon :icon="['fas','trash']" />
                </button>
            </li>
        </ul>
    </main>
</template>

<script setup>
import {ref} from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const textTodo = ref("");
const todos = ref([]);

function addTodo(){
    if(textTodo.value){
        todos.value.push({text : textTodo.value,status : false});
        textTodo.value = '';
    }
}

function selectTodo(todo){
    todo.status = !todo.status;
}

function removeTodo(index){
    todos.value.splice(index,1);
}
</script>

<style>
* {
    box-sizing: border-box;
}

.header {
    width: 95%;
    height: 8rem;
    background-color: rgb(37, 37, 37);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.80rem 0;
}

.header span {
    color: whitesmoke;
    font-weight: bold;
    font-size: 21px;
}

.header form {
    width: 85%;
    background-color: palegoldenrod;
    display: flex;
    justify-content: space-between;
}

.header form input {
    width: 90%;
    border: none;
    padding: 10px;
    outline: none;
}

.header form button {
    width: 10%;
    background-color: gainsboro;
    cursor: pointer;
    border: none;
    transition: 300ms ease-in-out;
}

.header form button:hover {
    background: rgb(165, 165, 165);
}

.myUl {
    width: 95%;
    margin: 0 auto;
    list-style-type: none;
    padding: 0;
}

.myUl li {
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    transition: 300ms ease-in-out;
    cursor: pointer;
    position: relative;
}

.myUl li:hover {
    background: gainsboro !important;
}

.myUl li:nth-child(odd) {
    background-color: whitesmoke;
}

.myUl li:nth-child(even) {
    background-color: rgb(233, 233, 233);
}

.checked {
    text-decoration: line-through;
    background-color: rgb(165, 165, 165) !important;
    position: relative;
    color: white;
}

.checked::before {
    content: '';
    position: absolute;
    border-top: 0;
    border-right: 1.5px;
    border-bottom: 1.5px;
    border-left: 0;
    border-color: white;
    border-style: solid;
    top: 11px;
    left: 14px;
    height: 11px;
    width: 6px;
    transform: rotate(45deg);
}

.myUl li button {
    background-color: rgb(209, 40, 40);
    color: whitesmoke;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    padding: 5px;
}
</style>