sarasApp.factory('saraData', function () {
   return {
       //don't user $ on your own services, you dont want to accidentally overwrite an angular service.
       sara: {
           profilePicture: '/img/gallery/gallery5.jpeg',
           address: {
               street: '',
               city: 'San Francisco',
               state: 'California',
               zip: ''
           }
       }
   }
});
