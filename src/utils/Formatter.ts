import 'dayjs/locale/th';

import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('th');
dayjs.extend(relativeTime);
dayjs.extend(buddhistEra);

export function upperFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function formatDate(
  date?: dayjs.ConfigType,
  format = 'D MMM YYYY HH:mm',
) {
  if (!date) return '';
  return dayjs(date).format(format);
}
export const getDate = dayjs;
