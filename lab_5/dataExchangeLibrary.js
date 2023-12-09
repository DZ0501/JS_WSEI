class DataExchangeLibrary {
  static subscribers = {};

  static subscribe(eventName, callback) {
    if (!DataExchangeLibrary.subscribers[eventName]) {
      DataExchangeLibrary.subscribers[eventName] = [];
    }
    DataExchangeLibrary.subscribers[eventName].push(callback);
  }

  static publish(eventName, data) {
    if (DataExchangeLibrary.subscribers[eventName]) {
      DataExchangeLibrary.subscribers[eventName].forEach(callback => {
        callback(data);
      });
    }
  }
}