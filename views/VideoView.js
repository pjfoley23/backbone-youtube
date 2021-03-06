  // VideoView
  // className: video-listing
  // template: sidebar-vids-template

  var VideoView = Backbone.View.extend({
    className: 'video-listing',

    template: Handlebars.compile($('#sidebar-vids-template').html()),
    
    events: {
      'click .video-listing': 'setOnStage'
    },

    render: function () {
      // hide the current video because it's on the main stage
      if (this.model.get('on_stage')) {
        console.log('detected on_stage');
        console.log(this.model.toJSON());
        this.$el.html(this.template(this.model.toJSON())).addClass('d-none');
      }
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    initalize: function () {
      // console.log('videoView inits');
      this.listenTo(this.model.get('on_stage'), 'change', appView.renderMainStage()); // needs to toggle class visibilty (.d-none)
    },

    setOnStage: function (e) {
      console.log('was event sent to me?', e);
     console.log('selected a vid for OnStage');
      // not working
    },

    switchMain: function () {
      //TODO  move to appView?
    }    
  });