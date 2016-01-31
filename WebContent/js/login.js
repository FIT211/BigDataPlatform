function login(){
	
	 
    var username=document.getElementById("username").value;
 // alert(username);
   	var password = document.getElementById("password").value;
 // alert(password);  
  
    var optionsRadiosInline;
    if(document.getElementById("optionsRadiosInline1").checked){
    	optionsRadiosInline=document.getElementById("optionsRadiosInline1").value
    }
    else{
    	if(document.getElementById("optionsRadiosInline2").checked){
    		optionsRadiosInline=document.getElementById("optionsRadiosInline2").value
    	}
    	else{
    		optionsRadiosInline=document.getElementById("optionsRadiosInline3").value
    	}
    }
//   = document.getElementById("optionsRadiosInline").value;
//    alert(optionsRadiosInline);
//  "optional1";
//	var role = document.getElementById("optionsRadiosInline1").value;
	

//	alert(username);
//	alert(password);
//	alert(optionsRadiosInline);
//	alert('yyyy');
	
	$.ajax({
        url: "http://166.111.143.200:8000/login/",
        dataType: 'jsonp',
        type: 'POST',
        jsonpCallback: 'callback',
        data : {
        	username: username,
        	password: password,
        	optionsRadiosInline: optionsRadiosInline        	
        },
        success: function (data) {
        	//alert("info received:" + data.message + data.username + data.role);
            //alert("success!");
        	if(data.message == 'Login success!'){
        		//alert("Info received:" + data.message);
        		if(data.role == 'operator')
        			window.location.href="http://166.111.143.200:8080/BigDataPlatform/WebContent/pages/index.html";
        		else{
        			if(data.role == 'administrator')
        				window.location.href="http://166.111.143.200:8080/BigDataPlatform/WebContent/pages/index3.html";
        			else{
        				if(data.role == 'researcher')
        					window.location.href="http://166.111.143.200:8080/BigDataPlatform/WebContent/pages/index2.html";
        				else
        					window.location.href="http://166.111.143.200:8080/BigDataPlatform/WebContent/pages/login.html"; 
        			}        				
        		}        		      		        		
        	}        		
        	else{
        		//alert("Info received:" + data.message);
        		window.location.href="http://166.111.143.200:8080/BigDataPlatform/WebContent/pages/login.html";
        	}
        		        	        	
        },
        error: function (data) {
            //alert('Error:' + data);
            alert("Error!>>>>>>>");
        }
    });   
}
	


