//================================================================
//
//  Keyboard Manager
//
//================================================================

var KeyboardManager = new function() {

    //================================
    // Variables
    //================================
    this.KeyPressList = [];

    //================================
    // Functions
    //================================
    this.Update = function() {

        // KeyDown function
        document.onkeydown = function (e) {
            e = e ? e : window.event;
            KeyboardManager.KeyPressList[e.keyCode] = true;
        }

        // KeyUp function
        document.onkeyup = function (e) {
            e = e ? e : window.event;
            KeyboardManager.KeyPressList[e.keyCode] = false;
        }

    }

}