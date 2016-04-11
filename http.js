//Detect if user is using HTTP And Redirect Them to HTTPS!
if (window.location.protocol != "https:")
    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
