import { format } from 'date-fns';
import { toDate } from 'date-fns-tz';

export const formatDate = (date: string | Date, f = 'MMM do HH:mm, yyyy', d = '') => {
  return date ? format(toDate(date), f) : d;
};
