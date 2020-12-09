import {
  REQUEST_FAVORITE_LIST_COURSE_FAILED,
  REQUEST_FAVORITE_LIST_COURSE_SUCCESSED,
  REQUEST_TOP_NEW_LIST_COURSE_FAILED,
  REQUEST_TOP_NEW_LIST_COURSE_SUCCESSED,
  REQUEST_TOP_RATE_LIST_COURSE_FAILED,
  REQUEST_TOP_RATE_LIST_COURSE_SUCCESSED,
  REQUEST_TOP_SELL_LIST_COURSE_FAILED,
  REQUEST_TOP_SELL_LIST_COURSE_SUCCESSED,
} from '../action/listcourses-action';

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
    default:
      throw new Error();
  }
};
