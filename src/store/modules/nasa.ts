import { toast } from 'react-toastify';
import axios from 'axios';

/** Type(s) */
import { Dispatch } from '../../@types/store.type';

import config from '../../config';

const API_REQUEST_PROCESS = 'API_REQUEST_PROCESS';
const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS';
const API_REQUEST_ERROR = 'API_REQUEST_ERROR';

export const searchNasa =
  (searchParam: string) => async (dispatch: Dispatch) => {
    console.log('hey', searchParam);
    try {
      dispatch({ type: API_REQUEST_PROCESS });
      const {
        data: {
          collection: { items },
        },
      } = await axios.get(`${config?.BASE_URL}?q=${searchParam}`);
      dispatch({ type: API_REQUEST_SUCCESS, payload: items });
    } catch (error: any) {
      toast.error(
        `An error occured, please check your credentials and try again`,
      );
      dispatch({ type: API_REQUEST_ERROR, payload: error.response.data });
    }
  };

const DEFAULT_STATE = {
  isLoading: false,
  error: {},
  data: [],
};

export const nasaReducer = (
  state = DEFAULT_STATE,
  action?: { payload: unknown; type: string },
) => {
  switch (action?.type) {
    case API_REQUEST_PROCESS:
      return {
        ...state,
        isLoading: true,
      };
    case API_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case API_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
