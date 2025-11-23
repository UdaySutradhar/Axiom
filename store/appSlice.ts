import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChainType } from '@/lib/types';

interface AppState {
  activeChain: ChainType;
}

const initialState: AppState = {
  activeChain: 'SOL',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChain: (state, action: PayloadAction<ChainType>) => {
      state.activeChain = action.payload;
    },
  },
});

export const { setChain } = appSlice.actions;
export default appSlice.reducer;