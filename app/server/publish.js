Meteor.publish('issues', function (userId) {
 return Issues.find({createdBy: userId});
});
