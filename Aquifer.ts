

let ScreenImage: Image = null
let SpriteImage: Sprite = null
let AquiferATKing = false
let JumpPossibility = false
let Aquifer: Sprite = null
let PlayerHealth: StatusBarSprite = null
let WaterNPC: Sprite = null
let WaterHitbox: Sprite = null
let PlayerHitbox: Sprite = null
let MoveAbility = false
let Pinecone2: Sprite = null

//Create
function CreateAquifer() {
    Aquifer = sprites.create(assets.image`WaterHitbox`, SpriteKind.AquiferImage)
    Aquifer.setFlag(SpriteFlag.GhostThroughWalls, true)
    PlayerHitbox = sprites.create(assets.image`WaterHitbox`, SpriteKind.Player)
    PlayerHitbox.setFlag(SpriteFlag.Invisible, true)
    Aquifer.z = 50
    basics.add_gravity_to(PlayerHitbox)
    scene.cameraFollowSprite(PlayerHitbox)
    AquiferAnims()
}

//Animations
function AquiferAnims() {
    for (let WaterValue of sprites.allOfKind(SpriteKind.AquiferImage)) {
        characterAnimations.loopFrames(
            WaterValue,
            assets.animation`Idle Water Left`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            WaterValue,
            assets.animation`Run Water Left`,
            85,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            WaterValue,
            assets.animation`Idle Water Right`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            WaterValue,
            assets.animation`Run Water Right`,
            85,
            characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            WaterValue,
            assets.animation`Jump Water Right`,
            30,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            WaterValue,
            assets.animation`Jump Water Right`,
            30,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            WaterValue,
            assets.animation`Jump Water Left`,
            30,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            WaterValue,
            assets.animation`Jump Water Left`,
            30,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            WaterValue,
            assets.animation`Fall Water Right`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            WaterValue,
            assets.animation`Fall Water Left`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
    }
}

game.onUpdate(function () {
    if (PlayerHitbox) {
        Aquifer.setPosition(PlayerHitbox.x, PlayerHitbox.y)
    }
})

//Outline functions
function EmptyNearby(Img: Sprite, x: number, y: number) {
    if (Img.image.getPixel(x, y - 1) == 0 || Img.image.getPixel(x, y + 1) == 0 || (Img.image.getPixel(x - 1, y) == 0 || Img.image.getPixel(x + 1, y) == 0)) {
        return true
    } else {
        return false
    }
}

function Outline(Color: number, Sprite2: Sprite) {
    for (let index24 = 0; index24 <= Sprite2.width - 1; index24++) {
        for (let height = 0; height <= Sprite2.height - 1; height++) {
            if (Sprite2.image.getPixel(index24, height) != 0 && Sprite2.image.getPixel(index24, height) != Color) {
                if (EmptyNearby(Sprite2, index24, height)) {
                    if (Sprite2.image.getPixel(index24, height - 1) == 0) {
                        Sprite2.image.setPixel(index24, height - 1, Color)
                    }
                    if (Sprite2.image.getPixel(index24, height + 1) == 0) {
                        Sprite2.image.setPixel(index24, height + 1, Color)
                    }
                    if (Sprite2.image.getPixel(index24 - 1, height) == 0) {
                        Sprite2.image.setPixel(index24 - 1, height, Color)
                    }
                    if (Sprite2.image.getPixel(index24 + 1, height) == 0) {
                        Sprite2.image.setPixel(index24 + 1, height, Color)
                    }
                }
            }
        }
    }
}

game.onUpdate(function () {
    for (let value7 of sprites.allOfKind(SpriteKind.AllyHitbox)) {
        if (basics.get_proximity(
            PlayerHitbox,
            value7,
            10,
            Way.Horizontally
        )) {
            Outline(11, Aquifer)
            timer.after(500, function () {
                Aquifer.image.replace(11, 0)
            })
        }
    }
})

//Controls
game.onUpdate(function () {
    if (MoveAbility) {
        if (browserEvents.ArrowLeft.isPressed()) {
            if (PlayerHitbox.vx > -100) {
                PlayerHitbox.vx += -20
            } else {
                PlayerHitbox.vx = -100
            }
        } else if (browserEvents.ArrowRight.isPressed()) {
            if (PlayerHitbox.vx < 100) {
                PlayerHitbox.vx += 20
            } else {
                PlayerHitbox.vx = 100
            }
        }
        PlayerHitbox.fx = 300
    }
})

game.onUpdate(function () {
    if (PlayerHitbox) {
        if (PlayerHitbox.isHittingTile(CollisionDirection.Bottom)) {
            JumpPossibility = true
        } else {
            JumpPossibility = false
        }
    }
})

browserEvents.ArrowUp.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (MoveAbility) {
        if (JumpPossibility) {
            basics.make_sprite_jump(PlayerHitbox, 190)
            PlaySFX("Jump")
        }
    }
})

