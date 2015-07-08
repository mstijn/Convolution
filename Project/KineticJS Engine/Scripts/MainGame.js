//================================================================
//
//  Main Game
//
//================================================================
var MainGame = new function() {

    //================================
    // Variables
    //================================
    this.GameWindow = null;
    this.GameStage = null;
    this.GameObjectsLayer = new Kinetic.Layer();
    this.BackgroundLayer = new Kinetic.Layer();
    this.CurrentGameState = null;

    //================================
    // Functions
    //================================
    this.Initialize = function () {
        console.log("[ENGINE] - Initializing Game...");

        // Creating a new stage.
        window.onload = function () {

            // Assigning the GameWindow variable
            MainGame.GameWindow = document.getElementById("GameWindow");

            MainGame.GameStage = new Kinetic.Stage({
                container: MainGame.GameWindow,
                width: MainGame.GameWindow.offsetWidth,
                height: MainGame.GameWindow.offsetHeight
            });

            MainGame.GameStage.add(MainGame.BackgroundLayer);
            MainGame.GameStage.add(MainGame.GameObjectsLayer);

            // Setting the window size, cuz why not
            MainGame.SetWindowSize(1280, 768);

            // Calling the start
            Start();
        }

        // Function for starting the game engine
        function Start() {
            // Calling the 'Load Content' function.
            MainGame.LoadContent();
        }
    }

    // Load Content function.
    this.LoadContent = function () {
        // Loading the Audio.
        AudioManager.LoadFiles();

        // Loading the content.
        ContentManager.Initialize();
    }

    this.StartUpdating = function () {
        // Calling the update for the game.
        gameLoop = setInterval(this.Update, 1000 / 60);
    }

    // Update function.
    this.Update = function () {

        KeyboardManager.Update();

        // Updating the Game State.
        switch (MainGame.CurrentGameState) {
            case "Idle":
                // Idle Game State
                break;
            case "MainMenu":
                // MainMenu State
                MainMenu.Update();
                break;
            case "Playing":
                // Playing State
                Level_001.Update();

                break;

            case "GameOver":

                GameOverObject.Initialize();
                GameOverObject.Update();

                break;
        }

        // Drawing the game.
        MainGame.Draw();
    }

    // Draw function.
    this.Draw = function () {

        // Updating the Game State.
        switch (this.CurrentGameState) {
            case "Idle":
                // Idle Game State

                break;
            case "MainMenu":
                // MainMenu State
                MainMenu.Draw();
                break;
            case "Playing":
                // Playing State
                Level_001.Draw();

                break;

            case "GameOver":
                GameOverObject.Draw();
                break;
        }

    }

    //================================
    // Extra functions
    this.SetWindowSize = function (Width, Height) {
        // Changeing the div size
        MainGame.GameWindow.style.width = Width + 'px';
        MainGame.GameWindow.style.height = Height + 'px';

        // Changeing the Canvas size
        MainGame.GameStage.setWidth(Width);
        MainGame.GameStage.setHeight(Height);
    }

    this.LoadJavaScriptFiles = function (FilePath) {
        var FileRef = document.createElement('Script');
        FileRef.setAttribute("type", "text/javascript");
        FileRef.setAttribute("src", FilePath);

        document.getElementsByTagName("head")[0].appendChild(FileRef);
        console.log("[ENGINE] - File: " + FilePath + " - Has been loaded.");
    }
}

//================================
// Function Calls
//================================
console.log("[ENGINE] - Running game on BasicEngine V1");
console.log("[ENGINE] - Loading JavaScript files...");

// Loading in all the javascript files, Because it's possible
MainGame.LoadJavaScriptFiles("Scripts/Base/ContentManager.js");
MainGame.LoadJavaScriptFiles("Scripts/Base/KeyboardManager.js");
MainGame.LoadJavaScriptFiles("Scripts/Base/AudioManager.js");
MainGame.LoadJavaScriptFiles("Scripts/Base/Collision.js");

MainGame.LoadJavaScriptFiles("Scripts/Classes/PowerUpManager.js");
MainGame.LoadJavaScriptFiles("Scripts/Classes/MainMenu.js");
MainGame.LoadJavaScriptFiles("Scripts/Classes/Object_Room.js");
MainGame.LoadJavaScriptFiles("Scripts/Classes/RoomManager.js");
MainGame.LoadJavaScriptFiles("Scripts/Classes/Object_Enemy.js");
MainGame.LoadJavaScriptFiles("Scripts/Classes/vijandSpawner.js");
MainGame.LoadJavaScriptFiles("Scripts/Classes/speler.js");
MainGame.LoadJavaScriptFiles("Scripts/Classes/bullet.js");
MainGame.LoadJavaScriptFiles("Scripts/Classes/Level_001.js");
MainGame.LoadJavaScriptFiles("Scripts/Classes/GameOver.js");

console.log("[ENGINE] - JavaScript files Loaded.");
// Initializing the game.
MainGame.Initialize();