import { createSlice } from "@reduxjs/toolkit";
import { client } from "../../utils/client";
import { createAppAsyncThunk } from "../../store/withTypes";
import { Server } from "./models/Server";
import { RootState } from "../../store/store";

const ENDPOINT = 'servers'

export const fetchAllServers = createAppAsyncThunk<Server[]>('server/fetchAllServers', async () => {
    const response = await client.get<Server[]>(ENDPOINT);
    return response.data;
});

export const addServer = createAppAsyncThunk<Server, FormData>('server/addServer', async (initialServer: FormData) => {
    const response = await client.post<Server>(ENDPOINT, initialServer);
    return response.data;
})

interface ServerState {
    servers: Server[],
}

const initialState: ServerState = {
    servers: [],
};

const serverSlice = createSlice({
    name: 'servers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllServers.fulfilled, (state, action) => {
            state.servers = action.payload;
        });
        builder.addCase(addServer.fulfilled, ({ servers }, { payload }) => {
            servers.push(payload)
        })
    }
})


export default serverSlice.reducer
export const selectAllPost = (state: RootState) => state.serverReducer.servers;