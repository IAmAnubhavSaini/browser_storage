var Logger = function(log, info, warn, error) {
    this.storages = [];
    this.log = !log ? console.log.bind(console) : log;
    this.info = !info ? console.info.bind(console) : info;
    this.warn = !warn ? console.warn.bind(console) : warn;
    this.error = !error ? console.error.bind(console) : error;
};
