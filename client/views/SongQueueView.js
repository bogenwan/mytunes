// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {   
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);

  },

  render: function() {
    // this.$el.children().detach();

    this.$el.html('<th>Queue</th>');
    // .append(
    this.songQueueEntryView = new SongQueueEntryView().render();
    // );
    return this.$el;

    // From solution video:
    // return this.$el.html(this.template(this.model.attributes))

  }

});