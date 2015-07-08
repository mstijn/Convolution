//================================================================
//
//  AudioManager
//
//================================================================
var AudioManager = new function () {

    //================================
    // Variables
    //================================
    //Example: this.testAudio = null;
    this.BackgroundMusic = null;

    //================================
    // Functions
    //================================
    this.LoadFiles = function () {
        console.log("[ENGINE] - Loading audio files...");

        //Example: this.testAudio = new Audio("Assets/Sounds/test.mp3");
        this.BackgroundMusic = new Audio("Assets/Sounds/Background.mp3");

        console.log("[ENGINE] - Audio files loaded.");
    }
}