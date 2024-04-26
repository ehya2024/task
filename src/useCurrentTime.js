import {ref} from 'vue';

export function useCurrentTime(){
    const currentTime = ref(new Date());
    function updateCurrentTime(){
        currentTime.value = new Date();
    };
    const updateTimeInterval = setInterval(updateCurrentTime,1000);
    return{currentTime};
};