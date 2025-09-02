/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "./axiosInstance";


const login = async (data: any) => {
    const response = await axiosInstance.post("/user/signin", data);
    return response.data;
};


export const authApi = {
    login,
};
