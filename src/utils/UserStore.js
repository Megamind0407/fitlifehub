import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./UserSlice";f

const UserStore = configureStore({
  reducer: {
    user: UserSliceReducer,
  },
});

export default UserStore;