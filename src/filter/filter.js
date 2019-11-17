import Vue from "vue";
import moment from "moment";

moment.locale("en");
moment.updateLocale("en");

Vue.filter("moment-date", value => {
  return moment(value).fromNow();
});

Vue.filter("text-date", value => {
  return moment(value, "llll");
});

Vue.filter("sub-Text", (value,maxLength) => {
  return value.substr(0, maxLength) + "...";
});
