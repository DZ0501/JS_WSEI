interval();

function interval() {
  let timer = 1;
  setInterval(() => {
    saveDataToStorage('C', timer);
    discoverPowerBallNumber(timer);
    timer++;
  }, 1000);
}

function saveDataToStorage(key, data) {
  console.log(`[reader ${key}]`, data);
  const storageData = { data };
  sessionStorage.setItem(key, JSON.stringify(storageData));
  DataExchangeLibrary.publish('dataSaved', data);
}

function discoverPowerBallNumber(data) {
  const number = Math.floor(Math.random() * data * 100);
  console.log('[powerball number]', number);
  DataExchangeLibrary.publish('powerBallDiscovered', number);
}

DataExchangeLibrary.subscribe('dataSaved', (data) => {
  console.log(`Data saved: ${data}`);
});

DataExchangeLibrary.subscribe('powerBallDiscovered', (number) => {
  console.log(`Powerball number discovered: ${number}`);
});
