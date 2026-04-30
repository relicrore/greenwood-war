//Clear progress
function CreateClrProgMenu () {
    MenuSprite = miniMenu.createMenu(
    miniMenu.createMenuItem("NO", assets.image`Start Game`),
    miniMenu.createMenuItem("YES", assets.image`Quit Progress`)
    )
    MenuSprite.setFrame(assets.image`FRAME`)
    MenuSprite.setDimensions(125, 50)
    MenuSprite.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 9)
    MenuSprite.setPosition(120, 140)
    MenuSprite.onSelectionChanged(function (selection, selectedIndex) {
        for (let index = 0; index < 4; index++) {
            PlaySFX("MenuChange")
        }
    })
    MenuSprite.onButtonPressed(controller.A, function (selection, selectedIndex) {
        MenuSprite.close()
        for (let index = 0; index < 4; index++) {
            timer.background(function () {
                PlaySFX("MenuSelect")
            })
        }
        if (selectedIndex == 0) {
            CreateMainMenu()
        } else if (selectedIndex == 1) {
            blockSettings.clear()
            game.reset()
        }
    })
}

//Select chapter
function CreateChapterMenu () {
    MenuSprite = miniMenu.createMenu(
    miniMenu.createMenuItem("RESUME", assets.image`Play`),
    miniMenu.createMenuItem("PROLOGUE",assets.image`Prologue`),
    miniMenu.createMenuItem("THE DARK ERA", assets.image`1`)
    )
    MenuSprite.setFrame(assets.image`FRAME`)
    MenuSprite.setDimensions(125, 50)
    MenuSprite.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 9)
    MenuSprite.setPosition(120, 140)
    MenuSprite.onSelectionChanged(function (selection, selectedIndex) {
        for (let index = 0; index < 4; index++) {
            PlaySFX("MenuChange")
        }
    })
    MenuSprite.onButtonPressed(controller.A, function (selection, selectedIndex) {
        MenuSprite.close()
        for (let index = 0; index < 4; index++) {
            timer.background(function () {
                PlaySFX("MenuSelect")
            })
        }
        if (selectedIndex == 0) {
            SwapSong()
            for (let index = 0; index < 4; index++) {
                music.play(music.createSoundEffect(WaveShape.Sawtooth, 48, 1063, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            }
            timer.after(1000, function () {
                color.setPalette(
                color.originalPalette
                )
                LevelSetup(Lvl)
            })
        } else if (selectedIndex == 1) {
            Intro()
        } else if (selectedIndex == 2) {
            CreateCh1Menu()
        } else {
        	
        }
    })
}

//Main startup menu
function CreateMainMenu () {
    MenuSprite = miniMenu.createMenu(
    miniMenu.createMenuItem("CHAPTER SELECT", assets.image`Start Game`),
    miniMenu.createMenuItem("QUIT PROGRESS", assets.image`Quit Progress`)
    )
    MenuSprite.setFrame(assets.image`FRAME`)
    MenuSprite.setDimensions(125, 50)
    MenuSprite.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 9)
    MenuSprite.setPosition(120, 140)
    MenuSprite.onSelectionChanged(function (selection, selectedIndex) {
        for (let index = 0; index < 4; index++) {
            PlaySFX("MenuChange")
        }
    })
    MenuSprite.onButtonPressed(controller.A, function (selection, selectedIndex) {
        MenuSprite.close()
        for (let index = 0; index < 4; index++) {
            timer.background(function () {
                PlaySFX("MenuSelect")
            })
        }
        if (selectedIndex == 0) {
            CreateChapterMenu()
        } else if (selectedIndex == 1) {
            CreateClrProgMenu()
        }
    })
}

//Chapter 1 menu
function CreateCh1Menu () {
    MenuSprite = miniMenu.createMenu(
    miniMenu.createMenuItem("Mission 1: PHF", assets.image`1`),
    miniMenu.createMenuItem("Mission 2: PHF", assets.image`2`),
    miniMenu.createMenuItem("Mission 3: PHF", assets.image`3`),
    miniMenu.createMenuItem("Mission 4: NS", assets.image`4`),
    miniMenu.createMenuItem("Mission 5: NS", assets.image`5`),
    miniMenu.createMenuItem("Mission 6: NS", assets.image`6`)
    )
    MenuSprite.setFrame(assets.image`FRAME`)
    MenuSprite.setDimensions(125, 50)
    MenuSprite.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 9)
    MenuSprite.setPosition(120, 140)
    MenuSprite.onSelectionChanged(function (selection, selectedIndex) {
        for (let index = 0; index < 4; index++) {
            PlaySFX("MenuChange")
        }
    })
    MenuSprite.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex <= Lvl) {
            MenuSprite.close()
            for (let index = 0; index < 4; index++) {
                timer.background(function () {
                    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1500, 1500, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1500, 1500, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                })
            }
            SwapSong()
            timer.after(1000, function () {
                color.setPalette(
                color.originalPalette
                )
                PlayingSingleMission = true
                LV = selectedIndex
                LevelSetup(LV)
            })
        } else {
            for (let index = 0; index < 4; index++) {
                timer.background(function () {
                    music.play(music.createSoundEffect(WaveShape.Square, 150, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                })
            }
            scene.cameraShake(4, 200)
        }
    })
}

let MenuSprite: miniMenu.MenuSprite = null

//Screen size
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 240
    export const ARCADE_SCREEN_HEIGHT = 240
}

//Title
if (!(blockSettings.exists("Lvl"))) {
    blockSettings.writeNumber("Lvl", 0)
    FadeToLogoPalette()
}
color.startFadeFromCurrent(color.White, 100)
color.pauseUntilFadeDone()
color.setPalette(
color.originalPalette
)
Lvl = 6 //blockSettings.readNumber("Lvl")
SongStopped = false
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`TitleLayer0`)
scroller.scrollBackgroundWithSpeed(-10, 0, scroller.BackgroundLayer.Layer0)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`TitleLayer1`)
scroller.scrollBackgroundWithSpeed(-20, 0, scroller.BackgroundLayer.Layer1)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`TitleLayer2`)
scroller.scrollBackgroundWithSpeed(-30, 0, scroller.BackgroundLayer.Layer2)
scroller.setLayerImage(scroller.BackgroundLayer.Layer3, assets.image`TitleLayer3`)
War_Is_Coming_Main_Theme()
color.setColor(4, color.parseColorString("#006677"))
color.setColor(5, color.parseColorString("#002244"))
color.setColor(8, color.parseColorString("#aaffff"))
color.setColor(11, color.parseColorString("#004466"))
color.setColor(12, color.parseColorString("#000044"))
CreateMainMenu()