browserEvents.Z.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (MoveAbility) {
        if (JumpPossibility) {
            basics.make_sprite_jump(PlayerHitbox, 190)
            PlaySFX("Jump")
        }
    }
})

browserEvents.One.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (MoveAbility) {
        WeaponHolding = 0
        WeaponUI.setImage(assets.image`pineconeUI`)
    }
})

browserEvents.Two.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (MoveAbility) {
        WeaponHolding = 1
        WeaponUI.setImage(assets.image`swordUI`)
    }
})

browserEvents.X.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (MoveAbility) {
        if (WeaponHolding == 0) {
            if (PineconeNumber > 0) {
                PineconeNumber += -1
                if (characterAnimations.matchesRule(Aquifer, characterAnimations.rule(Predicate.FacingRight))) {
                    Pinecone2 = sprites.createProjectileFromSprite(assets.image`PineconeRight`, PlayerHitbox, 100, -190)
                    Pinecone2.setFlag(SpriteFlag.AutoDestroy, false)
                    Pinecone2.setKind(SpriteKind.Pinecone)
                    PlaySFX("PCThrow")
                    basics.add_gravity_to(Pinecone2)
                } else if (characterAnimations.matchesRule(Aquifer, characterAnimations.rule(Predicate.FacingLeft))) {
                    Pinecone2 = sprites.createProjectileFromSprite(assets.image`PineconeLeft`, PlayerHitbox, -80, -190)
                    Pinecone2.setFlag(SpriteFlag.AutoDestroy, false)
                    Pinecone2.setKind(SpriteKind.Pinecone)
                    PlaySFX("PCThrow")
                    basics.add_gravity_to(Pinecone2)
                }
            }
        } else if (WeaponHolding == 1) {
            if (SwordHitsLeft > 0) {
                SwordHitsLeft += -1
                PlaySFX("StickSlash")
                AquiferATKing = true
                characterAnimations.setCharacterAnimationsEnabled(Aquifer, false)
                characterAnimations.setCharacterAnimationsEnabled(Aquifer, true)
                characterAnimations.loopFrames(
                    Aquifer,
                    assets.animation`ATK water swordsman left`,
                    50,
                    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
                )
                characterAnimations.loopFrames(
                    Aquifer,
                    assets.animation`ATK water swordsman left`,
                    50,
                    characterAnimations.rule(Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                    Aquifer,
                    assets.animation`ATK water swordsman right`,
                    50,
                    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
                )
                characterAnimations.loopFrames(
                    Aquifer,
                    assets.animation`ATK water swordsman right`,
                    50,
                    characterAnimations.rule(Predicate.MovingRight)
                )
                characterAnimations.loopFrames(
                    Aquifer,
                    assets.animation`ATK water swordsman left`,
                    50,
                    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                    Aquifer,
                    assets.animation`ATK water swordsman left`,
                    50,
                    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
                )
                characterAnimations.loopFrames(
                    Aquifer,
                    assets.animation`ATK water swordsman right`,
                    50,
                    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
                )
                characterAnimations.loopFrames(
                    Aquifer,
                    assets.animation`ATK water swordsman right`,
                    50,
                    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
                )
                characterAnimations.loopFrames(
                    Aquifer,
                    assets.animation`ATK water swordsman left`,
                    50,
                    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
                )
                characterAnimations.loopFrames(
                    Aquifer,
                    assets.animation`ATK water swordsman right`,
                    50,
                    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
                )
                timer.after(7 * 50, function () {
                    AquiferATKing = false
                    characterAnimations.setCharacterAnimationsEnabled(Aquifer, false)
                    characterAnimations.setCharacterAnimationsEnabled(Aquifer, true)
                    AquiferAnims()
                })
            }
        }
    } else {
        if (SpeechBalloon) {
            fancyText.cancelAnimation(SpeechBalloon)
        }
    }
})

controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MoveAbility) {
        PauseGame()
    }
})

//Pause menu

function PauseGame() {
    MoveAbility = false
    ScreenImage = image.screenImage().clone()
    game.pushScene()
    scene.setBackgroundImage(ScreenImage)
    MenuSprite = miniMenu.createMenu(
        miniMenu.createMenuItem("RESUME GAME"),
        miniMenu.createMenuItem("RETURN TO TITLE")
    )
    MenuSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    MenuSprite.setFrame(assets.image`MENUFRAME`)
    MenuSprite.setTitle("PAUSED")
    MenuSprite.setDimensions(105, 47)
    MenuSprite.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, 9)
    MenuSprite.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 6)
    MenuSprite.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 15)
    MenuSprite.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Border, 1)
    MenuSprite.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 9)
    MenuSprite.setPosition(120, 120)
    MenuSprite.onSelectionChanged(function (selection, selectedIndex) {
        for (let index = 0; index < 4; index++) {
            PlaySFX("MenuChange")
        }
    })
    MenuSprite.onButtonPressed(controller.A, function (selection, selectedIndex) {
        for (let index = 0; index < 4; index++) {
            timer.background(function () {
                PlaySFX("MenuSelect")
            })
        }
        if (selection == "RESUME GAME") {
            MenuSprite.close()
            game.popScene()
            MoveAbility = true
        } else {
            game.reset()
        }
    })
}

