let editingAlarm = null;

const formDate = document.getElementById('formDate');

const year   = document.getElementById('year');
const month  = document.getElementById('month');
const day    = document.getElementById('day');
const hour   = document.getElementById('hour');
const minute = document.getElementById('minute');

const currentDate = document.getElementById('currentDate');
const table = document.getElementById('alarmsList');

const classEdit = document.getElementsByClassName("edit");
const classDelete = document.getElementsByClassName("delete");


const saveDataLS = () => {
  let alarmsToSave = [];
  alarms.forEach(alarm => {
    alarmsToSave.push({ date: alarm.date.getTime(), triggered: alarm.triggered });
  });

  localStorage.setItem('pirpleAlarms', JSON.stringify(alarmsToSave));
};

const readDataLS = () => {
  let savedAlarms = JSON.parse(localStorage.getItem('pirpleAlarms'));
  for (let i = 0; i < savedAlarms.length; i++) {
    let alarmTemp = savedAlarms[i];
    alarmTemp.date = new Date(parseInt(alarmTemp.date));
    savedAlarms[i] = alarmTemp;
  }

  alarms = savedAlarms;

  displayAlarmsList();
  startChecking();
};

const alarmExists = (newAlarm) => {
  for (let i = 0; i < alarms.length; i++) {
    if (alarms[i].date.getTime() == newAlarm.getTime()) {
      return true;
    }
  }

  return false;
};

const resetForm = () => {
  formDate.reset();
};

const saveDate = (e) => {
  e.preventDefault();

  let date = new Date(year.value, month.value, day.value, hour.value, minute.value);
  let now = new Date();
  let triggeredStatus = (date.getTime() >= now.getTime()) ? 0 : 1;

  if (alarmExists(date)) {
    console.log("Alarm already exists");
    return;
  }

  let alarm = { date: date, triggered: triggeredStatus };

  if (editingAlarm != null) {
    alarms[editingAlarm] = alarm;
    editingAlarm = null;
  } else {
    alarms.push(alarm);
  }
  saveDataLS();
  resetForm();
  displayAlarmsList();
};

const editAlarm = (event) => {
  editingAlarm = event.target.getAttribute("data-alarm"); 
  const alarm = alarms[editingAlarm];

  year.value = alarm.date.getFullYear();
  month.value = alarm.date.getMonth();
  day.value = alarm.date.getDate();
  hour.value = alarm.date.getHours();
  minute.value = alarm.date.getMinutes();
};

const deleteAlarm = (event) => {
  editingAlarm = null;
  const alarmIndex = event.target.getAttribute("data-alarm");

  alarms.splice(alarmIndex, 1);


  saveDataLS();
  displayAlarmsList();
};

const getMonthName = (month) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec',
  ];

  return months[month];
};

const leadingZero = (value) => {
  if (value < 10) {
    return `0${value}`;
  }
  return value;
};

const getAlarmTime = (alarm) => {
  const hour = alarm.getHours();
  const minutes = leadingZero(alarm.getMinutes());
  return `${hour}:${minutes}`;
};

const getAlarmDateTime = (alarm) => {
  const year = alarm.getFullYear();
  const month = getMonthName(alarm.getMonth());
  const day = alarm.getDate();
  const hour = leadingZero(alarm.getHours());
  const minutes = leadingZero(alarm.getMinutes());
  return `${month} ${day}, ${year} - ${hour}:${minutes} hs`;
};

const checkDateTimeForAlarm = () => {
  const now = new Date();
  currentDate.innerText = `${getAlarmDateTime(now)}`;

  alarms.forEach((alarm, index) => {
    if (alarm.triggered) { return; }

    if (now.getTime() >= alarm.date.getTime()) {   
      notificationMessage(getAlarmTime(alarm.date));

      alarms[index] = { date: alarm.date, triggered: 1 };

      saveDataLS();
      displayAlarmsList();
    }
  });

  startChecking();
};

const notificationMessage = (time) => {
  if (!('Notification' in window)) {
    alert("This browser doesn't support the Notification API");
  } else if (Notification.permission === 'granted') {
    showNotification(time);
  } else {
    Notification.requestPermission((permission) => {
      if (permission === 'granted') {
        showNotification(time);
      }
    });
  }
};

const showNotification = (time) => {
  new Notification('ALARM!', {
    body: `This is the alarm of ${time} hs`
  });
};

const prepareRowButtons = () => {
  for (let i = 0; i < classEdit.length; i++) {
    classEdit[i].addEventListener('click', editAlarm, false);
  }

  for (let i = 0; i < classDelete.length; i++) {
    classDelete[i].addEventListener('click', deleteAlarm, false);
  }
};

const displayAlarmsList = () => {
  table.innerHTML = `
    <tr>
      <th>alarm</th>
      <th colspan="2">status</th>
    </tr>
  `;

  alarms.forEach((alarm, index) => {
    const alarmDateTime = getAlarmDateTime(alarm.date);

    const alarmRow = document.createElement('tr');

    let alarmItem = '';
    if (alarm.triggered) {
      alarmItem = `
        <td class="triggered">${alarmDateTime}</td>
        <td colspan="2" class="triggered">Triggered </td>
      `;
    } else {
      alarmItem = `
        <td>${alarmDateTime}</td>
        <td><button class="edit" data-alarm="${index}">Edit</button></td>
        <td><button class="delete" data-alarm="${index}">Delete</button></td>
      `;
    }

    alarmRow.innerHTML = alarmItem;
    table.insertAdjacentElement('beforeend', alarmRow);
  });

  prepareRowButtons();
}

formDate.addEventListener('submit', saveDate);

const startChecking = () => {
  setTimeout( () => {
    checkDateTimeForAlarm();
  }, 1000);
}

readDataLS();