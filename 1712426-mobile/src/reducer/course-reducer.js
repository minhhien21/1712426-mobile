import {
  GET_CURRENT_LOCAL_URL_REQUEST,
  GET_CURRENT_URL_REQUEST,
  REQUEST_DETAIL_COURSE_FAILED,
  REQUEST_DETAIL_COURSE_SUCCESSED,
  REQUEST_FAVORITE_LIST_COURSE_FAILED,
  REQUEST_FAVORITE_LIST_COURSE_SUCCESSED,
  REQUEST_TOP_NEW_LIST_COURSE_FAILED,
  REQUEST_TOP_NEW_LIST_COURSE_SUCCESSED,
  REQUEST_TOP_RATE_LIST_COURSE_FAILED,
  REQUEST_TOP_RATE_LIST_COURSE_SUCCESSED,
  REQUEST_TOP_SELL_LIST_COURSE_FAILED,
  REQUEST_TOP_SELL_LIST_COURSE_SUCCESSED,
  REQUEST_USER_FAVORITE_COURSE_FAILED,
  REQUEST_USER_FAVORITE_COURSE_SUCCESSED,
  REQUEST_USER_PROCESS_COURSE_FAILED,
  REQUEST_USER_PROCESS_COURSE_SUCCESSED,
} from '../action/courses-action';

export const reducer = (prevState, action) => {
  switch (action.type) {
    case REQUEST_TOP_SELL_LIST_COURSE_SUCCESSED:
      return {
        ...prevState,
        isRequestedTopSell: true,
        TopSellListCourse: action.data,
      };
    case REQUEST_TOP_SELL_LIST_COURSE_FAILED:
      return {...prevState, isRequestedTopSell: false};

    case REQUEST_TOP_NEW_LIST_COURSE_SUCCESSED:
      return {
        ...prevState,
        isRequestedTopNew: true,
        TopNewListCourse: action.data,
      };
    case REQUEST_TOP_NEW_LIST_COURSE_FAILED:
      return {...prevState, isRequestedTopNew: false};

    case REQUEST_TOP_RATE_LIST_COURSE_SUCCESSED:
      return {
        ...prevState,
        isRequestedTopRate: true,
        TopRateListCourse: action.data,
      };
    case REQUEST_TOP_RATE_LIST_COURSE_FAILED:
      return {...prevState, isRequestedTopRate: false};

    case REQUEST_FAVORITE_LIST_COURSE_SUCCESSED:
      return {
        ...prevState,
        isRequestedFavorite: true,
        FavoriteListCourse: action.data,
      };
    case REQUEST_FAVORITE_LIST_COURSE_FAILED:
      return {...prevState, isRequestedFavorite: false};
    case REQUEST_DETAIL_COURSE_SUCCESSED:
      return {
        ...prevState,
        isRequestedDetail: true,
        DetailCourse: action.data,
      };
    case REQUEST_DETAIL_COURSE_FAILED:
      return {...prevState, isRequestedDetail: false};
    case REQUEST_USER_FAVORITE_COURSE_SUCCESSED:
      return {
        ...prevState,
        isRequestedUserFavoriteCourse: true,
        UserFavoriteCourse: action.data,
      };
    case REQUEST_USER_FAVORITE_COURSE_FAILED:
      return {...prevState, isRequestedUserFavoriteCourse: false};
    case REQUEST_USER_PROCESS_COURSE_SUCCESSED:
      return {
        ...prevState,
        isRequestedUserProcessCourse: true,
        UserProcessCourse: action.data,
      };
    case REQUEST_USER_PROCESS_COURSE_FAILED:
      return {...prevState, isRequestedUserProcessCourse: false};
    case GET_CURRENT_URL_REQUEST:
      return {...prevState,
        isRequestUrlVideo:true,
        currentUrlVideo: action.data}
    case GET_CURRENT_LOCAL_URL_REQUEST:
      return {...prevState,
        isRequestUrlLocalVideo:true,
        currentLocalUrlVideo: action.data}
    default:
      throw new Error();
  }
};