//Enemy overlaps
multiEvents.onOverlap(multiEvents.spriteKinds(SpriteKind.EnemyHitbox, SpriteKind.EnemyRHitbox, SpriteKind.EnemySrHitbox), multiEvents.spriteKinds(SpriteKind.Player), function (sprite, otherSprite) {
    if (AquiferATKing) {
        if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value > 1) {
            PlaySFX("DamageEnemy")
        }
        basics.make_sprite_jump(sprite, 190)
        if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.FacingLeft))) {
            sprite.vx = 80
            timer.after(500, function () {
                sprite.vx = 0
            })
        } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.FacingRight))) {
            sprite.vx = -80
            timer.after(500, function () {
                sprite.vx = 0
            })
        }
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -1
    } else {
        if (Math.percentChance(75)) {
            PlaySFX("StickSlash")
            characterAnimations.setCharacterAnimationsEnabled(sprites.readDataSprite(sprite, "image"), false)
            characterAnimations.setCharacterAnimationsEnabled(sprites.readDataSprite(sprite, "image"), true)
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil swordsman left`,
                50,
                characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil swordsman left`,
                50,
                characterAnimations.rule(Predicate.MovingLeft)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil swordsman right`,
                50,
                characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil swordsman right`,
                50,
                characterAnimations.rule(Predicate.MovingRight)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil swordsman left`,
                50,
                characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil swordsman left`,
                50,
                characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil swordsman right`,
                50,
                characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil swordsman right`,
                50,
                characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil swordsman left`,
                50,
                characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil swordsman right`,
                50,
                characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
            )
            timer.after(50, function () {
                scene.cameraShake(3, 200)
                PlayerHealth.value += -1
                PlaySFX("DamagePlayer")
            })
            if (PlayerHealth.value <= 1) {
                PlayerHealth.value += -1
                SwapSong()
                PlaySFX("DeathPlayer")
                sprites.destroy(otherSprite)
                sprites.destroy(Aquifer)
                extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createCustomSpreadEffectData(
                    [
                        9,
                        6,
                        2,
                        3
                    ],
                    false,
                    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Explosion),
                    extraEffects.createPercentageRange(0, 50),
                    extraEffects.createPercentageRange(0, 100),
                    extraEffects.createTimeRange(500, 1000)
                ), 3000, 50, 50)
                timer.after(1000, function () {
                    GAMEOVER()
                })
            }
            timer.after(9 * 50, function () {
                characterAnimations.setCharacterAnimationsEnabled(sprites.readDataSprite(sprite, "image"), false)
                characterAnimations.setCharacterAnimationsEnabled(sprites.readDataSprite(sprite, "image"), true)
                OilAnims()
            })
        }
    }
    pause(600)
})

sprites.onOverlap(SpriteKind.EnemyPinecone, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    timer.after(50, function () {
        scene.cameraShake(5, 200)
        PlayerHealth.value += -1
        PlaySFX("DamagePlayer")
    })
    if (PlayerHealth.value <= 1) {
        PlayerHealth.value += -1
        SwapSong()
        PlaySFX("DeathPlayer")
        sprites.destroy(otherSprite)
        sprites.destroy(Aquifer)
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createCustomSpreadEffectData(
            [
                9,
                6,
                2,
                3
            ],
            false,
            extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Explosion),
            extraEffects.createPercentageRange(0, 50),
            extraEffects.createPercentageRange(0, 100),
            extraEffects.createTimeRange(500, 1000)
        ), 3000, 50, 50)
        timer.after(1000, function () {
            GAMEOVER()
        })
    }
    pause(600)
})

//Allies
namespace StatusBarKind {
    export const AllyHealth = StatusBarKind.create()
}

