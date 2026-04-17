let Doorway: Sprite = null
let PlayingTutorial = false
let Silent = false
let SpeechBalloon: fancyText.TextSprite = null
let CharBox: Sprite = null

//Cutscenes
function CUTSCENE() {
    timer.after(30, function () {
        if (MISSION == 1) {
            timer.after(3000, function () {
                CreateTextSprite()
                TorrentSayText("<light purple>Tsunami Squad</light purple>, come in.", fancyText.TextSpeed.Fast, 0)
                AquiferSayText("<yellow>Platoon A</yellow> of <light purple>Tsunami Squad</light purple>, we read you.", fancyText.TextSpeed.Fast, 0)
                AquiferSayText("And this is...?", fancyText.TextSpeed.Fast, 0)
                TorrentSayText("<teal>General Torrent</teal>, <light purple>Tsunami</light purple> commander.", fancyText.TextSpeed.Fast, 0)
                AquiferSayText("Copy that.", fancyText.TextSpeed.Fast, 0)
                TorrentSayText("Anything to report?", fancyText.TextSpeed.Fast, 0)
                AquiferSayText("Negative.", fancyText.TextSpeed.Fast, 0)
                AquiferSayText("We just arrived at Winterlock Forest.", fancyText.TextSpeed.Fast, 0)
                TorrentSayText("Affirmative.", fancyText.TextSpeed.Fast, 0)
                TorrentSayText("Hold on...", fancyText.TextSpeed.Fast, 0)
                AquiferSayText("Is there a problem?", fancyText.TextSpeed.Fast, 0)
                TorrentSayText("Oil troops. They shouldn't be here.", fancyText.TextSpeed.Fast, 0)
                TorrentSayText("Take them out. Don't leave any behind.", fancyText.TextSpeed.Fast, 0)
                TorrentSayText("Progress to the big oak afterward.", fancyText.TextSpeed.Fast, 0)
                TorrentSayText("Wait for further directions there.", fancyText.TextSpeed.Fast, 0)
                AquiferSayText("Understood.", fancyText.TextSpeed.Fast, 0)
                TorrentSayText("<teal>Torrent</teal> out.", fancyText.TextSpeed.Fast, 0)
                timer.after(500, function () {
                    sprites.destroy(SpeechBalloon)
                    sprites.destroy(CharBox)
                    Hailing = true
                    MoveAbility = true
                    SongStopped = false
                    Cold_Hearted_Pale_Hail_Forest()
                })
            })
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
                                    PlaySFX("ExplodeLarge")
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

//Textsprite for character speech
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

//Textsprite for on-screen messages
function CreateTextNoSpeech(Text: string, XPos: number, YPos: number, Color: number) {
    SpeechBalloon = fancyText.create(Text, 0, Color, customFont.BARRIER_font)
    SpeechBalloon.setPosition(XPos, YPos)
    SpeechBalloon.z = 1002
    SpeechBalloon.setFlag(SpriteFlag.RelativeToCamera, true)
}

//Narration
function Narrate(text: string, speed: number) {
    fancyText.setText(SpeechBalloon, text)
    fancyText.animateAtSpeed(SpeechBalloon, speed, fancyText.AnimationPlayMode.InBackground)
    fancyText.setFont(SpeechBalloon, customFont.BARRIER_font)
    fancyText.setTextFlag(SpeechBalloon, fancyText.Flag.ChangeHeightWhileAnimating, false)
}

//Aquifer
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

//Rainstorm
function RainstormSayText(speech: string, speed: number, Emotion: number) {
    if (Emotion == 0) {
        CharBox.setImage(assets.image`AquiferStraightFace`)
    } else if (Emotion == 1) {
        CharBox.setImage(assets.image`AquiferHappy`)
    } else if (Emotion == 2) {
        CharBox.setImage(assets.image`RainstormAngry`)
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
    fancyText.setText(SpeechBalloon, "<blue>RAINSTORM</blue>: " + speech)
    fancyText.setFrame(SpeechBalloon, assets.image`Text`)
    if (!(Silent)) {
        fancyText.setAnimationSound(SpeechBalloon, music.createSoundEffect(WaveShape.Square, 429, 0, 255, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Linear))
    }
    fancyText.animateAtSpeed(SpeechBalloon, speed, fancyText.AnimationPlayMode.UntilDone)
    pause(1000)
}


//Torrent
function TorrentSayText(speech: string, speed: number, Emotion: number) {
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

//Diesel
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

//Fossil
function FossilSayText(speech: string, speed: number, Emotion: number) {
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

//Cutscene overlaps
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

//Prologue
function Intro() {
    Reset()
    SwapSong()
    color.setPalette(
        color.originalPalette
    )
    timer.after(1000, function () {
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
        timer.background(function () { DieselSayText("Nobody's watching me...", fancyText.TextSpeed.Normal, 14) })
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
        // Diesel Theme
        timer.background(function () {
            FossilSayText("OIL MEETING!! <shaky>NOW!</shaky>", fancyText.TextSpeed.Fast, 12)
            timer.after(500, function () {
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
        timer.background(function () {
            FossilSayText("Money is good.", fancyText.TextSpeed.Normal, 15)
            DieselSayText("That's not really a rule...", fancyText.TextSpeed.VeryFast, 8)
        })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140004c0001224c005000011b50005800011b58006000011d60006800011e68007000011d70007800011e78008000012008001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () { FossilSayText("Steal money from water and bring it to me...", fancyText.TextSpeed.Fast, 9) })
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
            timer.after(1000, function () {
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
        timer.background(function () {
            CreateTextSprite()
            DieselSayText("Hi <cyan>Aquifer</cyan>... Uh... Wanna go fishing?", fancyText.TextSpeed.VeryFast, 14)
            AquiferSayText("Yeah, sure!", fancyText.TextSpeed.Fast, 1)
        })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003480008000c00011b0c001000011d10001800011e18002000012020002c00011d2c003000011e30004000011b4000480001a34800500001225000580001a358006000012260008000019a08001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () {
            scene.centerCameraAt(DieselHitbox.x, DieselHitbox.y)
            DieselHitbox.fx = 0
            DieselHitbox.vx = -25
            timer.after(500, function () {
                AquiferSayText("Where are you going?", fancyText.TextSpeed.Fast, 1)
                DieselHitbox.vx = 0
                DieselSayText("uhhhh...", fancyText.TextSpeed.VeryFast, 18)
            })
        })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0008000c00011b0c001000011d10001800011e18002000012020002c00011d2c003000011e30004000011b48004c00011b4c005000011d50005800011e58006000012060006c00011d6c007000011e7000780001a378008000012208001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () {
            DieselSayText("I, uh.. I need to go... chop bushes! yeah.", fancyText.TextSpeed.VeryFast, 14)
            DieselHitbox.vx = -200
            PlaySFX("Zoom")
            timer.after(100, function () {
                AquiferSayText("<wavy>HMMM...</wavy>", fancyText.TextSpeed.Normal, 5)
            })
        })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003480008000c00011b0c001000011d10001800011e18002000012020002c00011d2c003000011e30004000011b4000480001a34800500001225000580001a358006000012260008000019a08001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        // Begin Trailer End theme
        timer.background(function () {
            tiles.placeOnTile(DieselHitbox, tiles.getTileLocation(4, 12))
            scene.cameraFollowSprite(DieselHitbox)
            DieselSayText("Golden pinecones golden pinecones golden pinecones...", fancyText.TextSpeed.VeryFast, 14)
        })
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004600000000800010f08001000011210001800011618002000010f20002800011228003000011630003800010f38004000011240004800010f48005000011450005800019758006000010f60006800011468007000019770007800010f78008000011405001c000f0a006400f4010a0000040000000000000000000000000000000002180000002000010820004000010840006000010a60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () {
            tiles.placeOnTile(PlayerHitbox, tiles.getTileLocation(10, 12))
            PlayerHitbox.ay = 0
            PlayerHitbox.vy = 0
            PlayerHitbox.vx = -300
            timer.after(100, function () {
                PlayerHitbox.ay = 500
                PlayerHitbox.fx = 1000
                AquiferSayText("WHAT ARE YOU DOING WITH MY MONEY?!?!", fancyText.TextSpeed.Fast, 2)
                PlayerHitbox.fx = 0
                DieselSayText("...", fancyText.TextSpeed.VeryFast, 18)
            })
        })
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004600000000800010f08001000019710001800011b18002000010f20002800019728003000011b30003800010f38004000019740004800010f48005000011650005800011958006000010f60006800011668007000011970007800010f78008000011605001c000f0a006400f4010a0000040000000000000000000000000000000002180000002000018b20004000018b40006000010d60008000010d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () {
            scene.centerCameraAt(DieselHitbox.x, DieselHitbox.y)
            DieselSayText("Uhhhhhhhhhhhhhhhh...", fancyText.TextSpeed.Fast, 18)
            DieselHitbox.vx = 300
            PlaySFX("Zoom")
        })
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004600000000800010f08001000011210001800011618002000010f20002800011228003000011630003800010f38004000011240004800010f48005000011450005800019758006000010f60006800011468007000019770007800010f78008000011405001c000f0a006400f4010a0000040000000000000000000000000000000002180000002000010820004000010840006000010a60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () { AquiferSayText("<shaky>HEY!!!! <dark purple>DIESEL</dark purple>!!!!</shaky>", fancyText.TextSpeed.Fast, 13) })
        music.play(music.createSong(hex`00a0000408040301001c000f05001202c102c20100040500280000006400280003140006020004600000000800010f08001000019710001800011b18002000010f20002800019728003000011b30003800010f38004000019740004800010f48005000011650005800011958006000010f60006800011668007000011970007800010f78008000011605001c000f0a006400f4010a0000040000000000000000000000000000000002180000002000018b20004000018b40006000010d60008000010d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        // Diesel Theme Repeat w/ grace notes
        timer.background(function () {
            color.startFadeFromCurrent(color.Black, 100)
            color.pauseUntilFadeDone()
            tiles.placeOnTile(PlayerHitbox, tiles.getTileLocation(90, 12))
            WaterNPC = sprites.create(assets.image`WaterHitbox`, SpriteKind.NA)
            animation.runImageAnimation(
                WaterNPC,
                assets.animation`Idle Rainstorm Left`,
                95,
                true
            )
            tiles.placeOnRandomTile(WaterNPC, assets.tile`Forcefield3`)
            tiles.setTileAt(WaterNPC.tilemapLocation(), assets.tile`transparency16`)
            scene.cameraFollowSprite(PlayerHitbox)
            color.startFadeFromCurrent(color.originalPalette, 100)
            color.pauseUntilFadeDone()
            AquiferSayText("Admiral <blue>Rainstorm</blue>! <dark purple>Diesel</dark purple> just stole <shaky>ALL OF MY MONEY!!!</shaky>", fancyText.TextSpeed.VeryFast, 2)
            RainstormSayText("THAT'S IT!!!", fancyText.TextSpeed.VeryFast, 2)
        })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f4016400000400000000000000000000000000000000035a0000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140004c0001224c005000011b50005800011b58006000011d60006800011e68007000011d70007800011e78008000012008001c000e050046006603320000040a002d0000006400140001320002010002180000002000010f20004000018e40006000018b60008000010a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        timer.background(function () { RainstormSayText("THIS IS WAR!!!", fancyText.TextSpeed.Normal, 2) })
        music.play(music.createSong(hex`00a0000408040307001c00020a006400f401640000040000000000000000000000000000000003420000000c00011b0c001000012210002c0001222c00300001223000360001a336003c0001223c00400001a140005c0001275c005e0001a65e00600001a360008000012208001c000e050046006603320000040a002d0000006400140001320002010002180000002000018b20004000010d40006000018e60008000018e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c8000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d00020206300031000106340035000202063800390001043c003d0001064000410001024400450001064800490001044c004d00020206500051000106540055000202065800590001045c005d0001066000610001026400650001066800690001046c006d00020206700071000106740075000202067800790001047c007d000106`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`00a0000408040401001c000f05001202c102c20100040500280000006400280003140006020004310010001800021b2718002000021d2920003000029eaa3000400002202c40005800021d2958006000021e2a60008000021b2705001c000f0a006400f4010a0000040000000000000000000000000000000002180000002000010f20004000018b40006000010d60008000010f07001c00020a006400f4016400000400000000000000000000000000000000031c0000002000021b27200040000297a34000600002929e60008000020f1b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800d3000000010001020400050001060800090001040c000d00020206100011000106140015000202061800190001041c001d0001062000210001022400250001062800290001042c002d0002020630003100020608340035000202063800390001043c003d000106400041000202084400450001064800490001044c004d000202065000510002060854005500020206580059000204085c005d0001066000610002020864006500010668006900030407086c006d0002020670007100030607087400750002020678007900030407087c007d000106`), music.PlaybackMode.UntilDone)
        color.startFadeFromCurrent(color.Black, 1000)
        color.pauseUntilFadeDone()
        game.reset()
    })
}

//Tutorial
game.onUpdate(function () {
    if (PlayingTutorial) {
        PlayerHealth.value = 8
        PineconeNumber = 100
        SwordHitsLeft = 25
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, DieselHitbox).value = 2
    }
})

function Tutorial() {
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
