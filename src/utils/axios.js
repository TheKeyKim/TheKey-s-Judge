import axios from "axios";

const request = axios.create({
    baseURL : "http://14.138.173.146:8000/api"
})

export const userAPI = {
    register : (name, email, password, login_id) => {
        return request.post("/user/signin",{
            name : name,
            email,
            password,
            login_id
        })
    },
    login : (login_id, password) => {
        console.log(request);
        return request.post("/user/login",{
            login_id,
            password
        })
    },
    mypage : () => {
        return request.get("/user", null, {
            headers: {
                Authorization : localStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
            },
        });
    }
}

export const solvedAPI = {
    post : (user_id, problem_id) => {
        return request.post("/solved", {
            user_id,
            problem_id,},{
            headers: {
                Authorization : localStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
            }
        })
    },
    get : () => {
        return request.get("/solved", null, {
            headers: {
                Authorization: localStorage.getItem("token"),
                "Content-Type": "multipart/form-data",
            },
        })
    }
}

export const problemAPI = {
    submit : (id, problem_id, language, code) => {
        return request.post("/problem/submit", {
            id,
            problem_id ,
            language ,
            code
        },{
            headers : {
                Authorization : localStorage.getItem("token"),
                'content-type': 'application/json',
            }
        });
    }
}