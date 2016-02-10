
 ///ADD Pages
  $(function(){
	  
	  
  });
   
        // removes an item with the specified key from the specified type of storage
        function removeItem(type, key) {
            // get the specified type of storage, i.e. local or session
            var storage = window[type + 'Storage'];

            storage.removeItem(key);

            showKeys();
        }
		
 
    
    ////// END LOCAL STORAGE