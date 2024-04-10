import { HistoryItem } from "@pages/CV/data/experiences";
import { TFunction } from "i18next";

export const getDateToText = (
  date: HistoryItem["date"],
  t: TFunction<"translation", "translation">
) => {
  const numberToMonthMap: { [key: number]: string } = {
    1: "january",
    2: "february",
    3: "march",
    4: "april",
    5: "may",
    6: "june",
    7: "july",
    8: "august",
    9: "september",
    10: "october",
    11: "november",
    12: "december",
  };
  if (date[0].length > 1) {
    return `${t(`common:month.${numberToMonthMap[date[0][0]]}`)} ${
      date[0][1]
    } - ${t(`common:month.${numberToMonthMap[date[1][0]]}`)} ${date[1][1]}`;
  } else {
    return `${date[0][0]} - ${date[1][0]}`;
  }
};
