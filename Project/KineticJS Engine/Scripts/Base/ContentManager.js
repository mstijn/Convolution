//================================================================
//
//  ContentManager
//
//================================================================
var ContentManager = new function() {

    //================================
    // Variables
    //================================
    var LoadCount = 0;
    this.ItemsToLoad = 0;

    // List Image variables here
    this.TestImage = null;
    
    this.EnemyImage = null;

    this.SpawnerImage = null;

    this.DoorDebugImage = null;

    // Actual images
    this.PlayerImage = null;
    this.BulletImage = null;

    this.StartRoomImage = null;
    this.IceRoomImage = null;
    this.DarkRoomImage = null;
    this.PlayRoomImage = null;
    this.DungeonRoomImage = null;
    this.EyeRoomImage = null;

    this.SlimeImage_001 = null;
    this.SlimeImage_002 = null;
    this.SlimeImage_003 = null;

    this.GameOverText_001 = null;
    this.GameOverText_002 = null;

    // PowerUps
    this.PU_InstaKillImg = null;
    this.PU_Nuke = null;
    this.PU_Swiftness = null;

    // MainMenu screen
    this.MainMenuBG = null;
    this.MainMenuText_001 = null;
    this.MainMenuText_002 = null;

    //================================
    // Functions
    //================================
    this.Initialize = function () {
        // Change this in the number of items you would like to load
        this.ItemsToLoad = 22;

        // Place all images here
        // Example: this.TestImage = this.Preload("Assets/Image.png");
        this.TestImage = this.Preload("Assets/Images/Debug/TestImage.png");      
        this.EnemyImage = this.Preload("Assets/Images/Debug/Enemy.png");
        this.SpawnerImage = this.Preload("Assets/Images/Debug/Spawner.png");

        this.DoorDebugImage = this.Preload("Assets/Images/Debug/Door.png");

        // Actual images
        this.PlayerImage = this.Preload("Assets/Images/Player/Spritesheet_Player.png");
        this.BulletImage = this.Preload("Assets/Images/Player/Bullet_001.png");

        this.StartRoomImage = this.Preload("Assets/Images/Rooms/Room_Start_Big.png");
        this.DungeonRoomImage = this.Preload("Assets/Images/Rooms/Room_Dungeon_Big.png");
        this.IceRoomImage = this.Preload("Assets/Images/Rooms/Ice_Room.png");
        this.PlayRoomImage = this.Preload("Assets/Images/Rooms/Room_Play_Big.png");
        this.EyeRoomImage = this.Preload("Assets/Images/Rooms/Room_Eye_Big.png");
        this.DarkRoomImage = this.Preload("Assets/Images/Rooms/Room_Dark_Big.png");

        this.SlimeImage_001 = this.Preload("Assets/Images/Enemies/Slime_Green_Cycle.png");
        this.SlimeImage_002 = this.Preload("Assets/Images/Enemies/Slime_Red_Cycle.png");
        this.SlimeImage_003 = this.Preload("Assets/Images/Enemies/Slime_Blue_Cycle.png");

        // Power Ups
        this.PU_InstaKillImg = this.Preload("Assets/Images/PowerUps/Instant_Kill.png");
        this.PU_Nuke = this.Preload("Assets/Images/PowerUps/Nuke.png");
        this.PU_Swiftness = this.Preload("Assets/Images/PowerUps/Swiftness.png");

        // Game Over
        this.GameOverText_001 = this.Preload("Assets/Images/Screens/GameOver_001.png");
        this.GameOverText_002 = this.Preload("Assets/Images/Screens/GameOver_002.png");

        // MainMenu screen
        this.MainMenuBG = this.Preload("Assets/Images/Screens/menuscreen.png");
        this.MainMenuText_001 = this.Preload("Assets/Images/Screens/title_black.png");
        this.MainMenuText_002 = this.Preload("Assets/Images/Screens/title_white.png");
    }

    // These functions are for loading in the Images
    this.Preload = function (Path) {
        img = new Image();
        img.src = Path;
        img.onload = this.ItemLoaded;
        return img;
    }

    this.ItemLoaded = function (event) {
        console.log("[ENGINE] - Item Loader Called...");

        LoadCount++;
        console.log("[ENGINE] - Loading: " + LoadCount + " Of the: " + ContentManager.ItemsToLoad + " Images.");

        if (LoadCount == ContentManager.ItemsToLoad) {
            console.log("[ENGINE] - Content Loaded.");
            MakeKineticImages();
        } else if (LoadCount > ContentManager.ItemsToLoad) {
            console.log("[ENGINE] - ERROR!, LoadCount is to low!");
        }
    }

    function MakeKineticImages() {
        console.log("[ENGINE] - Creating Images...");

        // Define all images here, even if you dont use them in the beginning.

        // Actual images that are needed to made.
        ObjectPlayer = new Kinetic.Sprite({
            x: 0, y: 0, width: 64, height: 64, image: ContentManager.PlayerImage, animation: 'idle_top',
            animations: {
                idle_top: [
                    { x: 0, y: 0, width: 64, height: 64 }
                ],
                idle_right: [
                    { x: 0, y: 64, width: 64, height: 64 }
                ],
                idle_left: [
                    { x: 0, y: 128, width: 64, height: 64 }
                ],
                idle_bottom: [
                    { x: 0, y: 192, width: 64, height: 64 }
                ],
                walk_top: [
                    { x: 0, y: 0, width: 64, height: 64 },
                    { x: 64, y: 0, width: 64, height: 64 },
                    { x: 128, y: 0, width: 64, height: 64 },
                    { x: 192, y: 0, width: 64, height: 64 }
                ],
                walk_right: [
                    { x: 0, y: 64, width: 64, height: 64 },
                    { x: 64, y: 64, width: 64, height: 64 },
                    { x: 128, y: 64, width: 64, height: 64 },
                    { x: 192, y: 64, width: 64, height: 64 }
                ],
                walk_left: [
                    { x: 0, y: 128, width: 64, height: 64 },
                    { x: 64, y: 128, width: 64, height: 64 },
                    { x: 128, y: 128, width: 64, height: 64 },
                    { x: 192, y: 128, width: 64, height: 64 }
                ],
                walk_bottom: [
                    { x: 0, y: 192, width: 64, height: 64 },
                    { x: 64, y: 192, width: 64, height: 64 },
                    { x: 128, y: 192, width: 64, height: 64 },
                    { x: 192, y: 192, width: 64, height: 64 }
                ]
            }, frameRate: 8, frameIndex: 0
        });

        // Game Over
        GameOverTextObject_001 = new Kinetic.Image({ x: 0, y: 0, image: ContentManager.GameOverText_001 });
        GameOverTextObject_002 = new Kinetic.Image({ x: 0, y: 0, image: ContentManager.GameOverText_002 });

        //MainMenu screen
        MainMenuObject = new Kinetic.Image({ X: 0, y: 0, image: ContentManager.MainMenuBG });
        MainMenuText1 = new Kinetic.Image({ X: 0, y: 0, image: ContentManager.MainMenuText_001 });
        MainMenuText2 = new Kinetic.Image({ X: 0, y: 0, image: ContentManager.MainMenuText_002 });

        // Making sure it's correct
        console.log("[ENGINE] - Images Created.");

        // Switching the Game State to playing. ( This should be MainMenu of you have one ).
        console.log("[ENGINE] - Switching GameState to: 'MainMenu'.");
        MainGame.CurrentGameState = "MainMenu";
        MainGame.StartUpdating();
    }
}
