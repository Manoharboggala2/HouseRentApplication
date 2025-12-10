import axios from "axios";

const API=axios.create({
    baseURL:"http://localhost:9191"

});
export default API;