let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(date) {
  let day = date.getDay();

  switch(day) {
    case 0:
      day = 'ВС';
      break;
    case 1:
      day = 'ПН';
      break;
    case 2:
      day = 'ВТ';
      break;
    case 3:
      day = 'СР';
      break;
    case 4:
      day = 'ЧТ';
      break;
    case 5:
      day = 'ПТ';
      break;
    case 6:
      day = 'СБ';
      break;
  };

  return day;
}
  // console.log(getWeekDay(date));        // нужно вывести "ВТ"

function getSecondsToday() {
  let from = new Date();
  let to = new Date();
  from.setHours(0, 0, 0, 0);
  return (to.getTime() - from.getTime())/1000;
}

function formatDate(date = new Date(0)) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let sec = Math.round(diff / 1000);
  let min = Math.round(sec / 60);
  let day = date.getDate();
  if (day < 10) {
    day = '0' + day;
  };
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  };
  let nowHour = date.getHours();
  if (nowHour < 10) {
    nowHour = '0' + nowHour;
  };
  let nowMin = date.getMinutes();
  if (nowMin < 10) {
    nowMin = '0' + nowMin;
  };
  let year = date.getFullYear().toString().slice(2);
  let fullDate = `${day}.${month}.${year} ${nowHour}:${nowMin}`;
  
  if (diff < 1000) {
    return 'прямо сейчас';
  } else if (diff < 60*1000) {
    return `${sec} сек. назад`;
  } else if (diff < 60*60*1000) {
    return `${min} мин. назад`;
  } else {
    return fullDate;
  } ;
}

console.log(formatDate());