// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      // Convert condition to backbone version later
      if (this.models.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', this.dequeue);
    this.on('dequeue', this.dequeue);

  },
  
  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function() {
    this.remove(this.at(0));
    
    if (this.length > 0) {
      this.playFirst();
    }
  }

});