import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import { RootState, AppDispatch } from "./store.ts";

type DispatchFunction = () => AppDispatch;

export const useBookedSessionsSelector: TypedUseSelectorHook<RootState> =
  useSelector;
export const useBookedSessionsDispatch: DispatchFunction = useDispatch;
