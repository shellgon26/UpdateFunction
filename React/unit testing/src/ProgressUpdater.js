update = function (ContentIDs, list, colour, IDtoUpdate) {
    var idfound = false
    var invalidcolour = false
    for (i = 0; i < ContentIDs.length; i++) {
        if (ContentIDs[i] === IDtoUpdate) {
            idfound = true
            if (colour === "red" || colour === "green" || colour === "amber") {
                list.progress[i].colour = colour
            }
            else {
                invalidcolour = true
            }
        }
    }
    if (idfound === false) {
        return 2
    }
    else if (invalidcolour === true) {
        return 1
    }
    else return 0
}

filllist = function (ContentIDs, emptylist) {
    var contentitem
    for (i = 0; i < ContentIDs.length; i++) {
        contentitem = { "contentid": ContentIDs[i], "colour": "none" };
        emptylist.progress.push(contentitem);
        console.log(emptylist.progress)
    }
    return emptylist
}