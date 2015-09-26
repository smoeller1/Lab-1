
$(document).ready(function(){
	var success = 0;

	$('#register-form').on("submit",function(e){
		if(success==0){
            e.preventDefault();
		      if(localStorage){
                  localStorage.setItem("firstname",$('#fname').val() );
                    localStorage.setItem("lastname",$('#lname').val() );
                    localStorage.setItem("phone noumber",$('#ph').val() );
                    localStorage.setItem("dob",$('#dob').val() );
                    localStorage.setItem($('#uname').val(),$('#pwd').val() );
                    localStorage.setItem("paswword",$('#confirmpwd').val() );
                    localStorage.setItem("email",$('#email').val() );
                    success = 1;
                }
        }
        else if(success==1){
        $(this).submit();}
	});
	
	$('#login-form').on("submit",function(e){
		if(success==0){	
			e.preventDefault();
		}
		if(localStorage){
			if(! localStorage.getItem( $('#uname').val() ) ) {
				alert("UserName doesn't exist");
			} else if( localStorage.getItem( $('#uname').val() ) != $('#pwd').val() ) {	
				alert("Invalid Password");
			} else {
				//alert("Success");
				success=1;
				$(this).submit();
			}
		}
	})
	
})


       
                