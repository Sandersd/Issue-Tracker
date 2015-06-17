Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    this.render('AccessDenied');
  } else
  {
    this.next();
  }
}, {only: ['issuesList', 'insertIssue']});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('insert_issue', {
  name: 'insertIssue',
  controller: 'InsertIssueController',
  action: 'action',
  where: 'client'
});


Router.route('/issues/:_id', {
  name: 'editIssue',
  controller: 'IssuesController',
  action: 'edit',
  where: 'client'
});



Router.route('issues_list', {
  name: 'issuesList',
  controller: 'IssuesListController',
  action: 'action',
  where: 'client'
});