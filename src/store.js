import { configureStore } from '@reduxjs/toolkit'
import pasteslice from './redux/pasteslice'

export default configureStore({
  reducer: {
    paste: pasteslice, // Add the reducer here
  },
});