function sendMail(contactform) {

    emailjs.send("gmail", "resume", {
        "from_name": contactform.name.value,
        "from_email": contactform.emailaddress.value, 
        "project_request": contactform.projectsummary.value
    })
    
 .then(
        function(response) {
            console.log("SUCCESS", response);
           
             $('.modal').modal('close');
              M.toast({html: 'Message Sent'})
          
        },
        function(error) {
            console.log("FAILED", error);
             $('.modal').modal('close');
              M.toast({html: 'Message Not Sent'})
        }
    );
    return false;  // To block from loading a new page
}