multiEvents.onOverlap(multiEvents.spriteKinds(SpriteKind.AllyHitbox), multiEvents.spriteKinds(SpriteKind.EnemyHitbox, SpriteKind.EnemyRHitbox, SpriteKind.EnemySrHitbox), function (sprite, otherSprite) {
    if (Math.percentChance(75)) {
        PlaySFX("DamageEnemy")
        basics.make_sprite_jump(otherSprite, 100)
        if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
            otherSprite.vx = 50
            timer.after(500, function () {
                otherSprite.vx = 0
            })
        } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
            otherSprite.vx = -80
            timer.after(500, function () {
                otherSprite.vx = 0
            })
        }
        PlaySFX("StickSlash")
        characterAnimations.setCharacterAnimationsEnabled(sprites.readDataSprite(sprite, "image"), false)
        characterAnimations.setCharacterAnimationsEnabled(sprites.readDataSprite(sprite, "image"), true)
        characterAnimations.loopFrames(
            sprites.readDataSprite(sprite, "image"),
            assets.animation`ATK water swordsman left`,
            50,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            sprites.readDataSprite(sprite, "image"),
            assets.animation`ATK water swordsman left`,
            50,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            sprites.readDataSprite(sprite, "image"),
            assets.animation`ATK water swordsman right`,
            50,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            sprites.readDataSprite(sprite, "image"),
            assets.animation`ATK water swordsman right`,
            50,
            characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            sprites.readDataSprite(sprite, "image"),
            assets.animation`ATK water swordsman left`,
            50,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            sprites.readDataSprite(sprite, "image"),
            assets.animation`ATK water swordsman left`,
            50,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            sprites.readDataSprite(sprite, "image"),
            assets.animation`ATK water swordsman right`,
            50,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            sprites.readDataSprite(sprite, "image"),
            assets.animation`ATK water swordsman right`,
            50,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            sprites.readDataSprite(sprite, "image"),
            assets.animation`ATK water swordsman left`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            sprites.readDataSprite(sprite, "image"),
            assets.animation`ATK water swordsman right`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        timer.after(9 * 50, function () {
            characterAnimations.setCharacterAnimationsEnabled(sprites.readDataSprite(sprite, "image"), false)
            characterAnimations.setCharacterAnimationsEnabled(sprites.readDataSprite(sprite, "image"), true)
            WaterAnims()
        })
    }
})

//Ally animations
game.onUpdate(function () {
    for (let value26 of sprites.allOfKind(SpriteKind.AllyHitbox)) {
        sprites.readDataSprite(value26, "image").setPosition(value26.x, value26.y)
    }
})

function WaterAnims() {
    for (let WaterNPC2 of sprites.allOfKind(SpriteKind.AllyHitbox)) {
        SpriteImage = sprites.readDataSprite(WaterNPC2, "image")
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Water Swordsman Left`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Water Swordsman Left`,
            85,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Water Swordsman Right`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Water Swordsman Right`,
            85,
            characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Water Swordsman Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Water Swordsman Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Water Swordsman Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Water Swordsman Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Water Swordsman Right`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Water Swordsman Left`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
    }
}

//Ally movement
game.onUpdate(function () {
    for (let value27 of sprites.allOfKind(SpriteKind.AllyHitbox)) {
        if (!(basics.get_proximity(
            value27,
            PlayerHitbox,
            scene.screenWidth() / 2,
            Way.Both
        ))) {
            value27.setPosition(PlayerHitbox.x, PlayerHitbox.y)
            extraEffects.createSpreadEffectOnAnchor(value27, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100)
        }
    }
})

game.onUpdate(function () {
    for (let WaterHitbox2 of sprites.allOfKind(SpriteKind.AllyHitbox)) {
        if (WaterHitbox2.x < PlayerHitbox.x && !(basics.get_proximity(
            PlayerHitbox,
            WaterHitbox2,
            randint(10, 60),
            Way.Horizontally
        ))) {
            WaterHitbox2.vx = 100
        } else if (WaterHitbox2.x > PlayerHitbox.x && !(basics.get_proximity(
            PlayerHitbox,
            WaterHitbox2,
            randint(10, 60),
            Way.Horizontally
        ))) {
            WaterHitbox2.vx = -100
        } else {
            WaterHitbox2.vx = 0
        }
        if (WaterHitbox2.y > PlayerHitbox.y && !(basics.get_proximity(
            PlayerHitbox,
            WaterHitbox2,
            randint(10, 60),
            Way.Vertically
        ))) {
            if (WaterHitbox2.isHittingTile(CollisionDirection.Bottom)) {
                basics.make_sprite_jump(WaterHitbox2, 190)
            }
        }
    }
})

//Game over
function GAMEOVER() {
    music.play(music.createSong(assets.song`GAME OVER`), music.PlaybackMode.UntilDone)
    timer.after(500, function () {
        color.startFadeFromCurrent(color.Black, 2000)
        color.pauseUntilFadeDone()
        if (PlayingSingleMission) {
            LevelSetup(LV)
        } else {
            LevelSetup(Lvl)
        }
        color.startFadeFromCurrent(color.originalPalette, 500)
    })
}
