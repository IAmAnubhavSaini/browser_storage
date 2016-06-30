function StorageProvider(provider, functionStrings) {
    var setFStr = functionStrings.set;
    var getFStr = functionStrings.get;
    var unsetFStr = functionStrings.unset;
    this.provider = provider;
    this.setF = this.provider[setFStr].bind(this.provider);
    this.getF = this.provider[getFStr].bind(this.provider);
    this.unsetF = this.provider[unsetFStr].bind(this.provider);
}

StorageProvider.prototype = {
    set: function(key, val) {
        this.setF(key, val);
    },
    get: function(key) {
        return this.getF(key);
    },
    unset: function(key) {
        this.unsetF(key);
    }
};
