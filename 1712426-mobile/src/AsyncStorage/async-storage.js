import AsyncStorage from "@react-native-community/async-storage";

export const getTokenAsyncStorage = () => {
    return AsyncStorage.getItem("token");
};
export const getListIdCourseDownloadAsyncStorage = () => {
  return AsyncStorage.getItem("listDownload");
};