import {
  GET_REPORTS_SUCCESS,
  GET_REPORTS_ERROR,
  LOG_REPORT_SUCCESS,
  LOG_REPORT_ERROR,
} from "../types";

const initialState = {
  reports: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        reports: state.reports,
      };

    case GET_REPORTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOG_REPORT_SUCCESS:
      const curr = state.reports;
      curr.push(action.new);
      return {
        ...state,
        loading: false,
        reports: state.reports,
        new: action.new,
      };

    case LOG_REPORT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
