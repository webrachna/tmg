$(window).on('ready', function() {
    $('.executive-team').addClass('dispersed');
});

var Profile = Backbone.View.extend({
    render: function(profile) {
        var template = _.template(profile_template, profile);
        var that = this;

        this.$el.html(template);
        return this;
    }
});

var profileView = new Profile({el: $('.profile-content')});

var Router = Backbone.Router.extend({
    routes: {
        "profile/:exec": "showProfile",
        "profile": "hideProfile"
    },
    showProfile: function(exec) {
        var person = this.hashPrep(exec);
        var profile = executive_profiles[person];
        var expand_profile = $('.expand-profile');
        var executive_profile = $('.executive-profile');
        var contract_profile = $('.contract-profile');

        // analytics
        s.pageName= 'Executive Team: '+profile.name;
        s.channel="Company";
        s.prop1 = s.getTimeParting('h','-7','2011');
        s.prop2 = s.getTimeParting('d','-7','2011');
        s.prop3 = s.getTimeParting('w','-7','2011');
        s.prop4=s.pageName;
        s.events="event1";
        s.t();

        $('.executive').removeClass('active');
        contract_profile.hide();
        $('#' + exec).addClass('active');

        $('.profile-content').fadeOut(function(){
            $('.executive-team').addClass('profile-display');
            profileView.render(profile);
            $(this).fadeIn();

            if(executive_profile.find('p').length > 1) {
                expand_profile.fadeIn();
            } else {
                expand_profile.hide();
            }

            executive_profile.on('click', '.expand-profile', function(){
                expand_profile.hide().parent().find('p').fadeIn(function(){
                    contract_profile.fadeIn().on('click', function(){
                        $(this).hide().parent().find('p').not('.bio-intro').hide();
                        expand_profile.show();
                    });
                });
            });
        });
    },
    hideProfile: function() {
        $('.executive-team').removeClass('profile-display');
        $('.executive').removeClass('active');
    },
    hashPrep: function(exec) {
        return exec.replace(/-/g, '').toString();
    }
});

$(function(){

    var router = new Router();
    Backbone.history.start();

    $(document).on('keyup', function(e) {
        if(e.keyCode == 27) {
            router.navigate("profile", {trigger: true});
        }
    });

});

var executive_profiles = Domo["company"].json;

var profile_template = '<div class="executive-avatar">';
profile_template += '<img src="Executives_files/<%= avatar %>">';
profile_template += '</div>';
//profile_template += '<div class="executive-twitter-handle"><a href="http://www.twitter.com/<%= twitter %>"">@<%= twitter %></a></div>';
profile_template += '<hgroup>';
profile_template += '<h1><%= name %></h1>';
profile_template += '<h4><%= title %></h4>';
//profile_template += '<h5>Social Media Activity</h5>';
profile_template += '</hgroup>';
profile_template += '<%= bio %>';
