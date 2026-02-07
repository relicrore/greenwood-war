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
        Hailing = false
        SongStopped = false
        Cold_Hearted_Pale_Hail_Forest()
        timer.after((assets.animation`LevelIntroScreen`.length + 3) * 45, function () {
            MoveAbility = true
            Hailing = true
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
        SongStopped = false
        Cold_Hearted_Pale_Hail_Forest()
        timer.after((assets.animation`LevelIntroScreen`.length + 3) * 45, function () {
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
            PlaySFX("MenuCHange")
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
function EmptyNearby (Img: Sprite, x: number, y: number) {
    if (Img.image.getPixel(x, y - 1) == 0 || Img.image.getPixel(x, y + 1) == 0 || (Img.image.getPixel(x - 1, y) == 0 || Img.image.getPixel(x + 1, y) == 0)) {
        return true
    } else {
        return false
    }
}
function TorrentSayText (speech: string, speed: number, Emotion: number) {
    if (Emotion == 0) {
        CharBox.setImage(assets.image`TorrentStraightFace`)
    } else if (Emotion == 1) {
        CharBox.setImage(assets.image`TorrentHappy`)
    } else if (Emotion == 2) {
        CharBox.setImage(assets.image`TorrentAngry`)
    } else if (Emotion == 3) {
        CharBox.setImage(assets.image`TorrentAnnoyed`)
    } else if (Emotion == 4) {
        CharBox.setImage(assets.image`TorrentLoathing`)
    } else if (Emotion == 5) {
        CharBox.setImage(assets.image`TorrentSuspicious`)
    } else if (Emotion == 6) {
        CharBox.setImage(assets.image`TorrentScared`)
    } else if (Emotion == 7) {
        CharBox.setImage(assets.image`TorrentHurt`)
    } else if (Emotion == 8) {
        CharBox.setImage(assets.image`TorrentDoubtful`)
    } else if (Emotion == 9) {
        CharBox.setImage(assets.image`TorrentEvil`)
    } else if (Emotion == 10) {
        CharBox.setImage(assets.image`AquiferAstonished`)
    } else if (Emotion == 11) {
        CharBox.setImage(assets.image`AquiferExtremelyHurt`)
    } else if (Emotion == 12) {
        CharBox.setImage(assets.image`DieselCruel`)
    } else if (Emotion == 13) {
        CharBox.setImage(assets.image`AquiferOutraged`)
    } else if (Emotion == 14) {
        CharBox.setImage(assets.image`AquiferWorried`)
    } else if (Emotion == 15) {
        CharBox.setImage(assets.image`AquiferSmug`)
    } else if (Emotion == 16) {
        CharBox.setImage(assets.image`AquiferCommanding`)
    }
    fancyText.setText(SpeechBalloon, "<teal>TORRENT</teal>: " + speech)
    fancyText.setFrame(SpeechBalloon, assets.image`Text`)
    if (!(Silent)) {
        fancyText.setAnimationSound(SpeechBalloon, music.createSoundEffect(WaveShape.Square, 356, 215, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Linear))
    }
    fancyText.animateAtSpeed(SpeechBalloon, speed, fancyText.AnimationPlayMode.UntilDone)
    pause(1000)
}
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
function CreateDiesel () {
    DieselHitbox = sprites.create(assets.image`OilHitbox`, SpriteKind.RivalHitbox)
    basics.add_gravity_to(DieselHitbox)
    DieselHitbox.setFlag(SpriteFlag.Invisible, true)
    DieselImage = sprites.create(assets.image`Diesel`, SpriteKind.RivalImage)
    DieselImage.setFlag(SpriteFlag.GhostThroughWalls, true)
    sprites.setDataSprite(DieselHitbox, "image", DieselImage)
    OilAnims()
}
function War_Is_Coming_Main_Theme () {
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
function Painstricken_Nitro_Stun () {
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
function CreateTextSprite () {
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
function CreateAquifer () {
    Aquifer = sprites.create(assets.image`WaterHitbox`, SpriteKind.AquiferImage)
    Aquifer.setFlag(SpriteFlag.GhostThroughWalls, true)
    PlayerHitbox = sprites.create(assets.image`WaterHitbox`, SpriteKind.Player)
    PlayerHitbox.setFlag(SpriteFlag.Invisible, true)
    Aquifer.z = 50
    basics.add_gravity_to(PlayerHitbox)
    scene.cameraFollowSprite(PlayerHitbox)
    AquiferAnims()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MoveAbility) {
        if (JumpPossibility) {
            basics.make_sprite_jump(PlayerHitbox, 190)
            PlaySFX("Jump")
        }
    }
})
function PlaySFX (Sound: string) {
    if (Sound == "StickSlash") {
        music.play(music.createSoundEffect(WaveShape.Noise, 1, 3728, 255, 255, 200, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Triangle, 1, 2412, 255, 255, 200, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Sine, 4228, 1, 0, 255, 200, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
   } else if (Sound == "StickFlame") {
        music.play(music.createSoundEffect(WaveShape.Square, 609, 694, 215, 0, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 436, 324, 215, 0, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 124, 2303, 255, 255, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (Sound == "PCThrow") {
        music.play(music.createSoundEffect(WaveShape.Noise, 1058, 448, 215, 0, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 436, 324, 215, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Triangle, 1357, 1072, 255, 255, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (Sound == "Jump") {
        for (let i = 0; i < 3; i++) {
            music.play(music.createSoundEffect(WaveShape.Square, 1037, 2036, 81, 94, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
    } else if (Sound == "DamagePlayer") {
        music.play(music.createSoundEffect(WaveShape.Noise, 921, 883, 103, 255, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 436, 324, 138, 114, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 903, 216, 255, 157, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (Sound == "DamageEnemy") {
        for (let i = 0; i < 3; i++) {
            music.play(music.createSoundEffect(WaveShape.Noise, 1406, 1418, 103, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Square, 1204, 1372, 138, 114, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Noise, 1745, 2221, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 717, 1428, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
    } else if (Sound == "DeathEnemy") {
    for (let i = 0; i < 3; i++) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 1, 1671, 0, 255, 200, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
    } else if (Sound == "DeathPlayer") {
        music.play(music.createSoundEffect(WaveShape.Sine, 2199, 1, 255, 0, 500, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Triangle, 1731, 1, 113, 119, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 4287, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else if (Sound == "Zoom") {
        music.play(music.createSoundEffect(WaveShape.Square, 1, 3607, 0, 255, 600, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 1731, 1709, 113, 119, 600, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 0, 255, 1200, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
}
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
sprites.onOverlap(SpriteKind.AllyHitbox, SpriteKind.EnemySrHitbox, function (sprite, otherSprite) {
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
sprites.onOverlap(SpriteKind.EnemyHitbox, SpriteKind.Player, function (sprite, otherSprite) {
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
function CreateChapterMenu () {
    MenuSprite = miniMenu.createMenu(
    miniMenu.createMenuItem("RESUME", assets.image`Play`),
    miniMenu.createMenuItem("COMING SOON!", assets.image`Prologue`),
    miniMenu.createMenuItem("THE DARK ERA", assets.image`1`)
    )
    MenuSprite.setFrame(assets.image`FRAME`)
    MenuSprite.setDimensions(125, 50)
    MenuSprite.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 9)
    MenuSprite.setPosition(120, 140)
    MenuSprite.onSelectionChanged(function (selection, selectedIndex) {
        for (let index = 0; index < 4; index++) {
            PlaySFX("MenuCHange")
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
            CreateChapterMenu()
        } else if (selectedIndex == 2) {
            CreateCh1Menu()
        } else {
        	
        }
    })
}
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
            PlaySFX("MenuCHange")
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
function DieselSayText (speech: string, speed: number, Emotion: number) {
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
        CharBox.setImage(assets.image`DieselCruel`)
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
    } else if (Emotion == 18) {
    	CharBox.setImage(assets.image`DieselForbidden`)
    }
    fancyText.setText(SpeechBalloon, "<dark purple>DIESEL</dark purple>: " + speech)
    fancyText.setFrame(SpeechBalloon, assets.image`Text`)
    if (!(Silent)) {
        fancyText.setAnimationSound(SpeechBalloon, music.createSoundEffect(WaveShape.Sawtooth, 1, 742, 0, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Linear))
    }
    fancyText.animateAtSpeed(SpeechBalloon, speed, fancyText.AnimationPlayMode.UntilDone)
    pause(1000)
}
function FossilSayText (speech: string, speed: number, Emotion: number) {
    if (Emotion == 0) {
        CharBox.setImage(assets.image`FossilStraightFace`)
    } else if (Emotion == 1) {
        CharBox.setImage(assets.image`FossilHappy`)
    } else if (Emotion == 2) {
        CharBox.setImage(assets.image`FossilAngry`)
    } else if (Emotion == 3) {
        CharBox.setImage(assets.image`FossilAnnoyed`)
    } else if (Emotion == 4) {
        CharBox.setImage(assets.image`FossilLoathing`)
    } else if (Emotion == 5) {
        CharBox.setImage(assets.image`FossilSuspicious`)
    } else if (Emotion == 6) {
        CharBox.setImage(assets.image`FossilScared`)
    } else if (Emotion == 7) {
        CharBox.setImage(assets.image`FossilHurt`)
    } else if (Emotion == 8) {
        CharBox.setImage(assets.image`FossilDoubtful`)
    } else if (Emotion == 9) {
        CharBox.setImage(assets.image`FossilEvil`)
    } else if (Emotion == 10) {
        CharBox.setImage(assets.image`FossilAstonished`)
    } else if (Emotion == 11) {
        CharBox.setImage(assets.image`FossilExtremelyHurt`)
    } else if (Emotion == 12) {
        CharBox.setImage(assets.image`FossilCruel`)
    } else if (Emotion == 13) {
        CharBox.setImage(assets.image`FossilOutraged`)
    } else if (Emotion == 14) {
        CharBox.setImage(assets.image`FossilWorried`)
    } else if (Emotion == 15) {
        CharBox.setImage(assets.image`FossilSmug`)
    } else if (Emotion == 16) {
        CharBox.setImage(assets.image`FossilCommanding`)
    }
    fancyText.setText(SpeechBalloon, "<light purple>FOSSIL</light purple>: " + speech)
    fancyText.setFrame(SpeechBalloon, assets.image`Text`)
    if (!(Silent)) {
        fancyText.setAnimationSound(SpeechBalloon, music.createSoundEffect(WaveShape.Noise, 1985, 1, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear))
    }
    fancyText.animateAtSpeed(SpeechBalloon, speed, fancyText.AnimationPlayMode.UntilDone)
    pause(1000)
}
function OilAnims () {
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
function LevelIntro (Text: string) {
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
events.wallEvent(SpriteKind.EnemyHitbox, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StopHitting, function (sprite) {
    basics.make_sprite_jump(sprite, 190)
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
function CUTSCENE () {
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
            TorrentSayText("An <dark purple>Oil</dark purple> forcefield...", fancyText.TextSpeed.VeryFast, 2)
            TorrentSayText("They're blocking the path to the signal!!!", fancyText.TextSpeed.VeryFast, 2)
            TorrentSayText("You need to find some way around it!!!", fancyText.TextSpeed.VeryFast, 2)
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
                            TorrentSayText("IT DOESN'T MATTER, JUST <shaky>RUN!!!</shaky>", fancyText.TextSpeed.VeryFast, 2)
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
                        TorrentSayText("I'm tracking him...", fancyText.TextSpeed.VeryFast, 2)
                        AquiferSayText("Come <shaky>ON!!!</shaky>", fancyText.TextSpeed.Slow, 2)
                        TorrentSayText("Almost...", fancyText.TextSpeed.Slow, 2)
                        TorrentSayText("Ah, got him!", fancyText.TextSpeed.VeryFast, 1)
                        TorrentSayText("Fury Peak! <shaky>AS FAST AS POSSIBLE!</shaky>", fancyText.TextSpeed.VeryFast, 2)
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
sprites.onOverlap(SpriteKind.AllyHitbox, SpriteKind.EnemyHitbox, function (sprite, otherSprite) {
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
function Enemy_Encounter_Diesels_Theme () {
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
function SwapSong () {
    SongStopped = true
    music.stopAllSounds()
}
// 2=slingshot
// (currently not in use6
browserEvents.Three.onEvent(browserEvents.KeyEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.RivalHitbox, function (sprite, otherSprite) {
    if (MISSION == 6) {
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
    }
})
events.wallEvent(SpriteKind.EnemyRHitbox, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StopHitting, function (sprite) {
    basics.make_sprite_jump(sprite, 190)
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
scene.onOverlapTile(SpriteKind.AllyHitbox, assets.tile`NSSpikeDown`, function (sprite, location) {
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
function FadeToLogoPalette () {
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
function AquiferAnims () {
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
function Death_And_Destruction_Beacon () {
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
function GAMEOVER () {
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
function Intro () {
    Reset()
    SwapSong()
    color.setPalette(
    color.originalPalette
    )
    timer.after(1000, function () {
        //Turn into long comment for testing:
        /*
        Prologue = sprites.create(assets.image`PrologueClearImg`, SpriteKind.NA)
        Prologue.setScale(5, ScaleAnchor.Middle)
        SpeechBalloon = fancyText.create("abc", 0, 15, fancyText.defaultArcade)
        fancyText.setFrame(SpeechBalloon, assets.image`Text`)
        fancyText.setMaxWidth(SpeechBalloon, 45 * 5)
        SpeechBalloon.left = Prologue.left
        SpeechBalloon.top = Prologue.top
        Narrate("Greenwood Forest:", fancyText.TextSpeed.Normal)
        animation.runImageAnimation(
        Prologue,
        assets.animation`Panel1`,
        125,
        true
        )
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001192c002e0001193400360001193c003e00011944004600011b4c004e00011b54005600011b5c005e00011b6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        Narrate("The home of <dark purple> Oil </dark purple>and<cyan> Water</cyan>.", fancyText.TextSpeed.Normal)
        animation.runImageAnimation(
        Prologue,
        assets.animation`Panel2`,
        60,
        true
        )
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001192c002e0001193400360001193c003e00011944004600011b4c004e00011b54005600011b5c005e00011b6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        Narrate("The two tribes were great allies and friends...", fancyText.TextSpeed.Normal)
        animation.runImageAnimation(
        Prologue,
        assets.animation`Panel3`,
        80,
        false
        )
        timer.after(assets.animation`Panel3`.length * 80, function () {
            animation.runImageAnimation(
            Prologue,
            assets.animation`Panel3a`,
            400,
            true
            )
        })
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e0001222400260001192c002e0001193400360001193c003e00011d44004600011b4c004e00011b54005600011b5c005e00011e6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        Narrate("...Especially two in particular.", fancyText.TextSpeed.Normal)
        animation.runImageAnimation(
        Prologue,
        assets.animation`Panel4`,
        75,
        false
        )
        timer.after(assets.animation`Panel4`.length * 75, function () {
            animation.runImageAnimation(
            Prologue,
            assets.animation`Panel4a`,
            400,
            true
            )
        })
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e0001222400260001192c002e0001193400360001193c003e00011d44004600011b4c004e00011b54005600011b5c005e00011e6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        Narrate("<dark purple>Diesel</dark purple> and <cyan>Aquifer</cyan> were very close friends, and they did everything together.", fancyText.TextSpeed.Fast)
        animation.runImageAnimation(
        Prologue,
        assets.animation`Panel5`,
        60,
        true
        )
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001202c002e0001203400360001203c003e0001204400460001224c004e0001225400560001225c005e0001226400660001a36c006e0001a37400760001a37c007e0001a308001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        Narrate("They even trained together.", fancyText.TextSpeed.Normal)
        animation.runImageAnimation(
        Prologue,
        assets.animation`Panel6`,
        80,
        false
        )
        timer.after(assets.animation`Panel6`.length * 80, function () {
            animation.runImageAnimation(
            Prologue,
            assets.animation`Panel6a`,
            200,
            true
            )
            timer.after(350, function () {
                animation.runImageAnimation(
                Prologue,
                assets.animation`Panel6a`,
                200,
                true
                )
            })
        })
        music.play(music.createSong(hex`00a0000408040207001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001202c002e0001203400360001203c003e0001204400460001224c004e0001225400560001225c005e0001226400660001a36c006e0001a37400760001a37c007e0001a308001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a00004080100`), music.PlaybackMode.UntilDone)
        Tutorial()
        pauseUntil(() => !(PlayingTutorial))
        //turn into end of long comment for testing:*/
        Reset()
        sprites.destroy(SpeechBalloon)
        scene.setTileMapLevel(tilemap`PrologueTilemap`)
        scene.setBackgroundColor(8)
        color.setColor(3, color.parseColorString("004422"))
        CreateDiesel()
        tiles.placeOnRandomTile(DieselHitbox, assets.tile`START`)
        tiles.setTileAt(DieselHitbox.tilemapLocation(), assets.tile`transparency16`)
        scene.cameraFollowSprite(DieselHitbox)
        CreateTextSprite()
        /*
        timer.background(function() {DieselSayText("Nobody's watching me...", fancyText.TextSpeed.Normal, 14)})
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001192c002e0001193400360001193c003e00011944004600011b4c004e00011b54005600011b5c005e00011b6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () { DieselSayText("So I guess I'll do this, just this once...", fancyText.TextSpeed.Normal, 14) })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001192c002e0001193400360001193c003e00011944004600011b4c004e00011b54005600011b5c005e00011b6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () { DieselSayText("I'm going to <shaky>READ THE NEWS</shaky>.", fancyText.TextSpeed.Normal, 18) })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e0001222400260001192c002e0001193400360001193c003e00011d44004600011b4c004e00011b54005600011b5c005e00011e6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () { DieselSayText("...", fancyText.TextSpeed.Normal, 3) })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e0001222400260001192c002e0001193400360001193c003e00011d44004600011b4c004e00011b54005600011b5c005e00011e6400660001976c006e0001977400760001167c007e00011608001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () { DieselSayText("ADMIRAL COAL IS DEAD?!", fancyText.TextSpeed.VeryFast, 6) })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001202c002e0001203400360001203c003e0001204400460001224c004e0001225400560001225c005e0001226400660001a36c006e0001a37400760001a37c007e0001a308001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () { DieselSayText("Oh wait. That's not that hard to beleive.", fancyText.TextSpeed.Normal, 0) })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e00011e2400260001202c002e0001203400360001203c003e0001204400460001224c004e0001225400560001225c005e0001226400660001a36c006e0001a37400760001a37c007e0001a308001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () { DieselSayText("...", fancyText.TextSpeed.Normal, 3) })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000600011e0c000e00011e14001600011e1c001e0001222400260001192c002e0001193400360001193c003e00011d44004600011b4c004e00011b54005600011b5c005e00011e64006600011e6c006e00011e7400760001207c007e00011e08001c000e050046006603320000040a002d00000064001400013200020100021e0000000200011220002200010d40004200010f60006200018b70007200010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () { DieselSayText("FOSSIL'S IN CHARGE NOW?!", fancyText.TextSpeed.Normal, 6) })
        music.play(music.createSong(hex`00a0000408020307001c00020a006400f401640000040000000000000000000000000000000003300004000600011e0c000e00011e14001600011e1c001e00011e24002600011d2c002e00011d34003600011d3c003e00011d08001c000e050046006603320000040a002d00000064001400013200020100020c0000000200011220002200011109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80064000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d000106`), music.PlaybackMode.UntilDone)
        // Diesel Theme */
        timer.background(function () {
            FossilSayText("OIL MEETING!! <shaky>NOW!</shaky>", fancyText.TextSpeed.Fast, 12)
            timer.after(500, function() {
                DieselHitbox.vx = -100
                for (let value of tiles.getTilesByType(assets.tile`OilSwordsmanSpawner`)) {
                    OilHitbox = sprites.create(assets.image`OilHitbox`, SpriteKind.EnemyHitboxCutscene)
                    sprites.setDataNumber(OilHitbox, "SpawnX", value.x)
                    sprites.setDataNumber(OilHitbox, "SpawnY", value.y)
                    OilHitbox.setFlag(SpriteFlag.Invisible, true)
                    OilNPC = sprites.create(assets.image`OilHitbox`, SpriteKind.Enemy)
                    sprites.setDataSprite(OilHitbox, "image", OilNPC)
                    OilNPC.setFlag(SpriteFlag.GhostThroughWalls, true)
                    tiles.placeOnTile(OilHitbox, value)
                    tiles.setTileAt(value, assets.tile`transparency16`)
                    basics.add_gravity_to(OilHitbox)
                    characterAnimations.setCharacterState(OilNPC, characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving))
                    OilAnims()
                }
                OilNPC = sprites.create(assets.image`Fossil`, SpriteKind.NA)
                animation.runImageAnimation(
                    OilNPC,
                    assets.animation`Idle Fossil Right`,
                    95,
                    true
                )
                tiles.placeOnRandomTile(OilNPC, assets.tile`OilSurgingSpawner`)
                tiles.setTileAt(OilNPC.tilemapLocation(), assets.tile`transparency16`)
            })
        })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140004c0001224c005000011b50005800011b58006000011d60006800011e68007000011d70007800011e78008000012008001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () {
            FossilSayText("As most of you know, I am admiral now...", fancyText.TextSpeed.VeryFast, 1)
            FossilSayText("...So there is one golden rule:", fancyText.TextSpeed.VeryFast, 1)
        })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003360000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140006000012760008000012208001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function() {
            FossilSayText("Money is good.", fancyText.TextSpeed.Normal, 15)
            DieselSayText("That's not really a rule...", fancyText.TextSpeed.VeryFast, 8)
        })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140004c0001224c005000011b50005800011b58006000011d60006800011e68007000011d70007800011e78008000012008001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function() { FossilSayText("Steal money from water and bring it to me...", fancyText.TextSpeed.Fast, 9) })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003360000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140006000011b60008000019a08001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        // Main Theme
        timer.background(function () {
            FossilSayText("<shaky>OR ELSE!!!</shaky>", fancyText.TextSpeed.Fast, 13)
            scene.centerCameraAt(DieselHitbox.x, DieselHitbox.y)
            DieselHitbox.vx = 200
            CreateAquifer()
            tiles.placeOnRandomTile(PlayerHitbox, assets.tile`WaterSwordsmanSpawner`)
            tiles.setTileAt(PlayerHitbox.tilemapLocation(), assets.tile`transparency16`)
            color.startFadeFromCurrent(color.Black, 100)
            color.pauseUntilFadeDone()
            sprites.destroy(SpeechBalloon)
            sprites.destroy(CharBox)
            LvIntro = sprites.create(assets.image`BlackScreen`, 0)
            LvIntro.scale = 8
            LvIntro.z = 1001
            LvIntro.setFlag(SpriteFlag.Ghost, true)
            LvIntro.setFlag(SpriteFlag.RelativeToCamera, true)
            CreateTextNoSpeech("MONTHS LATER...", 120, 120, 1)
            color.startFadeFromCurrent(color.originalPalette, 100)
            timer.after(1000, function() {
                color.startFadeFromCurrent(color.Black, 100)
                color.pauseUntilFadeDone()
                sprites.destroy(LvIntro)
                sprites.destroy(SpeechBalloon)
                scene.cameraFollowSprite(DieselHitbox)
                color.startFadeFromCurrent(color.originalPalette, 100)
            })
            timer.after(1700, function () {
                DieselHitbox.fx = 300
                color.setColor(3, color.parseColorString("004422"))
            })
        })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0008000c00011b0c001000011d10001800011e18002000012020002c00011d2c003000011e30004000011b48004c00011b4c005000011d50005800011e58006000012060006c00011d6c007000011e7000780001a378008000012208001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function() {
            CreateTextSprite()
            DieselSayText("Hi Aquifer... Uh... Wanna go fishing?", fancyText.TextSpeed.VeryFast, 14)
            AquiferSayText("Yeah, sure!", fancyText.TextSpeed.Fast, 1)
        })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003480008000c00011b0c001000011d10001800011e18002000012020002c00011d2c003000011e30004000011b4000480001a34800500001225000580001a358006000012260008000019a08001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function() {
            scene.centerCameraAt(DieselHitbox.x, DieselHitbox.y)
            DieselHitbox.fx = 0
            DieselHitbox.vx = -25
            timer.after(500, function() {
                AquiferSayText("Where are you going?", fancyText.TextSpeed.Fast, 1)
                DieselHitbox.vx = 0
                DieselSayText("uhhhh...", fancyText.TextSpeed.VeryFast, 18)
            })
        })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0008000c00011b0c001000011d10001800011e18002000012020002c00011d2c003000011e30004000011b48004c00011b4c005000011d50005800011e58006000012060006c00011d6c007000011e7000780001a378008000012208001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function() {
            DieselSayText("I, uh.. I need to go... chop bushes! yeah.", fancyText.TextSpeed.VeryFast, 14)
            DieselHitbox.vx = -200
            timer.after(100, function () {
                AquiferSayText("<wavy>HMMM...</wavy>", fancyText.TextSpeed.Normal, 5)
            })
        })
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
        music.play(music.createSong(hex`00a0000408020301001c000f05001202c102c20100040500280000006400280003140006020004060000002000010f05001c000f0a006400f4010a0000040000000000000000000000000000000002060000002000010f09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80033000000010001020800090001040c000d0001021400150001021800190001041c001d000102200021000a00010203040506070809`), music.PlaybackMode.UntilDone)
    })
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
controller.menu.onEvent(ControllerButtonEvent.Pressed, function() {
    if (MoveAbility) {
        PauseGame()
    }
})
function SetUpHUD () {
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
game.onUpdate(function() {
    if (PlayingTutorial) {
        PlayerHealth.value = 8
        PineconeNumber = 100
        SwordHitsLeft = 25
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, DieselHitbox).value = 2
    }
})
function Tutorial () {
    PlayingTutorial = true
    scene.setTileMapLevel(tilemap`Tutorial`)
    scene.setBackgroundColor(13)
    Doorway = sprites.create(assets.image`PrologueDoorway`, SpriteKind.NA)
    tiles.placeOnRandomTile(Doorway, assets.tile`FINISH`)
    tiles.setTileAt(Doorway.tilemapLocation(), assets.tile`transparency16`)
    Doorway.y -= 8
    CreateAquifer()
    tiles.placeOnRandomTile(PlayerHitbox, assets.tile`START`)
    tiles.setTileAt(PlayerHitbox.tilemapLocation(), assets.tile`transparency16`)
    CreateDiesel()
    tiles.placeOnRandomTile(DieselHitbox, assets.tile`OilSwordsmanSpawner`)
    tiles.setTileAt(DieselHitbox.tilemapLocation(), assets.tile`transparency16`)
    DieselHitbox.setKind(SpriteKind.EnemyRHitbox)
    OilHealth = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
    OilHealth.setColor(12, 15)
    OilHealth.setBarBorder(1, 15)
    OilHealth.max = 2
    OilHealth.attachToSprite(DieselHitbox)
    SetUpHUD()
    PineconeNumber = 100
    MoveAbility = true
    sprites.destroy(Prologue)
    timer.background(function () {
        Narrate("<red>Welcome to training! Use [>] & [<] to move and [^] or [Z] to jump.", fancyText.TextSpeed.Normal)
        SpeechBalloon.bottom = scene.cameraProperty(CameraProperty.Bottom) - 10
        fancyText.setFrame(SpeechBalloon, assets.image`SimulatorFrame`)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000800011e0c001000011e14001800011e1c002000011e2400280001192c00300001193400380001193c004000011944004800011b4c005000011b54005800011b5c006000011b6400680001976c00700001977400780001167c008000011608001c000e050046006603320000040a002d00000064001400013200020100021e0000002000011220004000010d40006000010f60007000018b70008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000800011e0c001000011e14001800011e1c002000011e2400280001192c00300001193400380001193c004000011944004800011b4c005000011b54005800011b5c006000011b6400680001976c00700001977400780001167c008000011608001c000e050046006603320000040a002d00000064001400013200020100021e0000002000011220004000010d40006000010f60007000018b70008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        Narrate("<red>Use [1] to switch to pinecones, and use [X] to throw them. Try hitting the punching bag!", fancyText.TextSpeed.Normal)
        SpeechBalloon.bottom = scene.cameraProperty(CameraProperty.Bottom) - 10
        fancyText.setFrame(SpeechBalloon, assets.image`SimulatorFrame`)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000800011e0c001000011e14001800011e1c00200001222400280001192c00300001193400380001193c004000011d44004800011b4c005000011b54005800011b5c006000011e6400680001976c00700001977400780001167c008000011608001c000e050046006603320000040a002d00000064001400013200020100021e0000002000011220004000010d40006000010f60007000018b70008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000800011e0c001000011e14001800011e1c00200001222400280001192c00300001193400380001193c004000011d44004800011b4c005000011b54005800011b5c006000011e6400680001976c00700001977400780001167c008000011608001c000e050046006603320000040a002d00000064001400013200020100021e0000002000011220004000010d40006000010f60007000018b70008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        Narrate("<red>Use [2] to switch to your twig. Use [X] again to slash with it; try hitting the punching bag.", fancyText.TextSpeed.Normal)
        SpeechBalloon.bottom = scene.cameraProperty(CameraProperty.Bottom) - 10
        fancyText.setFrame(SpeechBalloon, assets.image`SimulatorFrame`)
        DieselHitbox.setKind(SpriteKind.EnemyHitbox)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000800011e0c001000011e14001800011e1c002000011e2400280001202c00300001203400380001203c00400001204400480001224c00500001225400580001225c00600001226400680001a36c00700001a37400780001a37c00800001a308001c000e050046006603320000040a002d00000064001400013200020100021e0000002000011220004000010d40006000010f60007000018b70008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000800011e0c001000011e14001800011e1c002000011e2400280001202c00300001203400380001203c00400001204400480001224c00500001225400580001225c00600001226400680001a36c00700001a37400780001a37c00800001a308001c000e050046006603320000040a002d00000064001400013200020100021e0000002000011220004000010d40006000010f60007000018b70008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        Narrate("<red>This is a Vapor Pack; touching it will heal you. Vapor Packs will be hidden around missions.", fancyText.TextSpeed.Normal)
        SpeechBalloon.bottom = scene.cameraProperty(CameraProperty.Bottom) - 10
        fancyText.setFrame(SpeechBalloon, assets.image`SimulatorFrame`)
        animation.runImageAnimation(
            Doorway,
            assets.animation`PrologueDoorDispenseVP`,
            50,
            false
        )
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000800011e0c001000011e14001800011e1c00200001222400280001192c00300001193400380001193c004000011d44004800011b4c005000011b54005800011b5c006000011e64006800011e6c007000011e74007800011e7c008000012008001c000e050046006603320000040a002d00000064001400013200020100021e0000002000011220004000010d40006000010f60007000018b70008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003600004000800011e0c001000011e14001800011e1c00200001222400280001192c00300001193400380001193c004000011d44004800011b4c005000011b54005800011b5c006000011e64006800011e6c007000011e7400780001207c008000011e08001c000e050046006603320000040a002d00000064001400013200020100021e0000002000011220004000010d40006000010f60007000018b70008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        PlayingTutorial = false
    })
}
function PauseGame () {
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
function Reset () {
    scene.centerCameraAt(120,120)
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
            PlaySFX("MenuCHange")
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
function AquiferSayText (speech: string, speed: number, Emotion: number) {
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
        CharBox.setImage(assets.image`DieselCruel`)
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
function WaterAnims () {
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
function Outline (Color: number, Sprite2: Sprite) {
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
scene.onOverlapTile(SpriteKind.EnemySrHitbox, assets.tile`NSSpikeUp`, function (sprite, location) {
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
sprites.onOverlap(SpriteKind.EnemyRHitbox, SpriteKind.Player, function (sprite, otherSprite) {
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
function CreateTextNoSpeech (Text: string, XPos: number, YPos: number, Color: number) {
    SpeechBalloon = fancyText.create(Text, 0, Color, customFont.BARRIER_font)
    SpeechBalloon.setPosition(XPos, YPos)
    SpeechBalloon.z = 1002
    SpeechBalloon.setFlag(SpriteFlag.RelativeToCamera, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PickUp, function (sprite, otherSprite) {
    if (PineconeNumber < 100) {
        sprites.destroy(otherSprite)
        PineconeNumber += 1
    }
})
// 1=sword
browserEvents.Two.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (MoveAbility) {
        WeaponHolding = 1
        WeaponUI.setImage(assets.image`swordUI`)
    }
})
sprites.onOverlap(SpriteKind.AllyHitbox, SpriteKind.EnemyRHitbox, function (sprite, otherSprite) {
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
scene.onOverlapTile(SpriteKind.AllyHitbox, assets.tile`PHFSpike`, function (sprite, location) {
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
// 0=pinecones
browserEvents.One.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (MoveAbility) {
        WeaponHolding = 0
        WeaponUI.setImage(assets.image`pineconeUI`)
    }
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
function SetUpOilNum () {
    OilNum = sprites.allOfKind(SpriteKind.EnemyHitbox).length + sprites.allOfKind(SpriteKind.EnemyRHitbox).length + sprites.allOfKind(SpriteKind.EnemySrHitbox).length
}
function Narrate (text: string, speed: number) {
    fancyText.setText(SpeechBalloon, text)
    fancyText.animateAtSpeed(SpeechBalloon, speed, fancyText.AnimationPlayMode.InBackground)
    fancyText.setFont(SpeechBalloon, customFont.BARRIER_font)
    fancyText.setTextFlag(SpeechBalloon, fancyText.Flag.ChangeHeightWhileAnimating, false)
}
function Cold_Hearted_Pale_Hail_Forest () {
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
let Doorway: Sprite = null
let PlayingTutorial = false
let RangerPinecone: Sprite = null
let Hail: Sprite = null
let LightningSprite: Sprite = null
let PineconeOnGround: Sprite = null
let ScreenImage: Image = null
let HudSprite: Sprite = null
let WeaponUI: Sprite = null
let PineconeCounter: fancyText.TextSprite = null
let VIGORtext: fancyText.TextSprite = null
let Prologue: Sprite = null
let LV = 0
let SongIntro = false
let BarrierLogo: Sprite = null
let Explosion: Sprite = null
let ExplosionY = 0
let StormyNS = false
let OilNum = 0
let PlayingSingleMission = false
let LvIntro: Sprite = null
let SpriteImage: Sprite = null
let DieselImage: Sprite = null
let DieselHitbox: Sprite = null
let AquiferATKing = false
let Pinecone2: Sprite = null
let WeaponHolding = 0
let Silent = false
let SpeechBalloon: fancyText.TextSprite = null
let CharBox: Sprite = null
let JumpPossibility = false
let MenuSprite: miniMenu.MenuSprite = null
let Aquifer: Sprite = null
let PlayerHealth: StatusBarSprite = null
let OilHealth: StatusBarSprite = null
let OilNPC: Sprite = null
let OilHitbox: Sprite = null
let WaterNPC: Sprite = null
let WaterHitbox: Sprite = null
let PlayerHitbox: Sprite = null
let MoveAbility = false
let Hailing = false
let MISSION = 0
let KILLS = 0
let PineconeNumber = 0
let SwordHitsLeft = 0
let SongStopped = false
let Lvl = 0
let LvName = ""
//variables
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
    for (let value222 of sprites.allOfKind(SpriteKind.EnemyRHitbox)) {
        sprites.readDataSprite(value222, "image").setPosition(value222.x, value222.y)
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
    for (let value72 of sprites.allOfKind(SpriteKind.RivalImage)) {
        value72.setPosition(DieselHitbox.x, DieselHitbox.y)
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
                    scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Nitro Stun layer 0b`)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`VaporPack`, function(sprite, location) {
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
