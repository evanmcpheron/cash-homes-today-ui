import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { proxy } from "../../../../@helper/proxy";
import LabelModel from "../model/LabelModel";

export const getLabels = createAsyncThunk(
  "scrumboardApp/labels/getLabels",
  async (boardId) => {
    const response = await axios.get(
      `${proxy()}/v1/scrumboard/boards/${boardId}/labels`
    );
    const data = await response.data.results;

    return data;
  }
);

export const newLabel = createAsyncThunk(
  "scrumboardApp/labels/new",
  async (label, { dispatch, getState }) => {
    const { board } = getState().scrumboardApp;

    const response = await axios.post(
      `${proxy()}/v1/scrumboard/boards/${board.id}/labels`,
      { title: label }
    );

    const data = await response.data.results;

    return data;
  }
);

const labelsAdapter = createEntityAdapter({});

export const { selectAll: selectLabels, selectById: selectLabelById } =
  labelsAdapter.getSelectors((state) => state.scrumboardApp.labels);

const labelsSlice = createSlice({
  name: "scrumboardApp/labels",
  initialState: labelsAdapter.getInitialState({}),
  reducers: {
    resetLabels: (state, action) => {},
  },
  extraReducers: {
    [getLabels.fulfilled]: labelsAdapter.setAll,
    [newLabel.fulfilled]: labelsAdapter.addOne,
  },
});

export const { resetLabels } = labelsSlice.actions;

export default labelsSlice.reducer;
