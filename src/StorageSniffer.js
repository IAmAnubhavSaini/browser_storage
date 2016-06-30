var StorageSniffer = function(logger) {
    this.storages = [];
    this.logger = logger;

    function sniffStorage() {
        if(localStorage){
            logger.log('localStorage found.');
            this.storages.push('local');
        }
        if(sessionStorage){
            logger.log('sessionStorage found.');
            this.storages.push('session');
        }
    }
}
