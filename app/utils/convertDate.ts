export const extractDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.getDate().toString();
};

export const extractDay = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {weekday: 'short'}).toUpperCase();
};

export const convertDate = (
  dateString: string,
  includeYear: boolean = false,
): string => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {day: '2-digit', month: 'short'};
  if (includeYear) {
    options.year = '2-digit';
  }

  return date.toLocaleDateString('en-US', options);
};

export const extractTime = (timestamp: string): string => {
  const date = new Date(timestamp);
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  const time = `${hours}${minutes === 0 ? '' : ':' + minutesStr} ${ampm}`;

  return time;
};
