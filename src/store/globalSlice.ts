// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
  activeCard: CardProps | undefined;
  previousCard: CardProps | undefined;
}

interface CardProps {
  layoutId: string;
  backgroundColor: string;
  dimension: number;
}

const initialState: GlobalState = {
  activeCard: undefined,
  previousCard: undefined,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    applyCard: (state, action: PayloadAction<CardProps>) => {
      state.activeCard = action.payload;
    },
    clearCard(state) {
      state.previousCard = state.activeCard;
      state.activeCard = undefined;
    },
  },
});

export const { applyCard, clearCard } = globalSlice.actions;
export default globalSlice.reducer;
