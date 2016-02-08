
 ///ADD Pages
  $(function(){
       $('#leftmenu').load("left.html");
 
       $('#rightmenu').load("right.html");
  
       $('#footerpage').load("footer.html");
	   
	   ////// COMPANY NAME. ALL PAGES
	   
	    comp = localStorage.getItem("company");
	   	var cn = comp.split(';;;');
				for(var z = 0; z < cn.length; z++) {					
					var c_name = cn[0];
					var c_profile = cn[1];					
				}	  
	   $('#c_name').html(c_name);
	    $('#c_in').html(c_name);
	   $('#c_profile').html(c_profile);
	   
	  profile2  = c_profile.replace(/\r?\n/g, '<br />');
	   $('#profile2').html(profile2);
	   
   });
   
   
   /////// BEGIN LOCAL STORAGE
        $(document).ready(function () {
            // hide the storage divs if browser doesn't support local storage or session storage
            if (Modernizr.localstorage && Modernizr.sessionstorage) {
                $("#detectionSpan").html("Your device supports both local and session storage");
            } else {
                if (!Modernizr.localstorage) {
                    $("#detectionSpan").html("Your device doesn't support local storage");
                    $("#localStorageDiv").hide();
                } else {
                    $("#detectionSpan").html("Your device doesn't support session storage");
                    $("#sessionStorageDiv").hide();
                }
            }

            showKeys();
        });

        // show the keys currently held in the local and session storage
        function showKeys() {
            if (Modernizr.localstorage) {
                showStorageKeys("local", "#localTable");
            }

            if (Modernizr.sessionstorage) {
                showStorageKeys("session", "#sessionTable");
            }
        }

        // show the keys currently held in the specified type of storage in the specified table
        function showStorageKeys(type, table) {
            // get the specified type of storage, i.e. local or session
            var storage = window[type + 'Storage'];

            // remove the rows in the specified table before we start
            $(table  + " > tbody > tr").remove();

            // loop through the existing keys in the storage and add them to the TBODY element as rows
            for (var i = 0; i < storage.length; i++) {
                var key = storage.key(i);
                var value = storage.getItem(key);
				
				if( value !== localStorage.getItem("company") ) {   // OMIT THE COMPANY KEY
				//////
				var infos = value.split(';;;');
				for(var k = 0; k < infos.length; k++) {
					
					var office = infos[0];
					var tel = infos[1];
					var emails = infos[2];
					var staff_prof = infos[3];
					
				}
				
				//////
 
                $(table + " > tbody:last")
                    .append(
					 "<tr><td><div class='myButton'><input type='submit' value=' &nbsp; ' onclick='removeItem(\"" + type + "\", \"" + key + "\")'/></div></td>" +
					"<td>" + key + "</td>" +
                            //"<td>" + value + "</td>" + 
							//"<td>" + office + "</td>" + 
							"<td style='text-align: center; vertical-align:middle'><a href='mailto:" + emails + "'><div class='appendlink'><i class='fa fa-envelope'></i></div></a></td>" + 
							"<td style='text-align: center; vertical-align:middle'><a href='tel:" + tel + "'><div class='appendlink'><i class='fa fa-phone-square'></i></div></a></td>" + 
							"<td style='text-align: center; vertical-align:middle'><a rel='external' href='staff-profile.html?id=" + key + "'><div class='appendlink'><i class='fa fa-caret-square-o-right'></i></div></a></td></tr>"
							////
                           );
 }
            }
        }

        // adds a new key to both local and session storage
        function setKey() {
			
	var info = $("#valueText").val();
	var tel = $("#tel").val();
	var value = info+";;"+tel;
			
            var key = $("#keyText").val();
           // var value = $("#valueText").val();

            if (Modernizr.localstorage) {
                localStorage.setItem(key, value);
            }

            if (Modernizr.sessionstorage) {
                sessionStorage.setItem(key, value);
            }

            showKeys();
        }

        function clearLocalKeys() {
            clearKeys("local");
        }

        function clearSessionKeys() {
            clearKeys("session");
        }

        // clear all the held keys in the specified type of storage
        function clearKeys(type) {
            // get the specified type of storage, i.e. local or session
            var storage = window[type + 'Storage'];

            // clear the keys
            storage.clear();

            showKeys();
        }

        // removes an item with the specified key from the specified type of storage
        function removeItem(type, key) {
            // get the specified type of storage, i.e. local or session
            var storage = window[type + 'Storage'];

            storage.removeItem(key);

            showKeys();
        }
    
    ////// END LOCAL STORAGE