(function() {
    var BufferList = Backbone.Collection.extend({
        model: relay.Buffer
    });

    relay.Buffers = new BufferList();
    relay.Buffers.type = 'buffers';
}());
