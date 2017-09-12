chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == "keystroke") {
        var selected_text = window.getSelection().toString();
        sendResponse({selected_text: selected_text});
    }
});
