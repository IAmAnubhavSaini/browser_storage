function Storage(tag, storageProvider) {
    this.tag = tag;
    this.provider = storageProvider;
}

Storage.prototype = {
    create: function(key, val) {
        this.provider.set(this.tag + key, val);
    },
    read: function(key) {
        return this.provider.get(this.tag + key);
    },
    delete: function(key) {
        this.provider.unset(this.tag + key);
    },
    update: function(key, val) {
        this.provider.set(this.tag + key, val);
    }
}
