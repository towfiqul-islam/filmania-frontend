import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterReducer'
import movieReducer from './movieReducer'
import searchReducer from './searchReducer'
import sortReducer from './sortReducer'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    filter: filterReducer,
    sort: sortReducer,
    movie: movieReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch