const { format } = require('date-fns');
import { enUS } from 'date-fns/locale';

export default function formatTimestampToDate(unixTimestamp: number, formatType = 'd MMM yyyy', includeTime = false) {
  const date = new Date(unixTimestamp * 1000);
  let formattedDate = format(date, formatType, enUS);

  if (includeTime) {
    formattedDate += format(date, " 'at' HH:mm");
  }

  return formattedDate;
}
