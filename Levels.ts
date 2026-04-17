let Hail: Sprite = null
let LightningSprite: Sprite = null
let PineconeOnGround: Sprite = null
let HudSprite: Sprite = null
let WeaponUI: Sprite = null
let PineconeCounter: fancyText.TextSprite = null
let VIGORtext: fancyText.TextSprite = null
let Prologue: Sprite = null
let LV = 0
let Explosion: Sprite = null
let ExplosionY = 0
let StormyNS = false
let OilNum = 0
let PlayingSingleMission = false
let LvIntro: Sprite = null
let WeaponHolding = 0
let Hailing = false
let MISSION = 0
let KILLS = 0
let PineconeNumber = 0
let SwordHitsLeft = 0
let Lvl = 0
let LvName = ""

//Levels
function LevelSetup (Level: number) {
    SwapSong()
    Reset()
    if (Level == 0) {
        PineconeNumber = 50
        MISSION = 1
        LvName = "PALE HAIL FOREST:\nMission 1"
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Pale Hail Forest layer 0`)
        scroller.scrollBackgroundWithSpeed(-5, 0, scroller.BackgroundLayer.Layer0)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`Pale Hail Forest layer 1`)
        scroller.setCameraScrollingMultipliers(0.1, 0, scroller.BackgroundLayer.Layer1)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`Pale Hail Forest layer 2`)
        scroller.setCameraScrollingMultipliers(0.25, 0, scroller.BackgroundLayer.Layer2)
        tiles.setCurrentTilemap(tilemap`PHFm1`)
        VisualTileMapLayers.addVisualTileMapLayer(tilemap`PHFm1FG`, 100)
    } else if (Level == 1) {
        PineconeNumber = 20
        MISSION = 2
        LvName = "PALE HAIL FOREST:\nMission 2"
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Pale Hail Forest layer 0`)
        scroller.scrollBackgroundWithSpeed(-5, 0, scroller.BackgroundLayer.Layer0)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`Pale Hail Forest layer 1`)
        scroller.setCameraScrollingMultipliers(0.1, 0, scroller.BackgroundLayer.Layer1)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`Pale Hail Forest layer 2`)
        scroller.setCameraScrollingMultipliers(0.25, 0, scroller.BackgroundLayer.Layer2)
        VisualTileMapLayers.addVisualTileMapLayer(tilemap`PHFm2Cutscene`, -10)
        tiles.setCurrentTilemap(tilemap`PHFm2`)
    } else if (Level == 2) {
        PineconeNumber = 20
        MISSION = 0
        LvName = "PALE HAIL FOREST:\nMission 3"
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Pale Hail Forest layer 0`)
        scroller.scrollBackgroundWithSpeed(-5, 0, scroller.BackgroundLayer.Layer0)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`Pale Hail Forest layer 1`)
        scroller.setCameraScrollingMultipliers(0.1, 0, scroller.BackgroundLayer.Layer1)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`Pale Hail Forest layer 2`)
        scroller.setCameraScrollingMultipliers(0.25, 0, scroller.BackgroundLayer.Layer2)
        VisualTileMapLayers.addVisualTileMapLayer(tilemap`PHFm3BG`, -100)
        tiles.setCurrentTilemap(tilemap`PHFm3`)
        VisualTileMapLayers.addVisualTileMapLayer(tilemap`PHFm3FG`, 100)
        SongStopped = false
        Cold_Hearted_Pale_Hail_Forest()
        timer.after((assets.animation`LevelIntroScreen`.length + 5) * 45, function () {
            MoveAbility = true
            Hailing = true
        })
    } else if (Level == 3) {
        PineconeNumber = 20
        MISSION = 4
        LvName = "NITRO STUN:\nMission 1"
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Nitro Stun layer 0`)
        VisualTileMapLayers.addVisualTileMapLayer(tilemap`NSm4BG`, -100)
        tiles.setCurrentTilemap(tilemap`NSm4`)
        VisualTileMapLayers.addVisualTileMapLayer(tilemap`NSm4FG`, 100)
    } else if (Level == 4) {
        PineconeNumber = 20
        MISSION = 5
        LvName = "NITRO STUN:\nMission 2"
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Nitro Stun layer 0`)
        VisualTileMapLayers.addVisualTileMapLayer(tilemap`NSm5BG`, -100)
        tiles.setCurrentTilemap(tilemap`NSm5`)
        VisualTileMapLayers.addVisualTileMapLayer(tilemap`NSm5FG`, 100)
    } else if (Level == 5) {
        PineconeNumber = 20
        MISSION = 6
        LvName = "NITRO STUN:\nMission 3"
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Nitro Stun layer 0`)
        tiles.setCurrentTilemap(tilemap`NSm6`)
        VisualTileMapLayers.addVisualTileMapLayer(tilemap`NSm6FG`, 100)
    } else if (Level == 6) {
        PineconeNumber = 20
        MISSION = 7
        LvName = "MAGMA ASSAULT:\nMission 1"
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Magma Assault layer 0`)
        scroller.setCameraScrollingMultipliers(0.2, 0, scroller.BackgroundLayer.Layer0)
        tiles.setCurrentTilemap(tilemap`MAm7`)
        VisualTileMapLayers.addVisualTileMapLayer(tilemap`MAm7FG`, 100)
    } else {
    	
    }
    LevelIntro(LvName)
    timer.after((assets.animation`LevelIntroScreen`.length + 3) * 45, function () {
        CreateAquifer()
        tiles.placeOnRandomTile(PlayerHitbox, assets.tile`START`)
        tiles.setTileAt(PlayerHitbox.tilemapLocation(), assets.tile`transparency16`)
        CUTSCENE()
        timer.after(30, function () {
            for (let value of tiles.getTilesByType(assets.tile`WaterSwordsmanSpawner`)) {
                WaterHitbox = sprites.create(assets.image`WaterHitbox`, SpriteKind.AllyHitbox)
                WaterHitbox.setFlag(SpriteFlag.Invisible, true)
                WaterNPC = sprites.create(assets.image`WaterHitbox`, SpriteKind.Ally)
                sprites.setDataSprite(WaterHitbox, "image", WaterNPC)
                WaterNPC.setFlag(SpriteFlag.GhostThroughWalls, true)
                tiles.placeOnTile(WaterHitbox, value)
                tiles.setTileAt(value, assets.tile`transparency16`)
                basics.add_gravity_to(WaterHitbox)
            }
            WaterAnims()
            pauseUntil(() => MoveAbility)
            for (let value2 of tiles.getTilesByType(assets.tile`OilSwordsmanSpawner`)) {
                OilHitbox = sprites.create(assets.image`OilHitbox`, SpriteKind.EnemyHitbox)
                sprites.setDataNumber(OilHitbox, "SpawnX", value2.x)
                sprites.setDataNumber(OilHitbox, "SpawnY", value2.y)
                OilHitbox.setFlag(SpriteFlag.Invisible, true)
                OilNPC = sprites.create(assets.image`OilHitbox`, SpriteKind.Enemy)
                sprites.setDataSprite(OilHitbox, "image", OilNPC)
                OilNPC.setFlag(SpriteFlag.GhostThroughWalls, true)
                tiles.placeOnTile(OilHitbox, value2)
                tiles.setTileAt(value2, assets.tile`transparency16`)
                basics.add_gravity_to(OilHitbox)
                OilHealth = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
                OilHealth.setColor(12, 15)
                OilHealth.setBarBorder(1, 15)
                OilHealth.max = 2
                OilHealth.attachToSprite(OilHitbox)
            }
            for (let value22 of tiles.getTilesByType(assets.tile`OilRangerSpawner`)) {
                OilHitbox = sprites.create(assets.image`OilHitbox`, SpriteKind.EnemyRHitbox)
                sprites.setDataNumber(OilHitbox, "SpawnX", value22.x)
                sprites.setDataNumber(OilHitbox, "SpawnY", value22.y)
                OilHitbox.setFlag(SpriteFlag.Invisible, true)
                OilNPC = sprites.create(assets.image`OilHitbox`, SpriteKind.Enemy)
                sprites.setDataSprite(OilHitbox, "image", OilNPC)
                OilNPC.setFlag(SpriteFlag.GhostThroughWalls, true)
                tiles.placeOnTile(OilHitbox, value22)
                tiles.setTileAt(value22, assets.tile`transparency16`)
                basics.add_gravity_to(OilHitbox)
                OilHealth = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
                OilHealth.setColor(14, 15)
                OilHealth.setBarBorder(1, 15)
                OilHealth.max = 2
                OilHealth.attachToSprite(OilHitbox)
            }
            for (let value3 of tiles.getTilesByType(assets.tile`OilSurgingSpawner`)) {
                OilHitbox = sprites.create(assets.image`OilHitbox`, SpriteKind.EnemySrHitbox)
                sprites.setDataNumber(OilHitbox, "SpawnX", value3.x)
                sprites.setDataNumber(OilHitbox, "SpawnY", value3.y)
                OilHitbox.setFlag(SpriteFlag.Invisible, true)
                OilNPC = sprites.create(assets.image`OilHitbox`, SpriteKind.Enemy)
                sprites.setDataSprite(OilHitbox, "image", OilNPC)
                OilNPC.setFlag(SpriteFlag.GhostThroughWalls, true)
                tiles.placeOnTile(OilHitbox, value3)
                tiles.setTileAt(value3, assets.tile`transparency16`)
                basics.add_gravity_to(OilHitbox)
                OilHealth = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
                OilHealth.setColor(8, 15)
                OilHealth.setBarBorder(1, 15)
                OilHealth.max = 1
                OilHealth.attachToSprite(OilHitbox)
            }
            OilAnims()
            SetUpHUD()
            SetUpOilNum()
            KILLS = 0
        })
    })
}

//Reset
function Reset() {
    scene.centerCameraAt(120, 120)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`CLEARBACKDROP`)
    scroller.scrollBackgroundWithSpeed(0, 0, scroller.BackgroundLayer.Layer0)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`CLEARBACKDROP`)
    scroller.scrollBackgroundWithSpeed(0, 0, scroller.BackgroundLayer.Layer1)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`CLEARBACKDROP`)
    scroller.scrollBackgroundWithSpeed(0, 0, scroller.BackgroundLayer.Layer2)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer3, assets.image`CLEARBACKDROP`)
    scroller.scrollBackgroundWithSpeed(0, 0, scroller.BackgroundLayer.Layer3)
    scroller.setLayerImage(scroller.BackgroundLayer.Layer4, assets.image`CLEARBACKDROP`)
    scroller.scrollBackgroundWithSpeed(0, 0, scroller.BackgroundLayer.Layer4)
    VisualTileMapLayers.deleteVisualTileMapLayers(-100)
    // ONLY USE -10 LAYERS FOR CUTSCENES
    VisualTileMapLayers.deleteVisualTileMapLayers(-10)
    VisualTileMapLayers.deleteVisualTileMapLayers(100)
    Hailing = false
    StormyNS = false
    MoveAbility = false
    Silent = false
    KILLS = -1
    WeaponHolding = 0
    PineconeNumber = 0
    SwordHitsLeft = 25
    sprites.destroyAllSpritesOfKind(SpriteKind.EnemyHitbox)
    sprites.destroyAllSpritesOfKind(SpriteKind.AquiferImage)
    sprites.destroyAllSpritesOfKind(SpriteKind.Pinecone)
    sprites.destroyAllSpritesOfKind(SpriteKind.NA)
    sprites.destroyAllSpritesOfKind(SpriteKind.PickUp)
    sprites.destroyAllSpritesOfKind(SpriteKind.HUD)
    sprites.destroyAllSpritesOfKind(SpriteKind.EnemyRHitbox)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroyAllSpritesOfKind(SpriteKind.EnemyPinecone)
    sprites.destroyAllSpritesOfKind(SpriteKind.EnemySrHitbox)
    sprites.destroyAllSpritesOfKind(SpriteKind.Explode)
    sprites.destroyAllSpritesOfKind(SpriteKind.RivalHitbox)
    sprites.destroyAllSpritesOfKind(SpriteKind.RivalImage)
    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
    sprites.destroyAllSpritesOfKind(SpriteKind.Lightning)
    sprites.destroyAllSpritesOfKind(SpriteKind.Ally)
    sprites.destroyAllSpritesOfKind(SpriteKind.AllyHitbox)
    sprites.destroyAllSpritesOfKind(SpriteKind.EnemyHitboxCutscene)
}

//Oil number
function SetUpOilNum() {
    OilNum = sprites.allOfKind(SpriteKind.EnemyHitbox).length + sprites.allOfKind(SpriteKind.EnemyRHitbox).length + sprites.allOfKind(SpriteKind.EnemySrHitbox).length
}

//Heads-up display
function SetUpHUD() {
    PlayerHealth = statusbars.create(60, 8, StatusBarKind.Health)
    PlayerHealth.z = 1000
    PlayerHealth.max = 8
    PlayerHealth.setColor(9, 8)
    PlayerHealth.setBarBorder(1, 11)
    PlayerHealth.left = 35
    PlayerHealth.top = 5
    VIGORtext = fancyText.create("VIGOR", 0, 11, customFont.BARRIER_font)
    VIGORtext.setKind(SpriteKind.Text)
    VIGORtext.left = 2
    VIGORtext.top = 2
    VIGORtext.setFlag(SpriteFlag.RelativeToCamera, true)
    VIGORtext.z = 1000
    PineconeCounter = fancyText.create("x" + "100", 0, 11, customFont.BARRIER_font)
    PineconeCounter.setKind(SpriteKind.Text)
    PineconeCounter.right = 238
    PineconeCounter.top = 2
    PineconeCounter.setFlag(SpriteFlag.RelativeToCamera, true)
    PineconeCounter.z = 1000
    WeaponUI = sprites.create(assets.image`pineconeUI`, SpriteKind.HUD)
    WeaponUI.right = PineconeCounter.left + 2
    WeaponUI.top = 2
    WeaponUI.setFlag(SpriteFlag.RelativeToCamera, true)
    WeaponUI.z = 1000
    HudSprite = sprites.create(image.create(scene.screenWidth(), 18), SpriteKind.HUD)
    HudSprite.image.fillRect(0, 0, scene.screenWidth(), 18, 15)
    HudSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    HudSprite.top = 0
    HudSprite.z = 999
}

game.onUpdate(function () {
    if (PineconeCounter) {
        if (PineconeNumber > 100) {
            PineconeNumber = 100
        }
        if (WeaponHolding == 0) {
            fancyText.setText(PineconeCounter, "x" + PineconeNumber)
        } else if (WeaponHolding == 1) {
            fancyText.setText(PineconeCounter, "x" + SwordHitsLeft)
        }
    }
})

//Level saving
game.onUpdate(function () {
    blockSettings.writeNumber("Lvl", Lvl)
    Lvl = blockSettings.readNumber("Lvl")
})

//Player overlaps
multiEvents.onOverlapTile(
    multiEvents.spriteKinds(SpriteKind.Player),
    [
        assets.tile`PHFSpike`,
        assets.tile`NSSpikeUp`,
        assets.tile`NSSpikeDown`,
        assets.tile`NSSpikeLeft`,
        assets.tile`NSSpikeRight`
    ],
    function(sprite, location) {
    basics.make_sprite_jump(sprite, 190)
    MoveAbility = false
    sprite.setKind(SpriteKind.NA)
    timer.after(500, function () {
        MoveAbility = true
        sprite.setKind(SpriteKind.Player)
    })
    if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.FacingLeft))) {
        sprite.vx = 150
        timer.after(500, function () {
            sprite.vx = 0
        })
    } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.FacingRight))) {
        sprite.vx = -150
        timer.after(500, function () {
            sprite.vx = 0
        })
    }
    timer.after(50, function () {
        scene.cameraShake(5, 200)
        PlayerHealth.value += -1
        PlaySFX("DamagePlayer")
    })
    if (PlayerHealth.value <= 1) {
        PlayerHealth.value = 0
        SwapSong()
        PlaySFX("DeathPlayer")
        sprites.destroy(sprite)
        sprites.destroy(Aquifer)
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createCustomSpreadEffectData(
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
    timer.background(function () {
        pause(600)
    })
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`VaporPack`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createCustomSpreadEffectData(
        [1, 9, 11],
        false,
        extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Explosion),
        extraEffects.createPercentageRange(0, 50),
        extraEffects.createPercentageRange(0, 100),
        extraEffects.createTimeRange(500, 1000)
    ), 1000, 50, 50)
    music.play(music.createSong(assets.song`Heal`), music.PlaybackMode.InBackground)
    PlayerHealth.value += 4
})

events.spriteEvent(SpriteKind.Player, SpriteKind.Projectile, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    if (PlayerHealth.value <= 1) {
        sprite.setKind(SpriteKind.NA)
        PlayerHealth.value += -1
        characterAnimations.setCharacterAnimationsEnabled(Aquifer, false)
        animation.runImageAnimation(
            Aquifer,
            assets.animation`Water Freeze`,
            100,
            false
        )
        SwapSong()
        PlayerHitbox.ay = 0
        PlayerHitbox.vy = 0
        PlaySFX("WaterFreeze")
        MoveAbility = false
        sprites.destroy(otherSprite)
        timer.after(5500, function () {
            scene.centerCameraAt(PlayerHitbox.x, PlayerHitbox.y)
            PlayerHitbox.ay = 150
            PlayerHitbox.vy = -50
            PlayerHitbox.setFlag(SpriteFlag.Ghost, true)
        })
        timer.after(1500, function () {
            GAMEOVER()
        })
    } else {
        scene.cameraShake(5, 200)
        PlayerHealth.value += -1
        PlaySFX("DamagePlayer")
        sprites.destroy(otherSprite)
    }
})

multiEvents.onOverlap(multiEvents.spriteKinds(SpriteKind.Explode, SpriteKind.Lightning), multiEvents.spriteKinds(SpriteKind.Player), function (sprite, otherSprite) {
    PlayerHealth.value = 0
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
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.PickUp, function (sprite, otherSprite) {
    if (PineconeNumber < 100) {
        sprites.destroy(otherSprite)
        PineconeNumber += 1
    }
})

//Enemy overlaps
multiEvents.onOverlapTile(
    multiEvents.spriteKinds(
        SpriteKind.EnemyHitbox,
        SpriteKind.EnemyRHitbox,
        SpriteKind.EnemySrHitbox
    ),
    [
        assets.tile`PHFSpike`,
        assets.tile`NSSpikeUp`,
        assets.tile`NSSpikeDown`,
        assets.tile`NSSpikeLeft`,
        assets.tile`NSSpikeRight`
    ],
    function(sprite, location) {
        if (basics.get_proximity(
            sprite,
            PlayerHitbox,
            scene.screenWidth() / 2,
            Way.Both
        )) {
            if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value > 1) {
                PlaySFX("DamageEnemy")
            }
            basics.make_sprite_jump(sprite, 190)
            if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.FacingLeft))) {
                sprite.vx = 150
                timer.after(500, function () {
                    sprite.vx = 0
                })
            } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.FacingRight))) {
                sprite.vx = -150
                timer.after(500, function () {
                    sprite.vx = 0
                })
            }
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -1
        } else {
            sprite.setPosition(sprites.readDataNumber(sprite, "SpawnX"), sprites.readDataNumber(sprite, "SpawnY"))
        }
        timer.background(function () {
            pause(600)
        })
})

multiEvents.onOverlap(multiEvents.spriteKinds(SpriteKind.Projectile), multiEvents.spriteKinds(SpriteKind.EnemyHitbox, SpriteKind.EnemyRHitbox, SpriteKind.EnemySrHitbox), function (sprite, otherSprite) {
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value > 1) {
        PlaySFX("DamageEnemy")
    }
    sprites.destroy(sprite)
    basics.make_sprite_jump(otherSprite, 190)
    if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingLeft))) {
        otherSprite.vx = 80
        timer.after(500, function () {
            otherSprite.vx = 0
        })
    } else if (characterAnimations.matchesRule(otherSprite, characterAnimations.rule(Predicate.FacingRight))) {
        otherSprite.vx = -80
        timer.after(500, function () {
            otherSprite.vx = 0
        })
    }
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
})

//Ally overlaps
multiEvents.onOverlapTile(multiEvents.spriteKinds(SpriteKind.AllyHitbox),
    [
        assets.tile`PHFSpike`,
        assets.tile`NSSpikeUp`,
        assets.tile`NSSpikeDown`,
        assets.tile`NSSpikeLeft`,
        assets.tile`NSSpikeRight`
    ],
    function (sprite, location) {
    basics.make_sprite_jump(sprite, 190)
    if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.FacingLeft))) {
        sprite.vx = 150
        timer.after(500, function () {
            sprite.vx = 0
        })
    } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.FacingRight))) {
        sprite.vx = -150
        timer.after(500, function () {
            sprite.vx = 0
        })
    }
    timer.background(function () {
        pause(600)
    })
})

//Force cutscene tiles
scene.onOverlapTile(SpriteKind.Player, assets.tile`PHFTrickEnding`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`PHFSnowyLeaves`)
    if (MISSION == 2) {
        SwapSong()
        MISSION = 3
        CUTSCENE()
    }
})

//Level intro
function LevelIntro(Text: string) {
    CreateTextNoSpeech(Text, 120, 120, 15)
    LvIntro = sprites.create(assets.image`BlackScreen`, 0)
    LvIntro.scale = 8
    LvIntro.z = 1001
    LvIntro.setFlag(SpriteFlag.Ghost, true)
    animation.runImageAnimation(
        LvIntro,
        assets.animation`LevelIntroScreen`,
        45,
        false
    )
    timer.after(assets.animation`LevelIntroScreen`.length * 45, function () {
        sprites.destroy(LvIntro)
        sprites.destroy(SpeechBalloon)
    })
}

//Finish
scene.onOverlapTile(SpriteKind.Player, assets.tile`FINISHAllDead`, function (sprite, location) {
    if (PlayingSingleMission) {
        game.reset()
    } else {
        if (KILLS == OilNum) {
            Lvl += 1
            LevelSetup(Lvl)
        }
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`FINISH`, function (sprite, location) {
    if (PlayingSingleMission) {
        game.reset()
    } else {
        Lvl += 1
        LevelSetup(Lvl)
    }
})

//Level special attributes
//Hail
events.wallEvent(SpriteKind.PickUp, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StartHitting, function (sprite) {
    sprite.ay = 0
    sprite.vy = 0
    animation.runImageAnimation(
        sprite,
        assets.animation`PineconeFlash`,
        100,
        false
    )
    timer.after(23 * 100, function () {
        sprites.destroy(sprite)
    })
})

scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createFullPresetsSpreadEffectData(ExtraEffectPresetColor.Ice, ExtraEffectPresetShape.Cloud), 100, 20, 10)
    PineconeOnGround = sprites.create(assets.image`PineconeRight`, SpriteKind.PickUp)
    PineconeOnGround.setPosition(sprite.x, sprite.y)
    PineconeOnGround.ay = 500
    PineconeOnGround.vy = -150
})

game.onUpdateInterval(randint(1000, 3500), function () {
    if (Hailing) {
        for (let index = 0; index < randint(1, 5); index++) {
            Hail = sprites.createProjectileFromSide(assets.image`Hail`, 0, 45)
            Hail.scale = 0.5
            Hail.x = PlayerHitbox.x + randint(-80, 80)
        }
    }
})

//Forcefield
game.onUpdateInterval(150, function () {
    for (let value9 of tiles.getTilesByType(assets.tile`Forcefield1`)) {
        tiles.setTileAt(value9, assets.tile`Forcefield2`)
        timer.after(75, function () {
            tiles.setTileAt(value9, assets.tile`Forcefield1`)
        })
    }
})

//Lightning
game.onUpdateInterval(5000, function () {
    for (let location2 of tiles.getTilesByType(assets.tile`LightningCrystal`)) {
        if (location2.x - PlayerHitbox.x < scene.screenWidth() / 2 && location2.y - PlayerHitbox.y < scene.screenHeight() / 2) {
            LightningSprite = sprites.create(assets.image`LightningBolt`, SpriteKind.Lightning)
            LightningSprite.x = location2.x + 16
            LightningSprite.bottom = location2.top + 8
            PlaySFX("LightningStrike")
            scene.cameraShake(8, 100)
            timer.after(500, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Lightning)
            })
        }
    }
})

//Beacon
game.onUpdateInterval(500, function () {
    for (let value10 of tiles.getTilesByType(assets.tile`Beam1`)) {
        tiles.setTileAt(value10, assets.tile`Beam2`)
        timer.after(100, function () {
            tiles.setTileAt(value10, assets.tile`Beam3`)
            timer.after(100, function () {
                tiles.setTileAt(value10, assets.tile`Beam4`)
                timer.after(100, function () {
                    tiles.setTileAt(value10, assets.tile`Beam1`)
                })
            })
        })
    }
})
