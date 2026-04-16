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
multiEvents.onOverlapTile(multiEvents.spriteKinds(SpriteKind.Player), [assets.tile`PHFSpike`, assets.tile`NSSpikeRight`, assets.tile`NSSpikeUp`], function(sprite, location) {
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

multiEvents.onTileOverlap() //finish later

scene.onOverlapTile(SpriteKind.Player, assets.tile`PHFTrickEnding`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`PHFSnowyLeaves`)
    if (MISSION == 2) {
        SwapSong()
        MISSION = 3
        CUTSCENE()
    }
})
