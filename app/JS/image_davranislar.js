

$(document).ready(function() {
	console.log(15);
            $.ajax({ //Process the form using $.ajax()
            type      : 'POST', //Method type
            url       : 'http://127.0.0.1:8080/tasks', //Your form processing file URL
            data      : "", //Forms name
            success   : function(data) {
                     console.log(data);
                            }
        });
 
        var isikDurum;

        if(isikDurum==true)
        alert("Klima açık");
});
