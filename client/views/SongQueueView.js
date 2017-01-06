// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // model: SongQueue,

  initialize: function() {
    console.log(this);
    
    
    console.log(this.songQueueEntryView);
    // this.fakesongs.on('add', () => console.log('hi!'));
    // this.on('add', this.$el.render);

    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);


  },

  // events: {
  //   'add': 'render',
  // },

  render: function() {
    this.songQueueEntryView = new SongQueueEntryView();
    this.songQueueEntryView.render();
    return this.$el;

    // From solution video:
    // return this.$el.html(this.template(this.model.attributes))

  }

});