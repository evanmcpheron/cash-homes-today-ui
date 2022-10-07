import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { proxy } from "../../../../@helper/proxy";

/**
 * Get Members
 */
export const getMembers = createAsyncThunk(
  "scrumboardApp/members/getMembers",
  async (boardId) => {
    const response = await axios.get(`${proxy()}/v1/scrumboard/members`);
    const data = await response.data.results;

    return data;
  }
);

const membersAdapter = createEntityAdapter({});

export const { selectAll: selectMembers, selectById: selectMemberById } =
  membersAdapter.getSelectors((state) => state.scrumboardApp.members);

const membersSlice = createSlice({
  name: "scrumboardApp/members",
  initialState: membersAdapter.getInitialState({}),
  reducers: {
    resetMembers: (state, action) => {},
  },
  extraReducers: {
    [getMembers.fulfilled]: membersAdapter.setAll,
  },
});

export const { resetMembers } = membersSlice.actions;

export default membersSlice.reducer;
