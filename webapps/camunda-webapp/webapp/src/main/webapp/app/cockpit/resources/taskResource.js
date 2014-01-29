ngDefine('cockpit.resources', function(module) {

  var TaskResource = [ '$resource', 'Uri', function ($resource, Uri) {
    var endpoint = Uri.appUri('engine://engine/:engine/task/:id/:action');
    var endpointParams = { id: '@id' };

    return $resource(endpoint, endpointParams, {
      query: {
        method: 'POST',
        isArray: true
      },
      count: {
        method: 'POST',
        isArray: false,
        params: { id: 'count' }
      },

      getIdentityLinks: {
        method: 'GET',
        params: { action: 'identity-links' }
      },
      addIdentityLinks: {
        method: 'POST',
        params: { action: 'identity-links' }
      },
      deleteIdentityLinks: {
        method: 'POST',
        params: { action: 'identity-links/delete' }
      },

      // setOwner: {
      //   method: 'POST',
      //   params: { action: 'owner' }
      // },
      setAssignee: {
        method: 'POST',
        params: { action: 'assignee' }
      }
    });
  }];

  module.factory('TaskResource', TaskResource);
});
