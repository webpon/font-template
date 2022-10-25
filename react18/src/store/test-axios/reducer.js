import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData, postData } from './axiosApi';


const initialState = {
    get_data: '',
    post_data: '',
};
export const send = createAsyncThunk(
    'testAxios/fetchData',
    async (amount) => {
        const response = await getData(amount);
        return response;
    }
);

export const postSend = createAsyncThunk(
    'testAxios/postData',
    async (amount) => {
        const response = await postData(amount);
        return response;
    }
);

export const testAxiosSlice = createSlice({
    name: 'testAxios',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(send.fulfilled, (state, action) => {
                state.get_data = action.payload;
            })

        builder
            .addCase(postSend.fulfilled, (state, action) => {
                state.post_data = action.payload;
            })

    },
});

export const selectData = (state) => ({ data: state.testAxios.get_data })
export const selectPostData = (state) => ({ data: state.testAxios.post_data, })


export default testAxiosSlice.reducer;
