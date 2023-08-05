import axios from "axios"
const ApiKey="AIzaSyD3VAzSY8gbNjiB4MQSNAm-D0fVyEEAJ-0";
export default axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResult:5,
        key:ApiKey,
    },
    headers:{}
    
})