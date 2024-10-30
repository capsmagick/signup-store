import axios from "axios";
import Cookies from 'js-cookie'


let onRejected = function (error:any) {
    return Promise.reject(error);
};

let csrfToken:string | undefined;

const setTokenToHeaders = function (request:any) {
    if (csrfToken) {
        request.headers['X-CSRFToken'] = csrfToken
    }
}

const getTokenFromResponse = function () {
    csrfToken = Cookies.get('csrftoken');
}


function createAxiosInstance() {

    const axiosInstance = axios.create({
        baseURL: '/api',
        withCredentials: true,
        xsrfHeaderName: 'X-CSRFToken', // Verify this matches the CSRF token header name used in your backend
        xsrfCookieName: 'csrftoken',   // Verify this matches the CSRF token cookie name used in your backend
        headers: {
            Accept: "application/json"
        }
    });

    axiosInstance.interceptors.request.use(
        function (request) {
            const method = request.method;
            if (method !== "get" || method !== "delete") {
                if (typeof FormData !== "undefined" && request.data instanceof FormData) {
                    request.headers["Content-Type"] = "multipart/form-data";
                }
            }
            setTokenToHeaders(request);
            return request;
        }
    )

    axiosInstance.interceptors.response.use(function (response) {
        getTokenFromResponse();
        return response.data;
    }, onRejected)

    return axiosInstance
}

const api = createAxiosInstance();

export default api;

// // Api.ts
// import axios from "axios";
// import type AxiosRequestConfig from "axios";

// let csrfToken: string | null;
// const authPaths: string[] = [
//   // "/account/token/user/status/",
//   "/account/user/me/",
//   "/account/token/user/login/",
//   "/account/token/user/logout/",
//   "/user/token/refresh/",
// ];

// function getCookie(name: string): string | null {
//   let cookieValue: string | null = null;
//   if (document.cookie && document.cookie !== "") {
//     const cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length + 1) === `${name}=`) {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }

// const setTokenToHeaders = (request: any): void => {
//   if (csrfToken) {
//     request.headers = request.headers || {};
//     request.headers["X-CSRFToken"] = csrfToken;
//   }
// };

// const getTokenFromResponse = (): void => {
//   csrfToken = getCookie("csrftoken");
// };

// const getAccessToken = (): string | null => {
//   return localStorage.getItem("access");
// };

// function createAxiosInstance(){
//   try {
//     const axiosAPI = axios.create({
//       xsrfHeaderName: "X-CSRFToken",
//       xsrfCookieName: "csrftoken",
//       withCredentials: true,
//       baseURL: "/api",
//       // baseURL: "http://localhost:8000/api",
//       headers: {
//         Accept: "application/json",
//       },
//     });

//     // Adding request interceptor to attach CSRF token to outgoing requests
//     axiosAPI.interceptors.request.use(
//       async (config: any) => {
//         const method = config.method || "get";
//         const access = getAccessToken();
//         if (access) {
//           config.headers = config.headers || {};
//           config.headers["Authorization"] = `Bearer ${access}`;
//         } else {
//           if (!authPaths.includes(config.url || "")) {
//             return Promise.reject(new Error("Unauthorized request to a protected path"));
//           }
//         }
//         if (method !== "get" && method !== "delete") {
//           if (typeof FormData !== "undefined" && config.data instanceof FormData) {
//             config.headers["Content-Type"] = "multipart/form-data";
//           }
//         }
//         setTokenToHeaders(config);
//         return config;
//       },
//       async (error) => {
//         return Promise.reject(error);
//       }
//     );

//     axiosAPI.interceptors.response.use(
//       (response: any) => {
//         getTokenFromResponse();
//         return response;
//       },
//       (error) => {
//         const status = error.response?.status;
//         if (status === 401) {
//           return Promise.reject(new Error("Token not valid"));
//         }
//         return Promise.reject(error);
//       }
//     );

//   } catch (e) {
//     console.log("axios-error-nuxt", e);
//   }
// }

// const api = createAxiosInstance();

// export default api;