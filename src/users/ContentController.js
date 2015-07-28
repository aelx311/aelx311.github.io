(function(){

  angular
       .module('Content')
       .controller('ContentController', [
          '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$sce', '$state',
          ContentController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function ContentController($mdSidenav, $mdBottomSheet, $log, $q, $sce, $state) {
    var self = this;

    self.titles = [
      {name: 'profile', icon: 'sidenav-icon mdi mdi-home'},
      {name: 'experience', icon: 'sidenav-icon  mdi mdi-clock-fast'}, 
      {name: 'skills', icon: 'sidenav-icon  mdi mdi-check-all'}, 
      {name: 'education', icon: 'sidenav-icon  mdi mdi-school'}, 
      {name: 'resume', icon: 'sidenav-icon  mdi mdi-paperclip'}
    ];
    self.selected     = self.titles[0];
    self.contents     = [ ];
    self.selectContent   = selectContent;
    self.toggleList   = toggleUsersList;
    self.showContactOptions  = showContactOptions;

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectContent ( index ) {
      self.selected = self.titles[index];
      $state.go(self.titles[index].name);
      self.toggleList();
    }

    /**
     * Show the bottom sheet
     */
    function showContactOptions($event) {
        var user = self.selected;

        return $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: './src/users/view/contactSheet.html',
          controller: [ '$mdBottomSheet', ContactPanelController],
          controllerAs: "cp",
          bindToController : true,
          targetEvent: $event
        }).then(function(clickedItem) {
          window.location.href = clickedItem.url;
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ContactPanelController( $mdBottomSheet ) {
          this.actions = [
            { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg', url:"tel:5126880505"},
            { name: 'Email', icon: 'mail', icon_url: 'assets/svg/mail.svg', url:"mailto:alexdehe.ng@gmail.com "}
          ];
          this.submitContact = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }
  }

})();
