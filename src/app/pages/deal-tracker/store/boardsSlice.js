import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import history from "@history";
import BoardModel from "../model/BoardModel";
import { proxy } from "../../../../@helper/proxy";

/**
 * Get Boards
 */
export const getBoards = createAsyncThunk(
  "scrumboardApp/boards/getBoards",
  async () => {
    const response = await axios.get(`${proxy()}/v1/scrumboard/boards`);
    const data = await response.data.results;

    return data;
  }
);

/**
 * Create New Board
 */
export const newBoard = createAsyncThunk(
  "scrumboardApp/boards/newBoard",
  async (board, { dispatch }) => {
    const response = await axios.post(
      `${proxy()}/v1/scrumboard/boards`,
      BoardModel(board)
    );
    const data = await response.data.results;

    history.push({
      pathname: `/apps/scrumboard/boards/${data.id}`,
    });

    return data;
  }
);

const boardsAdapter = createEntityAdapter({});

export const { selectAll: selectBoards, selectById: selectBoardById } =
  boardsAdapter.getSelectors((state) => state.scrumboardApp.boards);

const boardsSlice = createSlice({
  name: "scrumboardApp/boards",
  initialState: boardsAdapter.getInitialState({}),
  reducers: {
    resetBoards: (state, action) => {},
  },
  extraReducers: {
    [getBoards.fulfilled]: boardsAdapter.setAll,
  },
});

export const { resetBoards } = boardsSlice.actions;

export default boardsSlice.reducer;
