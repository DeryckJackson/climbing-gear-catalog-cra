import { configureStore } from '@reduxjs/toolkit';
import gearlistReducer from './slices/gearlistSlice';

export default configureStore({
  reducer: {
    gearlist: gearlistReducer
  },
});
