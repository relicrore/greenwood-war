namespace SpriteKind {
    export const EnemyHitbox = SpriteKind.create()
    export const AquiferImage = SpriteKind.create()
    export const Pinecone = SpriteKind.create()
    export const NA = SpriteKind.create()
    export const PickUp = SpriteKind.create()
    export const HUD = SpriteKind.create()
    export const EnemyRHitbox = SpriteKind.create()
    export const EnemyPinecone = SpriteKind.create()
    export const EnemySrHitbox = SpriteKind.create()
    export const Explode = SpriteKind.create()
    export const RivalHitbox = SpriteKind.create()
    export const RivalImage = SpriteKind.create()
    export const Lightning = SpriteKind.create()
    export const Ally = SpriteKind.create()
    export const AllyHitbox = SpriteKind.create()
    export const EnemyHitboxCutscene = SpriteKind.create()
}
namespace StatusBarKind {
    export const AllyHealth = StatusBarKind.create()
}
function PlaySFX(Sound: string) {
    if (Sound == "StickSlash") {
        music.play(music.createSoundEffect(WaveShape.Square, 609, 1623, 215, 0, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 892, 122, 215, 0, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (Sound == "StickFlame") {
        music.play(music.createSoundEffect(WaveShape.Square, 609, 694, 215, 0, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 436, 324, 215, 0, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 124, 2303, 255, 255, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (Sound == "PCThrow") {
        music.play(music.createSoundEffect(WaveShape.Noise, 1058, 448, 215, 0, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 436, 324, 215, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Triangle, 1357, 1072, 255, 255, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (Sound == "Jump") {
        music.play(music.createSoundEffect(WaveShape.Square, 1037, 2036, 81, 94, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (Sound == "DamagePlayer") {
        music.play(music.createSoundEffect(WaveShape.Noise, 921, 883, 103, 255, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 436, 324, 138, 114, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 903, 216, 255, 157, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (Sound == "DamageEnemy") {
        music.play(music.createSoundEffect(WaveShape.Noise, 1406, 1418, 103, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 1204, 1372, 138, 114, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 1745, 2221, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Sawtooth, 717, 1428, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (Sound == "DeathEnemy") {
        music.play(music.createSoundEffect(WaveShape.Triangle, 1, 1671, 0, 255, 200, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (Sound == "DeathPlayer") {
        music.play(music.createSoundEffect(WaveShape.Sine, 2199, 1, 255, 0, 500, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Triangle, 1731, 1, 113, 119, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 4287, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
}

statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 0, function (status) {
    PlaySFX("DeathEnemy")
    extraEffects.createSpreadEffectOnAnchor(status.spriteAttachedTo(), extraEffects.createCustomSpreadEffectData(
        [12, 2, 3],
        false,
        extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Explosion),
        extraEffects.createPercentageRange(0, 50),
        extraEffects.createPercentageRange(0, 100),
        extraEffects.createTimeRange(500, 1000)
    ), 1000, 50, 50)
    sprites.destroy(status.spriteAttachedTo())
    sprites.destroy(sprites.readDataSprite(status.spriteAttachedTo(), "image"))
    if (status.spriteAttachedTo().kind() == SpriteKind.EnemyHitbox) {
        SwordHitsLeft = 25
    } else if (status.spriteAttachedTo().kind() == SpriteKind.EnemyRHitbox) {
        PineconeNumber += 15
    }
    KILLS += 1
})
function LevelSetup(Level: number) {
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
        Hailing = false
        SongStopped = false
        Cold_Hearted_Pale_Hail_Forest()
        timer.after((assets.animation`LevelIntroScreen`.length + 1) * 45, function() {
            MoveAbility = true
        })
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
        Hailing = true
        MoveAbility = true
        SongStopped = false
        Cold_Hearted_Pale_Hail_Forest()
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
    timer.after(assets.animation`LevelIntroScreen`.length * 45, function() {
        CreateAquifer()
        tiles.placeOnRandomTile(PlayerHitbox, assets.tile`START`)
        tiles.setTileAt(PlayerHitbox.tilemapLocation(), assets.tile`transparency16`)
        AquiferAnims()
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
function LevelIntro(Text: string) {
    CreateTextNoSpeech(Text, 120, 120, 15)
    LvIntro = sprites.create(assets.image`BlackScreen`)
    LvIntro.scale = 8
    LvIntro.z = 1001
    LvIntro.setFlag(SpriteFlag.Ghost, true)
    animation.runImageAnimation(
        LvIntro,
        assets.animation`LevelIntroScreen`,
        45,
        false
    )
    timer.after(assets.animation`LevelIntroScreen`.length * 45, function() {
        sprites.destroy(LvIntro)
        sprites.destroy(SpeechBalloon)
    })
}
function CreateAquifer() {
    Aquifer = sprites.create(assets.image`WaterHitbox`, SpriteKind.AquiferImage)
    Aquifer.setFlag(SpriteFlag.GhostThroughWalls, true)
    PlayerHitbox = sprites.create(assets.image`WaterHitbox`, SpriteKind.Player)
    PlayerHitbox.setFlag(SpriteFlag.Invisible, true)
    Aquifer.z = 50
    basics.add_gravity_to(PlayerHitbox)
    scene.cameraFollowSprite(PlayerHitbox)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`PHFSpike`, function (sprite, location) {
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
function CreateClrProgMenu() {
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
PlaySFX("MenuCHange")        }
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
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MoveAbility) {
        if (JumpPossibility) {
            basics.make_sprite_jump(PlayerHitbox, 190)
            PlaySFX("Jump")
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`NSSpikeRight`, function (sprite, location) {
    basics.make_sprite_jump(sprite, 190)
    MoveAbility = false
    timer.after(500, function () {
        MoveAbility = true
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
function EmptyNearby(Img: Sprite, x: number, y: number) {
    if (Img.image.getPixel(x, y - 1) == 0 || Img.image.getPixel(x, y + 1) == 0 || (Img.image.getPixel(x - 1, y) == 0 || Img.image.getPixel(x + 1, y) == 0)) {
        return true
    } else {
        return false
    }
}
function TorrentSayText(speech: string, speed: number, Emotion: number) {
    if (Emotion == 0) {
        CharBox.setImage(assets.image`TorrentStraightFace`)
    } else if (Emotion == 1) {
        CharBox.setImage(assets.image`TorrentAngry`)
    }
    fancyText.setText(SpeechBalloon, "<teal>TORRENT</teal>: " + speech)
    fancyText.setFrame(SpeechBalloon, assets.image`Text`)
    if (!(Silent)) {
        fancyText.setAnimationSound(SpeechBalloon, music.createSoundEffect(WaveShape.Square, 356, 215, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Linear))
    }
    fancyText.animateAtSpeed(SpeechBalloon, speed, fancyText.AnimationPlayMode.UntilDone)
    pause(1000)
}
sprites.onOverlap(SpriteKind.Explode, SpriteKind.Player, function (sprite, otherSprite) {
    for (let value4 of sprites.allOfKind(SpriteKind.Explode)) {
        value4.vx = 0
    }
    PlayerHealth.value = 0
    SwapSong()
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1163, 1, 255, 0, 900, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 250, 1, 255, 0, 900, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 2251, 1, 255, 0, 900, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 742, 255, 0, 900, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`PHFTrickEnding`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`PHFSnowyLeaves`)
    if (MISSION == 2) {
        SwapSong()
        MISSION = 3
        CUTSCENE()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MoveAbility) {
        if (WeaponHolding == 0) {
            if (PineconeNumber > 0) {
                PineconeNumber += -1
                if (characterAnimations.matchesRule(Aquifer, characterAnimations.rule(Predicate.FacingRight))) {
                    Pinecone = sprites.createProjectileFromSprite(assets.image`PineconeRight`, PlayerHitbox, 100, -190)
                    Pinecone.setFlag(SpriteFlag.AutoDestroy, false)
                    Pinecone.setKind(SpriteKind.Pinecone)
                    PlaySFX("PCThrow")
                    basics.add_gravity_to(Pinecone)
                } else if (characterAnimations.matchesRule(Aquifer, characterAnimations.rule(Predicate.FacingLeft))) {
                    Pinecone = sprites.createProjectileFromSprite(assets.image`PineconeLeft`, PlayerHitbox, -80, -190)
                    Pinecone.setFlag(SpriteFlag.AutoDestroy, false)
                    Pinecone.setKind(SpriteKind.Pinecone)
                    PlaySFX("PCThrow")
                    basics.add_gravity_to(Pinecone)
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
function War_Is_Coming_Main_Theme() {
    timer.background(function () {
        while (!(SongStopped)) {
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200042a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012003001c0001dc00690000045e01000400000000000000000000056400010400032a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012006001c00010a006400f401640000040000000000000000000000000000000002060000004000011407001c00020a006400f4016400000400000000000000000000000000000000030600000040000114`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200042a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012703001c0001dc00690000045e01000400000000000000000000056400010400032a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012706001c00010a006400f401640000040000000000000000000000000000000002060000004000019307001c00020a006400f4016400000400000000000000000000000000000000030600000040000193`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200042a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012003001c0001dc00690000045e01000400000000000000000000056400010400032a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012006001c00010a006400f401640000040000000000000000000000000000000002060000004000019007001c00020a006400f4016400000400000000000000000000000000000000030600000040000190`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200040c0000002000012020004000019f03001c0001dc00690000045e01000400000000000000000000056400010400030c0000002000012020004000019f06001c00010a006400f401640000040000000000000000000000000000000002120000002000010d20003000018b30004000010a07001c00020a006400f401640000040000000000000000000000000000000003120000002000010d20003000018b30004000010a`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200042a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012003001c0001dc00690000045e01000400000000000000000000056400010400032a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012006001c00010a006400f401640000040000000000000000000000000000000002060000004000010807001c00020a006400f4016400000400000000000000000000000000000000030600000040000108`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200042a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012703001c0001dc00690000045e01000400000000000000000000056400010400032a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012706001c00010a006400f401640000040000000000000000000000000000000002060000004000018707001c00020a006400f4016400000400000000000000000000000000000000030600000040000187`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200042a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012003001c0001dc00690000045e01000400000000000000000000056400010400032a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012006001c00010a006400f401640000040000000000000000000000000000000002060000004000010807001c00020a006400f4016400000400000000000000000000000000000000030600000040000108`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200040c0000002000012020004000019f03001c0001dc00690000045e01000400000000000000000000056400010400030c0000002000012020004000019f06001c00010a006400f401640000040000000000000000000000000000000002060000004000018707001c00020a006400f4016400000400000000000000000000000000000000030600000040000187`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200042a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012003001c0001dc00690000045e01000400000000000000000000056400010400032a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012006001c00010a006400f401640000040000000000000000000000000000000002060000004000010807001c00020a006400f4016400000400000000000000000000000000000000030600000040000108`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200042a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012703001c0001dc00690000045e01000400000000000000000000056400010400032a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012706001c00010a006400f401640000040000000000000000000000000000000002060000004000018b07001c00020a006400f401640000040000000000000000000000000000000003060000004000018b`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200042a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012003001c0001dc00690000045e01000400000000000000000000056400010400032a0008000c0001200c00100001221000140001a318001c0001252000240001222c00300001a330003400012006001c00010a006400f401640000040000000000000000000000000000000002060000004000010d07001c00020a006400f401640000040000000000000000000000000000000003060000004000010d`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00c8000408020401001c000f05001202c102c201000405002800000064002800031400060200040c0000002000012020004000019f03001c0001dc00690000045e01000400000000000000000000056400010400030c0000002000012020004000019f06001c00010a006400f4016400000400000000000000000000000000000000020c0000002000019020004000010f07001c00020a006400f4016400000400000000000000000000000000000000030c0000002000019020004000010f`), music.PlaybackMode.UntilDone)
            }
        }
    })
}
scene.onOverlapTile(SpriteKind.EnemyRHitbox, assets.tile`NSSpikeUp`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.EnemyHitbox, assets.tile`PHFSpike`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.EnemyRHitbox, assets.tile`PHFSpike`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`NSSpikeUp`, function (sprite, location) {
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
function Painstricken_Nitro_Stun() {
    timer.background(function () {
        while (!(SongStopped)) {
            for (let index = 0; index < 2; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a00000400000000000000000000000000000000024e0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30004000011807001c00020a006400f4016400000400000000000000000000000000000000034e0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30004000011808001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000010c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a00000400000000000000000000000000000000024e0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30004000019f07001c00020a006400f4016400000400000000000000000000000000000000034e0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30004000019f08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000018b20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a00000400000000000000000000000000000000024e0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30004000011807001c00020a006400f4016400000400000000000000000000000000000000034e0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30004000011808001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000010809010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a0000040000000000000000000000000000000002120000002000019f20003000012030004000019f07001c00020a006400f401640000040000000000000000000000000000000003120000002000019f20003000012030004000019f08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000018720004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
            }
            for (let index = 0; index < 2; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`00dc000408020501001c000f05001202c102c201000405002800000064002800031400060200041e000000080001240800180001a318002800011e28003800019f38004000011b05001c000f0a006400f4010a00000400000000000000000000000000000000021e000000080001240800180001a318002800011e28003800019f38004000011b07001c00020a006400f4016400000400000000000000000000000000000000031e000000080001240800180001a318002800011e28003800019f38004000011b08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000010c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`00dc000408020501001c000f05001202c102c201000405002800000064002800031400060200041e0000000800011b08001800011d18002800019a28003800011b38004000019705001c000f0a006400f4010a00000400000000000000000000000000000000021e0000000800011b08001800011d18002800019a28003800011b38004000019707001c00020a006400f4016400000400000000000000000000000000000000031e0000000800011b08001800011d18002800019a28003800011b38004000019708001c000e050046006603320000040a002d00000064001400013200020100020c0000002000018b20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`00dc000408020501001c000f05001202c102c201000405002800000064002800031400060200040c0000002000011820004000011805001c000f0a006400f4010a00000400000000000000000000000000000000020c0000002000011820004000011807001c00020a006400f4016400000400000000000000000000000000000000030c0000002000011820004000011808001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000010809010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`00dc000408020501001c000f05001202c102c201000405002800000064002800031400060200040c0000002000019720004000019a05001c000f0a006400f4010a00000400000000000000000000000000000000020c0000002000019720004000019a07001c00020a006400f4016400000400000000000000000000000000000000030c0000002000019720004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000018720004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
            }
            for (let index = 0; index < 2; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38003c00011b3c004000011d07001c00020a006400f401640000040000000000000000000000000000000003600000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38003c00011b3c004000011d08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000010c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400011b04000800019a08000c0001180c001000019a10001400011b14001800011d18001c00011b1c002000019a20002400011824002800019a28002c00011b2c003000011d30003400011b34003800019a38003c0001183c004000019a07001c00020a006400f401640000040000000000000000000000000000000003600000000400011b04000800019a08000c0001180c001000019a10001400011b14001800011d18001c00011b1c002000019a20002400011824002800019a28002c00011b2c003000011d30003400011b34003800019a38003c0001183c004000019a08001c000e050046006603320000040a002d0000006400140001320002010002120000002000018b20003000010830004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38003c00011b3c004000011d07001c00020a006400f401640000040000000000000000000000000000000003600000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38003c00011b3c004000011d08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000010c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400011b04000800019a08000c0001180c001000019a10001400011b14001800011d18001c00011b1c002000019a20002400011824002800019a28002c00011b2c003000011d30003400011b34003800019a38003c0001183c004000019a07001c00020a006400f401640000040000000000000000000000000000000003600000000400011b04000800019a08000c0001180c001000019a10001400011b14001800011d18001c00011b1c002000019a20002400011824002800019a28002c00011b2c003000011d30003400011b34003800019a38003c0001183c004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000018e20004000018e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38003c00011b3c004000011d07001c00020a006400f401640000040000000000000000000000000000000003600000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38003c00011b3c004000011d08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010f20004000010f09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400011b04000800019a08000c0001180c001000019a10001400011b14001800011d18001c00011b1c002000019a20002400011824002800019a28002c00011b2c003000011d30003400011b34003800019a38003c0001183c004000019a07001c00020a006400f401640000040000000000000000000000000000000003600000000400011b04000800019a08000c0001180c001000019a10001400011b14001800011d18001c00011b1c002000019a20002400011824002800019a28002c00011b2c003000011d30003400011b34003800019a38003c0001183c004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000011120004000011209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38003c00011b3c004000011d07001c00020a006400f401640000040000000000000000000000000000000003600000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38003c00011b3c004000011d08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000019320004000019309010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`00dc000408020405001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400011b04000800019a08000c0001180c001000019a10001400011b14001800011d18001c00011b1c002000019a20002400011824002800019a28002c00011b2c003000011d30003400011b34003800019a38003c0001183c004000019a07001c00020a006400f401640000040000000000000000000000000000000003600000000400011b04000800019a08000c0001180c001000019a10001400011b14001800011d18001c00011b1c002000019a20002400011824002800019a28002c00011b2c003000011d30003400011b34003800019a38003c0001183c004000019a08001c000e050046006603320000040a002d0000006400140001320002010002120000002000019320003000019730004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
        }
    })
}
function CreateTextSprite() {
    SpeechBalloon = fancyText.create("", 0, 15, customFont.BARRIER_font)
    fancyText.setTextFlag(SpeechBalloon, fancyText.Flag.ChangeHeightWhileAnimating, false)
    fancyText.setMaxWidth(SpeechBalloon, 195)
    SpeechBalloon.setFlag(SpriteFlag.RelativeToCamera, true)
    SpeechBalloon.top = 0
    SpeechBalloon.left = 45
    SpeechBalloon.z = 1001
    CharBox = sprites.create(assets.image`AquiferStraightFace`, SpriteKind.Player)
    CharBox.setFlag(SpriteFlag.RelativeToCamera, true)
    CharBox.top = 0
    CharBox.left = 0
    CharBox.z = 1001
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MoveAbility) {
        if (JumpPossibility) {
            basics.make_sprite_jump(PlayerHitbox, 190)
            PlaySFX("Jump")
        }
    }
})
scene.onOverlapTile(SpriteKind.EnemyHitbox, assets.tile`NSSpikeUp`, function (sprite, location) {
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
sprites.onOverlap(SpriteKind.AllyHitbox, SpriteKind.EnemySrHitbox, function (sprite, otherSprite) {
    if (Math.percentChance(75)) {
        PlaySFX("DamageAlly")
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
sprites.onOverlap(SpriteKind.EnemyHitbox, SpriteKind.Player, function (sprite, otherSprite) {
    if (AquiferATKing) {
        if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value > 1) {
            PlaySFX("DamageEnemy")        }
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
function CreateChapterMenu() {
    MenuSprite = miniMenu.createMenu(
        miniMenu.createMenuItem("RESUME", assets.image`Play`),
        miniMenu.createMenuItem("COMING SOON!",assets.image`Prologue`),
        miniMenu.createMenuItem("THE DARK ERA", assets.image`1`)
    )
    MenuSprite.setFrame(assets.image`FRAME`)
    MenuSprite.setDimensions(125, 50)
    MenuSprite.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 9)
    MenuSprite.setPosition(120, 140)
    MenuSprite.onSelectionChanged(function (selection, selectedIndex) {
        for (let index = 0; index < 4; index++) {
PlaySFX("MenuCHange")        }
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
            CreateChapterMenu()
        } else if (selectedIndex == 2) {
            CreateCh1Menu()
        } else {

        }
    })
}

function Intro() {
    Reset()
    SwapSong()
    color.setPalette(color.originalPalette)
    timer.after(1000, function () {
        Prologue = sprites.create(assets.image`PrologueClearImg`, SpriteKind.Player)
        Prologue.setScale(5, ScaleAnchor.Middle)
        SpeechBalloon = fancyText.create("abc", 0, 15, fancyText.defaultArcade)
        fancyText.setFrame(SpeechBalloon, assets.image`Text`)
        fancyText.setMaxWidth(SpeechBalloon, 45 * 5)
        SpeechBalloon.left = Prologue.left
        SpeechBalloon.top = Prologue.top
        Narrate("Greenwood Forest:", fancyText.TextSpeed.Normal)
        animation.runImageAnimation(
            Prologue,
            [img`
aaa7dddddddd777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa7dd777777777777777777aaaaaaaaaaaaaaaaaaaaa
aaa777777777777777777777aaaaaaaaaaaaaaaaaaaaa
aaa777777777777777777777aaaa777777777aaaaaaaa
aaaaa7777777777777777777aaaa7dddd7777aaaaaaaa
aaaaa77777777777777777a7aaa7dd7777777aaaaaaaa
aaaaaa7777777777777777a7aaa7d777777777777aaaa
aaaaaa777777777777777aa7aaa77777777777777aaaa
aaaaaa77777777777777aaa7aaaa77777777777a7aaaa
aaaaaaa7777ee77777aaaaa77aaaa7777777777a7aaaa
aaaaaaaaaaaee77777777777aaaaa77777777aaa7aaaa
aaaaaaaaaaaeee777eaa77aaaaaaaa777e77777777aaa
aaaaaaaaaaaeee777eaa77aaaaaaaaaaae77ea77aaaaa
aaaaaaaaaaaeeeaaaeaaaaaaaaaaaaaaaeaaeaaaaaaaa
aaaaaaeaaaeeeeaaaeeeeaaaaaaaaeaaeeaaeeeaaaaaa
aaaaaaeeeeeeeeaaaaaaeaaaaaaaaeeeeeaaaaeaaaaaa
aaaaaaeeeeeeeeaaaaaaeaaaaaaaaaaaeeaaaaaaaaaaa
aaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaa7777777777aaaaaaaaaaaaaaaaaaaaa7777777
aaaaaaa7dddd77777aaaaaaaaaaaaaaaaaaaaa7dddd77
aaaaaa7dd77777777aaaaaaaaaaaaaaaaaaaa77d77777
aaaaaa7d7777777777777aaaaaaaaaaaaaaaa77777777
aaaaaa777777777777777aaaaaaaaaaaaaaaaa7777777
aaaaaaa77777777777777aaaaaaaaaaaaaaaaa7777777
aaaaaaa77777777777777aaaaaaaaaaaaaaaaaa777777
aaaaaaaa77777777777a7aaaaaaaaaaaaaaaaaa777e77
aaaaaaaa77777777777a7aaaaaaaaaaaaaaaaaaaaae77
aaaaaaaaa777e7777aaa77aaaaaaaaaaaaaaaaaaaaeaa
aaaaaaaaaaaae77777777aaaaaaaaaaaaaaaaaaaaeeaa
aaaaaaaaaaaaee77ea77aaaaaaaaaaaaaaaaaaaaaeeaa
aaaaaaaaaaaaeeaaeaaaaaaaaaaaaaaaaaaaaaaaeeeaa
aaaaaaaaeaaeeeaaeeeaaaaaaaaaaaaaaaaaaaaaeeeaa
aaaaaaaaeeeeeeaaaaeaaaaaaaaaaaaaaaaaaaaeeeeaa
aaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaeeeeea
aaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
777777777777777777777aaaaaaaaaaaaaaaaaaaaaaaa
777777777777777777777aaaa777777777aaaaaaaaaaa
aa7777777777777777777aaaa7dddd7777aaaaaaaaaaa
aa77777777777777777a7aaa7dd7777777aaaaaaaaaaa
aaa7777777777777777a7aaa7d777777777777aaaaaaa
aaa777777777777777aa7aaa77777777777777aaaaaaa
aaa77777777777777aaa7aaaa77777777777a7aaaaaaa
aaaa7777ee77777aaaaa77aaaa7777777777a7aaaaaaa
aaaaaaaaee77777777777aaaaa77777777aaa7aaaaaaa
aaaaaaaaeee777eaa77aaaaaaaa777e77777777aaaaaa
aaaaaaaaeee777eaa77aaaaaaaaaaae77ea77aaaaaaaa
aaaaaaaaeeeaaaeaaaaaaaaaaaaaaaeaaeaaaaaaaaaaa
aaaeaaaeeeeaaaeeeeaaaaaaaaeaaeeaaeeeaaaaaaaaa
aaaeeeeeeeeaaaaaaeaaaaaaaaeeeeeaaaaeaaaaaaaaa
aaaeeeeeeeeaaaaaaeaaaaaaaaaaaeeaaaaaaaaaaaaaa
aaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaa
aaaaaaeeeeaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaa
aaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaa
aaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaa
aaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa7777777777aaaaaaaaaaaaaaaaaaaaa777777777a
aaaa7dddd77777aaaaaaaaaaaaaaaaaaaaa7dddd7777a
aaa7dd77777777aaaaaaaaaaaaaaaaaaaa77d7777777a
aaa7d7777777777777aaaaaaaaaaaaaaaa77777777777
aaa777777777777777aaaaaaaaaaaaaaaaa7777777777
aaaa77777777777777aaaaaaaaaaaaaaaaa7777777777
aaaa77777777777777aaaaaaaaaaaaaaaaaa777777777
aaaaa77777777777a7aaaaaaaaaaaaaaaaaa777e77777
aaaaa77777777777a7aaaaaaaaaaaaaaaaaaaaae77e77
aaaaaa777e7777aaa77aaaaaaaaaaaaaaaaaaaaeaaeaa
aaaaaaaaae77777777aaaaaaaaaaaaaaaaaeaaeeaaeea
aaaaaaaaaee77ea77aaaaaaaaaaaaaaaaaaeeeeeaaaaa
aaaaaaaaaeeaaeaaaaaaaaaaaaaaaaaaaaaaaeeeaaaaa
aaaaaeaaeeeaaeeeaaaaaaaaaaaaaaaaaaaaaeeeaaaaa
aaaaaeeeeeeaaaaeaaaaaaaaaaaaaaaaaaaaeeeeaaaaa
aaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeaaaa
aaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
777777777777777a7aaa7dd7777777aaaaaaaaaaa7777
777777777777777a7aaa7d777777777777aaaaaaaa777
77777777777777aa7aaa77777777777777aaaaaaaaa77
7777777777777aaa7aaaa77777777777a7aaaaaaaaa77
7777ee77777aaaaa77aaaa7777777777a7aaaaaaaaaa7
aaaaee77777777777aaaaa77777777aaa7aaaaaaaaaaa
aaaaeee777eaa77aaaaaaaa777e77777777aaaaaaaaaa
aaaaeee777eaa77aaaaaaaaaaae77ea77aaaaaaaaaaea
aaaaeeeaaaeaaaaaaaaaaaaaaaeaaeaaaaaaaaaaaaaee
aaaeeeeaaaeeeeaaaaaaaaeaaeeaaeeeaaaaaaaaaaaaa
eeeeeeeaaaaaaeaaaaaaaaeeeeeaaaaeaaaaaaaaaaaaa
eeeeeeeaaaaaaeaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaa
aaaeeeeaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaae
aaeeeeaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaae
aaeeeeaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaa
aaeeeeaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaa
aaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
eeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
eeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
7777777777aaaaaaaaaaaaaaaaaaaaa777777777aaaaa
7dddd77777aaaaaaaaaaaaaaaaaaaaa7dddd7777aaaaa
dd77777777aaaaaaaaaaaaaaaaaaaa77d7777777aaaaa
d7777777777777aaaaaaaaaaaaaaaa777777777777aaa
77777777777777aaaaaaaaaaaaaaaaa77777777777aaa
77777777777777aaaaaaaaaaaaaaaaa77777777777aaa
77777777777777aaaaaaaaaaaaaaaaaa77777777a7aaa
a77777777777a7aaaaaaaaaaaaaaaaaa777e777aa7aaa
a77777777777a7aaaaaaaaaaaaaaaaaaaaae77e7777aa
aa777e7777aaa77aaaaaaaaaaaaaaaaaaaaeaaea77aaa
aaaaae77777777aaaaaaaaaaaaaaaaaeaaeeaaeeaaaaa
aaaaaee77ea77aaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaa
aaaaaeeaaeaaaaaaaaaaaaaaaaaaaaaaaeeeaaaaaaaaa
aeaaeeeaaeeeaaaaaaaaaaaaaaaaaaaaaeeeaaaaaaaaa
aeeeeeeaaaaeaaaaaaaaaaaaaaaaaaaaeeeeaaaaaaaaa
aaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeaaaaaaaa
aaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaa777777777aaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaa7dddd7777aaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaa7dd7777777aaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaa7d777777777777aaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaa77777777777777aaaaaa
            `, img`
77777aaaaa77aaaa7777777777a7aaaaaaaaaaaa77777
77777777777aaaaa77777777aaa7aaaaaaaaaaaaa777e
e777eaa77aaaaaaaa777e77777777aaaaaaaaaaaaaaae
e777eaa77aaaaaaaaaaae77ea77aaaaaaaaaaaaaaaaae
eaaaeaaaaaaaaaaaaaaaeaaeaaaaaaaaaaaaaaaaeaaee
eaaaeeeeaaaaaaaaeaaeeaaeeeaaaaaaaaaaaaaaeeeee
eaaaaaaeaaaaaaaaeeeeeaaaaeaaaaaaaaaaaaaaaaaee
eaaaaaaeaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaaaeee
eaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaeee
aaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaeeee
aaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaeeee
aaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
eaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
eeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
7777aaaaaaaaaaaaaaaaaaaaa777777777aaaaaaaaaaa
7777aaaaaaaaaaaaaaaaaaaaa7dddd7777aaaaaaaaaaa
7777aaaaaaaaaaaaaaaaaaaa77d7777777aaaaaaaaaaa
77777777aaaaaaaaaaaaaaaa777777777777aaaaaaaaa
77777777aaaaaaaaaaaaaaaaa77777777777aaaaaaaaa
77777777aaaaaaaaaaaaaaaaa77777777777aaaaaaaaa
77777777aaaaaaaaaaaaaaaaaa77777777a7aaaaaaaaa
777777a7aaaaaaaaaaaaaaaaaa777e777aa7aaaaaaaaa
777777a7aaaaaaaaaaaaaaaaaaaaae77e7777aaaaaaaa
7777aaa77aaaaaaaaaaaaaaaaaaaaeaaea77aaaaaaaaa
77777777aaaaaaaaaaaaaaaaaeaaeeaaeeaaaaaaaaaaa
e77ea77aaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaa
eaaeaaaaaaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaa
eaaeeeaaaaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaa
eaaaaeaaaaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaa
eaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
eaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaa777777777aaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaa7dddd7777aaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaa7dd7777777aaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaa7d777777777777aaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaa77777777777777aaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaa77777777777a7aaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaa7777777777a7aaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaa77777777aaa7aaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaa777e77777777aaaaaaaaaaa
            `, img`
aa77aaaaaaaaaaae77ea77aaaaaaaaaaaaaaaaaeaaeaa
aaaaaaaaaaaaaaaeaaeaaaaaaaaaaaaaaaaeaaeeaaeee
eeeaaaaaaaaeaaeeaaeeeaaaaaaaaaaaaaaeeeeeaaaae
aaeaaaaaaaaeeeeeaaaaeaaaaaaaaaaaaaaaaaeeaaaaa
aaeaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaaaeeeaaaaa
aaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaeeeaaaaa
aaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaeeeeaaaaa
aaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaeeeeeaaaa
aaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaa777777777aaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaa7dddd7777aaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaa77d7777777aaaaaaaaaaaaaaaa
777aaaaaaaaaaaaaaaa777777777777aaaaaaaaaaaaaa
777aaaaaaaaaaaaaaaaa77777777777aaaaaaaaaaaaaa
777aaaaaaaaaaaaaaaaa77777777777aaaaaaaaaaaaaa
777aaaaaaaaaaaaaaaaaa77777777a7aaaaaaaaaaaaaa
7a7aaaaaaaaaaaaaaaaaa777e777aa7aaaaaaaaaaaaaa
7a7aaaaaaaaaaaaaaaaaaaaae77e7777aaaaaaaaaaaaa
aa77aaaaaaaaaaaaaaaaaaaaeaaea77aaaaaaaaaaaa77
777aaaaaaaaaaaaaaaaaeaaeeaaeeaaaaaaaaaaaaaa7d
77aaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaa7dd
aaaaaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaa7d7
eaaaaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaa777
eaaaaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaa77
aaaaaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaaa7
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa7
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaa777777777aaaaaaaaaaaaaaaaaaaae
aaaaaaaaaaaaaaa7dddd7777aaaaaaaaaaaaaaaaaaaae
aaaaaaaaaaaaaa7dd7777777aaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaa7d777777777777aaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaa77777777777777aaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaa77777777777a7aaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaa7777777777a7aaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaa77777777aaa7aaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaa777e77777777aaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaae77ea77aaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaeaaeaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaeaaeeaaeeeaaaaaaaaaaaaaaaaaaa
            `, img`
aaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaaaeeeaaaaaaaaa
aaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaeeeaaaaaaaaa
aaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaeeeeaaaaaaaaa
aaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaeeeeeaaaaaaaa
aaaaaaaaeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaa777777777aaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaa7dddd7777aaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaa77d7777777aaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaa777777777777aaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaa77777777777aaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaa77777777777aaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaa77777777a7aaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaa777e777aa7aaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaae77e7777aaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaeaaea77aaaaaaaaaaaa777777
aaaaaaaaaaaaaaaaeaaeeaaeeaaaaaaaaaaaaaa7dddd7
aaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaa7dd7777
aaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaa7d77777
aaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaa7777777
aaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaa777777
aaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaaa77777
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa77777
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa777e
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaae
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaae
aaaaaaaaaaa777777777aaaaaaaaaaaaaaaaaaaaeaaee
aaaaaaaaaaa7dddd7777aaaaaaaaaaaaaaaaaaaaeeeee
aaaaaaaaaa7dd7777777aaaaaaaaaaaaaaaaaaaaaaaee
aaaaaaaaaa7d777777777777aaaaaaaaaaaaaaaaaaeee
aaaaaaaaaa77777777777777aaaaaaaaaaaaaaaaaaeee
aaaaaaaaaaa77777777777a7aaaaaaaaaaaaaaaaaeeee
aaaaaaaaaaaa7777777777a7aaaaaaaaaaaaaaaaaeeee
aaaaaaaaaaaa77777777aaa7aaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaa777e77777777aaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaae77ea77aaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaeaaeaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaeaaeeaaeeeaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaeeeeeaaaaeaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
aaaeeeeaaaaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaa
aaaeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaa7dddd7777aaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaa77d7777777aaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaa777777777777aaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaa77777777777aaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaa77777777777aaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaa77777777a7aaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaa777e777aa7aaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaae77e7777aaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaeaaea77aaaaaaaaaaaa777777777aa
aaaaaaaaaaaeaaeeaaeeaaaaaaaaaaaaaa7dddd7777aa
aaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaa7dd7777777aa
aaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaa7d7777777777
aaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaa777777777777
aaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaa77777777777
aaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaaa7777777777
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa77777777aa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa777e77777
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaae77ea7
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeaaeaa
aaaaaa777777777aaaaaaaaaaaaaaaaaaaaeaaeeaaeee
aaaaaa7dddd7777aaaaaaaaaaaaaaaaaaaaeeeeeaaaae
aaaaa7dd7777777aaaaaaaaaaaaaaaaaaaaaaaeeaaaaa
aaaaa7d777777777777aaaaaaaaaaaaaaaaaaeeeaaaaa
aaaaa77777777777777aaaaaaaaaaaaaaaaaaeeeaaaaa
aaaaaa77777777777a7aaaaaaaaaaaaaaaaaeeeeaaaaa
aaaaaaa7777777777a7aaaaaaaaaaaaaaaaaeeeeeaaaa
aaaaaaa77777777aaa7aaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaa777e77777777aaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaae77ea77aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaeaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeaaeeaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeeeeeaaaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaeeaaaaaaaaaaaaaaa777777777aaaaaaaaa
aaaaaaaaaeeeaaaaaaaaaaaaaaa777777777aaaaaaaaa
aaaaaaaaaeeeaaaaaaaaaaaaaa7dddddddd777777aaaa
aaaaaaaaaaaaaaaaaaaaaaaaaa7dddddddd7777777777
aaaaaaaaaaaaaaaaaaaaaaaaaa7dd7777777777777777
aaaaaaaaaaaaaaaaaaaaaaaaaa7dd7777777777777777
            `, img`
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaa7dddd7777aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaa77d7777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaa777777777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaa77777777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaa77777777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaa77777777a7aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaa777e777aa7aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaae77e7777aaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaeaaea77aaaaaaaaaaaa777777777aaaaaa
aaaaaaaeaaeeaaeeaaaaaaaaaaaaaa7dddd7777aaaaaa
aaaaaaaeeeeeaaaaaaaaaaaaaaaaa7dd7777777aaaaaa
aaaaaaaaaeeeaaaaaaaaaaaaaaaaa7d7777777777aaaa
aaaaaaaaaeeeaaaaaaaaaaaaaaaaa777777777777aaaa
aaaaaaaaeeeeaaaaaaaaaaaaaaaaaa77777777777aaaa
aaaaaaaaeeeeeaaaaaaaaaaaaaaaaaa7777777777aaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa77777777aaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa777e77777aaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaae77ea7aaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeaaeaaaaaa
aa777777777aaaaaaaaaaaaaaaaaaaaeaaeeaaeeeaaaa
aa7dddd7777aaaaaaaaaaaaaaaaaaaaeeeeeaaaaeaaaa
a7dd7777777aaaaaaaaaaaaaaaaaaaaaaaeeaaaaaaaaa
a7d777777777777aaaaaaaaaaaaaaaaaaeeeaaaaaaaaa
a77777777777777aaaaaaaaaaaaaaaaaaeeeaaaaaaaaa
aa77777777777a7aaaaaaaaaaaaaaaaaeeeeaaaaaaaaa
aaa7777777777a7aaaaaaaaaaaaaaaaaeeeeeaaaaaaaa
aaa77777777aaa7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa777e77777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaae77ea77aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaeaaeeaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaeeeeeaaaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaeeaaaaaaaaaaaaaaa777777777aaaaaaaaaaaaa
aaaaaeeeaaaaaaaaaaaaaaa777777777aaaaaaaaaaaaa
aaaaaeeeaaaaaaaaaaaaaa7dddddddd777777aaaaaaaa
aaaaaaaaaaaaaaaaaaaaaa7dddddddd777777aaaaaaaa
aaaaaaaaaaaaaaaaaaaaaa7dd777777777777777777aa
aaaaaaaaaaaaaaaaaaaaaa777777777777777777777aa
aaaaaaaaaaaaaaaaaaaaaa777777777777777777777aa
aaaaaaaaaaaaaaaaaaaaaaaa7777777777777777777aa
aaaaaaaaaaaaaaaaaaaaaaaa77777777777777777a7aa
            `, img`
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaa7dddd7777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa77d7777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa777777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaa77777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaa77777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaa77777777a7aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaa777e777aa7aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaae77e7777aaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaeaaea77aaaaaaaaaaaa777777777aaaaaaaa
aaaaaeaaeeaaeeaaaaaaaaaaaaaa7dddd7777aaaaaaaa
aaaaaeeeeeaaaaaaaaaaaaaaaaa7dd7777777aaaaaaaa
aaaaaaaeeeaaaaaaaaaaaaaaaaa7d7777777777aaaaaa
aaaaaaaeeeaaaaaaaaaaaaaaaaa777777777777aaaaaa
aaaaaaeeeeaaaaaaaaaaaaaaaaaa77777777777aaaaaa
aaaaaaeeeeeaaaaaaaaaaaaaaaaaa7777777777aaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaa77777777aaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa777e77777aaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaae77ea7aaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeaaeaaaaaaaa
777777777aaaaaaaaaaaaaaaaaaaaeaaeeaaeeeaaaaaa
7dddd7777aaaaaaaaaaaaaaaaaaaaeeeeeaaaaeaaaaaa
dd7777777aaaaaaaaaaaaaaaaaaaaaaaeeaaaaaaaaaaa
d777777777777aaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaa
7777777777777aaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaa
77777777777a7aaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaa
a7777777777a7aaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaa
a77777777aaa7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aa777e77777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaae77ea77aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaeaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aeaaeeaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aeeeeeaaaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaeeaaaaaaaaaaaaaaa777777777aaaaaaaaaaaaaaa
aaaeeeaaaaaaaaaaaaaaa777777777aaaaaaaaaaaaaaa
aaaeeeaaaaaaaaaaaaaa7dddddddd777777aaaaaaaaaa
aaaaaaaaaaaaaaaaaaaa7dddddddd777777aaaaaaaaaa
aaaaaaaaaaaaaaaaaaaa7dd777777777777777777aaaa
aaaaaaaaaaaaaaaaaaaa777777777777777777777aaaa
aaaaaaaaaaaaaaaaaaaa777777777777777777777aaaa
aaaaaaaaaaaaaaaaaaaaaa7777777777777777777aaaa
aaaaaaaaaaaaaaaaaaaaaa77777777777777777a7aaa7
aaaaaaaaaaaaaaaaaaaaaaa7777777777777777a7aaa7
aaaaaaaaaaaaaaaaaaaaaaa777777777777777aa7aaa7
            `, img`
a777777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aa77777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aa77777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa77777777a7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa777e777aa7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaae77e7777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaeaaea77aaaaaaaaaaaa777777777aaaaaaaaaaa
aaeaaeeaaeeaaaaaaaaaaaaaa7dddd7777aaaaaaaaaaa
aaeeeeeaaaaaaaaaaaaaaaaa7dd7777777aaaaaaaaaaa
aaaaeeeaaaaaaaaaaaaaaaaa7d7777777777aaaaaaaaa
aaaaeeeaaaaaaaaaaaaaaaaa777777777777aaaaaaaaa
aaaeeeeaaaaaaaaaaaaaaaaaa77777777777aaaaaaaaa
aaaeeeeeaaaaaaaaaaaaaaaaaa7777777777aaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaa77777777aaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaa777e77777aaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaae77ea7aaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeaaeaaaaaaaaaaa
777777aaaaaaaaaaaaaaaaaaaaeaaeeaaeeeaaaaaaaaa
dd7777aaaaaaaaaaaaaaaaaaaaeeeeeaaaaeaaaaaaaaa
777777aaaaaaaaaaaaaaaaaaaaaaaeeaaaaaaaaaaaaaa
7777777777aaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaa
7777777777aaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaa
77777777a7aaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaa
77777777a7aaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaa
777777aaa7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
77e77777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aae77ea77aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaeaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aeeaaeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
eeeaaaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aeeaaaaaaaaaaaaaaa777777777aaaaaaaaaaaaaaaaaa
eeeaaaaaaaaaaaaaaa777777777aaaaaaaaaaaaaaaaaa
eeeaaaaaaaaaaaaaa7dddddddd777777aaaaaaaaaaaaa
aaaaaaaaaaaaaaaaa7dddddddd777777aaaaaaaaaaaaa
aaaaaaaaaaaaaaaaa7dd777777777777777777aaaaaaa
aaaaaaaaaaaaaaaaa777777777777777777777aaaaaaa
aaaaaaaaaaaaaaaaa777777777777777777777aaaa777
aaaaaaaaaaaaaaaaaaa7777777777777777777aaaa7dd
aaaaaaaaaaaaaaaaaaa77777777777777777a7aaa7dd7
aaaaaaaaaaaaaaaaaaaa7777777777777777a7aaa7d77
aaaaaaaaaaaaaaaaaaaa777777777777777aa7aaa7777
77777777aaaaaaaaaaaa77777777777777aaa7aaaa777
dddd7777aaaaaaaaaaaaa7777ee77777aaaaa77aaaa77
d7777777aaaaaaaaaaaaaaaaaee77777777777aaaaa77
7777777777aaaaaaaaaaaaaaaeee777eaa77aaaaaaaa7
            `, img`
777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
7777777a7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
77e777aa7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aae77e7777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaeaaea77aaaaaaaaaaaa777777777aaaaaaaaaaaaaaa
aeeaaeeaaaaaaaaaaaaaa7dddd7777aaaaaaaaaaaaaaa
eeeaaaaaaaaaaaaaaaaa7dd7777777aaaaaaaaaaaaaaa
eeeaaaaaaaaaaaaaaaaa7d7777777777aaaaaaaaaaaaa
eeeaaaaaaaaaaaaaaaaa777777777777aaaaaaaaaaaaa
eeeaaaaaaaaaaaaaaaaaa77777777777aaaaaaaaaaaaa
eeeeaaaaaaaaaaaaaaaaaa7777777777aaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaa77777777aaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaa777e77777aaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaae77ea7aaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaeaaeaaaaaaaaaaaaaaa
77aaaaaaaaaaaaaaaaaaaaeaaeeaaeeeaaaaaaaaaaaaa
77aaaaaaaaaaaaaaaaaaaaeeeeeaaaaeaaaaaaaaaaaaa
77aaaaaaaaaaaaaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaa
777777aaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaa
777777aaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaa
7777a7aaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaa
7777a7aaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaa
77aaa7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
7777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
7ea77aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaa777777777aaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaa777777777aaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaa7dddddddd777777aaaaaaaaaaaaaaaaa
aaaaaaaaaaaaa7dddddddd777777aaaaaaaaaaaaaaaaa
aaaaaaaaaaaaa7dd777777777777777777aaaaaaaaaaa
aaaaaaaaaaaaa777777777777777777777aaaaaaaaaaa
aaaaaaaaaaaaa777777777777777777777aaaa7777777
aaaaaaaaaaaaaaa7777777777777777777aaaa7dddd77
aaaaaaaaaaaaaaa77777777777777777a7aaa7dd77777
aaaaaaaaaaaaaaaa7777777777777777a7aaa7d777777
aaaaaaaaaaaaaaaa777777777777777aa7aaa77777777
aaaaaaaaaaaaaaaa77777777777777aaa7aaaa7777777
7777aaaaaaaaaaaaa7777ee77777aaaaa77aaaa777777
7777aaaaaaaaaaaaaaaaaee77777777777aaaaa777777
7777aaaaaaaaaaaaaaaaaeee777eaa77aaaaaaaa777e7
777777aaaaaaaaaaaaaaaeee777eaa77aaaaaaaaaaae7
777777aaaaaaaaaaaaaaaeeeaaaeaaaaaaaaaaaaaaaea
            `, img`
ea77aaaaaaaaaaaa777777777aaaaaaaaaaaaaaaa7dd7
eeaaaaaaaaaaaaaa7dddd7777aaaaaaaaaaaaaaaa7d77
aaaaaaaaaaaaaaa7dd7777777aaaaaaaaaaaaaaaa7777
aaaaaaaaaaaaaaa7d7777777777aaaaaaaaaaaaaaa777
aaaaaaaaaaaaaaa777777777777aaaaaaaaaaaaaaaa77
aaaaaaaaaaaaaaaa77777777777aaaaaaaaaaaaaaaa77
aaaaaaaaaaaaaaaaa7777777777aaaaaaaaaaaaaaaaa7
aaaaaaaaaaaaaaaaa77777777aaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaa777e77777aaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaae77ea7aaaaaaaaaaaaaaaaea
aaaaaaaaaaaaaaaaaaaaaeaaeaaaaaaaaaaaaaaaaaaee
aaaaaaaaaaaaaaaaaeaaeeaaeeeaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaeeeeeaaaaeaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaaaaa
7aaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaae
7aaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaae
7aaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaa
7aaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaaaaaaa
7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
77aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaa7dddddddd777777aaaaaaaaaaaaaaaaaaaaaa
aaaaaaaa7dddddddd777777aaaaaaaaaaaaaaaaaaaaaa
aaaaaaaa7dd777777777777777777aaaaaaaaaaaaaaaa
aaaaaaaa777777777777777777777aaaaaaaaaaaaaaaa
aaaaaaaa777777777777777777777aaaa777777777aaa
aaaaaaaaaa7777777777777777777aaaa7dddd7777aaa
aaaaaaaaaa77777777777777777a7aaa7dd7777777aaa
aaaaaaaaaaa7777777777777777a7aaa7d7777777777a
aaaaaaaaaaa777777777777777aa7aaa777777777777a
aaaaaaaaaaa77777777777777aaa7aaaa77777777777a
aaaaaaaaaaaa7777ee77777aaaaa77aaaa7777777777a
aaaaaaaaaaaaaaaaee77777777777aaaaa77777777aaa
aaaaaaaaaaaaaaaaeee777eaa77aaaaaaaa777e77777a
7aaaaaaaaaaaaaaaeee777eaa77aaaaaaaaaaae77ea7a
7aaaaaaaaaaaaaaaeeeaaaeaaaaaaaaaaaaaaaeaaeaaa
aaaaaaaaaaaeaaaeeeeaaaeeeeaaaaaaaaeaaeeaaeeea
aaaaaaaaaaaeeeeeeeeaaaaaaeaaaaaaaaeeeeeaaaaea
aaaaaaaaaaaeeeeeeeeaaaaaaeaaaaaaaaaaaeeaaaaaa
aaaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeaaaaaa
            `, img`
aaaaaaaaaaa777777777777aaaaaaaaaaaaaaaa777777
aaaaaaaaaaaa77777777777aaaaaaaaaaaaaaaa777777
aaaaaaaaaaaaa7777777777aaaaaaaaaaaaaaaaa777e7
aaaaaaaaaaaaa77777777aaaaaaaaaaaaaaaaaaaaaae7
aaaaaaaaaaaaaa777e77777aaaaaaaaaaaaaaaaaaaaea
aaaaaaaaaaaaaaaaae77ea7aaaaaaaaaaaaaaaaeaaeea
aaaaaaaaaaaaaaaaaeaaeaaaaaaaaaaaaaaaaaaeeeeea
aaaaaaaaaaaaaeaaeeaaeeeaaaaaaaaaaaaaaaaaaaeea
aaaaaaaaaaaaaeeeeeaaaaeaaaaaaaaaaaaaaaaaaeeea
aaaaaaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaaaaaeeea
aaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaeeeea
aaaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaeeeee
aaaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa7dddddddd777777aaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa7dddddddd777777aaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa7dd777777777777777777aaaaaaaaaaaaaaaaaaaa
aaaa777777777777777777777aaaaaaaaaaaaaaaaaaaa
aaaa777777777777777777777aaaa777777777aaaaaaa
aaaaaa7777777777777777777aaaa7dddd7777aaaaaaa
aaaaaa77777777777777777a7aaa7dd7777777aaaaaaa
aaaaaaa7777777777777777a7aaa7d7777777777aaaaa
aaaaaaa777777777777777aa7aaa777777777777aaaaa
aaaaaaa77777777777777aaa7aaaa77777777777aaaaa
aaaaaaaa7777ee77777aaaaa77aaaa7777777777aaaaa
aaaaaaaaaaaaee77777777777aaaaa77777777aaaaaaa
aaaaaaaaaaaaeee777eaa77aaaaaaaa777e77777aaaaa
aaaaaaaaaaaaeee777eaa77aaaaaaaaaaae77ea7aaaaa
aaaaaaaaaaaaeeeaaaeaaaaaaaaaaaaaaaeaaeaaaaaaa
aaaaaaaeaaaeeeeaaaeeeeaaaaaaaaeaaeeaaeeeaaaaa
aaaaaaaeeeeeeeeaaaaaaeaaaaaaaaeeeeeaaaaeaaaaa
aaaaaaaeeeeeeeeaaaaaaeaaaaaaaaaaaeeaaaaaaaaaa
aaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeaaaaaaaaaa
aaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaa
aaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaa
aaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaa
aaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
aaaaaaaaaaaaa777e77777aaaaaaaaaaaaaaaaaaaaeaa
aaaaaaaaaaaaaaaae77ea7aaaaaaaaaaaaaaaaeaaeeaa
aaaaaaaaaaaaaaaaeaaeaaaaaaaaaaaaaaaaaaeeeeeaa
aaaaaaaaaaaaeaaeeaaeeeaaaaaaaaaaaaaaaaaaaeeaa
aaaaaaaaaaaaeeeeeaaaaeaaaaaaaaaaaaaaaaaaeeeaa
aaaaaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaaaaaeeeaa
aaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaeeeeaa
aaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaeeeeea
aaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa7dddddddd777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa7dddddddd777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa7dd777777777777777777aaaaaaaaaaaaaaaaaaaaa
aaa777777777777777777777aaaaaaaaaaaaaaaaaaaaa
aaa777777777777777777777aaaa777777777aaaaaaaa
aaaaa7777777777777777777aaaa7dddd7777aaaaaaaa
aaaaa77777777777777777a7aaa7dd7777777aaaaaaaa
aaaaaa7777777777777777a7aaa7d7777777777aaaaaa
aaaaaa777777777777777aa7aaa777777777777aaaaaa
aaaaaa77777777777777aaa7aaaa77777777777aaaaaa
aaaaaaa7777ee77777aaaaa77aaaa7777777777aaaaaa
aaaaaaaaaaaee77777777777aaaaa77777777aaaaaaaa
aaaaaaaaaaaeee777eaa77aaaaaaaa777e77777aaaaaa
aaaaaaaaaaaeee777eaa77aaaaaaaaaaae77ea7aaaaaa
aaaaaaaaaaaeeeaaaeaaaaaaaaaaaaaaaeaaeaaaaaaaa
aaaaaaeaaaeeeeaaaeeeeaaaaaaaaeaaeeaaeeeaaaaaa
aaaaaaeeeeeeeeaaaaaaeaaaaaaaaeeeeeaaaaeaaaaaa
aaaaaaeeeeeeeeaaaaaaeaaaaaaaaaaaeeaaaaaaaaaaa
aaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaa7777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
aaaaaaaaaaaaeeeeeaaaaeaaaaaaaaaaaaaaaaaaeeeaa
aaaaaaaaaaaaaaaeeaaaaaaaaaaaaaaaaaaaaaaaeeeaa
aaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaeeeeaa
aaaaaaaaaaaaaaeeeaaaaaaaaaaaaaaaaaaaaaaeeeeea
aaaaaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa7dddddddd777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa7dddddddd777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa7dd777777777777777777aaaaaaaaaaaaaaaaaaaaa
aaa777777777777777777777aaaaaaaaaaaaaaaaaaaaa
aaa777777777777777777777aaaa777777777aaaaaaaa
aaaaa7777777777777777777aaaa7dddd7777aaaaaaaa
aaaaa77777777777777777a7aaa7dd7777777aaaaaaaa
aaaaaa7777777777777777a7aaa7d7777777777aaaaaa
aaaaaa777777777777777aa7aaa777777777777aaaaaa
aaaaaa77777777777777aaa7aaaa77777777777aaaaaa
aaaaaaa7777ee77777aaaaa77aaaa7777777777aaaaaa
aaaaaaaaaaaee77777777777aaaaa77777777aaaaaaaa
aaaaaaaaaaaeee777eaa77aaaaaaaa777e77777aaaaaa
aaaaaaaaaaaeee777eaa77aaaaaaaaaaae77ea7aaaaaa
aaaaaaaaaaaeeeaaaeaaaaaaaaaaaaaaaeaaeaaaaaaaa
aaaaaaeaaaeeeeaaaeeeeaaaaaaaaeaaeeaaeeeaaaaaa
aaaaaaeeeeeeeeaaaaaaeaaaaaaaaeeeeeaaaaeaaaaaa
aaaaaaeeeeeeeeaaaaaaeaaaaaaaaaaaeeaaaaaaaaaaa
aaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaa7777777777aaaaaaaaaaaaaaaaaaaaa7777777
aaaaaaa7dddd77777aaaaaaaaaaaaaaaaaaaaa7dddd77
aaaaaa7dd77777777aaaaaaaaaaaaaaaaaaaa77d77777
aaaaaa7d7777777777777aaaaaaaaaaaaaaaa77777777
aaaaaa777777777777777aaaaaaaaaaaaaaaaa7777777
            `, img`
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaa777777777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa7dddddddd777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa7dddddddd777777aaaaaaaaaaaaaaaaaaaaaaaaaaa
aaa7dd777777777777777777aaaaaaaaaaaaaaaaaaaaa
aaa777777777777777777777aaaaaaaaaaaaaaaaaaaaa
aaa777777777777777777777aaaa777777777aaaaaaaa
aaaaa7777777777777777777aaaa7dddd7777aaaaaaaa
aaaaa77777777777777777a7aaa7dd7777777aaaaaaaa
aaaaaa7777777777777777a7aaa7d7777777777aaaaaa
aaaaaa777777777777777aa7aaa777777777777aaaaaa
aaaaaa77777777777777aaa7aaaa77777777777aaaaaa
aaaaaaa7777ee77777aaaaa77aaaa7777777777aaaaaa
aaaaaaaaaaaee77777777777aaaaa77777777aaaaaaaa
aaaaaaaaaaaeee777eaa77aaaaaaaa777e77777aaaaaa
aaaaaaaaaaaeee777eaa77aaaaaaaaaaae77ea7aaaaaa
aaaaaaaaaaaeeeaaaeaaaaaaaaaaaaaaaeaaeaaaaaaaa
aaaaaaeaaaeeeeaaaeeeeaaaaaaaaeaaeeaaeeeaaaaaa
aaaaaaeeeeeeeeaaaaaaeaaaaaaaaeeeeeaaaaeaaaaaa
aaaaaaeeeeeeeeaaaaaaeaaaaaaaaaaaeeaaaaaaaaaaa
aaaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeaaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaeeeeeaaaaaaaaaa
aaaaaaaaaeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaa7777777777aaaaaaaaaaaaaaaaaaaaa7777777
aaaaaaa7dddd77777aaaaaaaaaaaaaaaaaaaaa7dddd77
aaaaaa7dd77777777aaaaaaaaaaaaaaaaaaaa77d77777
aaaaaa7d7777777777777aaaaaaaaaaaaaaaa77777777
aaaaaa777777777777777aaaaaaaaaaaaaaaaa7777777
aaaaaaa77777777777777aaaaaaaaaaaaaaaaa7777777
aaaaaaa77777777777777aaaaaaaaaaaaaaaaaa777777
aaaaaaaa77777777777a7aaaaaaaaaaaaaaaaaa777e77
aaaaaaaa77777777777a7aaaaaaaaaaaaaaaaaaaaae77
aaaaaaaaa777e7777aaa77aaaaaaaaaaaaaaaaaaaaeaa
aaaaaaaaaaaae77777777aaaaaaaaaaaaaaaaaaaaeeaa
aaaaaaaaaaaaee77ea77aaaaaaaaaaaaaaaaaaaaaeeaa
aaaaaaaaaaaaeeaaeaaaaaaaaaaaaaaaaaaaaaaaeeeaa
aaaaaaaaeaaeeeaaeeeaaaaaaaaaaaaaaaaaaaaaeeeaa
            `],
            125,
            true
        )
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001192c002e0001193400360001193c003e00011944004600011b4c004e00011b54005600011b5c005e00011b6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        Narrate("The home of <dark purple> Oil </dark purple>and<cyan> Water</cyan>.", fancyText.TextSpeed.Normal)
        animation.runImageAnimation(
            Prologue,
            [img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccccffffffffffffffffffffffffffffffffff
b1bbb1bbcccfbbbffffffffffffffffffff5cffffffff
bb1bbb1bbccbb2bffff91fffffffffffff6bbfffc5fff
bbb1bbb1bccff2ffff9991fffffffffff616fffccc5ff
bbbb1bbbbccff2fff999991fffffffff61166fccccc5f
1bbbb1bbbccff2ff9f19f191fffffff66166fcf1cf1c5
b1bbbb1bbccff16f9f19f199f16ffff5c66ffcf1cf1cc
bb1bbbbbcccff99f99999999f99ffffbb6fffcccccccc
bbb1bbbcccffffff99999999fffffffffffffcccccccc
bbbbbbcccfffffff699ff999ffffffffffffffccffccc
bbbbbcccffffffff66999999fffffffffffffffcccccc
cccccccffffffffff669999fffffffffffffffffccccf
cccccccfffffffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccccffbbbfffffffffffffffffffffffffffff
b1bbb1bbcccfbb2bfffffffffffffffffff5cffffffff
bb1bbb1bbccfff2ffff91fffffffffffff6bbfffc5fff
bbb1bbb1bccfff2fff9991fffffffffff616fffccc5ff
bbbb1bbbbccfff2ff999991fffffffff61166fccccc5f
1bbbb1bbbccfff169f19f191fffffff66166fcf1cf1c5
b1bbbb1bbccfff999f19f199f16ffff5c66ffcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffbb6fffcccccccc
bbb1bbbcccffffff99999999fffffffffffffcccccccc
bbbbbbcccfffffff699ff999ffffffffffffffccffccc
bbbbbcccffffffff66999999fffffffffffffffcccccc
cccccccffffffffff669999fffffffffffffffffccccf
cccccccfffffffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffbbbfffffffffffffffffffffffffffff
bbb1bbccffffbb2bfffffffffffffffffffffffffffff
1bbb1bbccccfff2ffffffffffffffffffffffffffffff
b1bbb1bbcccfff2ffffffffffffffffffff5cffffffff
bb1bbb1bbccfff2ffff91fffffffffffff6bbfffc5fff
bbb1bbb1bccfff16ff9991fffffffffff616fffccc5ff
bbbb1bbbbccfff99f999991fffffffff61166fccccc5f
1bbbb1bbbccfffff9f19f191fffffff66166fcf1cf1c5
b1bbbb1bbccfffff9f19f199f16ffff5c66ffcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffbb6fffcccccccc
bbb1bbbcccffffff99999999fffffffffffffcccccccc
bbbbbbcccfffffff699ff999ffffffffffffffccffccc
bbbbbcccffffffff66999999fffffffffffffffcccccc
cccccccffffffffff669999fffffffffffffffffccccf
cccccccfffffffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccfffffffffbbbffffffffffffffffffffffffffff
bbbbbccffffffbb2bffffffffffffffffffffffffffff
bbb1bbccfffffff2fffffffffffffffffffffffffffff
1bbb1bbccccffff2fffffffffffffffffffffffffffff
b1bbb1bbcccffff2fffffffffffffffffff5cffffffff
bb1bbb1bbccffff16ff91fffffffffffff6bbfffc5fff
bbb1bbb1bccffff99f9991fffffffffff616fffccc5ff
bbbb1bbbbccffffff999991fffffffff61166fccccc5f
1bbbb1bbbccfffff9f19f191fffffff66166fcf1cf1c5
b1bbbb1bbccfffff9f19f199f16ffff5c66ffcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffbb6fffcccccccc
bbb1bbbcccffffff99999999fffffffffffffcccccccc
bbbbbbcccfffffff699ff999ffffffffffffffccffccc
bbbbbcccffffffff66999999fffffffffffffffcccccc
cccccccffffffffff669999fffffffffffffffffccccf
cccccccfffffffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffbbbfffffffffffffffffffffffffffff
bbb1bbccffffbb2bfffffffffffffffffffffffffffff
1bbb1bbccccfff2ffffffffffffffffffffffffffffff
b1bbb1bbcccfff2ffffffffffffffffffff5cffffffff
bb1bbb1bbccfff2ffff91fffffffffffff6bbfffc5fff
bbb1bbb1bccfff16ff9991fffffffffff616fffccc5ff
bbbb1bbbbccfff99f999991fffffffff61166fccccc5f
1bbbb1bbbccfffff9f19f191fffffff66166fcf1cf1c5
b1bbbb1bbccfffff9f19f199f16ffff5c66ffcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffbb6fffcccccccc
bbb1bbbcccffffff99999999fffffffffffffcccccccc
bbbbbbcccfffffff699ff999ffffffffffffffccffccc
bbbbbcccffffffff66999999fffffffffffffffcccccc
cccccccffffffffff669999fffffffffffffffffccccf
cccccccfffffffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccccbb2bffffffffffffffffffffffffffffff
b1bbb1bbcccff2fffffffffffffffffffff5cffffffff
bb1bbb1bbccff2fffff91fffffffffffff6bbfffc5fff
bbb1bbb1bccff2ffff9991fffffffffff616fffccc5ff
bbbb1bbbbccff16ff999991fffffffff61166fccccc5f
1bbbb1bbbccff99f9f19f191fffffff66166fcf1cf1c5
b1bbbb1bbccfffff9f19f199f16ffff5c66ffcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffbb6fffcccccccc
bbb1bbbcccffffff99999999fffffffffffffcccccccc
bbbbbbcccfffffff699ff999ffffffffffffffccffccc
bbbbbcccffffffff66999999fffffffffffffffcccccc
cccccccffffffffff669999fffffffffffffffffccccf
cccccccfffffffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffff5cffffffff
bb1bbb1bbccff2fffff91fffffffffffff6bbfffc5fff
bbb1bbb1bcccf2ffff9991fffffffffff616fffccc5ff
bbbb1bbbbccff16ff999991fffffffff61166fccccc5f
1bbbb1bbbccff99f9f19f191fffffff66166fcf1cf1c5
b1bbbb1bbccfffff9f19f199f16ffff5c66ffcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffbb6fffcccccccc
bbb1bbbcccffffff99999999fffffffffffffcccccccc
bbbbbbcccfffffff699ff999ffffffffffffffccffccc
bbbbbcccffffffff66999999fffffffffffffffcccccc
cccccccffffffffff669999fffffffffffffffffccccf
cccccccfffffffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffff5cffffffff
bb1bbb1bbccff2fffff91fffffffffffff6bbfffc5fff
bbb1bbb1bccff2ffff9991fffffffffff616fffccc5ff
bbbb1bbbbccff16ff999991fffffffff61166fccccc5f
1bbbb1bbbccff99f9f19f191fffffff66166fcf1cf1c5
b1bbbb1bbcccffff9f19f199f16ffff5c66ffcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffbb6fffcccccccc
bbb1bbbcccffffff99999999fffffffffffffcccccccc
bbbbbbcccfffffff699ff999ffffffffffffffccffccc
bbbbbcccffffffff66999999fffffffffffffffcccccc
cccccccffffffffff669999fffffffffffffffffccccf
cccccccfffffffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffffffffffffff
bb1bbb1bbccff2fffff91fffffffffffffffffffc5fff
bbb1bbb1bccff2ffff9991fffffffffffff5cffccc5ff
bbbb1bbbbccff16ff999991fffffffffff6bbfccccc5f
1bbbb1bbbccff99f91f91f91fffffffff616fcf1cf1c5
b1bbbb1bbccfffff91f91f99f16fffff61166cf1cf1cc
bb1bbbbbcccfffff99999999f99ffff66166fcccccccc
bbb1bbbcccffffff99999999fffffff5c66ffcccccccc
bbbbbbcccfcfffff699ff999fffffffbb6ffffccffccc
bbbbbcccfffcffff66999999fffffffffffffffcccccc
cccccccffffffffff669999fffffffffffffffffccccf
cccccccfffffffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffffffffffffff
bb1bbb1bbccff2fffff91fffffffffffffffffffc5fff
bbb1bbb1bccff2ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccff16ff999991fffffffffffffffccccc5f
1bbbb1bbbccff99f91f91f91fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff91f91f99f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccfcfffff699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcccccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccffffcffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffffffffffffff
bb1bbb1bbccff2fffff91fffffffffffffffffffc5fff
bbb1bbb1bccff2ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccff16ff999991fffffffffffffffcccff5f
1bbbb1bbbccff99f91f91f91fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff91f91f99f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccfffffff699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcccccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffffffffffffff
bb1bbb1bbccff2fffff91fffffffffffffffffffc5fff
bbb1bbb1bccff2ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccff16ff999991fffffffffffffffcccff5f
1bbbb1bbbccff99f91f91f91fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff91f91f99f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccfffffff699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcffccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffffffffffffff
bb1bbb1bbccff2fffff91fffffffffffffffffffc5fff
bbb1bbb1bccff2ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccff16ff999991fffffffffffffffcccff5f
1bbbb1bbbccff99f91f91f91fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff91f91f99f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccfffffff699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcccccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffffffffffffff
bb1bbb1bbccff2fffff91fffffffffffffffffffc5fff
bbb1bbb1bccff2ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccff16ff999991fffffffffffffffcccff5f
1bbbb1bbbccff99f91f91f91fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff91f91f99f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccfffffff699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcffccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffffffffffffff
bb1bbb1bbccff2fffff91fffffffffffffffffffc5fff
bbb1bbb1bccff2ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccff16ff999991fffffffffffffffcccff5f
1bbbb1bbbccff99f91f91f91fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff91f91f99f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccfffffff699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcffccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffffffffffffff
bb1bbb1bbccff2fffff91fffffffffffffffffffc5fff
bbb1bbb1bccff2ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccff16ff999991fffffffffffffffcccff5f
1bbbb1bbbccff99f91f91f91fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff91f91f99f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccfffffff699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcffccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffffffffffffff
bb1bbb1bbccff2fffff91fffffffffffffffffffc5fff
bbb1bbb1bccff2ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccff16ff999991fffffffffffffffcccff5f
1bbbb1bbbccff99f91f91f91fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff91f91f99f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccfffffff699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcccccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccffffbbbffffffffffffffffffffffffffffff
1bbb1bbccffbb2bffffffffffffffffffffffffffffff
b1bbb1bbccfff2fffffffffffffffffffffffffffffff
bb1bbb1bbccff2fffff91fffffffffffffffffffc5fff
bbb1bbb1bccff2ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccff16ff999991fffffffffffffffcccff5f
1bbbb1bbbccff99f9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccfffffff699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcccccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbccffbbbffffffffffffffffffffffffffffff
bb1bbb1bbccbb2bffff91fffffffffffffffffffc5fff
bbb1bbb1bccff2ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccff2fff999991fffffffffffffffcccff5f
1bbbb1bbbccff2ff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccff16f9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccff99f99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccfffffff699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcccccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbccfffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfbbbfff9991fffffffffffffffffccc5ff
bbbb1bbbbccbb2bff999991fffffffffffffffcccff5f
1bbbb1bbbccff2ff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccff2ff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccff2ff99999999f99ffffff616fcccccccc
bbb1bbbcccfff16f99999999ffffffff61166cccccccc
bbbbbbcccffff99f699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcccccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbccfffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bbbfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbb2bfffff999991fffffffffffffffcccff5f
1bbbb1bbbbb2ffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbbcf2fff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccff2ff99999999f99ffffff616fcccccccc
bbb1bbbcccfff16f99999999ffffffff61166cccccccc
bbbbbbcccffff99f699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcccccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbccfffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccbbfff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccb222299999999f99ffffff616fcccccccc
bbb1bbbcccfbb16f99999999ffffffff61166cccccccc
bbbbbbcccfffb99f699ff999fffffff66166ffccffccc
bbbbbcccffffffff66999999fffffff5c66ffffcccccc
cccccccfffcffffff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbccfffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccfbbfff99999999ffffffff61166cccccccc
bbbbbbcccffb2222699ff999fffffff66166ffccffccc
bbbbbcccfffbb16f66999999fffffff5c66ffffcccccc
cccccccfffcfb99ff669999ffffffffbb6ffffffccccf
cccccccfffccffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbccfffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffb222266999999fffffff5c66ffffcccccc
cccccccfffcbb16ff669999ffffffffbb6ffffffccccf
cccccccfffccb99fff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbccfffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfff1622266999999fffffff5c66ffffcccccc
cccccccfffc99ffff669999ffffffffbb6ffffffccccf
cccccccfffccbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbccfffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccff16f9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccff99f9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccffcff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccfffcbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbccfffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccf16fff999991fffffffffffffffccccc5f
1bbbb1bbbccf99ff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfcfff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccfffcbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbccfffffffffffffffffffffffffffffffffff
bb1bbb1bbcc16ffffff91fffffffffffffffffffc5fff
bbb1bbb1bcc99fffff9991fffffffffffffffffccc5ff
bbbb1bbbbcccfffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccfffcbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccff16fffffffffffffffffffffffffffffffff
1bbb1bbccf99fffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccfffcbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccf16fffff91fffffffffffffffffffc5fff
bbb1bbb1bccf99ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccfffcbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccf16ff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccf99ff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcccfffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccfffcbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbcc16ffff99999999f99ffffff616fcccccccc
bbb1bbbccc99ffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccfffcbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccffffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbccc16bbfff699ff999fffffff66166ffccffccc
bbbbbcccf99bb22266999999fffffff5c66ffffcccccc
cccccccfffcbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bbcfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbbcffffff999991fffffffffffffffccccc5f
1bbbb1bbbbcfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccf16ff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccff99ff99999999f99ffffff616fcccccccc
bbb1bbbcccfffcff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccffffbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccffffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccf16ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccf99fff999991fffffffffffffffccccc5f
1bbbb1bbbccffcff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccffffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccffffbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccfff16fffffffffffffffffffffffffffffff
b1bbb1bbcccf99fffffffffffffffffffffffffffffff
bb1bbb1bbccffcfffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccffffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccffffbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfff16ffffffffffffffffffffffffffffffff
1bbb1bbccff99ffffffffffffffffffffffffffffffff
b1bbb1bbcccfcffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccffffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccffffbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccff16ffffffffffffffffffffffffffffffffff
bbb1bbccf99ffffffffffffffffffffffffffffffffff
1bbb1bbccfcffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccffffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccffffbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfff16ffffffffffffffffffffffffffffffff
1bbb1bbccfc99ffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccffffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccffffbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccfcf16fffffffffffffffffffffffffffffff
b1bbb1bbcccf99fffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccffffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccffffbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccfcffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccf16ffff9991fffffffffffffffffccc5ff
bbbb1bbbbccf99fff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccffffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccffffbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccfcffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccff16ff99999999f99ffffff616fcccccccc
bbb1bbbcccff99ff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccfffbb22266999999fffffff5c66ffffcccccc
cccccccffffbbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccfcffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccffffff99999999f99ffffff616fcccccccc
bbb1bbbcccffffff99999999ffffffff61166cccccccc
bbbbbbcccffbbfff699ff999fffffff66166ffccffccc
bbbbbcccf16bb22266999999fffffff5c66ffffcccccc
cccccccff99bbffff669999ffffffffbb6ffffffccccf
cccccccfffcfbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccfcffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991fffffffffffffffccccc5f
1bbbb1bbbccfffff9f19f191fffffffffff5ccf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffffff6bbcf1cf1cc
bb1bbbbbccffffff99999999f99ffffff616fcccccccc
bbb1bbbcccf16fff99999999ffffffff61166cccccccc
bbbbbbcccff99fff699ff999fffffff66166ffccffccc
bbbbbcccfffbc22266999999fffffff5c66ffffcccccc
cccccccffffbbffff669999ffffffffbb6ffffffccccf
cccccccfffffbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccfcffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991ffffffffffff5cfccccc5f
1bbbb1bbbccfffff9f19f191ffffffffff6bbcf1cf1c5
b1bbbb1bbcc16fff9f19f199f16ffffff616fcf1cf1cc
bb1bbbbbccf99fff99999999f99fffff61166cccccccc
bbb1bbbcccffcfff99999999fffffff66166fcccccccc
bbbbbbcccffbbfff699ff999fffffff5c66fffccffccc
bbbbbcccfffbb22266999999fffffffbb6fffffcccccc
cccccccffffbbffff669999fffffffffffffffffccccf
cccccccfffffbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccfcffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffffffffccc5ff
bbbb1bbbbcc16ffff999991ffffffffffff5cfccccc5f
1bbbb1bbbcc99fff9f19f191ffffffffff6bbcf1cf1c5
b1bbbb1bbccfcfff9f19f199f16ffffff616fcf1cf1cc
bb1bbbbbccffffff99999999f99fffff61166cccccccc
bbb1bbbcccffffff99999999fffffff66166fcccccccc
bbbbbbcccffbbfff699ff999fffffff5c66fffccffccc
bbbbbcccfffbb22266999999fffffffbb6fffffcccccc
cccccccffffbbffff669999fffffffffffffffffccccf
cccccccfffffbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccfcffffffffffffffffffffffffffffffffff
b1bbb1bbccc16ffffffffffffffffffffffffffffffff
bb1bbb1bbcc99ffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfcfffff9991fffffffffffffffffccc5ff
bbbb1bbbbccffffff999991ffffffffffff5cfccccc5f
1bbbb1bbbccfffff9f19f191ffffffffff6bbcf1cf1c5
b1bbbb1bbccfffff9f19f199f16ffffff616fcf1cf1cc
bb1bbbbbccffffff99999999f99fffff61166cccccccc
bbb1bbbcccffffff99999999fffffff66166fcccccccc
bbbbbbcccffbbfff699ff999fffffff5c66fffccffccc
bbbbbcccfffbb22266999999fffffffbb6fffffcccccc
cccccccffffbbffff669999fffffffffffffffffccccf
cccccccfffffbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccf16fffffffffffffffffffffffffffffffffff
bbb1bbcc99fffffffffffffffffffffffffffffffffff
1bbb1bbccccffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffff5cffccc5ff
bbbb1bbbbccffffff999991fffffffffff6bbfccccc5f
1bbbb1bbbccfffff9f19f191fffffffff616fcf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffff61166cf1cf1cc
bb1bbbbbccffffff99999999f99ffff66166fcccccccc
bbb1bbbcccffffff99999999fffffff5c66ffcccccccc
bbbbbbcccffbbfff699ff999fffffffbb6ffffccffccc
bbbbbcccfffbb22266999999fffffffffffffffcccccc
cccccccffffbbffff669999fffffffffffffffffccccf
cccccccfffffbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccfff16fffffffffffffffffffffffffffffffff
bbb1bbccff99fffffffffffffffffffffffffffffffff
1bbb1bbccccffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffff5cffccc5ff
bbbb1bbbbccffffff999991fffffffffff6bbfccccc5f
1bbbb1bbbccfffff9f19f191fffffffff616fcf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffff61166cf1cf1cc
bb1bbbbbccffffff99999999f99ffff66166fcccccccc
bbb1bbbcccffffff99999999fffffff5c66ffcccccccc
bbbbbbcccffbbfff699ff999fffffffbb6ffffccffccc
bbbbbcccfffbb22266999999fffffffffffffffcccccc
cccccccffffbbffff669999fffffffffffffffffccccf
cccccccfffffbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccccffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccf16fffff91fffffffffffffffffffc5fff
bbb1bbb1bccf99ffff9991fffffffffffff5cffccc5ff
bbbb1bbbbccffffff999991fffffffffff6bbfccccc5f
1bbbb1bbbccfffff9f19f191fffffffff616fcf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffff61166cf1cf1cc
bb1bbbbbccffffff99999999f99ffff66166fcccccccc
bbb1bbbcccffffff99999999fffffff5c66ffcccccccc
bbbbbbcccffbbfff699ff999fffffffbb6ffffccffccc
bbbbbcccfffbb22266999999fffffffffffffffcccccc
cccccccffffbbffff669999fffffffffffffffffccccf
cccccccfffffbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccccffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffff5cffccc5ff
bbbb1bbbbccffffff999991fffffffffff6bbfccccc5f
1bbbb1bbbccfff169f19f191fffffffff616fcf1cf1c5
b1bbbb1bbccfff999f19f199f16fffff61166cf1cf1cc
bb1bbbbbccffffff99999999f99ffff66166fcccccccc
bbb1bbbcccffffff99999999fffffff5c66ffcccccccc
bbbbbbcccffbbfff699ff999fffffffbb6ffffccffccc
bbbbbcccfffbb22266999999fffffffffffffffcccccc
cccccccffffbbffff669999fffffffffffffffffccccf
cccccccfffffbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccccffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffff5cffccc5ff
bbbb1bbbbccffffff999991fffffffffff6bbfccccc5f
1bbbb1bbbccfffff9f19f191fffffffff616fcf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffff61166cf1cf1cc
bb1bbbbbccfff16f99999999f99ffff66166fcccccccc
bbb1bbbcccfff99f99999999fffffff5c66ffcccccccc
bbbbbbcccffbbfff699ff999fffffffbb6ffffccffccc
bbbbbcccfffbb22266999999fffffffffffffffcccccc
cccccccffffbbffff669999fffffffffffffffffccccf
cccccccfffffbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccccffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffff5cffccc5ff
bbbb1bbbbccffffff999991fffffffffff6bbfccccc5f
1bbbb1bbbccfffff9f19f191fffffffff616fcf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffff61166cf1cf1cc
bb1bbbbbccffffff99999999f99ffff66166fcccccccc
bbb1bbbcccffff1699999999fffffff5c66ffcccccccc
bbbbbbcccffbbf99699ff999fffffffbb6ffffccffccc
bbbbbcccfffbb22266999999fffffffffffffffcccccc
cccccccffffbbffff669999fffffffffffffffffccccf
cccccccfffffbfffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccccffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffff5cffccc5ff
bbbb1bbbbccffffff999991fffffffffff6bbfccccc5f
1bbbb1bbbccfffff9f19f191fffffffff616fcf1cf1c5
b1bbbb1bbcbbffff9f19f199f16fffff61166cf1cf1cc
bb1bbbbbcbb2bfff99999999f99ffff66166fcccccccc
bbb1bbbcbbbb2fff99999999fffffff5c66ffcccccccc
bbbbbbccfbbff2ff999ff999fffffffbb6ffffccffccc
bbbbbcccffffff2f66999999fffffffffffffffcccccc
cccccccfffffff16f669999fffffffffffffffffccccf
cccccccfffffff99ff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccccffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffff5cffccc5ff
bbbb1bbbbccffffff999991fffffffffff6bbfccccc5f
1bbbb1bbbccfffff9f19f191fffffffff616fcf1cf1c5
b1bbbb1bbccfffff9f19f199f16fffff61166cf1cf1cc
bb1bbbbbccfbbbff99999999f99ffff66166fcccccccc
bbb1bbbcccbbbbff99999999fffffff5c66ffcccccccc
bbbbbbcccfff2fff699ff999fffffffbb6ffffccffccc
bbbbbcccffff216f66999999fffffffffffffffcccccc
cccccccfffff299ff669999fffffffffffffffffccccf
cccccccfffffffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `, img`
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffff45555ffffffffffffffffffffff
fff1fffffffffffff455555ffffffffffffffffffffff
ffffffffffffffff4555555fffffffffffff1ffffffff
fffffffffffffff4555555fffffffffffffffffffffff
fffffffffffffff455555ffffffff1fffffffffffffff
ffffffffffffff455555fffffffffffffffffffffffff
ffffffffffffff45555fffffffffffffffff1ffffffff
fffffff1ffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555ffffffffffffffffffffffffff
ffffffffffffff55555fffffff1ffffffffffffffffff
fff1ffffffffff55555ffffffffffffffffffff1fffff
ffffffffffffff555555fffffffffffffffffffffffff
fffffffffffffff555555ffffffffffffffffffffffff
fffffffffffffff5555555fffffffffffffffffffffff
ffffffffffffffff5555555fffffffff1ffffffffffff
ffffffff1ffffffff555555ffffffffffffffffffffff
ffffffffffffffffff55555ffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ccfffffffffffffffffffffffffffffffffffffffffff
cccccffffffffffffffffffffffffffffffffffffffff
bbbbbccffffffffffffffffffffffffffffffffffffff
bbb1bbccfffffffffffffffffffffffffffffffffffff
1bbb1bbccccffffffffffffffffffffffffffffffffff
b1bbb1bbcccffffffffffffffffffffffffffffffffff
bb1bbb1bbccffffffff91fffffffffffffffffffc5fff
bbb1bbb1bccfffffff9991fffffffffffff5cffccc5ff
bbbb1bbbbccffffff999991fffffffffff6bbfccccc5f
1bbbb1bbbccfbbbf9f19f191fffffffff616fcf1cf1c5
b1bbbb1bbccbbbbf9f19f199f16fffff61166cf1cf1cc
bb1bbbbbccfff2ff99999999f99ffff66166fcccccccc
bbb1bbbcccfff21699999999fffffff5c66ffcccccccc
bbbbbbcccffff299699ff999fffffffbb6ffffccffccc
bbbbbcccffffffff66999999fffffffffffffffcccccc
cccccccffffffffff669999fffffffffffffffffccccf
cccccccfffffffffff6699ffffffaafffffffffffccff
ccccccffffaaaafffaaaaaaaaaaaaaaaffffffaaaaaff
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            `],
            60,
            true
        )
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001192c002e0001193400360001193c003e00011944004600011b4c004e00011b54005600011b5c005e00011b6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        Narrate("The two tribes were great allies and friends...", fancyText.TextSpeed.Normal)
        animation.runImageAnimation(
            Prologue,
            [img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ffcffc5888888888888888888
888191f91f988888885c1fc1fbb888888888888888888
618991f91f98618c58ccffcffc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ccccc8c588888888888888888
888191f91f988888885cffcffcbb88888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccffcffc8888888888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc88c588888888888888888
88881999998888888885ccccc8bb88888888888888888
888191f91f988888885cffcffc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccffcffc8888888888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885cccccc5888888888888888888
888191f91f988888885cffcffbb888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccffcffc8888888888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885cccccc5888888888888888888
888191f91f988888885cffcffbb888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccffcffc8888888888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885cffcffc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccffcffc5888888888888888888
88899f999998888884cccccccbb888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccccc5cc8888888888888888888
88899f999998888884ccccbbcc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cc5ccccc8888888888888888888
888999999998888884cbbccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
888999999998888884cccccccc8888888888888888888
888999ff99688888c5cccffccf8888888888888888888
7889999996688888bbccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
888999999998888884cccccccc8888888888888888888
888999ff9968888c54cccffccf8888888888888888888
788999999668888bb4ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
888999999998888884cccccccc8888888888888888888
888999ff99688888c5cccffccf8888888888888888888
7889999996688888bbccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
888999999998888884cccccccc8888888888888888888
888999ff9968888c54cccffccf8888888888888888888
788999999668888bb4ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
88899f99999888c584cccccccc8888888888888888888
888999ff996888bb54cccffccf8888888888888888888
788999999668888555ccccccff8888888887777778888
7778999966888888558ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
888999ff9998c58884cccccccc8888888888888888888
888999ff9968bb5844cccffccf8888888888888888888
788999999668855544ccccccff8888888887777778888
7778999966888855588ccccff88888877777777777777
77788996688888759888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f9c5888885c1fc1fc8888888888888888888
618991f91f9bb58c58cc1fc1fc8888888888888888888
998999999998555bb4cccccccc8888888888888888888
88899fff9998855584cccccccc8888888888888888888
888999ff9968885944cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888c5888888888888888888888888888888
8888888888888bb588888888888888888888888888888
8888881988888855588885c8888888888888888888888
88888ff9ff88888555885ccc888888888888888888888
88881999998888885985ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888c58888888888888888888888888
888888888888888888bb5888888888888888888888888
888888888888888888855588888888888888888888888
888888888888888888885558888888888888888888888
888888888888888888888598888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888c58888888888888888888
888888888888888888888888bb5888888888888888888
888888888888888888888888855588888888888888888
888888888888888888888888885558888888888888888
8888881988888888888885c8888598888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888c58888888888888888
88881999998888888885ccccc88bb5888888888888888
888191f91f988888885c1fc1fc8855588888888888888
618991f91f98618c58cc1fc1fc8885558888888888888
998999999998998bb4cccccccc8888598888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885cffcffc8888888888888888888
618991f91f98618c58cc1fc1fcc555598888888888888
998999999998998bb4ccffcffcbb55558888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885cffcffc8888888888888888888
618991f91f98618c58cc1fc1fcc555598888888888888
998999999998998bb4ccffcffcbb55558888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885cffcffc8888888888888888888
618991f91f98618c58cc1fc1fcc555598888888888888
998999999998998bb4ccffcffcbb55558888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
            `],
            80,
            false
        )
        timer.after([img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ffcffc5888888888888888888
888191f91f988888885c1fc1fbb888888888888888888
618991f91f98618c58ccffcffc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ccccc8c588888888888888888
888191f91f988888885cffcffcbb88888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccffcffc8888888888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc88c588888888888888888
88881999998888888885ccccc8bb88888888888888888
888191f91f988888885cffcffc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccffcffc8888888888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885cccccc5888888888888888888
888191f91f988888885cffcffbb888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccffcffc8888888888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885cccccc5888888888888888888
888191f91f988888885cffcffbb888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccffcffc8888888888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885cffcffc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccffcffc5888888888888888888
88899f999998888884cccccccbb888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4ccccc5cc8888888888888888888
88899f999998888884ccccbbcc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cc5ccccc8888888888888888888
888999999998888884cbbccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
888999999998888884cccccccc8888888888888888888
888999ff99688888c5cccffccf8888888888888888888
7889999996688888bbccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
888999999998888884cccccccc8888888888888888888
888999ff9968888c54cccffccf8888888888888888888
788999999668888bb4ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
888999999998888884cccccccc8888888888888888888
888999ff99688888c5cccffccf8888888888888888888
7889999996688888bbccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
888999999998888884cccccccc8888888888888888888
888999ff9968888c54cccffccf8888888888888888888
788999999668888bb4ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888199ff88888888885ccc888888888888888888888
88881ff9998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
88899f99999888c584cccccccc8888888888888888888
888999ff996888bb54cccffccf8888888888888888888
788999999668888555ccccccff8888888887777778888
7778999966888888558ccccff88888877777777777777
77788996688888777888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
888999ff9998c58884cccccccc8888888888888888888
888999ff9968bb5844cccffccf8888888888888888888
788999999668855544ccccccff8888888887777778888
7778999966888855588ccccff88888877777777777777
77788996688888759888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f9c5888885c1fc1fc8888888888888888888
618991f91f9bb58c58cc1fc1fc8888888888888888888
998999999998555bb4cccccccc8888888888888888888
88899fff9998855584cccccccc8888888888888888888
888999ff9968885944cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888c5888888888888888888888888888888
8888888888888bb588888888888888888888888888888
8888881988888855588885c8888888888888888888888
88888ff9ff88888555885ccc888888888888888888888
88881999998888885985ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888c58888888888888888888888888
888888888888888888bb5888888888888888888888888
888888888888888888855588888888888888888888888
888888888888888888885558888888888888888888888
888888888888888888888598888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888c58888888888888888888
888888888888888888888888bb5888888888888888888
888888888888888888888888855588888888888888888
888888888888888888888888885558888888888888888
8888881988888888888885c8888598888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885c1fc1fc8888888888888888888
618991f91f98618c58cc1fc1fc8888888888888888888
998999999998998bb4cccccccc8888888888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888c58888888888888888
88881999998888888885ccccc88bb5888888888888888
888191f91f988888885c1fc1fc8855588888888888888
618991f91f98618c58cc1fc1fc8885558888888888888
998999999998998bb4cccccccc8888598888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885cffcffc8888888888888888888
618991f91f98618c58cc1fc1fcc555598888888888888
998999999998998bb4ccffcffcbb55558888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
88888ff9ff88888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885cffcffc8888888888888888888
618991f91f98618c58cc1fc1fcc555598888888888888
998999999998998bb4ccffcffcbb55558888888888888
88899fff9998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885cffcffc8888888888888888888
618991f91f98618c58cc1fc1fcc555598888888888888
998999999998998bb4ccffcffcbb55558888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`].length * 80, function () {
            animation.runImageAnimation(
                Prologue,
                [img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f988888885cffcffc8888888888888888888
618991f91f98618c58cc1fc1fcc555598888888888888
998999999998998bb4ccffcffcbb55558888888888888
88899f999998888884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888881988888888888885c8888888888888888888888
888881999888888888885ccc888888888888888888888
88881999998888888885ccccc88888888888888888888
888191f91f98888c585cffcffcc555598888888888888
888991f91f98888bb8cc1fc1fcbb55558888888888888
618999999998618884ccffcffc8888888888888888888
99899f999998998884cccccccc8888888888888888888
888999ff9968888844cccffccf8888888888888888888
788999999668888844ccccccff8888888887777778888
7778999966888888888ccccff88888877777777777777
77788996688887778888ccff888877777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
777777777777777777777777777777777777777777777
`],
                400,
                true
            )
        })
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e0001222400260001192c002e0001193400360001193c003e00011d44004600011b4c004e00011b54005600011b5c005e00011e6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        Narrate("...Especially two in particular.", fancyText.TextSpeed.Normal)
        animation.runImageAnimation(
            Prologue,
            [img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888888888888888888888888888888888888e
8888888888888888888888888888888888888888888e1
888888888888888888888888888888888888888888e81
88888888888885c888888888888888198888888886881
8888888888885ccc88888888888881999888888868881
888888888885ccccc8888888888819999988888e88881
88888888885c1fc1fc888888888191f91f9888ef8888b
8888888c58cc1fc1fc8c5888888991f91f986e88f888b
8888888bb8cccccccc8bb88888899999999899861888b
8888888888ccccccccb88b8888899f99999888899888b
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888888888888888888888888888888888888e
8888888888888888888888888888888888888888888e1
888888888888888888888888888888888888888888e81
88888888888885c888888888888888198888888886881
8888888888885ccc88888888888881999888888868881
888888888885ccccc8888888888819999988888e88881
88888888885c1fc1fc888888888191f91f9888ef8888b
8888888c58cc1fc1fc8c5888888991f91f986e8f8888b
8888888bb8cccccccc8bb88888899999999899618888b
8888888888ccccccccb88b8888899f99999888998888b
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888888888888888888888888888888888888e
8888888888888888888888888888888888888888888e1
888888888888888888888888888888888888888888e81
88888888888885c888888888888888198888888886881
8888888888885ccc88888888888881999888888868881
888888888885ccccc8888888888819999988888e88881
88888888885c1fc1fc888888888191f91f9888ef8888b
8888888c58cc1fc1fc8c5888888991f91f986e618888b
8888888bb8cccccccc8bb88888899999999899998888b
8888888888ccccccccb88b8888899f99999888888888b
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888888888888888888888888888888888888e
8888888888888888888888888888888888888888888e1
888888888888888888888888888888888888888888e81
88888888888885c888888888888888198888888886881
8888888888885ccc88888888888881999888888868881
888888888885ccccc8888888888819999988888e88881
88888888885c1fc1fc888888888191f91f9888ef8888b
8888888c58cc1fc1fc8c5888888991f91f986e861888b
8888888bb8cccccccc8bb88888899999999899899888b
8888888888ccccccccb88b8888899f99999888888888b
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888888888888888888888888888888888888e
8888888888888888888888888888888888888888888e1
888888888888888888888888888888888888888888e81
88888888888885c888888888888888198888888886881
8888888888885ccc88888888888881999888888868881
888888888885ccccc8888888888819999988888e88881
88888888885c1fc1fc888888888191f91f9888ef8888b
8888888c58cc1fc1fc8c5888888991f91f986e88f888b
8888888bb8cccccccc8bb88888899999999899861888b
8888888888ccccccccb88b8888899f99999888899888b
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888888888e8
888888888888888888888888888888888888888888e8e
88888888888885c888888888888888198888888886881
8888888888885ccc88888888888881999888888868881
888888888885ccccc8888888888819999988888e8888b
88888888885c1fc1fc888888888191f91f9888ef8888b
8888888c58cc1fc1fc8c5888888991f91f986e88f888b
8888888bb8cccccccc8bb88888899999999899861888b
8888888888ccccccccb88b88888999999998888998881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888882288888888888888e88
88888888888885c8888888888822881988888888868e8
8888888888885ccc8888888888888199988888886888e
888888888885ccccc8888888888819999988888e88881
88888888885c1fc1fc888888888191f91f9888ef88881
8888888c58cc1fc1fc8c5888888991f91f986e88f888b
8888888bb8cccccccc8bb88888899999999899861888b
8888888888ccccccccb88b88888999ff9998888998881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888888888888888888888e88
8888888888888888888888888822888888888888868e8
88888888888885c88888888888228819888888886888e
8888888888885ccc88888888888881999888888e88881
888888888885ccccc888888888881999998888ef88881
88888888885c1fc1fc888888888191f91f986e88f888b
8888888c58cc1fc1fc8c5888888991f91f9899861888b
8888888bb8cccccccc8bb888888999999998888998881
8888888888ccccccccb88b88888999ff9998888888881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888888888888888888888e88
8888888888888888888888888822888888888888868e8
88888888888885c888888888882288198888888868818
8888888888885ccc88888888888881999888888e88818
888888888885ccccc888888888881999998888ef888b8
88888888885c1fc1fc888888888191f91f986e88f88b8
8888888c58cc1fc1fc8c5888888991f91f98998618818
8888888bb8cccccccc8bb888888999999998888998818
8888888888ccccccccb88b88888999ff9998888888818
8888888888cccffccfb47b88888999ff9968888888818
8888888888ccccccffbbbb88888999999668888888818
88888888888ccccff88bb888888899996688888888818
888888888888ccff88888888888889966bb8889988818
88888888dddddd88888888888888111bbbb9999989918
88ddddddddddddddd8ddd8888881bbbbbbb9999999948
dddddddddddddddddddddddddd8bbbbbbbb9999999998
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888888888888888888888e88
8888888888888888888888888822888888888888868e8
88888888888885c88888888888228819888888886888e
8888888888885ccc88888888888881999888888e88881
888888888885ccccc888888888881999998888ef88881
88888888885c1fc1fc888888888191f91f986e88f888b
8888888c58cc1fc1fc8c5888888991f91f9899861888b
8888888bb8cccccccc8bb888888999999998888998881
8888888888ccccccccb88b88888999ff9998888888881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888882288888888888888e88
88888888888885c8888888888822881988888888868e8
8888888888885ccc8888888888888199988888886888e
888888888885ccccc8888888888819999988888e88881
88888888885c1fc1fc888888888191f91f9888ef88881
8888888c58cc1fc1fc8c5888888991f91f986e88f888b
8888888bb8cccccccc8bb88888899999999899861888b
8888888888ccccccccb88b88888999ff9998888998881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888882288888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888882288888888888888e88
88888888888885c8888888888822881988888888868e8
8888888888885ccc8888888888888199988888886888e
888888888885ccccc8888888888819999988888e88881
88888888885c1fc1fc888888888191f91f9888ef88881
8888888c58cc1fc1fc8c5888888991f91f986e88f888b
8888888bb8cccccccc8bb88888899999999899861888b
8888888888ccccccccb88b88888999999998888998881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888882288888888888888e88
88888888888885c8888888888822881988888888868e8
8888888888885ccc8888888888888199988888886888e
888888888885ccccc888888888881f999988888e88881
88888888885c1fc1fc888888888191f91f9888ef88881
8888888c58cc1fc1fc8c5888888991f91f986e88f888b
8888888bb8cccccccc8bb88888899999999899861888b
8888888888ccccccccb88b88888999999998888998881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888e88
88888888888885c8888888888888881988888888868e8
8888888888885ccc8888888888888199988888886888e
888888888885ccccc888888888881f999988888e88881
88888888885c1fc1fc888888888191f91f9888ef88881
8888888c58cc1fc1fc8c5888888991f91f986e88f888b
8888888bb8cccccccc8bb88888899999999899861888b
8888888888ccccccccb88b88888999999998888998881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888e88
88888888888885c8888888888888881988888888868e8
8888888888885ccc8888888888888199988888886888e
888888888885ccccc888888888881f999988888e88881
88888888885c1fc1fc888888888191f91f9888ef88881
8888888c58cc1fc1fc8c5888888991f91f986e88f888b
8888888bb8cccccccc8bb88888899999999899861888b
8888888888ccccccccb88b88888999999998888998881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999ff9999999999999999999999999999999
99999999999fff9444499999999999999999999999999
9999999999fff94444449999999999999999999999999
999999999fff99999f444449999999999999999999999
999999999ff99999ff944444999999999999999999999
999999999ff99999ff999999999999999999999999999
999999999fff999fff999999999999999999999999999
9999999999fff99fff999999999999999999999999999
99999999999ffffff9999999999999999999999999999
999999999999ffff99999999999999999999999999999
999999999999999999999999999999999999992299999
999999999999999999999999999999999999992222222
9999999999999999999999999999999999992222222f2
9999999999999999999999999999999999992222222f2
999999999999999999999999999999999999922222222
999999999999999999999999999999999999922222227
`, img`
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999ff9999999999999999999999999999999
99999999999fff9444499999999999999999999999999
9999999999fff94444449999999999999999999999999
999999999fff99999f444449999999999999999999999
999999999ff99999ff944444999999999999999999999
999999999ff99999ff999999999999999999999999999
999999999fff999fff999999999999999999999999999
9999999999fff99fff999999999999999999999999999
99999999999ffffff9999999999999999999229999999
999999999999ffff99999999999999999999222222222
99999999999999999999999999999999992222222f222
99999999999999999999999999999999992222222f227
999999999999999999999999999999999992222222277
999999999999999999999999999999999992222222777
999999999999999999999999999999999992222227777
999999999999999999999999999999999992222277777
`, img`
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999ff9999999999999999999999999999999
99999999999fff9444499999999999999999999999999
9999999999fff94444449999999999999999999999999
999999999fff99999f444449999999999999999999999
999999999ff99999ff944444999999999999999999999
999999999ff99999ff999999999999992299999999999
999999999fff999fff999999999999992222222222222
9999999999fff99fff9999999999992222222f2222222
99999999999ffffff99999999999992222222f2277777
999999999999ffff99999999999999922222222777777
999999999999999999999999999999922222227777777
999999999999999999999999999999922222277777777
999999999999999999999999999999922222777777777
999999999999999999999999999999922227777777777
999999999999999999999999999999922227777777777
999999999999999999999999999999922227777777777
`, img`
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999ff9999999999999999999999999999999
99999999999fff9444499999999999999999999999999
9999999999fff94444449999999229999999999999999
999999999fff99999f444449999222222222222222299
999999999ff99999ff94444492222222f222222299222
999999999ff99999ff99999992222222f227777777992
999999999fff999fff999999999222222277777777799
9999999999fff99fff999999999222222777777777777
99999999999ffffff9999999999222227777777777777
999999999999ffff99999999999222277777777777777
999999999999999999999999999222777777777777777
999999999999999999999999999222777777777777777
999999999999999999999999999222777777777777777
999999999999999999999999999222777777777777777
999999999999999999999999999222777777777777777
999999999999999999999999999222277777777777777
`, img`
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999922999999999999999999999
999999999999ff9999999922222222222222229992222
99999999999fff9444492222222f22222222222292992
9999999999fff94444442222222f22777777729229999
999999999fff99999f449922222227777777772299999
999999999ff99999ff949922222277777777777729999
999999999ff99999ff999922222777777777777772999
999999999fff999fff999922227777777777777777222
9999999999fff99fff999922277777777777777777722
99999999999ffffff9999922277777777777777777772
999999999999ffff99999922277777777777777777777
999999999999999999999922277777777777777777777
999999999999999999999922277777777777777777777
999999999999999999999922227777777777777777777
999999999999999999999922927777777777777777777
999999999999999999999992992777777777777777777
999999999999999999999992999277777777777777777
`, img`
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999922999999999999999999999
999999999999ff9999999922222222222222229992222
99999999999fff9444492222222f22222222222292992
9999999999fff94444442222222f22777777729229999
999999999fff99999f449922222227777777772299999
999999999ff99999ff949922222277777777777729999
999999999ff99999ff999922222777777777777772999
999999999fff999fff999922227777777777777777222
9999999999fff99fff999922277777777777777777722
99999999999ffffff9999922277777777777777777772
999999999999ffff99999922277777777777777777777
999999999999999999999922277777777777777777777
999999999999999999999922277777777777777777777
999999999999999999999922227777777777777777777
999999999999999999999922927777777777777777777
999999999999999999999992992777777777777777777
999999999999999999999992999277777777777777777
`, img`
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999922999999999999999999999
999999999999ff9999999922222222222222229992222
99999999999fff9444492222222f22222222222292992
9999999999fff94444442222222f22777777729229999
999999999fff99999f449922222227777777772299999
999999999ff99999ff949922222277777777777729999
999999999ff99999ff999922222777777777777772999
999999999fff999fff999922227777777777777777222
9999999999fff99fff999922277777777777777777722
99999999999ffffff9999922277777777777777777772
999999999999ffff99999922277777777777777777777
999999999999999999999922277777777777777777777
999999999999999999999922277777777777777777777
999999999999999999999922227777777777777777777
999999999999999999999922927777777777777777777
999999999999999999999992992777777777777777777
999999999999999999999992999277777777777777777
`, img`
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999922999999999999999999999
999999999999ff9999999922222222222222229992222
99999999999fff9444492222222f22222222222292992
9999999999fff94444442222222f22777777729229999
999999999fff99999f449922222227777777772299999
999999999ff99999ff949922222277777777777729999
999999999ff99999ff999922222777777777777772999
999999999fff999fff999922227777777777777777222
9999999999fff99fff999922277777777777777777722
99999999999ffffff9999922277777777777777777772
999999999999ffff99999922277777777777777777777
999999999999999999999922277777777777777777777
999999999999999999999922277777777777777777777
999999999999999999999922227777777777777777777
999999999999999999999922927777777777777777777
999999999999999999999992992777777777777777777
999999999999999999999992999277777777777777777
`, img`
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999999999999999999999999999
999999999999119999999922999999999999999999999
999999999999ff9999999922222222222222229992222
99999999999fff9444492222222f22222222222292992
9999999999fff94444442222222f22777777729229999
999999999fff99999f449922222227777777772299999
999999999ff99999ff949922222277777777777729999
999999999ff99999ff999922222777777777777772999
999999999fff999fff999922227777777777777777222
9999999999fff99fff999922277777777777777777722
99999999999ffffff9999922277777777777777777772
999999999999ffff99999922277777777777777777777
999999999999999999999922277777777777777777777
999999999999999999999922277777777777777777777
999999999999999999999922227777777777777777777
999999999999999999999922927777777777777777777
999999999999999999999992992777777777777777777
999999999999999999999992999277777777777777777
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbb1bb88888888888888888888888888888888
888eeeebbff1b88888888888888888888888888888888
88eeeeebbfffb88888888888888888888888888888888
8eeeeeebbbfff88888888888888888888888888888888
eeeeeee8bbbffff888888888888888888888888888888
eeeeee888888ffff88888888888888888888888888888
eeeee8888888ffff88888888888888888888888888888
eeee888888888ff888888888888888888888888888888
eee888888899998888888888888888888888888888888
ee8888888999199888888888888888888888888888888
e88888886999919988888888888888888888888888888
888888886999991988888888888888888888888888888
888888886699999988888888888888888888888888888
888888886669999988888888888888888888888888888
888888888666999888888888888888888888888888888
888888888866668888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbb1bb88888888888888888888888888888888
888eeeebbff1b88888888888888888888888888888888
88eeeeebbffbb88888888888888888888888888888888
8eeeeeebbffbb88888888888888888888888888888888
eeeeeee8ffff888888888888888888888888888888888
eeeeee88ffff888888888888888888888888888888888
eeeee888ffff888888888888888888888888888888888
eeee88888ff8888888888888888888888888888888888
eee888999988888888888888888888888888888888888
ee8889991998888888888888888888888888888888888
e88869999199888888888888888888888888888888888
888869999919888888888888888888888888888888888
888866999999888888888888888888888888888888888
888866699999888888888888888888888888888888888
888886669998888888888888888888888888888888888
888888666688888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbffbb88888888888888888888888888888888
888eeeebffffb88888888888888888888888888888888
88eeeeebffffb88888888888888888888888888888888
8eeeeeebbffbb88888888888888888888888888888888
eeeeee9999bb888888888888888888888888888888888
eeeee9991998888888888888888888888888888888888
eeee69999199888888888888888888888888888888888
eeee69999919888888888888888888888888888888888
eee866999999888888888888888888888888888888888
ee8866699999888888888888888888888888888888888
e88886669998888888888888888888888888888888888
888888666688888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbb1bbff888888888888888888888888888888
888eeeebbfffffff88888888888888888888888888888
88eeeeebbfffffff88888888888888888888888888888
8eeeeeebbbbbbff888888888888888888888888888888
eeeeeee8bb99998888888888888888888888888888888
eeeeee888999199888888888888888888888888888888
eeeee8886999919988888888888888888888888888888
eeee88886999991988888888888888888888888888888
eee888886699999988888888888888888888888888888
ee8888886669999988888888888888888888888888888
e88888888666999888888888888888888888888888888
888888888866668888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbb1bb88888888888888888888888888888888
888eeeebbff1b88888888888888888888888888888888
88eeeeebbfffb88888888888888888888888888888888
8eeeeeebbbfff88888888888888888888888888888888
eeeeeee8bbbffff888888888888888888888888888888
eeeeee888888ffff88888888888888888888888888888
eeeee8888888ffff88888888888888888888888888888
eeee888888888ff888888888888888888888888888888
eee888888899998888888888888888888888888888888
ee8888888999199888888888888888888888888888888
e88888886999919988888888888888888888888888888
888888886999991988888888888888888888888888888
888888886699999988888888888888888888888888888
888888886669999988888888888888888888888888888
888888888666999888888888888888888888888888888
888888888866668888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbb1bb88888888888888888888888888888888
888eeeebbff1b88888888888888888888888888888888
88eeeeebbffbb88888888888888888888888888888888
8eeeeeebbffbb88888888888888888888888888888888
eeeeeee8ffff888888888888888888888888888888888
eeeeee88ffff888888888888888888888888888888888
eeeee888ffff888888888888888888888888888888888
eeee88888ff8888888888888888888888888888888888
eee888999988888888888888888888888888888888888
ee8889991998888888888888888888888888888888888
e88869999199888888888888888888888888888888888
888869999919888888888888888888888888888888888
888866999999888888888888888888888888888888888
888866699999888888888888888888888888888888888
888886669998888888888888888888888888888888888
888888666688888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbffbb88888888888888888888888888888888
888eeeebffffb88888888888888888888888888888888
88eeeeebffffb88888888888888888888888888888888
8eeeeeebbffbb88888888888888888888888888888888
eeeeee9999bb888888888888888888888888888888888
eeeee9991998888888888888888888888888888888888
eeee69999199888888888888888888888888888888888
eeee69999919888888888888888888888888888888888
eee866999999888888888888888888888888888888888
ee8866699999888888888888888888888888888888888
e88886669998888888888888888888888888888888888
888888666688888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbb1bbff888888888888888888888888888888
888eeeebbfffffff88888888888888888888888888888
88eeeeebbfffffff88888888888888888888888888888
8eeeeeebbbbbbff888888888888888888888888888888
eeeeeee8bb99998888888888888888888888888888888
eeeeee888999199888888888888888888888888888888
eeeee8886999919988888888888888888888888888888
eeee88886999991988888888888888888888888888888
eee888886699999988888888888888888888888888888
ee8888886669999988888888888888888888888888888
e88888888666999888888888888888888888888888888
888888888866668888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbb1bb88888888888888888888888888888888
888eeeebbff1b88888888888888888888888888888888
88eeeeebbfffb88888888888888888888888888888888
8eeeeeebbbfff88888888888888888888888888888888
eeeeeee8bbbffff888888888888888888888888888888
eeeeee888888ffff88888888888888888888888888888
eeeee8888888ffff88888888888888888888888888888
eeee888888888ff888888888888888888888888888888
eee888888899998888888888888888888888888888888
ee8888888999199888888888888888888888888888888
e88888886999919988888888888888888888888888888
888888886999991988888888888888888888888888888
888888886699999988888888888888888888888888888
888888886669999988888888888888888888888888888
888888888666999888888888888888888888888888888
888888888866668888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbb1bb88888888888888888888888888888888
888eeeebbff1b88888888888888888888888888888888
88eeeeebbffbb88888888888888888888888888888888
8eeeeeebbffbb88888888888888888888888888888888
eeeeeee8ffff888888888888888888888888888888888
eeeeee88ffff888888888888888888888888888888888
eeeee888ffff888888888888888888888888888888888
eeee88888ff8888888888888888888888888888888888
eee888999988888888888888888888888888888888888
ee8889991998888888888888888888888888888888888
e88869999199888888888888888888888888888888888
888869999919888888888888888888888888888888888
888866999999888888888888888888888888888888888
888866699999888888888888888888888888888888888
888886669998888888888888888888888888888888888
888888666688888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbffbb88888888888888888888888888888888
888eeeebffffb88888888888888888888888888888888
88eeeeebffffb88888888888888888888888888888888
8eeeeeebbffbb88888888888888888888888888888888
eeeeee9999bb888888888888888888888888888888888
eeeee9991998888888888888888888888888888888888
eeee69999199888888888888888888888888888888888
eeee69999919888888888888888888888888888888888
eee866999999888888888888888888888888888888888
ee8866699999888888888888888888888888888888888
e88886669998888888888888888888888888888888888
888888666688888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888866666668888888888888888888888
888888888888888666666688888888888888888888888
888888888888886666666888888888888888888888888
888888888888866666668888888888888888888888888
888888888888666666688888888888888888888888888
888888888886666666888888888888888888888888888
8888888888e6666668888888888888888888888888888
888888888eee666688888888888888888888888888888
88888888eeeee66888888888888888888888888888888
8888888eeeeeee8888888888888888888888888888888
888888eeeeeee88888888888888888888888888888888
88888eeebbbb888888888888888888888888888888888
8888eeebbb1bbff888888888888888888888888888888
888eeeebbfffffff88888888888888888888888888888
88eeeeebbfffffff88888888888888888888888888888
8eeeeeebbbbbbff888888888888888888888888888888
eeeeeee8bb99998888888888888888888888888888888
eeeeee888999199888888888888888888888888888888
eeeee8886999919988888888888888888888888888888
eeee88886999991988888888888888888888888888888
eee888886699999988888888888888888888888888888
ee8888886669999988888888888888888888888888888
e88888888666999888888888888888888888888888888
888888888866668888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888e88
88888888888885c8888888888888881988888888868e8
8888888888885ccc8888888888888199988888886888e
888888888885ccccc888888888881f999988888e88881
88888888885c1fc1fc888888888191f91f9888ef88881
8888888c58cc1fc1fc8c5888888991f91f986e88f888b
8888888bb8cccccccc8bb88888899999999899861888b
8888888888ccccccccb88b88888999999998888998881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999999668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888e88
88888888888885c8888888888888881988888888868e8
8888888888885ccc8888888888888199988888886888e
888888888885fcccc888888888881f999988888e88881
88888888885c1fc1fc888888888191f91f9888ef88881
8888888c58cc1fc1fc8c5888888991f91f986e88f888b
8888888bb8cccccccc8bb88888899999999899861888b
8888888888ccccccccb88b88888999999998888998881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999ff9668888888881
88888888888ccccff88bb888888899996688888888881
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888e88
8888888888888888888888888888888888888888868e8
88888888888888888888888888888888888888886888e
88888888888885c888888888888888198888888e88881
8888888888885ccc8888888888888199988888ef88881
888888888885fcccc888888888881f9999886e88f888b
88888888885c1fc1fc888888888191f91f9899861888b
8888888c58cc1fc1fc8c5888888991f91f98888998881
8888888bb8cccccccc8bb888888999999998888888881
8888888888ccccccccb88b88888999999998888888881
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccccccffbbbb88888999ff9668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888888888888888888888888888888888e888
888888888888888888888888888888888888888868e88
8888888888888888888888888888888888888886888e8
88888888888888888888888888888888888888e888818
8888888888888888888888888888888888888ef888818
888888888888888888888888888888888886e88f888b8
8888888888888888888888888888888888899861888b8
888888888888888888888888888888888888889988818
88888888888885c888888888888888198888888888818
8888888888885ccc88888888888881999888888888818
888888888885fcccc888888888881f999988888888881
88888888885c1fc1fc888888888191f91f98888888888
8888888c58cc1fc1fc8c5888888991f91f98888888888
8888888bb8cccccccc8bb888888999999998888888888
8888888888ccccccccb88b88888999999998888888888
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccccccffbbbb88888999ff9668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888e8888888
88888888888888888888888888888888888868e888888
888888888888888888888888888888888886888e88888
8888888888888888888888888888888888e8888188888
888888888888888888888888888888888ef8888188888
88888888888888888888888888888886e88f888b88888
888888888888888888888888888888899861888b88888
888888888888888888888888888888888899888818888
888888888888888888888888888888888888888818888
888888888888888888888888888888888888888881888
888888888888888888888888888888888888888881888
88888888888885c888888888888888198888888888888
8888888888885ccc88888888888881999888888888888
888888888885fcccc888888888881f999988888888888
88888888885c1fc1fc888888888191f91f98888888888
8888888c58cc1fc1fc8c5888888991f91f98888888888
8888888bb8cccccccc8bb888888999999998888888888
8888888888ccccccccb88b88888999999998888888888
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccccccffbbbb88888999ff9668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888e8888888
88888888888888888888888888888888888868e888888
888888888888888888888888888888888886888e88888
8888888888888888888888888888888888e8888188888
888888888888888888888888888888888ef8888188888
88888888888888888888888888888886e88f8888b8888
8888888888888888888888888888888998618888b8888
888888888888888888888888888888888899888881888
888888888888888888888888888888888888888881888
888888888888888888888888888888888888888888188
888888888888888888888888888888888888888888188
88888888888885c888888888888888198888888888888
8888888888885ccc88888888888881999888888888888
888888888885fcccc888888888881f999988888888888
88888888885c1fc1fc888888888191f91f98888888888
8888888c58cc1fc1fc8c5888888991f91f98888888888
8888888bb8cccccccc8bb888888999999998888888888
8888888888ccccccccb88b88888999999998888888888
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccccccffbbbb88888999ff9668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888e8888888
88888888888888888888888888888888888868e888888
888888888888888888888888888888888886888e88888
8888888888888888888888888888888888e8888188888
888888888888888888888888888888888ef8888188888
88888888888888888888888888888886e88f8888b8888
8888888888888888888888888888888998618888b8188
888888888888888888888888888888888899888881188
888888888888888888888888888888888888888881888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888885c888888888888888198888888888888
8888888888885ccc88888888888881999888888888888
888888888885fcccc888888888881f999988888888888
88888888885c1fc1fc888888888191f91f98888888888
8888888c58cc1fc1fc8c5888888991f91f98888888888
8888888bb8cccccccc8bb888888999999998888888888
8888888888ccccccccb88b88888999999998888888888
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccccccffbbbb88888999ff9668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888e8888888
88888888888888888888888888888888888868e888888
888888888888888888888888888888888886888e88888
8888888888888888888888888888888888e8888188188
888888888888888888888888888888888ef8888188188
88888888888888888888888888888886e88f8888b1888
8888888888888888888888888888888998618888b1888
888888888888888888888888888888888899888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888885c888888888888888198888888888888
8888888888885ccc88888888888881999888888888888
888888888885fcccc888888888881f999988888888888
88888888885c1fc1fc888888888191f91f98888888888
8888888c58cc1fc1fc8c5888888991f91f98888888888
8888888bb8cccccccc8bb888888999999998888888888
8888888888ccccccccb88b88888999999998888888888
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccccccffbbbb88888999ff9668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888e8888888
88888888888888888888888888888888888868e888188
888888888888888888888888888888888886888e88188
8888888888888888888888888888888888e8888181888
888888888888888888888888888888888ef8888181888
88888888888888888888888888888886e88f8888b8888
8888888888888888888888888888888998618888b8888
888888888888888888888888888888888899888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888885c888888888888888198888888888888
8888888888885ccc88888888888881999888888888888
888888888885fcccc888888888881f999988888888888
88888888885c1fc1fc888888888191f91f98888888888
8888888c58cc1fc1fc8c5888888991f91f98888888888
8888888bb8cccccccc8bb888888999999998888888888
8888888888ccccccccb88b88888999999998888888888
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccccccffbbbb88888999ff9668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888e8888888
88888888888888888888888888888888888868e888188
888888888888888888888888888888888886888e88188
8888888888888888888888888888888888e8888181888
888888888888888888888888888888888ef8888181888
88888888888888888888888888888886e88f8888b8888
8888888888888888888888888888888998618888b8888
888888888888888888888888888888888899888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888885c888888888888888198888888888888
8888888888885ccc88888888888881999888888888888
888888888885fcccc888888888881f999988888888888
88888888885c1fc1fc888888888191f91f98888888888
8888888c58cc1fc1fc8c5888888991f91f98888888888
8888888bb8cccccccc8bb888888999999998888888888
8888888888ccccccccb88b88888999999998888888888
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccccccffbbbb88888999ff9668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888e8888888
88888888888888888888888888888888888868e888188
888888888888888888888888888888888886888e88188
8888888888888888888888888888888888e8888181888
888888888888888888888888888888888ef8888181888
88888888888888888888888888888886e88f8888b8888
8888888888888888888888888888888998618888b8888
888888888888888888888888888888888899888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888885c888888888888888198888888888888
8888888888885ccc88888888888881999888888888888
888888888885ccccc8888888888819999988888888888
88888888885c1fc1fc888888888191f91f98888888888
8888888c58cc1fc1fc8c5888888991f91f98888888888
8888888bb8cccccccc8bb888888999999998888888888
8888888888ccccccccb88b88888999999998888888888
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccccccffbbbb88888999999668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888e8888888
88888888888888888888888888888888888868e888888
888888888888888888888888888888888886888e88888
8888888888888888888888888888888888e8888181188
888888888888888888888888888888888ef8888181188
88888888888888888888888888888886e88f8888b8888
8888888888888888888888888888888998618888b8888
888888888888888888888888888888888899888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888885c888888888888888198888888888888
8888888888885ccc88888888888881999888888888888
888888888885cccfc888888888881999f988888888888
88888888885c1fc1fc888888888191f91f98888888888
8888888c58cc1fc1fc8c5888888991f91f98888888888
8888888bb8cccccccc8bb888888999999998888888888
8888888888ccccccccb88b88888999999998888888888
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccfcccffbbbb8888899f999668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888e88888
8888888888888888888888888888888888888868e8888
88888888888888888888888888888888888886888e888
888888888888888888888888888888888888e88881818
88888888888888888888888888888888888ef88881818
8888888888888888888888888888888886e88f8888b81
888888888888888888888888888888888998618888b81
888888888888888888888888888888888888998888888
888888888888888888888888888888888888888888888
88888888888885c888888888888888198888888888888
8888888888885ccc88888888888881999888888888888
888888888885cccfc888888888881999f988888888888
88888888885c1fc1fc888888888191f91f98888888888
8888888c58cc1fc1fc8c5888888991f91f98888888888
8888888bb8cccccccc8bb888888999999998888888888
8888888888ccccccccb88b88888999999998888888888
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccfcccffbbbb8888899f999668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888e88888
8888888888888888888888888888888888888868e8888
88888888888888888888888888888888888886888e888
888888888888888888888888888888888888e88881888
88888888888888888888888888888888888ef88881888
8888888888888888888888888888888886e88f8888b18
88888888888885c888888888888888198998618888b18
8888888888885ccc88888888888881999888998888881
888888888885cccfc888888888881999f988888888881
88888888885c1fc1fc888888888191f91f98888888888
8888888c58cc1fc1fc8c5888888991f91f98888888888
8888888bb8cccccccc8bb888888999999998888888888
8888888888ccccccccb88b88888999999998888888888
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccfcccffbbbb8888899f999668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888888e8888
88888888888888888888888888888888888888868e888
888888888888888888888888888888888888886888e88
8888888888888888888888888888888888888e8888188
88888888888885c888888888888888198888ef8888188
8888888888885ccc8888888888888199986e88f8888b8
888888888885cccfc888888888881999f9998618888b8
88888888885c1fc1fc888888888191f91f98899888818
8888888c58cc1fc1fc8c5888888991f91f98888888818
8888888bb8cc9ccccc8bb888888999999998888888881
8888888888ccccccccb88b88888999999998888888881
8888888888cccffccfb47b88888999ff9968888888888
8888888888ccfcccffbbbb8888899f999668888888888
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888888e8888
88888888888888888888888888888888888888868e888
88888888888885c888888888888888198888886888e88
8888888888885ccc888888888888819998888e8888188
888888888885cccfc888888888881999f988ef8888188
88888888885c1fc1fc888888888191f91f6e88f8888b8
8888888c58cc1fc1fc8c5888888991f91f998618888b8
8888888bb8cccccccc8bb888888999999998899888818
8888888888cc9cccccb88b88888999999998888888818
8888888888cccffccfb47b88888999ff9968888888881
8888888888ccfcccffbbbb8888899f999668888888881
88888888888ccccff88bb888888899996688888888888
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888888e8888
88888888888885c88888888888888819888888868e888
8888888888885ccc88888888888881999888886888e88
888888888885cccfc888888888881999f9888e8888188
88888888885c1fc1fc888888888191f91f98ef8888188
8888888c58cc1fc1fc8c5888888991f91f6e88f8888b8
8888888bb8cccccccc8bb8888889999999998618888b8
8888888888ccccccccb88b88888999999998899888818
8888888888cc9ffccfb47b88888999ff9968888888818
8888888888ccfcccffbbbb8888899f999668888888818
88888888888ccccff88bb888888899996688888888818
888888888888ccff88888888888889966bb8889988881
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888885c8888888888888881988888888e8888
8888888888885ccc8888888888888199988888868e888
888888888885cccfc888888888881999f988886888e88
88888888885c1fc1fc888888888191f91f988e8888188
8888888c58cc1fc1fc8c5888888991f91f98ef8888188
8888888bb8cccccccc8bb88888899999996e88f888b88
8888888888ccccccccb88b88888999999999861888b88
8888888888cccffccfb47b88888999ff9968899888188
8888888888ccfcccffbbbb8888899f999668888888188
88888888888c9ccff88bb888888899996688888888188
888888888888ccff88888888888889966bb8888888181
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`],
            75,
            false
        )
        timer.after(assets.animation`Panel4`.length * 75, function () {
            animation.runImageAnimation(
                Prologue,
                [img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888885c8888888888888881988888888e8888
8888888888885ccc8888888888888199988888868e888
888888888885cccfc888888888881ff9ff88886888e88
88888888885c1fc1fc888888888191ff1f988e8888188
8888888c58cc1fc1fc8c5888888991f91f98ef8888188
8888888bb8cccccccc8bb88888899999996e88f888b88
8888888888ccccccccb88b88888999999999861888b88
8888888888cccffccfb47b88888999ff9968899888188
8888888888ccfcccffbbbb8888899f999668888888188
88888888888ccccff88bb888888899996688888888188
888888888888ccff88888888888889966bb8888888181
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888888e8888
88888888888885c88888888888888819888888868e888
8888888888885ccc88888888888881999888886888e88
888888888885cccfc888888888881ff9ff888e8888188
88888888885c1fc1fc888888888191ff1f98ef8888188
8888888888cc1fc1fc888888888991f91f6e88f888b88
8888888c58cccccccc8c5888888999999999861888b88
8888888bb8cccccccc8bb888888999999998899888188
8888888888cccffccfb88b88888999ff9968888888188
8888888888ccfcccffb47b8888899f999668888888188
88888888888ccccff8bbbb888888999966b8888888188
888888888888ccff888bb888888889966b88888888181
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
88888888888885c8888888888888881988888888e8888
8888888888885ccc8888888888888199988888868e888
888888888885cccfc888888888881ff9ff88886888e88
88888888885c1fc1fc888888888191ff1f988e8888188
8888888c58cc1fc1fc8c5888888991f91f98ef8888188
8888888bb8cccccccc8bb88888899999996e88f888b88
8888888888ccccccccb88b88888999999999861888b88
8888888888cccffccfb47b88888999ff9968899888188
8888888888ccfcccffbbbb8888899f999668888888188
88888888888ccccff88bb888888899996688888888188
888888888888ccff88888888888889966bb8888888181
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`, img`
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
888888888888888888888888888888888888888888888
8888888888888888888888888888888888888888e8888
88888888888885c88888888888888819888888868e888
8888888888885ccc88888888888881999888886888e88
888888888885cccfc888888888881ff9ff888e8888188
88888888885c1fc1fc888888888191ff1f98ef8888188
8888888888cc1fc1fc888888888991f91f6e88f888b88
8888888c58cccccccc8c5888888999999999861888b88
8888888bb8cccccccc8bb888888999999998899888188
8888888888cccffccfb88b88888999ff9968888888188
8888888888ccfcccffb47b8888899f999668888888188
88888888888ccccff8bbbb888888999966b8888888188
888888888888ccff888bb888888889966b88888888181
88888888dddddd88888888888888111bbbb9999989981
88ddddddddddddddd8ddd8888881bbbbbbb9999999991
dddddddddddddddddddddddddd8bbbbbbbb9999999994
dddddddddddddddddddddddddddbbbbbbbc9999999999
dddddddddddddddddddddddddddbbbbbbcc9999999999
`],
                400,
                true
            )
        })
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e0001222400260001192c002e0001193400360001193c003e00011d44004600011b4c004e00011b54005600011b5c005e00011e6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        Narrate("<dark purple>Diesel</dark purple> and <cyan>Aquifer</cyan> were very close friends, and they did everything together.", fancyText.TextSpeed.Fast)
        animation.runImageAnimation(
            Prologue,
            [img`
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddedddddddddddddddddddddddddd
ddddddddddddddddddedddddddddddddddddddddddddd
ddddddddddddddddd7edddddddddddddddddddddddddd
ddddddddddddddddddedddddddddddddddddddddddddd
dddddddddd199dddddedddddddddddddddddddddddddd
ddddddddd19999ddddedddddddddddddddddddddddddd
dddddddd1999999ddde7ddddddddddddddddddddddddd
dddddddd1999999dddeddddddddddc5dddddddddddddd
ddddddd191f991f9ddeddddddddfcccfddddddddddddd
dddd61d991f991f9d61ddddddddcfcfc5dddddddddddd
dddd99d999999999d99dddddddcf1cf1c5ddddddddddd
ddddddd9f99999f9ddddddd5cdc11c11ccd5cdddddddd
ddddddd99f999f99dddddddbbdccccccccdbbdddddddd
ddddddd999fff996ddddddddddccccccccddddddddddd
ddddddd999999966ddddddddddfccffcccddddddddddd
ddddddd999999966ddddddddddffccccccddddddddddd
dddddddd9999966ddddddddddddffccccdddddddddddd
ddddddddd99666ddddddddddddddffccddddddddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
dddddddddddddddddddeddddddddddddddddddddddddd
dddddddddddddddddddeddddddddddddddddddddddddd
dddddddddddddddddd7eddddddddddddddddddddddddd
dddddddddddddddddddeddddddddddddddddddddddddd
dddddddddd199ddddddeddddddddddddddddddddddddd
ddddddddd19999dddddeddddddddddddddddddddddddd
dddddddd1999999dddde7dddddddddddddddddddddddd
dddddddd1999999ddddedddddddddc5dddddddddddddd
ddddddd191f991f9dddedddddddfcccfddddddddddddd
dddd61d991f991f9dd61dddddddcfcfc5dddddddddddd
dddd99d999999999dd99ddddddcf1cf1c5ddddddddddd
ddddddd9f99999f9ddddddd5cdc11c11ccd5cdddddddd
ddddddd99f999f99dddddddbbdccccccccdbbdddddddd
ddddddd999fff996ddddddddddccccccccddddddddddd
ddddddd999999966ddddddddddfccffcccddddddddddd
ddddddd999999966ddddddddddffccccccddddddddddd
dddddddd9999966ddddddddddddffccccdddddddddddd
ddddddddd99666ddddddddddddddffccddddddddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
dddddddddd199dddddddddddddddddddddddddddddddd
ddddddddd19999ddddddddddddddddddddddddddddddd
dddddddd1999999dddddddddddddddddddddddddddddd
dddddddd1999999dddddddddd7dddc5dddddddddddddd
ddddddd191f991f9dddeeeeeeeeecccfddddddddddddd
dddd61d991f991f9dd61d7dddddcfcfc5dddddddddddd
dddd99d999999999dd99ddddddcffcffc5ddddddddddd
ddddddd9f99999f9ddddddd5cdccccccccd5cdddddddd
ddddddd99f999f99dddddddbbdccccccccdbbdddddddd
ddddddd999fff996ddddddddddccccccccddddddddddd
ddddddd999999966ddddddddddfccffcccddddddddddd
ddddddd999999966ddddddddddffccccccddddddddddd
dddddddd9999966ddddddddddddffccccdddddddddddd
ddddddddd99666ddddddddddddddffccddddddddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
dddddddddd199dddddddddddddddddddddddddddddddd
ddddddddd19999ddddddddddddddddddddddddddddddd
dddddddd1999999dddddddddddddddddddddddddddddd
dddddddd1999999ddddddddddd7ddc5dddddddddddddd
ddddddd191f991f9ddddeeeeeeeeeccfddddddddddddd
dddd61d991f991f9ddd61d7ddddcfcfc5dddddddddddd
dddd99d999999999ddd99dddddcf1cf1c5ddddddddddd
ddddddd9f99999f9ddddddd5cdccccccccd5cdddddddd
ddddddd99f999f99dddddddbbdccccccccdbbdddddddd
ddddddd999fff996ddddddddddccccccccddddddddddd
ddddddd999999966ddddddddddfccffcccddddddddddd
ddddddd999999966ddddddddddffccccccddddddddddd
dddddddd9999966ddddddddddddffccccdddddddddddd
ddddddddd99666ddddddddddddddffccddddddddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
dddddddddd199dddddddddddddddddddddddddddddddd
ddddddddd19999ddddddddddddddddddddddddddddddd
dddddddd1999999dddddddddddddddddddddddddddddd
dddddddd1999999dddddddddd7dddc5dddddddddddddd
ddddddd191f991f9dddeeeeeeeeecccfddddddddddddd
dddd61d991f991f9dd61d7dddddcfcfc5dddddddddddd
dddd99d999999999dd99ddddddcf1cf1c5ddddddddddd
ddddddd9f99999f9ddddddd5cdcc1cc1ccd5cdddddddd
ddddddd99f999f99dddddddbbdccccccccdbbdddddddd
ddddddd999fff996ddddddddddccccccccddddddddddd
ddddddd999999966ddddddddddfccffcccddddddddddd
ddddddd999999966ddddddddddffccccccddddddddddd
dddddddd9999966ddddddddddddffccccdddddddddddd
ddddddddd99666ddddddddddddddffccddddddddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
ddddddddddddddddddddddddddddddddddddddddddddd
dddddddddddddddddddeddddddddddddddddddddddddd
dddddddddddddddddddeddddddddddddddddddddddddd
dddddddddddddddddd7eddddddddddddddddddddddddd
dddddddddddddddddddeddddddddddddddddddddddddd
dddddddddd199ddddddeddddddddddddddddddddddddd
ddddddddd19999dddddeddddddddddddddddddddddddd
dddddddd1999999dddde7dddddddddddddddddddddddd
dddddddd1999999ddddedddddddddc5dddddddddddddd
ddddddd191f991f9dddedddddddfcccfddddddddddddd
dddd61d991f991f9dd61dddddddcfcfc5dddddddddddd
dddd99d999999999dd99ddddddcf1cf1c5ddddddddddd
ddddddd9f99999f9ddddddd5cdc11c11ccd5cdddddddd
ddddddd99f999f99dddddddbbdccccccccdbbdddddddd
ddddddd999fff996ddddddddddccccccccddddddddddd
ddddddd999999966ddddddddddfccffcccddddddddddd
ddddddd999999966ddddddddddffccccccddddddddddd
dddddddd9999966ddddddddddddffccccdddddddddddd
ddddddddd99666ddddddddddddddffccddddddddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`],
            60,
            true
        )
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001202c002e0001203400360001203c003e0001204400460001224c004e0001225400560001225c005e0001226400660001a36c006e0001a37400760001a37c007e0001a308001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        Narrate("They even trained together.", fancyText.TextSpeed.Normal)
        animation.runImageAnimation(
            Prologue,
            [img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2fff2ffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2fff2ffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2fff2ffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2fff2ffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2fffff2ffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2fff2ffffff2dddd
dddddddddddddddddddddddbddddd2fff222ffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff22fffff2dddd
ddddddddddddddddddddddbdbdddd2ffff2fffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2ffff2fffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff22fffff2dddd
ddddddddddddddddddddddbdbdddd2ffff2fffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2ffff2fffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff22fffff2dddd
ddddddddddddddddddddddbdbdddd2ffff2fffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2ffff2fffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff22fffff2dddd
ddddddddddddddddddddddbdbdddd2ffff2fffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2ffff2fffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2fff22fffff2dddd
ddddddddddddddddddddddbdbdddd2ffff2fffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2ffff2fffff2dddd
dddddddddddddddddddddddbddddd2ffff2fffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2f222f2222f2dddd
ddddddddddddddddddddddbdbdddd2f2fff2ff2f2dddd
dddddddddddddddddddddddbddddd2f2f2f2ff2f2dddd
ddddddddddddddddddddddbdbdddd2f2f2f2ff2f2dddd
dddddddddddddddddddddddbddddd2f222f2222f2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2f222f2222f2dddd
ddddddddddddddddddddddbdbdddd2f2fff2ff2f2dddd
dddddddddddddddddddddddbddddd2f2f2f2ff2f2dddd
ddddddddddddddddddddddbdbdddd2f2f2f2ff2f2dddd
dddddddddddddddddddddddbddddd2f222f2222f2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2f222f2222f2dddd
ddddddddddddddddddddddbdbdddd2f2fff2ff2f2dddd
dddddddddddddddddddddddbddddd2f2f2f2ff2f2dddd
ddddddddddddddddddddddbdbdddd2f2f2f2ff2f2dddd
dddddddddddddddddddddddbddddd2f222f2222f2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2f222f2222f2dddd
ddddddddddddddddddddddbdbdddd2f2fff2ff2f2dddd
dddddddddddddddddddddddbddddd2f2f2f2ff2f2dddd
ddddddddddddddddddddddbdbdddd2f2f2f2ff2f2dddd
dddddddddddddddddddddddbddddd2f222f2222f2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
ddddd61d991f91f9d61ddd222ddd5cdcf1cf1ccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
dddddddd991f91f9dddddd222ddddddcf1cf1ccdddddd
ddddd61d99999999d61ddddddddd5cdccccccccd5cddd
ddddd99d99999999d99dddddddddbbdccccccccdbbddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
dddddddd991f91f9dddddd222ddddddcf1cf1ccdddddd
ddddd61d99999999dddddddddddddddccccccccd5cddd
ddddd99d99999999d61ddddddddd5cdccccccccdbbddd
dddddddd999ff996d99dddddddddbbdfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
dddddddd991f91f9dddddd222ddddddcf1cf1ccdddddd
ddddd61d99999999dddddddddddddddccccccccd5cddd
ddddd99d99999999dddddddddddddddccccccccdbbddd
dddddddd999ff996d61ddddddddd5cdfccffcccdddddd
dddddddd99999966d99dddddddddbbdffccccccdddddd
ddddddddd999966dddddd7dddd7dddddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
dddddddd991f91f9dddddd222ddddddcf1cf1ccdddddd
ddddd61d99999999dddddddddddddddccccccccd5cddd
ddddd99d99999999dddddddddddddddccccccccdbbddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dd61dddddddd5cdffccccccdddddd
ddddddddd999966ddd99d7dddd7dbbddffccccddddddd
dddddddddd9966ddddeeeeeddeeeeedddffccdddddddd
4111114bbbbb41111147bbbb4111714bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
dddddddd991f91f9dddddd222ddddddcf1cf1ccdddddd
ddddd61d99999999dddddddddddddddccccccccd5cddd
ddddd99d99999999dddddddddddddddccccccccdbbddd
dddddddd999ff996d61ddddddddd5cdfccffcccdddddd
dddddddd99999966d99d7ddddd7dbbdffccccccdddddd
ddddddddd999966ddeeeeedddeeeeeddffccccddddddd
dddddddddd9966dddd7ddddddddd7ddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddddd22222dddddddccc5dddddddd
ddddddddd199999dddddd22222ddddddccccc5ddddddd
dddddddd191f91f9ddddd22222dddddcf1cf1c5dddddd
dddddddd991f91f9dddd7e222edddddcf1cf1ccdddddd
ddddd61d99999999ddddedddd7eddddccccccccd5cddd
ddddd99d99999999d61eddddddde5cdccccccccdbbddd
dddddddd999ff996d9eddddddddde7dfccffcccdddddd
dddddddd99999966de7ddddddddddedffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddddd22222ddddddddc5ddddddddd
dddddddddd1999ddddded22222dedddddccc5dddddddd
ddddddddd199999dddde7222227eddddccccc5ddddddd
dddddddd191f91f9ddded22222dedddcf1cf1c5dddddd
dddddddd991f91f9dddedd222ddedddcf1cf1ccdddddd
ddddd61d99999999d67eddddddde7cdccccccccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddded22222deddddddc5ddddddddd
dddddddddd1999ddddde7222227edddddccc5dddddddd
ddddddddd199999dddded22222deddddccccc5ddddddd
dddddddd191f91f9ddded22222dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd222dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddded22222deddddddc5ddddddddd
dddddddddd1999ddddde7222227edddddccc5dddddddd
ddddddddd199999dddded22222deddddccccc5ddddddd
dddddddd191f91f9ddded22222dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd222dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddddddddddddd22222ddddddddddddddddddd
ddddddddddd19dddddded22222deddddddc5ddddddddd
dddddddddd1999ddddde7222227edddddccc5dddddddd
ddddddddd199999dddded22222deddddccccc5ddddddd
dddddddd191f91f9ddded22222dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd222dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99999999dddddddddddddddccccccccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
fffffffffffffffffffffffffffffffffffffffffffff
f1fffffffffffffffffffffffffffffffffffffffffff
ff1ffffffffffffffffffffffffffffffffffffffffff
fff1fffffffffffffffffffffffffffffffffffffffff
ffff1ffffffffffffffffffffffffffffffffffffffff
fffff1fffffffffffffffffffffffffffffffffffffff
ffffff1ffffffffffffffffffffffffffffffffffffff
fffffff1fffffffffffffffffffffffffffffffffffff
ffffffff1ffffffffffffffffffffffffffffffffffff
fffffffff1fffffffffffffffffffffffffffffffffff
ffffffffff1ffffffffffffffffffffffffffffffffff
fffffffffff1fffffffffffffffffffffffffffffffff
ffffffffffff1ffffffffffffffffffffffffffffffff
fffffffffffff1fffffffffffffffffffffffffffffff
ffffffffffffff1ffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
`, img`
fffffffffffffffffffffffffffffffffffffffffffff
f1fffffffffffffffffffffffffffffffffffffffffff
ff1ffffffffffffffffffffffffffffffffffffffffff
fff1fffffffffffffffffffffffffffffffffffffffff
ffff1ffffffffffffffffffffffffffffffffffffffff
fffff1fffffffffffffffffffffffffffffffffffffff
ffffff1ffffffffffffffffffffffffffffffffffffff
fffffff1fffffffffffffffffffffffffffffffffffff
ffffffff1ffffffffffffffffffffffffffffffffffff
fffffffff1fffffffffffffffffffffffffffffffffff
ffffffffff1ffffffffffffffffffffffffffffffffff
1ffffffffff1fffffffffffffffffffffffffffffffff
f1ffffffffff1ffffffffffffffffffffffffffffffff
ff1ffffffffff1fffffffffffffffffffffffffffffff
fff1ffffffffff1ffffffffffffffffffffffffffffff
ffff1ffffffffffffffffffffffffffffffffffffffff
fffff1fffffffffffffffffffffffffffffffffffffff
ffffff1ffffffffffffffffffffffffffffffffffffff
fffffff1fffffffffffffffffffffffffffffffffffff
ffffffff1ffffffffffffffffffffffffffffffffffff
fffffffff1fffffffffffffffffffffffffffffffffff
ffffffffff1ffffffffffffffffffffffffffffffffff
fffffffffff1fffffffffffffffffffffffffffffffff
ffffffffffff1ffffffffffffffffffffffffffffffff
fffffffffffff1fffffffffffffffffffffffffffffff
ffffffffffffff1ffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
`, img`
fffffffffffffffffffffffffffffffffffffffffffff
f1fffffffffffffffffffffffffffffffffffffffffff
ff1ffffffffffffffffffffffffffffffffffffffffff
fff1fffffffffffffffffffffffffffffffffffffffff
ffff1ffffffffffffffffffffffffffffffffffffffff
fffff1fffffffffffffffffffffffffffffffffffffff
ffffff1ffffffffffffffffffffffffffffffffffffff
fffffff1fffffffffffffffffffffffffffffffffffff
ffffffff1ffffffffffffffffffffffffffffffffffff
fffffffff1fffffffffffffffffffffffffffffffffff
ffffffffff1ffffffffffffffffffffffffffffffffff
1ffffffffff1fffffffffffffffffffffffffffffffff
f1ffffffffff1ffffffffffffffffffffffffffffffff
ff1ffffffffff1fffffffffffffffffffffffffffffff
fff1ffffffffff1ffffffffffffffffffffffffffffff
ffff1ffffffffffffffffffffffffffffffffffffffff
fffff1fffffffffffffffffffffffffffffffffffffff
ffffff1ffffffffffffffffffffffffffffffffffffff
fffffff1fffffffffffffffffffffffffffffffffffff
ffffffff1ffffffffffffffffffffffffffffffffffff
fffffffff1fffffffffffffffffffffffffffffffffff
ffffffffff1ffffffffffffffffffffffffffffffffff
fffffffffff1fffffffffffffffffffffffffffffffff
ffffffffffff1ffffffffffffffffffffffffffffffff
fffffffffffff1fffffffffffffffffffffffffffffff
ffffffffffffff1ffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffff1ffffffffffffffffffffffffffffff
fffffffffffff1fffffffffffffffffffffffffffffff
ffffffffffff1ffffffffffffffffffffffffffffffff
fffffffffff1fffffffffffffffffffffffffffffffff
ffffffffff1ffffffffffffffffffffffffffffffffff
fffffffff1fffffffffffffffffffffffffffffffffff
ffffffff1ffffffffffffffffffffffffffffffffffff
fffffff1fffffffffffffffffffffffffffffffffffff
ffffff1ffffffffffffffffffffffffffffffffffffff
fffff1fffffffffffffffffffffffffffffffffffffff
ffff1ffffffffffffffffffffffffffffffffffffffff
fff1fffffffffffffffffffffffffffffffffffffffff
ff1ffffffffffffffffffffffffffffffffffffffffff
f1fffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
`, img`
1ffffffffffffffffffffffffffffffffffffffffffff
f1fffffffffffffffffffffffffffffffffffffffffff
ff1ffffffffffffffffffffffffffffffffffffffffff
fff1fffffffffffffffffffffffffffffffffffffffff
ffff1ffffffffffffffffffffffffffffffffffffffff
fffff1fffffffffffffffffffffffffffffffffffffff
ffffff1ffffffffffffffffffffffffffffffffffffff
fffffff1fffffffffffffffffffffffffffffffffffff
ffffffff1ffffffffffffffffffffffffffffffffffff
fffffffff1fffffffffffffffffffffffffffffffffff
ffffffffff1ffffffffffffffffffffffffffffffffff
1ffffffffff1fffffffffffffffffffffffffffffffff
f1ffffffffff1ffffffffffffffffffffffffffffffff
ff1ffffffffff1fffffffffffffffffffffffffffffff
fff1ffffffffff1ffffffffffffffffffffffffffffff
ffff1ffffffffffffffffffffffffffffffffffffffff
fffff1fffffffffffffffffffffffffffffffffffffff
ffffff1ffffffffffffffffffffffffffffffffffffff
fffffff1fffffffffffffffffffffffffffffffffffff
ffffffff1ffffffffffffffffffffffffffffffffffff
fffffffff1fffffffffffffffffffffffffffffffffff
ffffffffff1ffffffffffffffffffffffffffffffffff
fffffffffff1fffffffffffffffffffffffffffffffff
ffffffffffff1ffffffffffffffffffffffffffffffff
fffffffffffff1fffffffffffffffffffffffffffffff
ffffffffffffff1ffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffff1ffffffffff1fffffffffffffffffff
fffffffffffff1ffffffffff1ffffffffffffffffffff
ffffffffffff1ffffffffff1fffffffffffffffffffff
fffffffffff1ffffffffff1ffffffffffffffffffffff
ffffffffff1ffffffffff1fffffffffffffffffffffff
fffffffff1ffffffffff1ffffffffffffffffffffffff
ffffffff1ffffffffff1fffffffffffffffffffffffff
fffffff1ffffffffff1ffffffffffffffffffffffffff
ffffff1ffffffffff1fffffffffffffffffffffffffff
fffff1ffffffffff1ffffffffffffffffffffffffffff
ffff1ffffffffff1fffffffffffffffffffffffffffff
fff1ffffffffff1ffffffffffffffffffffffffffffff
ff1ffffffffff1fffffffffffffffffffffffffffffff
f1ffffffffff1ffffffffffffffffffffffffffffffff
1ffffffffff1fffffffffffffffffffffffffffffffff
`, img`
1ffffffffffffffffffffffffffffffffffffffffffff
f1fffffffffffffffffffffffffffffffffffffffffff
ff1ffffffffffffffffffffffffffffffffffffffffff
fff1fffffffffffffffffffffffffffffffffffffffff
ffff1ffffffffffffffffffffffffffffffffffffffff
fffff1fffffffffffffffffffffffffffffffffffffff
ffffff1ffffffffffffffffffffffffffffffffffffff
fffffff1fffffffffffffffffffffffffffffffffffff
ffffffff1ffffffffffffffffffffffffffffffffffff
fffffffff1fffffffffffffffffffffffffffffffffff
ffffffffff1ffffffffffffffffffffffffffffffffff
1ffffffffff1fffffffffffffffffffffffffffffffff
f1ffffffffff1ffffffffffffffffffffffffffffffff
ff1ffffffffff1fffffffffffffffffffffffffffffff
fff1ffffffffff1ffffffffffffffffffffffffffffff
ffff1ffffffffffffffffffffffffffffffffffffffff
fffff1fffffffffffffffffffffffffffffffffffffff
ffffff1ffffffffffffffffffffffffffffffffffffff
fffffff1fffffffffffffffffffffffffffffffffffff
ffffffff1fffffffffffffffffffff1ffffffffffffff
fffffffff1fffffffffffffffffffff1fffffffffffff
ffffffffff1fffffffffffffffffffff1ffffffffffff
fffffffffff1fffffffffffffffffffff1fffffffffff
ffffffffffff1fffffffffffffffffffff1ffffffffff
fffffffffffff1fffffffffffffffffffff1fffffffff
ffffffffffffff1fffffffffffffffffffff1ffffffff
fffffffffffffffffffffffffffffffffffff1fffffff
ffffffffffffffffffffffffffffffffffffff1ffffff
fffffffffffffffffffffffffffffffffffffff1fffff
ffffffffffffffffffffffffffffffffffffffff1ffff
ffffffffffffff1ffffffffff1fffffffffffffff1fff
fffffffffffff1ffffffffff1fffffffffffffffff1ff
ffffffffffff1ffffffffff1fffffffffffffffffff1f
fffffffffff1ffffffffff1fffffffffffffffffffff1
ffffffffff1ffffffffff1fffffffffffffffffffffff
fffffffff1ffffffffff1ffffffffffffffffffffffff
ffffffff1ffffffffff1fffffffffffffffffffffffff
fffffff1ffffffffff1ffffffffffffffffffffffffff
ffffff1ffffffffff1fffffffffffffffffffffffffff
fffff1ffffffffff1ffffffffffffffffffffffffffff
ffff1ffffffffff1fffffffffffffffffffffffffffff
fff1ffffffffff1ffffffffffffffffffffffffffffff
ff1ffffffffff1fffffffffffffffffffffffffffffff
f1ffffffffff1ffffffffffffffffffffffffffffffff
1ffffffffff1fffffffffffffffffffffffffffffffff
`, img`
1ffffffffffffffffffffffffffffffffffffffffffff
f1fffffffffffffffffffffffffffffffffffffffffff
ff1ffffffffffffffffffffffffffffffffffffffffff
fff1fffffffffffffffffffffffffffffffffffffffff
ffff1ffffffffffffffffffffffffffffffffffffffff
fffff1fffffffffffffffffffffffffffffffffffffff
ffffff1ffffffffffffffffffffffffffffffffffffff
fffffff1fffffffffffffffffffffffffffffffffffff
ffffffff1fffffffffffffffffffff1ffffffffffffff
fffffffff1fffffffffffffffffffff1fffffffffffff
ffffffffff1fffffffffffffffffffff1ffffffffffff
1ffffffffff1fffffffffffffffffffff1fffffffffff
f1ffffffffff1fffffffffffffffffffff1ffffffffff
ff1ffffffffff1fffffffffffffffffffff1fffffffff
fff1ffffffffff1fffffffffffffffffffff1ffffffff
ffff1ffffffffffffffffffffffffffffffff1fffffff
fffff1ffffffffffffffffffffffffffffffff1ffffff
ffffff1ffffffffffffffffffffffffffffffff1fffff
fffffff1ffffffffffffffffffffffffffffffff1ffff
ffffffff1fffffffffffffffffffff1ffffffffff1fff
fffffffff1fffffffffffffffffffff1ffffffffff1ff
ffffffffff1fffffffffffffffffffff1ffffffffff1f
fffffffffff1fffffffffffffffffffff1ffffffffff1
ffffffffffff1fffffffffffffffffffff1ffffffffff
fffffffffffff1fffffffffffffffffffff1fffffffff
ffffffffffffff1fffffffffffffffffffff1ffffffff
fffffffffffffffffffffffffffffffffffff1fffffff
ffffffffffffffffffffffffffffffffffffff1ffffff
fffffffffffffffffffffffffffffffffffffff1fffff
ffffffffffffffffffffffffffffffffffffffff1ffff
ffffffffffffff1ffffffffff1fffffffffffffff1fff
fffffffffffff1ffffffffff1fffffffffffffffff1ff
ffffffffffff1ffffffffff1fffffffffffffffffff1f
fffffffffff1ffffffffff1fffffffffffffffffffff1
ffffffffff1ffffffffff1fffffffffffffffffffffff
fffffffff1ffffffffff1ffffffffffffffffffffffff
ffffffff1ffffffffff1fffffffffffffffffffffffff
fffffff1ffffffffff1ffffffffffffffffffffffffff
ffffff1ffffffffff1fffffffffffffffffffffffffff
fffff1ffffffffff1ffffffffffffffffffffffffffff
ffff1ffffffffff1fffffffffffffffffffffffffffff
fff1ffffffffff1ffffffffffffffffffffffffffffff
ff1ffffffffff1fffffffffffffffffffffffffffffff
f1ffffffffff1ffffffffffffffffffffffffffffffff
1ffffffffff1fffffffffffffffffffffffffffffffff
`, img`
1fffffffffffffffffffff1ffffffffff1fffffffffff
f1fffffffffffffffffff1ffffffffff1ffffffffffff
ff1fffffffffffffffff1ffffffffff1fffffffffffff
fff1fffffffffffffff1ffffffffff1ffffffffffffff
ffff1fffffffffffff1ffffffffff1fffffffffffffff
fffff1fffffffffff1ffffffffff1ffffffffffffffff
1fffff1fffffffff1ffffffffff1fffffffffffffffff
f1fffff1fffffff1ffffffffff1ffffffffffffffffff
ff1fffff1fffff1ffffffffff1fffffffffffffffffff
fff1fffff1fffffffffffffffffffff1fffffffffffff
ffff1fffff1fffffffffffffffffffff1ffffffffffff
1ffff1fffff1fffffffffffffffffffff1fffffffffff
f1ffff1fffff1fffffffffffffffffffff1ffffffffff
ff1ffff1fffff1fffffffffffffffffffff1fffffffff
fff1ffff1fffff1fffffffffffffffffffff1ffffffff
ffff1ffff1fffffffffffffffffffffffffff1fffffff
fffff1ffff1fffffffffffffffffffffffffff1ffffff
ffffff1ffff1fffffffffffffffffffffffffff1fffff
fffffff1ffff1fffffffffffffffffffffffffff1ffff
ffffffff1ffff1ffffffffffffffff1ffffffffff1fff
fffffffff1ffff1ffffffffffffffff1ffffffffff1ff
ffffffffff1ffff1ffffffffffffffff1ffffffffff1f
fffffffffff1ffff1ffffffffffffffff1ffffffffff1
ffffffffffff1ffff1ffffffffffffffff1ffffffffff
fffffffffffff1ffff1ffffffffffffffff1fffffffff
ffffffffffffff1ffff1ffffffffffffffff1ffffffff
ffffffffffffffffffff1ffffffffffffffff1fffffff
fffffffffffffffffffff1ffffffffffffffff1ffffff
ffffffffffffffffffffff1ffffffffffffffff1fffff
fffffffffffffffffffffff1ffffffffffffffff1ffff
ffffffffffffff1fffffffff11fffffffffffffff1fff
fffffffffffff1ffffffffff11ffffffffffffffff1ff
ffffffffffff1ffffffffff1ff1ffffffffffffffff1f
fffffffffff1ffffffffff1ffff1ffffffffffffffff1
ffffffffff1ffffffffff1ffffff1ffffffffffffffff
fffffffff1ffffffffff1ffffffff1fffffffffffffff
ffffffff1ffffffffff1ffffffffff1ffffffffffffff
fffffff1ffffffffff1ffffffffffff1fffffffffffff
ffffff1ffffffffff1ffffffffffffff1ffffffffffff
fffff1ffffffffff1ffffffffffffffff1fffffffffff
ffff1ffffffffff1ffffffffffffffffff1ffffffffff
fff1ffffffffff1ffffffffffffffffffff1fffffffff
ff1ffffffffff1ffffffffffffffffffffff1ffffffff
f1ffffffffff1ffffffffffffffffffffffff1fffffff
1ffffffffff1ffffffffffffffffffffffffff1ffffff
`, img`
1fffffffffffffffffffff1fffff1ffff1fffffffffff
f1fffffffffffffffffff1fffff1ffff1ffffffffffff
ff1fffffffffffffffff1fffff1ffff1fffffffffffff
fff1fffffffffffffff1fffff1ffff1ffffffffffffff
ffff1fffffffffffff1fffff1ffff1fffffffffffffff
fffff1fffffffffff1fffff1ffff1ffffffffffffffff
1fffff1fffffffff1fffff1ffff1fffffffffffffffff
f1fffff1fffffff1fffff1ffff1ffffffffffffffffff
ff1fffff1fffff1fffff1ffff1fffffffffffffffffff
fff1fffff1fffffffff1fffffffffff1fffffffffffff
ffff1fffff1fffffff1fffffffffffff1ffffffffffff
1ffff1fffff1fffff1fffffffffffffff1fffffffffff
f1ffff1fffff1fff1fffffffffffffffff1ffffffffff
ff1ffff1fffff1f1fffffffffffffffffff1fffffffff
fff1ffff1fffff1fffffffffffffffffffff1ffffffff
ffff1ffff1fff1fffffffffffffffffffffff1fffffff
fffff1ffff1f1fffffffffffffffffffffffff1ffffff
ffffff1ffff1fffffffffffffffffffffffffff1fffff
fffffff1ff1f1fffffffffffffffffffffffffff1ffff
ffffffff11fff1ffffffffffffffff1ffffffffff1fff
ffffffff11ffff1ffffffffffffffff1ffffffffff1ff
fffffff1ff1ffff1ffffffffffffffff1ffffffffff1f
ffffff1ffff1ffff1ffffffffffffffff1ffffffffff1
fffff1ffffff1ffff1ffffffffffffffff1ffffffffff
ffff1ffffffff1ffff1ffffffffffffffff1fffffffff
fff1ffffffffff1ffff1ffffffffffffffff1ffffffff
ff1fffffffffffffffff1ffffffffffffffff1fffffff
f1fffffffffffffffffff1ffffffffffffffff1ffffff
1fffffffffffffffffffff1ffffffffffffffff1fffff
fffffffffffffffffffffff1ffffffffffffffff1ffff
ffffffffffffff1fffffffff11fffffffffffffff1fff
fffffffffffff1ffffffffff11ffffffffffffffff1ff
ffffffffffff1ffffffffff1ff1ffffffffffffffff1f
fffffffffff1ffffffffff1ffff1ffffffffffffffff1
ffffffffff1ffffffffff1ffffff1ffffffffffffffff
fffffffff1ffffffffff1ffffffff1fffffffffffffff
ffffffff1ffffffffff1ffffffffff1ffffffffffffff
fffffff1ffffffffff1ffffffffffff1fffffffffffff
ffffff1ffffffffff1ffffffffffffff1ffffffffffff
fffff1ffffffffff1ffffffffffffffff1fffffffffff
ffff1ffffffffff1ffffffffffffffffff1ffffffffff
fff1ffffffffff1ffffffffffffffffffff1fffffffff
ff1ffffffffff1ffffffffffffffffffffff1ffffffff
f1ffffffffff1ffffffffffffffffffffffff1fffffff
1ffffffffff1ffffffffffffffffffffffffff1ffffff
`, img`
1ffffffffffffffff1ffff1fffff1ffff1fffffffffff
f1ffffffffffffffff1ff1fffff1ffff1ffffffffffff
ff1ffffffffffffffff11fffff1ffff1fffffffffffff
fff1fffffffffffffff11ffff1ffff1ffffffffffffff
ffff1fffffffffffff1ff1ff1ffff1fffffffffffffff
fffff1fffffffffff1ffff11ffff1ffffffffffffffff
1fffff1fffffffff1fffff11fff1fffffffffffffffff
f1fffff1fffffff1fffff1ff1f1ffffffffffffffffff
ff1fffff1fffff1fffff1ffff1fffffffffffffffffff
fff1fffff1fffffffff1ffffff1ffff1fffffffffffff
ffff1fffff1fffffff1ffffffff1ffff1ffffffffffff
1ffff1fffff1fffff1ffffffffff1ffff1fffffffffff
f1ffff1fffff1fff1ffffffffffff1ffff1ffffffffff
ff1ffff1fffff1f1ffffffffffffff1ffff1fffffffff
fff1ffff1fffff1ffffffffffffffff1ffff1ffffffff
ffff1ffff1fff1ffffffffffffffffff1ffff1fffffff
fffff1ffff1f1ffffffffffffffffffff1ffff1ffffff
ffffff1ffff1ffffffffffffffffffffff1ffff1fffff
fffffff1ff1f1ffffffffffffffffffffff1ffff1ffff
ffffffff11fff1ffffffffffffffff1fffff1ffff1fff
ffffffff11ffff1ffffffffffffffff1fffff1ffff1ff
fffffff1ff1ffff1ffffffffffffffff1fffff1ffff1f
ffffff1ffff1ffff1ffffffffffffffff1fffff1ffff1
fffff1ffffff1ffff1ffffffffffffffff1fffff1ffff
ffff1ffffffff1ffff1ffffffffffffffff1fffff1fff
fff1ffffffffff1ffff1ffffffffffffffff1fffff1ff
ff1fffffffffffffffff1ffffffffffffffff1fffff1f
f1fffffffffffffffffff1ffffffffffffffff1fffff1
1fffffffffffffffffffff1ffffffffffffffff1fffff
fffffffffffffffffffffff1ffffffffffffffff1ffff
ffffffffffffff1fffffffff11fffffffffffffff1fff
fffffffffffff1ffffffffff11ffffffffffffffff1ff
ffffffffffff1ffffffffff1ff1ffffffffffffffff1f
fffffffffff1ffffffffff1ffff1ffffffffffffffff1
ffffffffff1ffffffffff1ffffff1ffffffffffffffff
fffffffff1ffffffffff1ffffffff1fffffffffffffff
ffffffff1ffffffffff1ffffffffff1ffffffffffffff
fffffff1ffffffffff1ffffffffffff1fffffffffffff
ffffff1ffffffffff1ffffffffffffff1ffffffffffff
fffff1ffffffffff1ffffffffffffffff1fffffffffff
ffff1ffffffffff1ffffffffffffffffff1ffffffffff
fff1ffffffffff1ffffffffffffffffffff1fffffffff
ff1ffffffffff1ffffffffffffffffffffff1ffffffff
f1ffffffffff1ffffffffffffffffffffffff1fffffff
1ffffffffff1ffffffffffffffffffffffffff1ffffff
`, img`
1ffffffffffffffff1ffff1fffff1ffff1fffffffffff
f1ffffffffffffffff1ff1fffff1ffff1ffffffffffff
ff1ffffffffffffffff11fffff1ffff1fffffffffffff
fff1fffffffffffffff11ffff1ffff1ffffffffffffff
ffff1fffffffffffff1ff1ff1ffff1fffffffffffffff
fffff1fffffffffff1ffff11ffff1ffffffffffffffff
1fffff1fffffffff1fffff11fff1fffffffffffffffff
f1fffff1fffffff1fffff1ff1f1fffffffffffffffff1
ff1fffff1fffff1fffff1ffff1fffffffffffffffff1f
fff1fffff1fffffffff1ffffff1ffff1ffffffffff1ff
ffff1fffff1fffffff1ffffffff1ffff1ffffffff1fff
1ffff1fffff1fffff1ffffffffff1ffff1ffffff1ffff
f1ffff1fffff1fff1ffffffffffff1ffff1ffff1fffff
ff1ffff1fffff1f1ffffffffffffff1ffff1ff1ffffff
fff1ffff1fffff1ffffffffffffffff1ffff11fffffff
ffff1ffff1fff1ffffffffffffffffff1fff11fffffff
fffff1ffff1f1ffffffffffffffffffff1f1ff1ffffff
ffffff1ffff1ffffffffffffffffffffff1ffff1fffff
fffffff1ff1f1ffffffffffffffffffff1f1ffff1ffff
ffffffff11fff1ffffffffffffffff1f1fff1ffff1fff
ffffffff11ffff1ffffffffffffffff1fffff1ffff1ff
fffffff1ff1ffff1ffffffffffffff1f1fffff1ffff1f
ffffff1ffff1ffff1ffffffffffff1fff1fffff1ffff1
fffff1ffffff1ffff1ffffffffff1fffff1fffff1ffff
ffff1ffffffff1ffff1ffffffff1fffffff1fffff1fff
fff1ffffffffff1ffff1fffff11fffffffff1fffff1ff
ff1fffffffffffffffff1fff1ffffffffffff1fffff1f
f1fffffffffffffffffff1f1ffffffffffffff1fffff1
1fffffffffffffffffffff1ffffffffffffffff1fffff
fffffffffffffffffffff1f1ffffffffffffffff1ffff
ffffffffffffff1fffff1fff11fffffffffffffff1fff
fffffffffffff1fffff1ffff11ffffffffffffffff1ff
ffffffffffff1fffff1ffff1ff1ffffffffffffffff1f
fffffffffff1fffff1ffff1ffff1ffffffffffffffff1
ffffffffff1fffff1ffff1ffffff1ffffffffffffffff
fffffffff1fffff1ffff1ffffffff1fffffffffffffff
ffffffff1fffff1ffff1ffffffffff1ffffffffffffff
fffffff1fffff1ffff1ffffffffffff1fffffffffffff
ffffff1fffff1ffff1ffffffffffffff1ffffffffffff
fffff1fffff1ffff1ffffffffffffffff1fffffffffff
ffff1fffff1ffff1ffffffffffffffffff1ffffffffff
fff1fffff1ffff1ffffffffffffffffffff1fffffffff
ff1fffff1ffff1ffffffffffffffffffffff1ffffffff
f1fffff1ffff1ffffffffffffffffffffffff1fffffff
1fffff1ffff1ffffffffffffffffffffffffff1ffffff
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221dddddddddddddddddd
ddddddddddd19dddddded12211deddddddc5ddddddddd
dddddddddd1999ddddde72d2217edddddccc5dddddddd
ddddddddd199999dddded2dd22deddddccccc5ddddddd
dddddddd191f91f9ddded22d22dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd2d2dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99f99999dddddddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221dddddddddddddddddd
ddddddddddd19dddddded12211deddddddc5ddddddddd
dddddddddd1999ddddde72d2217edddddccc5dddddddd
ddddddddd19f9f9dddded2dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd2d2dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99f99999dddddddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221dddddddddddddddddd
ddddddddddd19dddddded12211deddddddc5ddddddddd
ddddddddddf999fdddde72d2217eddddfcccfdddddddd
ddddddddd19f9f9dddded2dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd2d2dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99f99999dddddddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221dddddddddddddddddd
ddddddddddd19dddddded12211deddddddc5ddddddddd
ddddddddddf999fdddde72d2217eddddfcccfdddddddd
ddddddddd19f9f9dddded2dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd2d2dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99f99999dddddddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221dddddddddddddddddd
ddddddddddd19dddddded12211deddddddc5ddddddddd
ddddddddddf999fdddde72d2217eddddfcccfdddddddd
ddddddddd19f9f9dddded2dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd2d2dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99f99999dddddddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221dddddddddddddddddd
ddddddddddd19dddddded12211deddddddc5ddddddddd
ddddddddddf999fdddde72d2217eddddfcccfdddddddd
ddddddddd19f9f9dddded2dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd2d2dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99f99999dddddddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221dddddddddddddddddd
ddddddddddd19dddddded12211deddddddc5ddddddddd
ddddddddddf999fdddde72d2217eddddfcccfdddddddd
ddddddddd19f9f9dddded2dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd2d2dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99f99999dddddddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`],
            80,
            false
        )
        timer.after(assets.animation`Panel6`.length * 80, function () {
            animation.runImageAnimation(
                Prologue,
                [img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221dddddddddddddddddd
ddddddddddd19dddddded12211deddddddc5ddddddddd
ddddddddddf999fdddde72d2217eddddfcccfdddddddd
ddddddddd19f9f9dddded2dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd2d2dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99f99999dddddddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221dddddddddddddddddd
ddddddddddd19dddddded12211deddddddc5ddddddddd
ddddddddddf999fdddde72d2217eddddfcccfdddddddd
ddddddddd19f9f9dddded2dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd2d2dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99f99999dddddddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221eddddddddddddddddd
ddddddddddd19dddddddd122117eddddddc5ddddddddd
ddddddddddf999fdddded2d221deddddfcccfdddddddd
ddddddddd19f9f9dddde72dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22de7cdcf1cf1c5d5cddd
dddddddd991f91f9dddedd2d2ddebbdcf1cf1ccdbbddd
ddddd61d99999999d67edddddddddddccccccccdddddd
ddddd99d99f99999d99edddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221eddddddddddddddddd
ddddddddddd19dddddddd122117eddddddc5ddddddddd
ddddddddddf999fdddded2d221deddddfcccfdddddddd
ddddddddd19f9f9dddde72dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22de7cdcf1cf1c5d5cddd
dddddddd991f91f9dddedd2d2ddebbdcf1cf1ccdbbddd
ddddd61d99999999d67edddddddddddccccccccdddddd
ddddd99d99f99999d99edddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`],
                200,
                true
            )
            timer.after(350, function () {
                animation.runImageAnimation(
                    Prologue,
                    [img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221dddddddddddddddddd
ddddddddddd19dddddded12211deddddddc5ddddddddd
ddddddddddf999fdddde72d2217eddddfcccfdddddddd
ddddddddd19f9f9dddded2dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd2d2dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99f99999dddddddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221dddddddddddddddddd
ddddddddddd19dddddded12211deddddddc5ddddddddd
ddddddddddf999fdddde72d2217eddddfcccfdddddddd
ddddddddd19f9f9dddded2dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22dedddcf1cf1c5dddddd
ddddd61d991f91f9d67edd2d2dde7cdcf1cf1ccd5cddd
ddddd99d99999999d99edddddddebbdccccccccdbbddd
dddddddd99f99999dddddddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221eddddddddddddddddd
ddddddddddd19dddddddd122117eddddddc5ddddddddd
ddddddddddf999fdddded2d221deddddfcccfdddddddd
ddddddddd19f9f9dddde72dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22de7cdcf1cf1c5d5cddd
dddddddd991f91f9dddedd2d2ddebbdcf1cf1ccdbbddd
ddddd61d99999999d67edddddddddddccccccccdddddd
ddddd99d99f99999d99edddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`, img`
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd2ffffffffff2dddd
ddddddddddddddddddddddbdbdddd2ffffffffff2dddd
dddddddddddddddddddddddbddddd222222222222dddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddbdbdddddddddddddddddddd
dddddddddddddddddddddddbddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
ddddddddddddddddddddddd2ddddddddddddddddddddd
dddddddddddddddddddddd222dddddddddddddddddddd
ddddddddddddddddddddd22122ddddddddddddddddddd
ddddddddddddddddddddd21122ddddddddddddddddddd
ddddddddddddddddddddd21222ddddddddddddddddddd
ddddddddddddddddddddd222121dddddddddddddddddd
ddddddddddddddddddddd122221eddddddddddddddddd
ddddddddddd19dddddddd122117eddddddc5ddddddddd
ddddddddddf999fdddded2d221deddddfcccfdddddddd
ddddddddd19f9f9dddde72dd22deddddcfcfc5ddddddd
dddddddd191f91f9ddded22d22de7cdcf1cf1c5d5cddd
dddddddd991f91f9dddedd2d2ddebbdcf1cf1ccdbbddd
ddddd61d99999999d67edddddddddddccccccccdddddd
ddddd99d99f99999d99edddddddddddcccccfccdddddd
dddddddd999ff996dddddddddddddddfccffcccdddddd
dddddddd99999966dddddddddddddddffccccccdddddd
ddddddddd999966dddddddddddddddddffccccddddddd
dddddddddd9966dddddddddddddddddddffccdddddddd
4111114bbbbb4111114bbbbb4111114bbbbb4111114bb
b4111114bbbbb4111114bbbbb4111114bbbbb4111114b
bb4111114bbbbb4111114bbbbb4111114bbbbb4111114
bbb4111114bbbbb4111114bbbbb4111114bbbbb411111
bbbb4111114bbbbb4111114bbbbb4111114bbbbb41111
bbbbb4111114bbbbb4111114bbbbb4111114bbbbb4111
`],
                    60,
                    true
                )
            })
        })
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001202c002e0001203400360001203c003e0001204400460001224c004e0001225400560001225c005e0001226400660001a36c006e0001a37400760001a37c007e0001a308001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a00004080100`), music.PlaybackMode.UntilDone)
        Tutorial()
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001192c002e0001193400360001193c003e00011944004600011b4c004e00011b54005600011b5c005e00011b6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001192c002e0001193400360001193c003e00011944004600011b4c004e00011b54005600011b5c005e00011b6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e0001222400260001192c002e0001193400360001193c003e00011d44004600011b4c004e00011b54005600011b5c005e00011e6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e0001222400260001192c002e0001193400360001193c003e00011d44004600011b4c004e00011b54005600011b5c005e00011e6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001202c002e0001203400360001203c003e0001204400460001224c004e0001225400560001225c005e0001226400660001a36c006e0001a37400760001a37c007e0001a308001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001202c002e0001203400360001203c003e0001204400460001224c004e0001225400560001225c005e0001226400660001a36c006e0001a37400760001a37c007e0001a308001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e0001222400260001192c002e0001193400360001193c003e00011d44004600011b4c004e00011b54005600011b5c005e00011e64006600011e6c006e00011e7400760001207c007e00011e08001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408020307001c00020a006400f401640000040000000000000000000000000000000003300004000600011e0c000e00011e14001600011e1c001e00011e24002600011d2c002e00011d34003600011d3c003e00011d08001c000e050046006603320000040a002d00000064001400013200020100020c0000000200011220002200011109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80064000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d000106`), music.PlaybackMode.UntilDone)
        // Diesel Theme
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140004c0001224c005000011b50005800011b58006000011d60006800011e68007000011d70007800011e78008000012008001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003360000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140006000012760008000012208001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140004c0001224c005000011b50005800011b58006000011d60006800011e68007000011d70007800011e78008000012008001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003360000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140006000011b60008000019a08001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        // Main Theme
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0008000c00011b0c001000011d10001800011e18002000012020002c00011d2c003000011e30004000011b48004c00011b4c005000011d50005800011e58006000012060006c00011d6c007000011e7000780001a378008000012208001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003480008000c00011b0c001000011d10001800011e18002000012020002c00011d2c003000011e30004000011b4000480001a34800500001225000580001a358006000012260008000019a08001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0008000c00011b0c001000011d10001800011e18002000012020002c00011d2c003000011e30004000011b48004c00011b4c005000011d50005800011e58006000012060006c00011d6c007000011e7000780001a378008000012208001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003480008000c00011b0c001000011d10001800011e18002000012020002c00011d2c003000011e30004000011b4000480001a34800500001225000580001a358006000012260008000019a08001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        // Begin Trailer End theme
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004600000000800010f08001000011210001800011618002000010f20002800011228003000011630003800010f38004000011240004800010f48005000011450005800019758006000010f60006800011468007000019770007800010f78008000011405001c000f0a006400f4010a0000040000000000000000000000000000000002180000002000010820004000010840006000010a60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004600000000800010f08001000019710001800011b18002000010f20002800019728003000011b30003800010f38004000019740004800010f48005000011650005800011958006000010f60006800011668007000011970007800010f78008000011605001c000f0a006400f4010a0000040000000000000000000000000000000002180000002000018b20004000018b40006000010d60008000010d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004600000000800010f08001000011210001800011618002000010f20002800011228003000011630003800010f38004000011240004800010f48005000011450005800019758006000010f60006800011468007000019770007800010f78008000011405001c000f0a006400f4010a0000040000000000000000000000000000000002180000002000010820004000010840006000010a60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004600000000800010f08001000019710001800011b18002000010f20002800019728003000011b30003800010f38004000019740004800010f48005000011650005800011958006000010f60006800011668007000011970007800010f78008000011605001c000f0a006400f4010a0000040000000000000000000000000000000002180000002000018b20004000018b40006000010d60008000010d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        // Diesel Theme Repeat w/ grace notes
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140004c0001224c005000011b50005800011b58006000011d60006800011e68007000011d70007800011e78008000012008001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003420000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140005c0001275c005e0001a65e00600001a360008000012208001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140004c0001224c005000011b50005800011b58006000011d60006800011e68007000011d70007800011e78008000012008001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003420000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140005c00011b5c005e00011d5e006000011e60008000019a08001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        // Ending Flourish
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004ba0000000400010f04000800011608000c00011b0c001000010f10001400011614001800011b18001c00010f1c002000011620002400019a24002800010f28002c0001162c003000019a30003400010f34003800011638003c00019a40004400010f44004800011648004c00011b4c005000010f50005400011654005800011b58005c00010f5c006000011660006400019a64006800010f68006c0001166c007000019a70007400010f74007800011678007c00019a7c008000010f05001c000f0a006400f4010a0000040000000000000000000000000000000002180000002000010f20004000018b40006000010860008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004ba0000000400010f04000800011608000c00011b0c001000010f10001400011614001800011b18001c00010f1c002000011620002400019a24002800010f28002c0001162c003000019a30003400010f34003800011638003c00019a40004400010f44004800011648004c00011b4c005000010f50005400011654005800011b58005c00010f5c006000011660006400019a64006800010f68006c0001166c007000019a70007400010f74007800011678007c00019a7c008000010f05001c000f0a006400f4010a0000040000000000000000000000000000000002180000002000010f20004000018b40006000010860008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004210000002000020f1b20004000028b974000600002081460007000011270008000011105001c000f0a006400f4010a0000040000000000000000000000000000000002210000002000020f1b20004000028b974000600002081460007000011270008000011109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004060000002000010f05001c000f0a006400f4010a0000040000000000000000000000000000000002060000002000010f09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8005a000000010001020800090001040c000d000102140015000102180019000104200021000102280029000105300031000104380039000105400041000102500051000104600061000102680069000108700071000107780079000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001e00000001000405060708080009000305060710001100020506180019000105`), music.PlaybackMode.UntilDone)
    })
}

function Tutorial() {

}

function Narrate(text: string, speed: number) {
    fancyText.setText(SpeechBalloon, text)
    fancyText.animateAtSpeed(SpeechBalloon, speed, fancyText.AnimationPlayMode.InBackground)
    fancyText.setFont(SpeechBalloon, customFont.BARRIER_font)
}

function CreateMainMenu() {
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
PlaySFX("MenuCHange")        }
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
function DieselSayText(speech: string, speed: number, Emotion: number) {
    if (Emotion == 0) {
        CharBox.setImage(assets.image`DieselStraightFace`)
    } else if (Emotion == 1) {
        CharBox.setImage(assets.image`DieselHappy`)
    } else if (Emotion == 2) {
        CharBox.setImage(assets.image`DieselAngry`)
    } else if (Emotion == 3) {
        CharBox.setImage(assets.image`DieselAnnoyed`)
    } else if (Emotion == 4) {
        CharBox.setImage(assets.image`DieselLoathing`)
    } else if (Emotion == 5) {
        CharBox.setImage(assets.image`DieselSuspicious`)
    } else if (Emotion == 6) {
        CharBox.setImage(assets.image`DieselScared`)
    } else if (Emotion == 7) {
        CharBox.setImage(assets.image`DieselHurt`)
    } else if (Emotion == 8) {
        CharBox.setImage(assets.image`DieselDoubtful`)
    } else if (Emotion == 9) {
        CharBox.setImage(assets.image`DieselEvil`)
    } else if (Emotion == 10) {
        CharBox.setImage(assets.image`DieselExtremelyHurt`)
    } else if (Emotion == 11) {
        CharBox.setImage(assets.image`DieselExtremelyHurt`)
    } else if (Emotion == 12) {
        CharBox.setImage(assets.image`AquiferCruel`)
    } else if (Emotion == 13) {
        CharBox.setImage(assets.image`DieselOutraged`)
    } else if (Emotion == 14) {
        CharBox.setImage(assets.image`DieselWorried`)
    } else if (Emotion == 15) {
        CharBox.setImage(assets.image`DieselSmug`)
    } else if (Emotion == 16) {
        CharBox.setImage(assets.image`DieselCommanding`)
    } else if (Emotion == 17) {
        CharBox.setImage(assets.image`DieselManic`)
    } else {

    }
    fancyText.setText(SpeechBalloon, "<dark purple>DIESEL</dark purple>: " + speech)
    fancyText.setFrame(SpeechBalloon, assets.image`Text`)
    if (!(Silent)) {
        fancyText.setAnimationSound(SpeechBalloon, music.createSoundEffect(WaveShape.Sawtooth, 1, 742, 0, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Linear))
    }
    fancyText.animateAtSpeed(SpeechBalloon, speed, fancyText.AnimationPlayMode.UntilDone)
    pause(1000)
}
function OilAnims() {
    for (let OilValue of sprites.allOfKind(SpriteKind.EnemySrHitbox)) {
        SpriteImage = sprites.readDataSprite(OilValue, "image")
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Oil Surging Left`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Oil Surging Left`,
            85,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Oil Surging Right`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Oil Surging Right`,
            85,
            characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Surging Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Surging Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Surging Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Surging Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Oil Surging Right`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Oil Surging Left`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
    }
    for (let OilValue2 of sprites.allOfKind(SpriteKind.EnemyHitboxCutscene)) {
        SpriteImage = sprites.readDataSprite(OilValue2, "image")
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Oil Left`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Oil Left`,
            85,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Oil Right`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Oil Right`,
            85,
            characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Oil Right`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Oil Left`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
    }
    for (let OilValue3 of sprites.allOfKind(SpriteKind.RivalHitbox)) {
        SpriteImage = sprites.readDataSprite(OilValue3, "image")
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Oil Left`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Oil Left`,
            85,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Oil Right`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Oil Right`,
            85,
            characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Oil Right`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Oil Left`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
    }
    for (let OilValue4 of sprites.allOfKind(SpriteKind.EnemyRHitbox)) {
        SpriteImage = sprites.readDataSprite(OilValue4, "image")
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Oil Left`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Oil Left`,
            85,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Oil Right`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Oil Right`,
            85,
            characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Oil Right`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Oil Left`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
    }
    for (let OilSwordsmanNPC2 of sprites.allOfKind(SpriteKind.EnemyHitbox)) {
        SpriteImage = sprites.readDataSprite(OilSwordsmanNPC2, "image")
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Oil Swordsman Left`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Oil Swordsman Left`,
            85,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Idle Oil Swordsman Right`,
            95,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Run Oil Swordsman Right`,
            85,
            characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Swordsman Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Swordsman Right`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Swordsman Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Jump Oil Swordsman Left`,
            60,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Oil Swordsman Right`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
            SpriteImage,
            assets.animation`Fall Oil Swordsman Left`,
            50,
            characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
    }
}
events.wallEvent(SpriteKind.EnemyHitbox, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StopHitting, function (sprite) {
    basics.make_sprite_jump(sprite, 190)
})
sprites.onOverlap(SpriteKind.Pinecone, SpriteKind.EnemySrHitbox, function (sprite, otherSprite) {
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
function CUTSCENE() {
    timer.after(30, function () {
        if (MISSION == 1) {
            
        } else if (MISSION == 2) {
            PlayerHitbox.vx = 100
            timer.after(900, function () {
                PlayerHitbox.fx = 300
            })
            CreateTextSprite()
            AquiferSayText("This section of forest is all clear!", fancyText.TextSpeed.VeryFast, 1)
            TorrentSayText("Good work... hold on...", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("...", fancyText.TextSpeed.Slow, 0)
            TorrentSayText("We're picking up an <dark purple>oil</dark purple> signal.", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("It's coming from Windbroken Plateau!", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("Track it down, and destroy the source!", fancyText.TextSpeed.VeryFast, 0)
            AquiferSayText("Roger that.", fancyText.TextSpeed.VeryFast, 0)
            timer.after(500, function () {
                sprites.destroy(SpeechBalloon)
                sprites.destroy(CharBox)
                Hailing = true
                MoveAbility = true
                SongStopped = false
                Cold_Hearted_Pale_Hail_Forest()
            })
        } else if (MISSION == 3) {
            MoveAbility = false
            Hailing = false
            CreateTextSprite()
            AquiferSayText("The path ahead is completely blocked...", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("Yes... the <green>GPS</green> is picking up something...", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("An <dark purple>Oil</dark purple> forcefield...", fancyText.TextSpeed.VeryFast, 1)
            TorrentSayText("They're blocking the path to the signal!!!", fancyText.TextSpeed.VeryFast, 1)
            TorrentSayText("You need to find some way around it!!!", fancyText.TextSpeed.VeryFast, 1)
            timer.after(500, function () {
                sprites.destroy(SpeechBalloon)
                sprites.destroy(CharBox)
                basics.make_sprite_jump(PlayerHitbox, 190)
                timer.after(325, function () {
                    for (let value5 of sprites.allOfKind(SpriteKind.Ally)) {
                        value5.z = -11
                    }
                    Aquifer.z = -11
                    color.startFadeFromCurrent(color.Black, 1000)
                    timer.after(1000, function () {
                        if (PlayingSingleMission) {
                            game.reset()
                        } else {
                            Lvl += 1
                            LevelSetup(Lvl)
                            color.startFadeFromCurrent(color.originalPalette, 200)
                        }
                    })
                })
            })
        } else if (MISSION == 4) {
            PlayerHitbox.vx = 100
            PlayerHitbox.fx = 0
            timer.after(900, function () {
                PlayerHitbox.fx = 300
            })
            StormyNS = true
            CreateTextSprite()
            TorrentSayText("<light purple>Tsunami Squad</light purple>, present?", fancyText.TextSpeed.VeryFast, 0)
            AquiferSayText("This is <light purple>Tsunami Squad</lightpurple>.", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("The signal has expanded on our radar.", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("The <green>GPS</green> says you're near the source.", fancyText.TextSpeed.VeryFast, 0)
            AquiferSayText("What's causing it?", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("It looks like a <red>beacon</red>. A large one...", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("Take it out.", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("There should be a destruct button somewhere.", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("Try going as far as possible...", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("And defeat any Oil troops you come across.", fancyText.TextSpeed.VeryFast, 0)
            AquiferSayText("Understood.", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("<teal>Torrent</teal> out.", fancyText.TextSpeed.VeryFast, 0)
            timer.after(500, function () {
                sprites.destroy(SpeechBalloon)
                sprites.destroy(CharBox)
                MoveAbility = true
                SongStopped = false
                Painstricken_Nitro_Stun()
            })
        } else if (MISSION == 5) {
            PlayerHitbox.vx = 100
            PlayerHitbox.fx = 0
            timer.after(900, function () {
                PlayerHitbox.fx = 300
            })
            CreateTextSprite()
            AquiferSayText("We've located the <red>beacon</red>.", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("Good work. Activate it.", fancyText.TextSpeed.VeryFast, 0)
            AquiferSayText("Copy that.", fancyText.TextSpeed.VeryFast, 0)
            basics.make_sprite_jump(PlayerHitbox, 150)
            PlaySFX("Jump")
            characterAnimations.setCharacterAnimationsEnabled(Aquifer, false)
            timer.after(100, function () {
                animation.runImageAnimation(
                    Aquifer,
                    assets.animation`Punch Water Right`,
                    75,
                    false
                )
                PlaySFX("Punch")
                timer.after(8 * 75, function () {
                    characterAnimations.setCharacterAnimationsEnabled(Aquifer, true)
                })
                timer.after(4 * 75, function () {
                    PlaySFX("ChargeUp")
                    timer.after(2000, function () {
                        scene.cameraShake(6, 30000)
                        timer.background(function () {
                            for (let index = 0; index < 25; index++) {
                                if (!(Silent)) {
                                    PlaySFX("Rumble")
                                }
                            }
                        })
                        timer.after(100, function () {
                            AquiferSayText("<shaky>HOLY-!!!</shaky>", fancyText.TextSpeed.VeryFast, 6)
                            TorrentSayText("<cyan>AQUIFER</cyan>?! Are you there?! What's going on?!", fancyText.TextSpeed.VeryFast, 0)
                            AquiferSayText("The entire <wavy>PLATEAU</wavy> is crumbling!!!", fancyText.TextSpeed.VeryFast, 10)
                            TorrentSayText("Uh... Yes.", fancyText.TextSpeed.VeryFast, 0)
                            TorrentSayText("It's a DESTRUCT BUTTON, what'd you expect?", fancyText.TextSpeed.VeryFast, 0)
                            Silent = true
                            music.stopAllSounds()
                            PlaySFX("ChargeUpIntense")
                            sprites.destroy(SpeechBalloon)
                            sprites.destroy(CharBox)
                            CreateTextSprite()
                            AquiferSayText("<shaky>YOU COULD'VE SAID SOMETHING ABOUT THIS!!!</shaky>", fancyText.TextSpeed.VeryFast, 13)
                            TorrentSayText("IT DOESN'T MATTER, JUST <shaky>RUN!!!</shaky>", fancyText.TextSpeed.VeryFast, 1)
                            PlayerHitbox.vx = 100
                            PlayerHitbox.fx = 0
                            timer.after(5500, function () {
                                PlayerHitbox.fx = 300
                                timer.after(500, function () {
                                    sprites.destroy(SpeechBalloon)
                                    sprites.destroy(CharBox)
                                    MoveAbility = true
                                    SongStopped = false
                                    StormyNS = true
                                    ExplosionY = 8
                                    for (let index = 0; index < 25; index++) {
                                        Explosion = sprites.create(assets.image`Explosion`, SpriteKind.Explode)
                                        for (let location3 of tiles.getTilesByType(assets.tile`BeaconButton`)) {
                                            Explosion.x = location3.x
                                            Explosion.y = ExplosionY
                                        }
                                        Explosion.setFlag(SpriteFlag.GhostThroughWalls, true)
                                        Explosion.vx = 50
                                        ExplosionY += 16
                                    }
                                    Death_And_Destruction_Beacon()
                                })
                            })
                        })
                    })
                })
            })
        } else if (MISSION == 6) {
            PlayerHitbox.vx = 100
            PlayerHitbox.fx = 0
            timer.after(450, function () {
                PlayerHitbox.fx = 300
            })
            CreateTextSprite()
            AquiferSayText("The <red>beacon</red> has been destroyed!", fancyText.TextSpeed.VeryFast, 1)
            TorrentSayText("Alright.", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("Then your mission is complete.", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("Return to home base.", fancyText.TextSpeed.VeryFast, 0)
            AquiferSayText("Affirmative.", fancyText.TextSpeed.VeryFast, 0)
            CreateDiesel()
            tiles.placeOnTile(DieselHitbox, tiles.getTileLocation(0, 16))
            DieselHitbox.vx = 200
            PlaySFX("Zoom")
            timer.after(200, function () {
                DieselHitbox.fx = 300
                AquiferSayText("<shaky><dark purple>DIESEL</dark purple>!?!?<shaky>", fancyText.TextSpeed.VeryFast, 10)
                timer.after(800, function () {
                    characterAnimations.setCharacterState(DieselImage, characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving))
                })
                DieselSayText("<wavy><cyan>AQUIFER</cyan>.</wavy>", fancyText.TextSpeed.VeryFast, 9)
                AquiferSayText("<shaky>WHAT ARE YOU DOING HERE!?!?!?<shaky>", fancyText.TextSpeed.VeryFast, 13)
                DieselSayText("I'm looking for something...", fancyText.TextSpeed.VeryFast, 0)
                DieselSayText("Something called <shaky>revenge</shaky>.", fancyText.TextSpeed.VeryFast, 2)
                DieselSayText("You have caused too much damage...", fancyText.TextSpeed.VeryFast, 4)
                DieselSayText("And you <shaky>will</shaky> pay for it!", fancyText.TextSpeed.VeryFast, 9)
                timer.after(800, function () {
                    characterAnimations.clearCharacterState(DieselImage)
                    DieselHitbox.vx = 100
                    DieselHitbox.fx = 0
                    timer.after(1200, function () {
                        SongStopped = true
                        AquiferSayText("<teal>Torrent</teal>, <green>GPS</green>! <shaky>NOW!!!</shaky>", fancyText.TextSpeed.VeryFast, 2)
                        TorrentSayText("I'm tracking him...", fancyText.TextSpeed.VeryFast, 1)
                        AquiferSayText("Come <shaky>ON!!!</shaky>", fancyText.TextSpeed.Slow, 2)
                        TorrentSayText("Almost...", fancyText.TextSpeed.Slow, 1)
                        TorrentSayText("Ah, got him!", fancyText.TextSpeed.VeryFast, 1)
                        TorrentSayText("Fury Peak! <shaky>AS FAST AS POSSIBLE!</shaky>", fancyText.TextSpeed.VeryFast, 1)
                        AquiferSayText("Copy that! <shaky>EVERYONE, AFTER HIM!!!</shaky>", fancyText.TextSpeed.VeryFast, 16)
                        SwapSong()
                        timer.after(1000, function () {
                            characterAnimations.clearCharacterState(Aquifer)
                            sprites.destroy(DieselHitbox)
                            sprites.destroy(DieselImage)
                            sprites.destroy(SpeechBalloon)
                            sprites.destroy(CharBox)
                            MoveAbility = true
                            SongStopped = false
                            StormyNS = true
                            Painstricken_Nitro_Stun()
                        })
                    })
                })
            })
        } else if (MISSION == 7) {
            PlayerHitbox.vx = 100
            PlayerHitbox.fx = 0
            timer.after(250, function () {
                PlayerHitbox.fx = 300
            })
            CreateTextSprite()
            AquiferSayText("Torrent, we've arrived at Fury Peak.", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("Any sign of <dark purple>Diesel</dark purple>?", fancyText.TextSpeed.VeryFast, 0)
            AquiferSayText("No, we've lost him.", fancyText.TextSpeed.VeryFast, 0)
            TorrentSayText("Hmm... Scout around; see if you can find h-", fancyText.TextSpeed.VeryFast, 0)
            CreateDiesel()
            tiles.placeOnTile(DieselHitbox, tiles.getTileLocation(8, 11))
            basics.make_sprite_jump(DieselHitbox, 190)
            PlaySFX("Jump")
            SongStopped = false
            Enemy_Encounter_Diesels_Theme()
            timer.after(500, function () {
                DieselHitbox.vx = -100
                DieselHitbox.fx = 100
                AquiferSayText("<teal>Torrent</teal>! We've found him!", fancyText.TextSpeed.VeryFast, 2)
                DieselSayText("<shaky>IDIOT!!</shaky> I knew you'd follow me!", fancyText.TextSpeed.VeryFast, 9)
                AquiferSayText("You're outnumbered!", fancyText.TextSpeed.VeryFast, 4)
                TorrentSayText("No... He's not.", fancyText.TextSpeed.VeryFast, 0)
                TorrentSayText("The <green>GPS</green> picked up many threats nearby...", fancyText.TextSpeed.VeryFast, 1)
                DieselSayText("That's right...", fancyText.TextSpeed.VeryFast, 4)
                DieselSayText("So now you can see who's REALLY outnumbered!", fancyText.TextSpeed.VeryFast, 9)
                DieselSayText("CARBON SQUAD! <shaky>AMBUSH!!!</shaky>", fancyText.TextSpeed.VeryFast, 16)
                for (let value6 of tiles.getTilesByType(assets.tile`OilSwordsmanSpawner`)) {
                    OilHitbox = sprites.create(assets.image`OilHitbox`, SpriteKind.EnemyHitboxCutscene)
                    sprites.setDataNumber(OilHitbox, "SpawnX", value6.x)
                    sprites.setDataNumber(OilHitbox, "SpawnY", value6.y)
                    OilHitbox.setFlag(SpriteFlag.Invisible, true)
                    OilNPC = sprites.create(assets.image`OilHitbox`, SpriteKind.Enemy)
                    sprites.setDataSprite(OilHitbox, "image", OilNPC)
                    OilNPC.setFlag(SpriteFlag.GhostThroughWalls, true)
                    tiles.placeOnTile(OilHitbox, value6)
                    tiles.setTileAt(value6, assets.tile`MAStone`)
                    basics.add_gravity_to(OilHitbox)
                    OilHealth = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
                    OilHealth.setColor(12, 15)
                    OilHealth.setBarBorder(1, 15)
                    OilHealth.max = 2
                    OilHealth.attachToSprite(OilHitbox)
                    basics.make_sprite_jump(OilHitbox, 190)
                    OilHitbox.vx = -100
                    OilHitbox.fx = 300
                    timer.after(500, function () {
                        tiles.setWallAt(value6, true)
                    })
                }
                OilAnims()
                color.startFadeFromCurrent(color.Black, 3500)
                DieselSayText("HAHAHAH!!! GOOD LUCK, <shaky><cyan>AQUIFER</cyan>!!!</shaky>", fancyText.TextSpeed.VeryFast, 17)
                color.pauseUntilFadeDone()
                Reset()
                sprites.destroy(SpeechBalloon)
                tiles.setCurrentTilemap(tilemap`level11`)
                CreateTextNoSpeech("<wavy>CHAPTER 2 COMING SOON", 120, 120, 1)
                color.startFadeFromCurrent(color.originalPalette, 1000)
            })
        } else {

        }
    })
}
function CreateTextNoSpeech(Text: string, XPos: number, YPos: number, Color: number) {
    SpeechBalloon = fancyText.create(Text, 0, Color, customFont.BARRIER_font)
    SpeechBalloon.setPosition(XPos, YPos)
    SpeechBalloon.z = 1002
}
sprites.onOverlap(SpriteKind.AllyHitbox, SpriteKind.EnemyHitbox, function (sprite, otherSprite) {
    if (Math.percentChance(75)) {
        PlaySFX("DamageAlly")
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
function Enemy_Encounter_Diesels_Theme() {
    timer.background(function () {
        while (!(SongStopped)) {
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0078000408020500001c00010a006400f4016400000400000000000000000000000000050000042a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a103001c0001dc00690000045e01000400000000000000000000056400010400032a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a105001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800010f08001000010f10001800010f18002000010f20002800018e28003000018e30003800018e38004000018e06001c00010a006400f401640000040000000000000000000000000000000002300000000800010f08001000010f10001800010f18002000010f20002800018e28003000018e30003800018e38004000018e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8004e000000010001010800090003120107100011000101140015000101180019000212071c001d0001012000210001012800290003120107300031000101340035000101380039000212073c003d000101`), music.PlaybackMode.UntilDone)
                music.play(music.createSong(hex`0078000408020500001c00010a006400f401640000040000000000000000000000000005000004300000000c0001220c001000011b10001800011b18002000011d20002800011e28003000011d30003800011e38004000012003001c0001dc00690000045e0100040000000000000000000005640001040003300000000c0001220c001000011b10001800011b18002000011d20002800011e28003000011d30003800011e38004000012005001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800018b08001000018b10001800018b18002000018b20002800010a28003000010a30003800010a38004000010a06001c00010a006400f401640000040000000000000000000000000000000002300000000800018b08001000018b10001800018b18002000018b20002800010a28003000010a30003800010a38004000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8004e000000010001010800090003120107100011000101140015000101180019000212071c001d0001012000210001012800290003120107300031000101340035000101380039000212073c003d000101`), music.PlaybackMode.UntilDone)
                music.play(music.createSong(hex`0078000408020500001c00010a006400f4016400000400000000000000000000000000050000042a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a103001c0001dc00690000045e01000400000000000000000000056400010400032a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a105001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800010f08001000010f10001800010f18002000010f20002800018e28003000018e30003800018e38004000018e06001c00010a006400f401640000040000000000000000000000000000000002300000000800010f08001000010f10001800010f18002000010f20002800018e28003000018e30003800018e38004000018e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8004e000000010001010800090003120107100011000101140015000101180019000212071c001d0001012000210001012800290003120107300031000101340035000101380039000212073c003d000101`), music.PlaybackMode.UntilDone)
                music.play(music.createSong(hex`0078000408020500001c00010a006400f4016400000400000000000000000000000000050000040c0000002000012720004000012203001c0001dc00690000045e01000400000000000000000000056400010400030c0000002000012720004000012205001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800018b08001000018b10001800018b18002000018b20002800010a28003000010a30003800010a38004000010a06001c00010a006400f401640000040000000000000000000000000000000002300000000800018b08001000018b10001800018b18002000018b20002800010a28003000010a30003800010a38004000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8004e000000010001010800090003120107100011000101140015000101180019000212071c001d0001012000210001012800290003120107300031000101340035000101380039000212073c003d000101`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0078000408080500001c00010a006400f401640000040000000000000000000000000005000004900000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140004c0001224c005000011b50005800011b58006000011d60006800011e68007000011d70007800011e78008000012080008c00011b8c00900001229000ac000122ac00b0000122b000b60001a3b600bc000122bc00c00001a1c000e000011be0000001019a03001c0001dc00690000045e0100040000000000000000000005640001040003900000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140004c0001224c005000011b50005800011b58006000011d60006800011e68007000011d70007800011e78008000012080008c00011b8c00900001229000ac000122ac00b0000122b000b60001a3b600bc000122bc00c00001a1c000e000011be0000001019a05001c000f0a006400f4010a0000040000000000000000000000000000000002c00000000800010f08001000010f10001800010f18002000010f20002800018e28003000018e30003800018e38004000018e40004800018b48005000018b50005800018b58006000018b60006800010a68007000010a70007800010a78008000010a80008800010f88009000010f90009800010f9800a000010fa000a800018ea800b000018eb000b800018eb800c000018ec000c800018bc800d000018bd000d800018bd800e000018be000e800010ae800f000010af000f800010af8000001010a06001c00010a006400f401640000040000000000000000000000000000000002c00000000800010f08001000010f10001800010f18002000010f20002800018e28003000018e30003800018e38004000018e40004800018b48005000018b50005800018b58006000018b60006800010a68007000010a70007800010a78008000010a80008800010f88009000010f90009800010f9800a000010fa000a800018ea800b000018eb000b800018eb800c000018ec000c800018bc800d000018bd000d800018bd800e000018be000e800010ae800f000010af000f800010af8000001010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80038010000010001010800090003120107100011000101140015000101180019000212071c001d0001012000210001012800290003120107300031000101340035000101380039000212073c003d0001014000410001014800490003120107500051000101540055000101580059000212075c005d0001016000610001016800690003120107700071000101740075000101780079000212077c007d0001018000810001018800890003120107900091000101940095000101980099000212079c009d000101a000a1000101a800a90003120107b000b1000101b400b5000101b800b900021207bc00bd000101c000c1000101c800c90003120107d000d1000101d400d5000101d800d900021207dc00dd000101e000e1000101e800e90003120107f000f1000101f400f5000101f800f900021207fc00fd000101`), music.PlaybackMode.UntilDone)
            }
        }
    })
}

function CreateDiesel() {
    DieselHitbox = sprites.create(assets.image`OilHitbox`, SpriteKind.RivalHitbox)
    basics.add_gravity_to(DieselHitbox)
    DieselHitbox.setFlag(SpriteFlag.Invisible, true)
    DieselImage = sprites.create(assets.image`Diesel`, SpriteKind.RivalImage)
    DieselImage.setFlag(SpriteFlag.GhostThroughWalls, true)
    sprites.setDataSprite(DieselHitbox, "image", DieselImage)
    OilAnims()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.EnemyHitbox, function (sprite, otherSprite) {
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
function SwapSong() {
    SongStopped = true
    music.stopAllSounds()
}
// 2=slingshot
// (currently not in use6
browserEvents.Three.onEvent(browserEvents.KeyEvent.Pressed, function () {

})
sprites.onOverlap(SpriteKind.Pinecone, SpriteKind.EnemyRHitbox, function (sprite, otherSprite) {
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
events.wallEvent(SpriteKind.EnemyRHitbox, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StopHitting, function (sprite) {
    basics.make_sprite_jump(sprite, 190)
})
scene.onOverlapTile(SpriteKind.AllyHitbox, assets.tile`NSSpikeDown`, function (sprite, location) {
    basics.make_sprite_jump(sprite, 190)
    PlaySFX("DamageAlly")
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
function FadeToLogoPalette() {
    BarrierLogo = sprites.create(assets.image`BARRIERLOGO`, SpriteKind.Player)
    BarrierLogo.setScale(3, ScaleAnchor.Middle)
    color.setPalette(
        color.Black
    )
    color.startFadeFromCurrent(color.Barrier)
    music.play(music.createSong(hex`0078000408050405001c000f0a006400f4010a000004000000000000000000000000000000000236001c002000011620003c00011b3c003e00011b3e004000011d40004800011e48005000011d50005400011b54005c0001195c008000011b07001c00020a006400f40164000004000000000000000000000000000000000336001c002000011620003c00011b3c003e00011b3e004000011d40004800011e48005000011d50005400011b54005c0001195c008000011b08001c000e050046006603320000040a002d0000006400140001320002010002120020004000011440006000019760008000011b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80085000000010001061000110001062000210001063000310001064000410001064800490001065000510001065800590001066000610001066400650001066800690001066c006d00010670007100010672007300010674007500010676007700010678007900010679007a0001067a007b0001067b007c00010680008100080102030405060708`), music.PlaybackMode.UntilDone)
    color.startFadeFromCurrent(color.Black)
    color.pauseUntilFadeDone()
    sprites.destroy(BarrierLogo)
}
scene.onOverlapTile(SpriteKind.EnemySrHitbox, assets.tile`PHFSpike`, function (sprite, location) {
    if (basics.get_proximity(
        sprite,
        PlayerHitbox,
        scene.screenWidth() / 2,
        Way.Both
    )) {
        if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value > 1) {
            PlaySFX("DamageEnemy")        }
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
function Death_And_Destruction_Beacon() {
    timer.background(function () {
        SongIntro = true
        while (!(SongStopped)) {
            if (SongIntro) {
                SongIntro = false
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020401001c000f05001202c102c201000405002800000064002800031400060200041e000000080001240800180001a318002800011e28003800019f38004000011b05001c000f0a006400f4010a00000400000000000000000000000000000000021e000000080001240800180001a318002800011e28003800019f38004000011b07001c00020a006400f4016400000400000000000000000000000000000000031e000000080001240800180001a318002800011e28003800019f38004000011b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020401001c000f05001202c102c201000405002800000064002800031400060200041e0000000800011b08001800011d18002800019a28003800011b38004000019705001c000f0a006400f4010a00000400000000000000000000000000000000021e0000000800011b08001800011d18002800019a28003800011b38004000019707001c00020a006400f4016400000400000000000000000000000000000000031e0000000800011b08001800011d18002800019a28003800011b38004000019709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020501001c000f05001202c102c201000405002800000064002800031400060200040c0000002000011820004000011805001c000f0a006400f4010a00000400000000000000000000000000000000020c0000002000011820004000011807001c00020a006400f4016400000400000000000000000000000000000000030c0000002000011820004000011808001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010620004000010609010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020501001c000f05001202c102c201000405002800000064002800031400060200040c0000002000019720002400019a05001c000f0a006400f4010a00000400000000000000000000000000000000020c0000002000019720002400019a07001c00020a006400f4016400000400000000000000000000000000000000030c0000002000019720002400019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000018720002400018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003e0000000100010108000900020104100011000101180019000201042000210001012800290001013000310001013400350001013800390001013c003d000101`), music.PlaybackMode.UntilDone)
                }
            }
            for (let index = 0; index < 4; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400011804000800019a08000c00011b0c001000011810001400019a14001800011b18001c0001181c002000019a20002400011b24002800011828002c00019a2c003000011b30003400011834003800019a38003c00011b3c004000011807001c00020a006400f401640000040000000000000000000000000000000003600000000400011804000800019a08000c00011b0c001000011810001400019a14001800011b18001c0001181c002000019a20002400011b24002800011828002c00019a2c003000011b30003400011834003800019a38003c00011b3c004000011808001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a00000400000000000000000000000000000000025a0000000400019a04000800011b08000c0001180c001000019a10001400011b14001800011818001c00019a1c002000011b20002400011824002800019a28002c00011b2c003000011830003400019a34003800011b38003c00011807001c00020a006400f401640000040000000000000000000000000000000003600000000400019a04000800011b08000c0001180c001000019a10001400011b14001800011818001c00019a1c002000011b20002400011824002800019a28002c00011b2c003000011830003400019a34003800011b38003c0001183c004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
            }
            for (let index = 0; index < 2; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a07001c00020a006400f401640000040000000000000000000000000000000003300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a07001c00020a006400f401640000040000000000000000000000000000000003300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a07001c00020a006400f401640000040000000000000000000000000000000003300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800011808001000019a10001800011b18002000011d20002800011b28003000019a30003800011838004000019707001c00020a006400f401640000040000000000000000000000000000000003300000000800011808001000019a10001800011b18002000011d20002800011b28003000019a30003800011838004000019708001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
            }
            for (let index = 0; index < 2; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a00000400000000000000000000000000000000025a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000019f07001c00020a006400f4016400000400000000000000000000000000000000035a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000019f08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a00000400000000000000000000000000000000025a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000012007001c00020a006400f4016400000400000000000000000000000000000000035a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000012008001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a00000400000000000000000000000000000000025a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000019f07001c00020a006400f4016400000400000000000000000000000000000000035a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000019f08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020501001c000f05001202c102c20100040500280000006400280003140006020004120000002000011820003000019730004000019a05001c000f0a006400f4010a0000040000000000000000000000000000000002120000002000011820003000019730004000019a07001c00020a006400f401640000040000000000000000000000000000000003120000002000011820003000019730004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
            }
            for (let index = 0; index < 2; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a07001c00020a006400f401640000040000000000000000000000000000000003300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a07001c00020a006400f401640000040000000000000000000000000000000003300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a07001c00020a006400f401640000040000000000000000000000000000000003300000000800011808001000019a10001800011b18002000011d20002800019f28003000011d30003800011b38004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a0000040000000000000000000000000000000002300000000800011808001000019a10001800011b18002000011d20002800011b28003000019a30003800011838004000019707001c00020a006400f401640000040000000000000000000000000000000003300000000800011808001000019a10001800011b18002000011d20002800011b28003000019a30003800011838004000019708001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a00000400000000000000000000000000000000025a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000019f07001c00020a006400f4016400000400000000000000000000000000000000035a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000019f08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a00000400000000000000000000000000000000025a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000012007001c00020a006400f4016400000400000000000000000000000000000000035a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000012008001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a00000400000000000000000000000000000000025a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000019f07001c00020a006400f4016400000400000000000000000000000000000000035a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000019f08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0004010408020501001c000f05001202c102c20100040500280000006400280003140006020004120000002000011820003000019730004000019a05001c000f0a006400f4010a0000040000000000000000000000000000000002120000002000011820003000019730004000019a07001c00020a006400f401640000040000000000000000000000000000000003120000002000011820003000019730004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a00000400000000000000000000000000000000025a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000019f07001c00020a006400f4016400000400000000000000000000000000000000035a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000019f08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a00000400000000000000000000000000000000025a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000012007001c00020a006400f4016400000400000000000000000000000000000000035a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000012008001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0004010408020405001c000f0a006400f4010a00000400000000000000000000000000000000025a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000012207001c00020a006400f4016400000400000000000000000000000000000000035a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a38004000012208001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0004010408020501001c000f05001202c102c2010004050028000000640028000314000602000406003800400001a305001c000f0a006400f4010a00000400000000000000000000000000000000025a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a3800400001a307001c00020a006400f4016400000400000000000000000000000000000000035a0000000400011804000800019a08000c00011b0c001000011d10001400011b14001800019a18001c0001181c002000019a20002400011b24002800011d28002c00011b2c003000019a30003400011834003800019a3800400001a308001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
            }
            for (let index = 0; index < 2; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020501001c000f05001202c102c201000405002800000064002800031400060200040c000000200001242000400001a305001c000f0a006400f4010a00000400000000000000000000000000000000020c000000200001242000400001a307001c00020a006400f4016400000400000000000000000000000000000000030c000000200001242000400001a308001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020501001c000f05001202c102c201000405002800000064002800031400060200040c0000002000012020004000019f05001c000f0a006400f4010a00000400000000000000000000000000000000020c0000002000012020004000019f07001c00020a006400f4016400000400000000000000000000000000000000030c0000002000012020004000019f08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020501001c000f05001202c102c201000405002800000064002800031400060200040c0000002000011b20004000019a05001c000f0a006400f4010a00000400000000000000000000000000000000020c0000002000011b20004000019a07001c00020a006400f4016400000400000000000000000000000000000000030c0000002000011b20004000019a08001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010c20004000018b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0004010408020501001c000f05001202c102c201000405002800000064002800031400060200040c0000002000011820004000019705001c000f0a006400f4010a00000400000000000000000000000000000000020c0000002000011820004000019707001c00020a006400f4016400000400000000000000000000000000000000030c0000002000011820004000019708001c000e050046006603320000040a002d00000064001400013200020100020c0000002000010820004000018709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800340000000100010108000900020104100011000101180019000201042000210001012800290002010430003100010138003900020104`), music.PlaybackMode.UntilDone)
                }
            }
        }
    })
}
sprites.onOverlap(SpriteKind.EnemySrHitbox, SpriteKind.Player, function (sprite, otherSprite) {
    if (AquiferATKing) {
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
                assets.animation`ATK oil surging left`,
                50,
                characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil surging left`,
                50,
                characterAnimations.rule(Predicate.MovingLeft)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil surging right`,
                50,
                characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil surging right`,
                50,
                characterAnimations.rule(Predicate.MovingRight)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil surging left`,
                50,
                characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil surging left`,
                50,
                characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil surging right`,
                50,
                characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil surging right`,
                50,
                characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil surging left`,
                50,
                characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
            )
            characterAnimations.loopFrames(
                sprites.readDataSprite(sprite, "image"),
                assets.animation`ATK oil surging right`,
                50,
                characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
            )
            timer.after(50, function () {
                scene.cameraShake(5, 200)
                PlayerHealth.value += -2
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
            timer.after(11 * 50, function () {
                characterAnimations.setCharacterAnimationsEnabled(sprites.readDataSprite(sprite, "image"), false)
                characterAnimations.setCharacterAnimationsEnabled(sprites.readDataSprite(sprite, "image"), true)
                OilAnims()
            })
        }
    }
    pause(600)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`NSSpikeLeft`, function (sprite, location) {
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
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MoveAbility) {
        PauseGame()
    }
})
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.RivalHitbox, function (sprite, otherSprite) {
    if (SongStopped) {
        SongStopped = false
        Enemy_Encounter_Diesels_Theme()
    }
    PlaySFX("DamagePlayer")
    basics.make_sprite_jump(sprite, 190)
    sprite.vx = -100
    characterAnimations.setCharacterAnimationsEnabled(Aquifer, false)
    animation.runImageAnimation(
        Aquifer,
        assets.animation`Fly Water Right`,
        95,
        false
    )
    timer.after(350, function () {
        sprite.fx = 300
        timer.after(600, function () {
            characterAnimations.setCharacterAnimationsEnabled(Aquifer, true)
            characterAnimations.clearCharacterState(Aquifer)
            characterAnimations.setCharacterState(Aquifer, characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving))
        })
    })
})
function PauseGame() {
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
        } else {
            game.reset()
        }
    })
    MenuSprite.onButtonPressed(controller.menu, function (selection, selectedIndex) {
        for (let index = 0; index < 4; index++) {
            timer.background(function () {
                PlaySFX("MenuSelect")
            })
        }
        if (selection == "RESUME GAME") {
            MenuSprite.close()
            game.popScene()
        } else {
            game.reset()
        }
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`FINISH`, function (sprite, location) {
    if (PlayingSingleMission) {
        game.reset()
    } else {
        Lvl += 1
        LevelSetup(Lvl)
    }
})
events.wallEvent(SpriteKind.EnemySrHitbox, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StopHitting, function (sprite) {
    basics.make_sprite_jump(sprite, 250)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createFullPresetsSpreadEffectData(ExtraEffectPresetColor.Ice, ExtraEffectPresetShape.Cloud), 100, 20, 10)
    PineconeOnGround = sprites.create(assets.image`PineconeRight`, SpriteKind.PickUp)
    PineconeOnGround.setPosition(sprite.x, sprite.y)
    PineconeOnGround.ay = 500
    PineconeOnGround.vy = -150
})
function Reset() {
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
function CreateCh1Menu() {
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
PlaySFX("MenuCHange")        }
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`NSSpikeDown`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.AllyHitbox, assets.tile`NSSpikeRight`, function (sprite, location) {
    basics.make_sprite_jump(sprite, 190)
    PlaySFX("DamageAlly")
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
function AquiferSayText(speech: string, speed: number, Emotion: number) {
    if (Emotion == 0) {
        CharBox.setImage(assets.image`AquiferStraightFace`)
    } else if (Emotion == 1) {
        CharBox.setImage(assets.image`AquiferHappy`)
    } else if (Emotion == 2) {
        CharBox.setImage(assets.image`AquiferAngry`)
    } else if (Emotion == 3) {
        CharBox.setImage(assets.image`AquiferAnnoyed`)
    } else if (Emotion == 4) {
        CharBox.setImage(assets.image`AquiferLoathing`)
    } else if (Emotion == 5) {
        CharBox.setImage(assets.image`AquiferSuspicious`)
    } else if (Emotion == 6) {
        CharBox.setImage(assets.image`AquiferScared`)
    } else if (Emotion == 7) {
        CharBox.setImage(assets.image`AquiferHurt`)
    } else if (Emotion == 8) {
        CharBox.setImage(assets.image`AquiferDoubtful`)
    } else if (Emotion == 9) {
        CharBox.setImage(assets.image`AquiferEvil`)
    } else if (Emotion == 10) {
        CharBox.setImage(assets.image`AquiferAstonished`)
    } else if (Emotion == 11) {
        CharBox.setImage(assets.image`AquiferExtremelyHurt`)
    } else if (Emotion == 12) {
        CharBox.setImage(assets.image`AquiferCruel`)
    } else if (Emotion == 13) {
        CharBox.setImage(assets.image`AquiferOutraged`)
    } else if (Emotion == 14) {
        CharBox.setImage(assets.image`AquiferWorried`)
    } else if (Emotion == 15) {
        CharBox.setImage(assets.image`AquiferSmug`)
    } else if (Emotion == 16) {
        CharBox.setImage(assets.image`AquiferCommanding`)
    }
    fancyText.setText(SpeechBalloon, "<cyan>AQUIFER</cyan>: " + speech)
    fancyText.setFrame(SpeechBalloon, assets.image`Text`)
    if (!(Silent)) {
        fancyText.setAnimationSound(SpeechBalloon, music.createSoundEffect(WaveShape.Sawtooth, 987, 0, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Linear))
    }
    fancyText.animateAtSpeed(SpeechBalloon, speed, fancyText.AnimationPlayMode.UntilDone)
    pause(1000)
}
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
function Outline(Color: number, Sprite2: Sprite) {
    for (let index = 0; index <= Sprite2.width - 1; index++) {
        for (let height = 0; height <= Sprite2.height - 1; height++) {
            if (Sprite2.image.getPixel(index, height) != 0 && Sprite2.image.getPixel(index, height) != Color) {
                if (EmptyNearby(Sprite2, index, height)) {
                    if (Sprite2.image.getPixel(index, height - 1) == 0) {
                        Sprite2.image.setPixel(index, height - 1, Color)
                    }
                    if (Sprite2.image.getPixel(index, height + 1) == 0) {
                        Sprite2.image.setPixel(index, height + 1, Color)
                    }
                    if (Sprite2.image.getPixel(index - 1, height) == 0) {
                        Sprite2.image.setPixel(index - 1, height, Color)
                    }
                    if (Sprite2.image.getPixel(index + 1, height) == 0) {
                        Sprite2.image.setPixel(index + 1, height, Color)
                    }
                }
            }
        }
    }
}
scene.onOverlapTile(SpriteKind.EnemySrHitbox, assets.tile`NSSpikeUp`, function (sprite, location) {
    if (basics.get_proximity(
        sprite,
        PlayerHitbox,
        scene.screenWidth() / 2,
        Way.Both
    )) {
        if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value > 1) {
            PlaySFX("DamageEnemy")        }
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
sprites.onOverlap(SpriteKind.EnemyRHitbox, SpriteKind.Player, function (sprite, otherSprite) {
    if (AquiferATKing) {
        if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value > 1) {
            PlaySFX("DamageEnemy")        }
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.PickUp, function (sprite, otherSprite) {
    if (PineconeNumber < 100) {
        sprites.destroy(otherSprite)
        PineconeNumber += 1
    }
})
// 1=sword
browserEvents.Two.onEvent(browserEvents.KeyEvent.Pressed, function () {
    WeaponHolding = 1
    WeaponUI.setImage(assets.image`swordUI`)
})
sprites.onOverlap(SpriteKind.Pinecone, SpriteKind.EnemyHitbox, function (sprite, otherSprite) {
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
sprites.onOverlap(SpriteKind.AllyHitbox, SpriteKind.EnemyRHitbox, function (sprite, otherSprite) {
    if (Math.percentChance(75)) {
        PlaySFX("DamageEnemy")
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
scene.onOverlapTile(SpriteKind.AllyHitbox, assets.tile`PHFSpike`, function (sprite, location) {
    basics.make_sprite_jump(sprite, 190)
    PlaySFX("DamageAlly")
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.EnemyRHitbox, function (sprite, otherSprite) {
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
function Backstory() {
    color.setPalette(
        color.originalPalette
    )
    Prologue = sprites.create(assets.image`45x45RESET`, SpriteKind.NA)
    Prologue.setScale(5, ScaleAnchor.Middle)
    animation.runImageAnimation(
        Prologue,
        assets.animation`Panel3`,
        100,
        false
    )
    timer.after(2200, function () {

    })
}
// 0=pinecones
browserEvents.One.onEvent(browserEvents.KeyEvent.Pressed, function () {
    WeaponHolding = 0
    WeaponUI.setImage(assets.image`pineconeUI`)
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
scene.onOverlapTile(SpriteKind.AllyHitbox, assets.tile`NSSpikeLeft`, function (sprite, location) {
    basics.make_sprite_jump(sprite, 190)
    PlaySFX("DamageAlly")
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
sprites.onOverlap(SpriteKind.Lightning, SpriteKind.Player, function (sprite, otherSprite) {
    PlayerHealth.value = 0
    SwapSong()
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1163, 1, 255, 0, 900, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 250, 1, 255, 0, 900, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 2251, 1, 255, 0, 900, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 1, 742, 255, 0, 900, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
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
function SetUpOilNum() {
    OilNum = sprites.allOfKind(SpriteKind.EnemyHitbox).length + sprites.allOfKind(SpriteKind.EnemyRHitbox).length + sprites.allOfKind(SpriteKind.EnemySrHitbox).length
}
function Cold_Hearted_Pale_Hail_Forest() {
    timer.background(function () {
        while (!(SongStopped)) {
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0078000408020305001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400011404000800011408000c0001140c001000011410001400011414001800011418001c0001141c002000011420002400011424002800011428002c0001142c003000011430003400011434003800011438003c0001143c004000011407001c00020a006400f401640000040000000000000000000000000000000003600000000400012004000800012708000c0001250c00100001a310001400012514001800012718001c0001251c00200001a32000240001222400280001a328002c0001252c00300001273000340001253400380001a338003c0001223c00400001a309010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000400050001040c000d0001041400150001041c001d0001042400250001042c002d0001043400350001043c003d000104`), music.PlaybackMode.UntilDone)
            }
            for (let index = 0; index < 3; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0078000408020305001c000f0a006400f4010a0000040000000000000000000000000000000002600000000400011404000800011408000c0001140c001000011410001400011414001800011418001c0001141c002000011420002400011424002800011428002c0001142c003000011430003400011434003800011438003c0001143c004000011407001c00020a006400f401640000040000000000000000000000000000000003600000000400012004000800012208000c0001a30c001000012510001400012714001800012518001c0001a31c00200001222000240001a324002800012528002c0001272c00300001253000340001a334003800012238003c0001a33c004000012509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000400050001040c000d0001041400150001041c001d0001042400250001042c002d0001043400350001043c003d000104`), music.PlaybackMode.UntilDone)
                }
            }
            if (!(SongStopped)) {
                music.play(music.createSong(hex`0078000408020305001c000f0a006400f4010a0000040000000000000000000000000000000002680000000400011404000800011408000c0001140c001000011410001400011414001800011418001c0001141c00200001142000240002141b2400280002141b28002c0002141b2c00300002141b3000340002141b3400380002141b38003c0002141b3c00400002141b07001c00020a006400f4016400000400000000000000000000000000000000030e00000020000220272000400002202709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000400050001040c000d0001041400150001041c001d0001042400250001042c002d0001043400350001043c003d000104`), music.PlaybackMode.UntilDone)
            }
            for (let index = 0; index < 2; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0078000408020501001c000f05001202c102c2010004050028000000640028000314000602000460000000040001a304000800012508000c0001a30c00100001251000140001a314001800012518001c0001a31c00200001222000240001a324002800012528002c0001a32c00300001223000340001a334003800012538003c0001a33c004000012203001c0001dc00690000045e010004000000000000000000000564000104000360000000040001a304000800012508000c0001a30c00100001251000140001a314001800012518001c0001a31c00200001222000240001a324002800012528002c0001a32c00300001223000340001a334003800012538003c0001a33c004000012205001c000f0a006400f4010a000004000000000000000000000000000000000270000000040002141b0400080002141b08000c0002141b0c00100002141b1000140002141b1400180002141b18001c0002141b1c00200002141b2000240002141b2400280002141b28002c0002141b2c00300002141b3000340002141b3400380002141b38003c0002141b3c00400002141b07001c00020a006400f4016400000400000000000000000000000000000000030e00000020000220272000400002202709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000400050001040c000d0001041400150001041c001d0001042400250001042c002d0001043400350001043c003d000104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0078000408020501001c000f05001202c102c2010004050028000000640028000314000602000460000000040001a304000800012508000c0001a30c00100001251000140001a314001800012518001c0001a31c00200001222000240001a324002800012528002c0001a32c00300001223000340001a334003800012538003c0001a33c004000012503001c0001dc00690000045e010004000000000000000000000564000104000360000000040001a304000800012508000c0001a30c00100001251000140001a314001800012518001c0001a31c00200001222000240001a324002800012528002c0001a32c00300001223000340001a334003800012538003c0001a33c004000012505001c000f0a006400f4010a000004000000000000000000000000000000000270000000040002141b0400080002141b08000c0002141b0c00100002141b1000140002141b1400180002141b18001c0002141b1c00200002141b2000240002141b2400280002141b28002c0002141b2c00300002141b3000340002141b3400380002141b38003c0002141b3c00400002141b07001c00020a006400f4016400000400000000000000000000000000000000030e00000020000220272000400002202709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000400050001040c000d0001041400150001041c001d0001042400250001042c002d0001043400350001043c003d000104`), music.PlaybackMode.UntilDone)
                }
            }
            for (let index = 0; index < 2; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0078000408020305001c000f0a006400f4010a000004000000000000000000000000000000000270000000040002141b0400080002141b08000c0002141b0c00100002141b1000140002141b1400180002141b18001c0002141b1c00200002141b2000240002141b2400280002141b28002c0002141b2c00300002141b3000340002141b3400380002141b38003c0002141b3c00400002141b07001c00020a006400f4016400000400000000000000000000000000000000030e00000020000220a82000400002202a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000400050001040c000d0001041400150001041c001d0001042400250001042c002d0001043400350001043c003d000104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0078000408020305001c000f0a006400f4010a000004000000000000000000000000000000000270000000040002141b0400080002141b08000c0002141b0c00100002141b1000140002141b1400180002141b18001c0002141b1c00200002141b2000240002141b2400280002141b28002c0002141b2c00300002141b3000340002141b3400380002141b38003c0002141b3c00400002141b07001c00020a006400f4016400000400000000000000000000000000000000030e0000002000022027200040000220a609010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000400050001040c000d0001041400150001041c001d0001042400250001042c002d0001043400350001043c003d000104`), music.PlaybackMode.UntilDone)
                }
            }
            for (let index = 0; index < 2; index++) {
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0078000408020501001c000f05001202c102c2010004050028000000640028000314000602000460000000040001a304000800012508000c0001a30c00100001251000140001a314001800012518001c0001a31c00200001222000240001a324002800012528002c0001a32c00300001223000340001a334003800012538003c0001a33c004000012203001c0001dc00690000045e010004000000000000000000000564000104000360000000040001a304000800012508000c0001a30c00100001251000140001a314001800012518001c0001a31c00200001222000240001a324002800012528002c0001a32c00300001223000340001a334003800012538003c0001a33c004000012205001c000f0a006400f4010a000004000000000000000000000000000000000270000000040002141b0400080002141b08000c0002141b0c00100002141b1000140002141b1400180002141b18001c0002141b1c00200002141b2000240002141b2400280002141b28002c0002141b2c00300002141b3000340002141b3400380002141b38003c0002141b3c00400002141b07001c00020a006400f4016400000400000000000000000000000000000000030e00000020000220272000400002202709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000400050001040c000d0001041400150001041c001d0001042400250001042c002d0001043400350001043c003d000104`), music.PlaybackMode.UntilDone)
                }
                if (!(SongStopped)) {
                    music.play(music.createSong(hex`0078000408020501001c000f05001202c102c2010004050028000000640028000314000602000460000000040001a304000800012508000c0001a30c00100001251000140001a314001800012518001c0001a31c00200001222000240001a324002800012528002c0001a32c00300001223000340001a334003800012538003c0001a33c004000012503001c0001dc00690000045e010004000000000000000000000564000104000360000000040001a304000800012508000c0001a30c00100001251000140001a314001800012518001c0001a31c00200001222000240001a324002800012528002c0001a32c00300001223000340001a334003800012538003c0001a33c004000012505001c000f0a006400f4010a000004000000000000000000000000000000000270000000040002141b0400080002141b08000c0002141b0c00100002141b1000140002141b1400180002141b18001c0002141b1c00200002141b2000240002141b2400280002141b28002c0002141b2c00300002141b3000340002141b3400380002141b38003c0002141b3c00400002141b07001c00020a006400f4016400000400000000000000000000000000000000030e00000020000220272000400002202709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80030000400050001040c000d0001041400150001041c001d0001042400250001042c002d0001043400350001043c003d000104`), music.PlaybackMode.UntilDone)
                }
            }
        }
    })
}
scene.onOverlapTile(SpriteKind.AllyHitbox, assets.tile`NSSpikeUp`, function (sprite, location) {
    basics.make_sprite_jump(sprite, 190)
    PlaySFX("DamageAlly")
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

//variables
let LvName = "text"
let LvIntro: Sprite = null
let Explosion: Sprite = null
let ExplosionY = 0
let RangerPinecone: Sprite = null
let Hail: Sprite = null
let LightningSprite: Sprite = null
let Prologue: Sprite = null
let PineconeOnGround: Sprite = null
let ScreenImage: Image = null
let HudSprite: Sprite = null
let WeaponUI: Sprite = null
let PineconeCounter: fancyText.TextSprite = null
let VIGORtext: fancyText.TextSprite = null
let LV = 0
let SongIntro = false
let BarrierLogo: Sprite = null
let DieselImage: Sprite = null
let DieselHitbox: Sprite = null
let StormyNS = false
let OilNum = 0
let PlayingSingleMission = false
let SpriteImage: Sprite = null
let AquiferATKing = false
let Pinecone: Sprite = null
let WeaponHolding = 0
let Silent = false
let SpeechBalloon: fancyText.TextSprite = null
let CharBox: Sprite = null
let JumpPossibility = false
let MenuSprite: miniMenu.MenuSprite = null
let PlayerHealth: StatusBarSprite = null
let OilHealth: StatusBarSprite = null
let OilNPC: Sprite = null
let OilHitbox: Sprite = null
let WaterNPC: Sprite = null
let WaterHitbox: Sprite = null
let PlayerHitbox: Sprite = null
let Aquifer: Sprite = null
let MoveAbility = false
let Hailing = false
let MISSION = 0
let KILLS = 0
let PineconeNumber = 0
let SwordHitsLeft = 0
let SongStopped = false
let Lvl = 0
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 240
    export const ARCADE_SCREEN_HEIGHT = 240
}
if (!(blockSettings.exists("Lvl"))) {
    blockSettings.writeNumber("Lvl", 0)
    FadeToLogoPalette()
}
color.startFadeFromCurrent(color.White, 100)
color.pauseUntilFadeDone()
color.setPalette(
    color.originalPalette
)
Lvl = blockSettings.readNumber("Lvl")
SongStopped = false
scroller.setLayerImage(scroller.BackgroundLayer.Layer0,assets.image`TitleLayer0`)
scroller.scrollBackgroundWithSpeed(-10, 0, scroller.BackgroundLayer.Layer0)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1,assets.image`TitleLayer1`)
scroller.scrollBackgroundWithSpeed(-20, 0, scroller.BackgroundLayer.Layer1)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2,assets.image`TitleLayer2`)
scroller.scrollBackgroundWithSpeed(-30, 0, scroller.BackgroundLayer.Layer2)
scroller.setLayerImage(scroller.BackgroundLayer.Layer3,assets.image`TitleLayer3`)
War_Is_Coming_Main_Theme()
color.setColor(4, color.parseColorString("#006677"))
color.setColor(5, color.parseColorString("#002244"))
color.setColor(8, color.parseColorString("#aaffff"))
color.setColor(11, color.parseColorString("#004466"))
color.setColor(12, color.parseColorString("#000044"))
CreateMainMenu()
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
game.onUpdate(function () {
    for (let value23 of sprites.allOfKind(SpriteKind.EnemyHitboxCutscene)) {
        sprites.readDataSprite(value23, "image").setPosition(value23.x, value23.y)
    }
})
game.onUpdate(function () {
    for (let value22 of sprites.allOfKind(SpriteKind.EnemyRHitbox)) {
        sprites.readDataSprite(value22, "image").setPosition(value22.x, value22.y)
    }
})
game.onUpdate(function () {
    if (PlayerHitbox) {
        Aquifer.setPosition(PlayerHitbox.x, PlayerHitbox.y)
    }
})
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
game.onUpdate(function () {
    for (let value24 of sprites.allOfKind(SpriteKind.EnemyHitbox)) {
        sprites.readDataSprite(value24, "image").setPosition(value24.x, value24.y)
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
game.onUpdate(function () {
    for (let value25 of sprites.allOfKind(SpriteKind.EnemySrHitbox)) {
        sprites.readDataSprite(value25, "image").setPosition(value25.x, value25.y)
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.AllyHitbox)) {
        if (basics.get_proximity(
            PlayerHitbox,
            value,
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
game.onUpdate(function () {
    for (let OilHitbox2 of sprites.allOfKind(SpriteKind.EnemyHitbox)) {
        if (true) {
            if (OilHitbox2.isHittingTile(CollisionDirection.Left)) {
                basics.make_sprite_jump(OilHitbox2, 190)
                timer.after(randint(100, 800), function () {
                    if (Math.percentChance(50)) {
                        OilHitbox2.vx = -100
                    } else {
                        OilHitbox2.vx = 100
                    }
                })
            } else if (OilHitbox2.isHittingTile(CollisionDirection.Right)) {
                basics.make_sprite_jump(OilHitbox2, 190)
                timer.after(randint(100, 800), function () {
                    if (Math.percentChance(50)) {
                        OilHitbox2.vx = 100
                    } else {
                        OilHitbox2.vx = -100
                    }
                })
            }
        }
    }
})
game.onUpdate(function () {
    for (let value26 of sprites.allOfKind(SpriteKind.AllyHitbox)) {
        sprites.readDataSprite(value26, "image").setPosition(value26.x, value26.y)
    }
})
game.onUpdate(function () {
    for (let value27 of sprites.allOfKind(SpriteKind.AllyHitbox)) {
        if (!(basics.get_proximity(
            value27,
            PlayerHitbox,
            scene.screenWidth() / 2,
            Way.Both
        ))) {
            value27.setPosition(PlayerHitbox.x, PlayerHitbox.y)
            PlaySFX("Teleport")
            extraEffects.createSpreadEffectOnAnchor(value27, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100)
        }
    }
})
game.onUpdate(function () {
    for (let OilHitbox22 of sprites.allOfKind(SpriteKind.EnemySrHitbox)) {
        if (OilHitbox22.isHittingTile(CollisionDirection.Bottom)) {
            if (OilHitbox22.isHittingTile(CollisionDirection.Left)) {
                basics.make_sprite_jump(OilHitbox22, 250)
                timer.after(randint(100, 800), function () {
                    if (Math.percentChance(50)) {
                        OilHitbox22.vx = -200
                    } else {
                        OilHitbox22.vx = 200
                    }
                })
            } else if (OilHitbox22.isHittingTile(CollisionDirection.Right)) {
                basics.make_sprite_jump(OilHitbox22, 250)
                timer.after(randint(100, 800), function () {
                    if (Math.percentChance(50)) {
                        OilHitbox22.vx = 200
                    } else {
                        OilHitbox22.vx = -200
                    }
                })
            }
        }
    }
})
game.onUpdate(function () {
    blockSettings.writeNumber("Lvl", Lvl)
    Lvl = blockSettings.readNumber("Lvl")
})
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
    for (let OilHitbox222 of sprites.allOfKind(SpriteKind.EnemyRHitbox)) {
        if (OilHitbox222.isHittingTile(CollisionDirection.Bottom)) {
            if (OilHitbox222.isHittingTile(CollisionDirection.Left)) {
                basics.make_sprite_jump(OilHitbox222, 190)
                timer.after(randint(100, 800), function () {
                    if (Math.percentChance(50)) {
                        OilHitbox222.vx = -100
                    } else {
                        OilHitbox222.vx = 100
                    }
                })
            } else if (OilHitbox222.isHittingTile(CollisionDirection.Right)) {
                basics.make_sprite_jump(OilHitbox222, 190)
                timer.after(randint(100, 800), function () {
                    if (Math.percentChance(50)) {
                        OilHitbox222.vx = 100
                    } else {
                        OilHitbox222.vx = -100
                    }
                })
            }
        }
    }
})
game.onUpdate(function () {
    for (let value7 of sprites.allOfKind(SpriteKind.RivalImage)) {
        value7.setPosition(DieselHitbox.x, DieselHitbox.y)
    }
})
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
game.onUpdateInterval(randint(1000, 3500), function () {
    if (Hailing) {
        for (let index = 0; index < randint(1, 5); index++) {
            Hail = sprites.createProjectileFromSide(assets.image`Hail`, 0, 45)
            Hail.scale = 0.5
            Hail.x = PlayerHitbox.x + randint(-80, 80)
        }
    }
})
game.onUpdateInterval(750, function () {
    for (let value8 of sprites.allOfKind(SpriteKind.EnemyRHitbox)) {
        if (Math.percentChance(75)) {
            if (PlayerHitbox.x - value8.x <= 120 && PlayerHitbox.x - value8.x >= 2) {
                RangerPinecone = sprites.createProjectileFromSprite(assets.image`PineconeRight`, value8, 100, -190)
                RangerPinecone.setFlag(SpriteFlag.AutoDestroy, false)
                RangerPinecone.setKind(SpriteKind.EnemyPinecone)
                PlaySFX("PCThrow")
                basics.add_gravity_to(RangerPinecone)
            } else if (PlayerHitbox.x - value8.x >= -120 && PlayerHitbox.x - value8.x <= -2) {
                RangerPinecone = sprites.createProjectileFromSprite(assets.image`PineconeLeft`, value8, -100, -190)
                RangerPinecone.setFlag(SpriteFlag.AutoDestroy, false)
                RangerPinecone.setKind(SpriteKind.EnemyPinecone)
                PlaySFX("PCThrow")
                basics.add_gravity_to(RangerPinecone)
            }
        }
    }
})
game.onUpdateInterval(randint(2000, 5000), function () {
    if (StormyNS) {
        if (Math.percentChance(50)) {
            scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Nitro Stun layer 0b`)
            PlaySFX("Thunder")
            if (!(Silent)) {
                scene.cameraShake(2, 200)
            }
            timer.after(100, function () {
                scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Nitro Stun layer 0`)
                timer.after(25, function () {
                    scroller.setLayerImage(scroller.BackgroundLayer.Layer0,assets.image`Nitro Stun layer 0b`)
                    PlaySFX("Thunder")
                    if (!(Silent)) {
                        scene.cameraShake(2, 200)
                    }
                    timer.after(100, function () {
                        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Nitro Stun layer 0`)
                    })
                })
            })
        } else {
            scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Nitro Stun layer 0a`)
            PlaySFX("Thunder")
            if (!(Silent)) {
                scene.cameraShake(2, 200)
            }
            timer.after(100, function () {
                scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Nitro Stun layer 0`)
                timer.after(25, function () {
                    scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Nitro Stun layer 0a`)
                    PlaySFX("Thunder")
                    if (!(Silent)) {
                        scene.cameraShake(2, 200)
                    }
                    timer.after(100, function () {
                        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Nitro Stun layer 0`)
                    })
                })
            })
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (Silent) {
        scene.cameraShake(3, 2500)
    }
})
game.onUpdateInterval(1000, function () {
    for (let OilHitbox3 of sprites.allOfKind(SpriteKind.EnemyHitbox)) {
        if (Math.percentChance(50)) {
            OilHitbox3.vx = 100
        } else if (Math.percentChance(50)) {
            OilHitbox3.vx = -100
        }
    }
})
game.onUpdateInterval(1000, function () {
    for (let OilHitbox32 of sprites.allOfKind(SpriteKind.EnemySrHitbox)) {
        if (Math.percentChance(50)) {
            OilHitbox32.vx = 200
        } else if (Math.percentChance(50)) {
            OilHitbox32.vx = -200
        }
    }
})
game.onUpdateInterval(1000, function () {
    for (let OilHitbox322 of sprites.allOfKind(SpriteKind.EnemyRHitbox)) {
        if (Math.percentChance(50)) {
            OilHitbox322.vx = 100
        } else if (Math.percentChance(50)) {
            OilHitbox322.vx = -100
        }
    }
})
game.onUpdateInterval(150, function () {
    for (let value9 of tiles.getTilesByType(assets.tile`Forcefield1`)) {
        tiles.setTileAt(value9, assets.tile`Forcefield2`)
        timer.after(75, function () {
            tiles.setTileAt(value9, assets.tile`Forcefield1`)
        })
    }
})
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
