import searchParamOptions from "./searchParamOptions";

export default {
  login: "/",
  room: `/room/:${searchParamOptions.ROOM}?/`,
};
