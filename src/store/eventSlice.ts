// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventState {
  events: EventProps[];
}

interface EventProps {
  id: any;
  name: string;
  startDate: string;
  endDate?: string;
  location: string;
  summary: string;
  description: string;
  images: any[];
  isWork: boolean;
}

const initialState: EventState = {
  events: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    loadEvents: (state, action: PayloadAction<EventProps[]>) => {
      state.events = action.payload;
    },
  },
});

export const { loadEvents } = eventSlice.actions;
export default eventSlice.reducer;
