import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import _ from "@lodash";
import { removeList } from "./listsSlice";
import { removeCard, updateCard } from "./cardSlice";
import CardModel from "../model/CardModel";
import { proxy } from "../../../../@helper/proxy";

export const getCards = createAsyncThunk(
  "scrumboardApp/cards/getCards",
  async (boardId) => {
    const response = await axios.get(
      `${proxy()}/v1/scrumboard/boards/${boardId}/cards`
    );
    const data = await response.data.results;

    return data;
  }
);

export const newCard = createAsyncThunk(
  "scrumboardApp/cards/newCard",
  async ({ listId, newData }, { dispatch, getState }) => {
    const { board } = getState().scrumboardApp;

    const response = await axios.post(
      `${proxy()}/v1/scrumboard/boards/${board.id}/lists/${listId}/cards`,
      CardModel(newData)
    );
    const data = await response.data.results;

    return data;
  }
);

const cardsAdapter = createEntityAdapter({});

export const { selectAll: selectCards, selectById: selectCardById } =
  cardsAdapter.getSelectors((state) => state.scrumboardApp.cards);

const cardsSlice = createSlice({
  name: "scrumboardApp/cards",
  initialState: cardsAdapter.getInitialState({}),
  reducers: {
    resetCards: (state, action) => {},
  },
  extraReducers: {
    [getCards.fulfilled]: cardsAdapter.setAll,
    [removeList.fulfilled]: (state, action) => {
      const listId = action.payload;
      const { selectAll } = cardsAdapter.getSelectors();
      const cards = selectAll(state);
      const removedCardIds = _.map(_.filter(cards, { listId }), "id");
      return cardsAdapter.removeMany(state, removedCardIds);
    },
    [newCard.fulfilled]: cardsAdapter.addOne,
    [updateCard.fulfilled]: cardsAdapter.setOne,
    [removeCard.fulfilled]: cardsAdapter.removeOne,
  },
});

export const { resetCards } = cardsSlice.actions;

export default cardsSlice.reducer;
