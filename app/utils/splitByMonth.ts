interface EventData {
  date: string;
  title: string;
  timeStart: string;
  timeEnd: string;
  location: string;
  userprofile: string;
  status: boolean;
}

export const groupDataByMonth = (data: EventData[]) => {
  const groupedData: {[key: string]: EventData[]} = {};

  data.forEach(item => {
    const date = new Date(item.date);
    const month = date.toLocaleString('en-US', {month: 'long'});
    const year = date.getFullYear();
    const key = `${month} ${year}`;

    if (!groupedData[key]) {
      groupedData[key] = [];
    }

    groupedData[key].push(item);
  });

  return groupedData;
};
