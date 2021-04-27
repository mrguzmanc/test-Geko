import {
    GET_REPORTS,
    GET_REPORTS_SUCCESS,
    GET_REPORTS_ERROR,
    LOG_REPORT_SUCCESS,
    LOG_REPORT_ERROR,
} from "../types";

export function getReportsAction() {
    return async (dispatch) => {
        try {
            dispatch(getReportsOk());
        } catch (error) {
            dispatch(getReportsErr(error));
        }
    };
}

export function saveReportAction(log) {
    return (dispatch) => {
        try {
            dispatch(saveLogOk(log));
        } catch (error) {
            dispatch(saveLogErr(error));
        }
    };
}

const getReportsOk = () => ({
    type: GET_REPORTS_SUCCESS,
});
const getReportsErr = (err) => ({
    type: GET_REPORTS_ERROR,
    payload: err,
});

const saveLogOk = (data) => ({
    type: LOG_REPORT_SUCCESS,
    new: data,
});
const saveLogErr = (err) => ({
    type: LOG_REPORT_ERROR,
    payload: err,
});
