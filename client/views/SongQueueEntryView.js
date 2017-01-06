// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // Not sure if we need this yet...
  // events: {
  //   'click': function() {
  //     // this.model.dequeue();

  //   }
  // },

  render: function() {
    // this.songQueueEntryView = new SongQueueEntryView({model: song}).render();
    // return this.$el.html(this.template(this.model.attributes));
  }
});
