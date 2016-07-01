function Storage(tag, storageProvider) {
    this.tag = tag;
    this.provider = storageProvider;
}

Storage.prototype = {
    create: function(key, val) {
        this.provider.create(this.tag + key, val);
    },
    read: function(key) {
        return this.provider.read(this.tag + key);
    },
    delete: function(key) {
        this.provider.delete(this.tag + key);
    },
    update: function(key, val) {
        this.provider.update(this.tag + key, val);
    }
}
