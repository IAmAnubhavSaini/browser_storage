function StorageProvider(provider, functionStrings) {
    var createFStr = functionStrings.create;
    var readFStr = functionStrings.read;
    var deleteFStr = functionStrings.delete;
    var updateFStr = functionStrings.update;
    this.provider = provider;
    this.createF = this.provider[createFStr].bind(this.provider);
    this.readF = this.provider[readFStr].bind(this.provider);
    this.deleteF = this.provider[deleteFStr].bind(this.provider);
    this.updateF = this.provider[updateFStr].bind(this.provider);
}

StorageProvider.prototype = {
    create: function(key, val) {
        this.createF(key, val);
    },
    read: function(key) {
        return this.readF(key);
    },
    delete: function(key) {
        this.deleteF(key);
    },
    update: function(key, val) {
        this.updateF(key, val);
    }
};
