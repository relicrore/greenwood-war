let RangerPinecone: Sprite = null
let DieselImage: Sprite = null
let DieselHitbox: Sprite = null
let OilHealth: StatusBarSprite = null
let OilNPC: Sprite = null
let OilHitbox: Sprite = null

//Diesel
function CreateDiesel() {
    DieselHitbox = sprites.create(assets.image`OilHitbox`, SpriteKind.RivalHitbox)
    basics.add_gravity_to(DieselHitbox)
    DieselHitbox.setFlag(SpriteFlag.Invisible, true)
    DieselImage = sprites.create(assets.image`Diesel`, SpriteKind.RivalImage)
    DieselImage.setFlag(SpriteFlag.GhostThroughWalls, true)
    sprites.setDataSprite(DieselHitbox, "image", DieselImage)
    OilAnims()
}

game.onUpdate(function () {
    for (let value72 of sprites.allOfKind(SpriteKind.RivalImage)) {
        value72.setPosition(DieselHitbox.x, DieselHitbox.y)
    }
})

//Animations
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

game.onUpdate(function () {
    for (let value of multiEvents.allOfKind(multiEvents.spriteKinds
    (
        SpriteKind.EnemyHitbox,
        SpriteKind.EnemyRHitbox,
        SpriteKind.EnemySrHitbox,
        SpriteKind.EnemyHitboxCutscene))
    ) {
        sprites.readDataSprite(value, "image").setPosition(value.x, value.y)
    }
})

//Damage and health attributes
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

multiEvents.onOverlap(multiEvents.spriteKinds(SpriteKind.Pinecone), multiEvents.spriteKinds(SpriteKind.EnemyHitbox, SpriteKind.EnemyRHitbox, SpriteKind.EnemySrHitbox), function (sprite, otherSprite) {
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

//Movement
events.wallEvent(SpriteKind.EnemyHitbox, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StopHitting, function (sprite) {
    basics.make_sprite_jump(sprite, 190)
})

events.wallEvent(SpriteKind.EnemyRHitbox, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StopHitting, function (sprite) {
    basics.make_sprite_jump(sprite, 190)
})

events.wallEvent(SpriteKind.EnemySrHitbox, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StopHitting, function (sprite) {
    basics.make_sprite_jump(sprite, 250)
})

game.onUpdate(function () {
    for (let OilHitbox2 of multiEvents.allOfKind(multiEvents.spriteKinds(SpriteKind.EnemyHitbox, SpriteKind.EnemyRHitbox, SpriteKind.EnemySrHitbox))) {
        if (OilHitbox2.isHittingTile(CollisionDirection.Bottom)) {
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

game.onUpdateInterval(1000, function () {
    for (let OilHitbox3 of multiEvents.allOfKind(multiEvents.spriteKinds(SpriteKind.EnemyHitbox, SpriteKind.EnemyRHitbox, SpriteKind.EnemySrHitbox))) {
        if (Math.percentChance(50)) {
            OilHitbox3.vx = 100
        } else if (Math.percentChance(50)) {
            OilHitbox3.vx = -100
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
