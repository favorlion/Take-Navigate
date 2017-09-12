chrome.commands.onCommand.addListener(function (command) {
    if (command === "take_navigate") {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.executeScript(tab.id, {
                file: "content.js"
            }, function() {
                chrome.tabs.sendMessage(tab.id, {
                    message: "keystroke"
                }, function(response) {
                    console.log(response.selected_text);
                    var url_string = "https://www.amazon.com/gp/offer-listing/" + response.selected_text + "/ref=olp_f_new?ie=UTF8&f_new=true&f_used=true&f_usedAcceptable=true&f_usedGood=true&f_usedLikeNew=true&f_usedVeryGood=true";
                    chrome.tabs.create({ url: url_string });
                });
            });
        });
    }
});