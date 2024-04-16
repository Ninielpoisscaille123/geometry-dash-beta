scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.destroy()
    for (let index = 0; index < 15; index++) {
        projectile3 = sprites.createProjectileFromSprite(img`
            9 9 
            9 9 
            `, mySprite, randint(-360, 360), randint(-360, 360))
    }
    timer.after(1000, function () {
        game.over(false)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.destroy()
    for (let index = 0; index < 15; index++) {
        projectile3 = sprites.createProjectileFromSprite(img`
            9 9 
            9 9 
            `, mySprite, randint(-360, 360), randint(-360, 360))
    }
    timer.after(1000, function () {
        game.over(false)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    speed_fast = false
    speed_slow = false
    super_slow_speed = true
    mySprite.vx = 80
})
function start_level_7 () {
    tiles.loadMap(tiles.createSmallMap(tilemap`level28`))
    mySprite = sprites.create(img`
        4 . . . . . . 4 
        4 4 . . . . 4 4 
        4 4 4 4 4 4 4 4 
        4 1 f 4 4 f 1 4 
        4 1 f 4 4 f 1 4 
        4 4 4 3 3 4 4 4 
        e e 4 4 4 4 e e 
        4 4 4 4 4 4 4 4 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
    scene.setBackgroundColor(15)
    super_slow_speed = false
    spider = true
    arow = false
    normal = false
    speed_slow = true
    speed_fast = false
    teleport_on = true
    arow_gravety_on = false
    normal_gravity = true
    plane = false
    move_up = false
    plane = false
    ball = false
    for (let value5 of tiles.getTilesByType(assets.tile`myTile28`)) {
        mySprite2 = sprites.create(img`
            . . . 5 5 5 5 5 5 5 . . . 
            . . 5 . . . . . . . 5 . . 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            . . 5 . . . . . . . 5 . . 
            . . . 5 5 5 5 5 5 5 . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value5)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile31`)) {
        mysprite3 = sprites.create(img`
            . . . f f f f f f f . . . 
            . . f c c c c 1 c c f . . 
            . f 1 f f f f f f f c f . 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c c f c f 
            f 1 f c c c c c 1 c f 1 f 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c 1 f c f 
            f c f c c c 1 c c c f 1 f 
            f c f c c c c c c c f c f 
            . f c f f f f f f f c f . 
            . . f c c 1 c c 1 c f . . 
            . . . f f f f f f f . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mysprite3, value6)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    animation.runImageAnimation(
    mySprite,
    [img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        .........ff5555f88ff..........
        .........fef555f88ff..........
        ........f5fef555ff5f..........
        .......f555fff55fff...........
        .......f55f...ff55ff..........
        ......f55f.....f55ff..........
        ......f5f......f55ff..........
        .......f.......f5ff...........
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        .........ffef555ff5f..........
        ........f55f.ff555fef.........
        ........f5f.f55fff.fef........
        ........f5f.f55fef.feef.......
        ........f5f.f55fef..fef.......
        ........f5f.f5feff..fef.......
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        ........fffef5ffff5f..........
        .......f55f..ff5fff...........
        ......f55f..fef55fef..........
        .....f55f...fef55fef..........
        ....f55f...feff5feef..........
        ...f55f....ff..fffff..........
        `],
    100,
    true
    )
    spider = true
    normal = false
    arow = false
    ufo = false
    teleport_on = true
    arow_gravety = false
    arow_gravety_on = false
    Ggravety = true
    ball = false
    teloport2 = true
    mySprite.setFlag(SpriteFlag.DestroyOnWall, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    teleport_on = false
    normal = false
    arow = false
    spider = false
    arow_gravety_on = false
    ball = false
    normal_gravity = true
    ufo = true
    mySprite.setFlag(SpriteFlag.DestroyOnWall, false)
})
function level () {
    tiles.loadMap(tiles.createSmallMap(tilemap`level1`))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    speed_fast = false
    speed_slow = true
    super_slow_speed = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    tiles.loadMap(tiles.createSmallMap(tilemap`level12`))
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile34`)
    for (let value3 of tiles.getTilesByType(assets.tile`myTile28`)) {
        mySprite2 = sprites.create(img`
            . . . 5 5 5 5 5 5 5 . . . 
            . . 5 . . . . . . . 5 . . 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            . . 5 . . . . . . . 5 . . 
            . . . 5 5 5 5 5 5 5 . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value3)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile31`)) {
        mysprite3 = sprites.create(img`
            . . . f f f f f f f . . . 
            . . f c c c c 1 c c f . . 
            . f 1 f f f f f f f c f . 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c c f c f 
            f 1 f c c c c c 1 c f 1 f 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c 1 f c f 
            f c f c c c 1 c c c f 1 f 
            f c f c c c c c c c f c f 
            . f c f f f f f f f c f . 
            . . f c c 1 c c 1 c f . . 
            . . . f f f f f f f . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mysprite3, value4)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    mySprite.vy = -300
    color.setColor(15, color.rgb(randint(100, 255), randint(1, 255), randint(1, 255)), 1)
    scene.cameraShake(8, 100)
    if (ball == true) {
        teloport2 = false
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    flip = false
    speed_slow = true
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ufo == true) {
        if (controller.A.isPressed()) {
            mySprite.vy = -150
        }
    }
    if (ball == true) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            teloport2 = false
            telliport1 = true
            animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        }
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            telliport1 = false
            teloport2 = true
            animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        }
    }
    if (spider == true) {
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            animation.stopAnimation(animation.AnimationTypes.All, mySprite)
            telliport1 = false
            teloport2 = true
        }
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            animation.stopAnimation(animation.AnimationTypes.All, mySprite)
            teloport2 = false
            telliport1 = true
        }
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile31`) || (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile31`) || (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile31`) || (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile31`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile31`))))) {
        mySprite.vy = 1000
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile28`) || (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile28`) || (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile28`) || (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile28`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile28`))))) {
        mySprite.vy = -210
        color.setColor(15, color.rgb(randint(100, 255), randint(1, 255), randint(1, 255)), 1)
    }
    if (mySprite.overlapsWith(mySprite2)) {
        mySprite.vy = -210
        color.setColor(15, color.rgb(randint(100, 255), randint(1, 255), randint(1, 255)), 1)
    }
    if (mySprite.overlapsWith(mysprite3)) {
        color.setColor(15, color.rgb(randint(100, 255), randint(1, 255), randint(1, 255)), 1)
        mySprite.vy = 500
    }
})
function start_level_3 () {
    tiles.loadMap(tiles.createSmallMap(tilemap`level7`))
    mySprite = sprites.create(img`
        4 . . . . . . 4 
        4 4 . . . . 4 4 
        4 4 4 4 4 4 4 4 
        4 1 f 4 4 f 1 4 
        4 1 f 4 4 f 1 4 
        4 4 4 3 3 4 4 4 
        e e 4 4 4 4 e e 
        4 4 4 4 4 4 4 4 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
    animation.runImageAnimation(
    mySprite,
    [img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        .........ff5555f88ff..........
        .........fef555f88ff..........
        ........f5fef555ff5f..........
        .......f555fff55fff...........
        .......f55f...ff55ff..........
        ......f55f.....f55ff..........
        ......f5f......f55ff..........
        .......f.......f5ff...........
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        .........ffef555ff5f..........
        ........f55f.ff555fef.........
        ........f5f.f55fff.fef........
        ........f5f.f55fef.feef.......
        ........f5f.f55fef..fef.......
        ........f5f.f5feff..fef.......
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        ........fffef5ffff5f..........
        .......f55f..ff5fff...........
        ......f55f..fef55fef..........
        .....f55f...fef55fef..........
        ....f55f...feff5feef..........
        ...f55f....ff..fffff..........
        `],
    100,
    true
    )
    scene.setBackgroundColor(2)
    upsidedown = false
    super_slow_speed = false
    spider = true
    arow = false
    normal = false
    speed_slow = true
    speed_fast = false
    teleport_on = true
    arow_gravety_on = false
    normal_gravity = true
    plane = false
    move_up = false
    plane = false
    ball = false
    for (let value7 of tiles.getTilesByType(assets.tile`myTile28`)) {
        mySprite2 = sprites.create(img`
            . . . 5 5 5 5 5 5 5 . . . 
            . . 5 . . . . . . . 5 . . 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            . . 5 . . . . . . . 5 . . 
            . . . 5 5 5 5 5 5 5 . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value7)
    }
    for (let value8 of tiles.getTilesByType(assets.tile`myTile31`)) {
        mysprite3 = sprites.create(img`
            . . . f f f f f f f . . . 
            . . f c c c c 1 c c f . . 
            . f 1 f f f f f f f c f . 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c c f c f 
            f 1 f c c c c c 1 c f 1 f 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c 1 f c f 
            f c f c c c 1 c c c f 1 f 
            f c f c c c c c c c f c f 
            . f c f f f f f f f c f . 
            . . f c c 1 c c 1 c f . . 
            . . . f f f f f f f . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mysprite3, value8)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    speed_fast = false
    speed_slow = true
    super_slow_speed = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    teleport_on = false
    normal = true
    arow = false
    spider = false
    ufo = false
    arow_gravety_on = false
    ball = false
    icons()
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setFlag(SpriteFlag.DestroyOnWall, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    teleport_on = false
    ufo = false
    spider = false
    arow = true
    normal = false
    arow_gravety_on = true
    arow_gravety = false
    ball = false
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . f f f 
        . . . f f 5 f 
        . . f f 5 5 f 
        . f f 5 5 5 f 
        f f 5 5 5 5 f 
        f 5 5 5 5 5 f 
        f f f f f f f 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    if (controller.A.isPressed()) {
        upsidedown = true
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    teleport_on = false
    normal = false
    arow = false
    spider = false
    arow_gravety_on = false
    ball = false
    normal_gravity = true
    ufo = true
    mySprite.setFlag(SpriteFlag.DestroyOnWall, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    speed_fast = true
    speed_slow = false
    super_slow_speed = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    flip = false
    speed_slow = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    flip = true
    speed_slow = true
    tiles.replaceAllTiles(assets.tile`myTile40`, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    speed_fast = true
    speed_slow = false
    super_slow_speed = false
})
function start_level_5 () {
    tiles.loadMap(tiles.createSmallMap(tilemap`level18`))
    mySprite = sprites.create(img`
        5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 
        5 5 . 5 5 . 5 5 
        5 5 . 5 5 . 5 5 
        5 5 5 5 5 5 5 5 
        5 5 . . . . 5 5 
        5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
    animation.runImageAnimation(
    mySprite,
    [img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        .........ff5555f88ff..........
        .........fef555f88ff..........
        ........f5fef555ff5f..........
        .......f555fff55fff...........
        .......f55f...ff55ff..........
        ......f55f.....f55ff..........
        ......f5f......f55ff..........
        .......f.......f5ff...........
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        .........ffef555ff5f..........
        ........f55f.ff555fef.........
        ........f5f.f55fff.fef........
        ........f5f.f55fef.feef.......
        ........f5f.f55fef..fef.......
        ........f5f.f5feff..fef.......
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        ........fffef5ffff5f..........
        .......f55f..ff5fff...........
        ......f55f..fef55fef..........
        .....f55f...fef55fef..........
        ....f55f...feff5feef..........
        ...f55f....ff..fffff..........
        `],
    100,
    true
    )
    scene.setBackgroundColor(2)
    super_slow_speed = false
    spider = true
    arow = false
    normal = false
    speed_slow = true
    speed_fast = false
    teleport_on = true
    arow_gravety_on = false
    normal_gravity = true
    plane = false
    move_up = false
    plane = false
    ball = false
    for (let value9 of tiles.getTilesByType(assets.tile`myTile28`)) {
        mySprite2 = sprites.create(img`
            . . . 5 5 5 5 5 5 5 . . . 
            . . 5 . . . . . . . 5 . . 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            . . 5 . . . . . . . 5 . . 
            . . . 5 5 5 5 5 5 5 . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value9)
    }
    for (let value10 of tiles.getTilesByType(assets.tile`myTile31`)) {
        mysprite3 = sprites.create(img`
            . . . f f f f f f f . . . 
            . . f c c c c 1 c c f . . 
            . f 1 f f f f f f f c f . 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c c f c f 
            f 1 f c c c c c 1 c f 1 f 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c 1 f c f 
            f c f c c c 1 c c c f 1 f 
            f c f c c c c c c c f c f 
            . f c f f f f f f f c f . 
            . . f c c 1 c c 1 c f . . 
            . . . f f f f f f f . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mysprite3, value10)
    }
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (arow == true) {
        if (arow_gravety == true) {
            arow_gravety = false
            mySprite.setImage(img`
                . . . . f f f 
                . . . f f 5 f 
                . . f f 5 5 f 
                . f f 5 5 5 f 
                f f 5 5 5 5 f 
                f 5 5 5 5 5 f 
                f f f f f f f 
                `)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . f f f 
                . . . f f 5 f 
                . . f f 5 5 f 
                . f f 5 5 5 f 
                f f 5 5 5 5 f 
                f 5 5 5 5 5 f 
                f f f f f f f 
                `],
            100,
            true
            )
            if (flip == true) {
                mySprite.setImage(img`
                    f f f . . . . 
                    f 5 f f . . . 
                    f 5 5 f f . . 
                    f 5 5 5 f f . 
                    f 5 5 5 5 f f 
                    f 5 5 5 5 5 f 
                    f f f f f f f 
                    `)
                animation.runImageAnimation(
                mySprite,
                [img`
                    f f f . . . . 
                    f 5 f f . . . 
                    f 5 5 f f . . 
                    f 5 5 5 f f . 
                    f 5 5 5 5 f f 
                    f 5 5 5 5 5 f 
                    f f f f f f f 
                    `],
                100,
                true
                )
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    ball = true
    arow = false
    arow_gravety = false
    arow_gravety_on = false
    normal_gravity = false
    plane = false
    spider = false
    ufo = false
    normal = false
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . 9 . 9 . 9 . . 
        . 9 9 9 9 9 9 9 
        9 9 9 a a 9 9 . 
        . 9 a a a a 9 9 
        9 9 a a a a 9 . 
        . 9 9 a a 9 9 9 
        9 9 9 9 9 9 9 . 
        . . 9 . 9 . . 9 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    ball = true
    arow = false
    arow_gravety = false
    arow_gravety_on = false
    normal_gravity = false
    plane = false
    spider = false
    ufo = false
    normal = false
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . 9 . 9 . 9 . . 
        . 9 9 9 9 9 9 9 
        9 9 9 a a 9 9 . 
        . 9 a a a a 9 9 
        9 9 a a a a 9 . 
        . 9 9 a a 9 9 9 
        9 9 9 9 9 9 9 . 
        . . 9 . 9 . . 9 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile52`, function (sprite, location) {
    upsidedown = false
    normal_gravity2 = true
    mySprite.ay = 900
})
function icons () {
    if (Math.percentChance(50)) {
        mySprite.setImage(img`
            4 . . . . . . 4 
            4 4 . . . . 4 4 
            4 4 4 4 4 4 4 4 
            4 1 f 4 4 f 1 4 
            4 1 f 4 4 f 1 4 
            4 4 4 3 3 4 4 4 
            e e 4 4 4 4 e e 
            4 4 4 4 4 4 4 4 
            `)
    }
}
function move_screen () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    speed_fast = false
    speed_slow = false
    super_slow_speed = true
    mySprite.vx = 80
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    teleport_on = false
    ufo = false
    spider = false
    arow = true
    normal = false
    arow_gravety_on = true
    arow_gravety = false
    ball = false
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . f f f 
        . . . f f 5 f 
        . . f f 5 5 f 
        . f f 5 5 5 f 
        f f 5 5 5 5 f 
        f 5 5 5 5 5 f 
        f f f f f f f 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    mySprite.vy = 300
    color.setColor(13, color.rgb(randint(100, 255), randint(1, 255), randint(1, 255)), 1)
    color.setColor(14, color.rgb(randint(100, 255), randint(1, 255), randint(1, 255)), 1)
    if (ball == true) {
        teloport2 = true
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    flip = true
    speed_slow = true
    tiles.replaceAllTiles(assets.tile`myTile41`, assets.tile`transparency16`)
})
function start_level_4 () {
    tiles.loadMap(tiles.createMap(tilemap`level8`))
    mySprite = sprites.create(img`
        5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 
        5 5 . 5 5 . 5 5 
        5 5 . 5 5 . 5 5 
        5 5 5 5 5 5 5 5 
        5 5 . . . . 5 5 
        5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
    animation.runImageAnimation(
    mySprite,
    [img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        .........ff5555f88ff..........
        .........fef555f88ff..........
        ........f5fef555ff5f..........
        .......f555fff55fff...........
        .......f55f...ff55ff..........
        ......f55f.....f55ff..........
        ......f5f......f55ff..........
        .......f.......f5ff...........
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        .........ffef555ff5f..........
        ........f55f.ff555fef.........
        ........f5f.f55fff.fef........
        ........f5f.f55fef.feef.......
        ........f5f.f55fef..fef.......
        ........f5f.f5feff..fef.......
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        ........fffef5ffff5f..........
        .......f55f..ff5fff...........
        ......f55f..fef55fef..........
        .....f55f...fef55fef..........
        ....f55f...feff5feef..........
        ...f55f....ff..fffff..........
        `],
    100,
    true
    )
    scene.setBackgroundColor(2)
    super_slow_speed = false
    spider = true
    arow = false
    normal = false
    speed_slow = true
    speed_fast = false
    teleport_on = true
    arow_gravety_on = false
    normal_gravity = true
    plane = false
    ball = false
    for (let value of tiles.getTilesByType(assets.tile`myTile28`)) {
        mySprite2 = sprites.create(img`
            . . . 5 5 5 5 5 5 5 . . . 
            . . 5 . . . . . . . 5 . . 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            . . 5 . . . . . . . 5 . . 
            . . . 5 5 5 5 5 5 5 . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile31`)) {
        mysprite3 = sprites.create(img`
            . . . f f f f f f f . . . 
            . . f c c c c 1 c c f . . 
            . f 1 f f f f f f f c f . 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c c f c f 
            f 1 f c c c c c 1 c f 1 f 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c 1 f c f 
            f c f c c c 1 c c c f 1 f 
            f c f c c c c c c c f c f 
            . f c f f f f f f f c f . 
            . . f c c 1 c c 1 c f . . 
            . . . f f f f f f f . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mysprite3, value2)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile53`, function (sprite, location) {
    plane = true
    ball = false
    arow_gravety = false
    normal_gravity2 = false
    normal_gravity = false
    ufo = false
    spider = false
    normal = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
function start_level_6 () {
    tiles.loadMap(tiles.createSmallMap(tilemap`level24`))
    mySprite = sprites.create(img`
        4 . . . . . . 4 
        4 4 . . . . 4 4 
        4 4 4 4 4 4 4 4 
        4 1 f 4 4 f 1 4 
        4 1 f 4 4 f 1 4 
        4 4 4 3 3 4 4 4 
        e e 4 4 4 4 e e 
        4 4 4 4 4 4 4 4 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
    animation.runImageAnimation(
    mySprite,
    [img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        .........ff5555f88ff..........
        .........fef555f88ff..........
        ........f5fef555ff5f..........
        .......f555fff55fff...........
        .......f55f...ff55ff..........
        ......f55f.....f55ff..........
        ......f5f......f55ff..........
        .......f.......f5ff...........
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        .........ffef555ff5f..........
        ........f55f.ff555fef.........
        ........f5f.f55fff.fef........
        ........f5f.f55fef.feef.......
        ........f5f.f55fef..fef.......
        ........f5f.f5feff..fef.......
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        ........fffef5ffff5f..........
        .......f55f..ff5fff...........
        ......f55f..fef55fef..........
        .....f55f...fef55fef..........
        ....f55f...feff5feef..........
        ...f55f....ff..fffff..........
        `],
    100,
    true
    )
    scene.setBackgroundColor(15)
    super_slow_speed = false
    spider = true
    arow = false
    normal = false
    speed_slow = true
    speed_fast = false
    teleport_on = true
    arow_gravety_on = false
    normal_gravity = true
    plane = false
    move_up = false
    plane = false
    ball = false
    for (let value52 of tiles.getTilesByType(assets.tile`myTile28`)) {
        mySprite2 = sprites.create(img`
            . . . 5 5 5 5 5 5 5 . . . 
            . . 5 . . . . . . . 5 . . 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            5 . 5 . . . . . . . 5 . 5 
            . 5 . 5 5 5 5 5 5 5 . 5 . 
            . . 5 . . . . . . . 5 . . 
            . . . 5 5 5 5 5 5 5 . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value52)
    }
    for (let value62 of tiles.getTilesByType(assets.tile`myTile31`)) {
        mysprite3 = sprites.create(img`
            . . . f f f f f f f . . . 
            . . f c c c c 1 c c f . . 
            . f 1 f f f f f f f c f . 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c c f c f 
            f 1 f c c c c c 1 c f 1 f 
            f c f c c c c c c c f c f 
            f c f c c 1 c c c 1 f c f 
            f c f c c c 1 c c c f 1 f 
            f c f c c c c c c c f c f 
            . f c f f f f f f f c f . 
            . . f c c 1 c c 1 c f . . 
            . . . f f f f f f f . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mysprite3, value62)
    }
    multilights.toggleLighting(true)
    multilights.addLightSource(mySprite, 30)
}
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile51`, function (sprite, location) {
    upsidedown = true
    normal_gravity2 = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile56`, function (sprite, location) {
    move_screen()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile55`, function (sprite, location) {
    tiles.loadMap(tiles.createSmallMap(tilemap`level31`))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    upsidedown = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    animation.runImageAnimation(
    mySprite,
    [img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        .........ff5555f88ff..........
        .........fef555f88ff..........
        ........f5fef555ff5f..........
        .......f555fff55fff...........
        .......f55f...ff55ff..........
        ......f55f.....f55ff..........
        ......f5f......f55ff..........
        .......f.......f5ff...........
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        .........ffef555ff5f..........
        ........f55f.ff555fef.........
        ........f5f.f55fff.fef........
        ........f5f.f55fef.feef.......
        ........f5f.f55fef..fef.......
        ........f5f.f5feff..fef.......
        `,img`
        ..............................
        .........fffffffffff..........
        ........f5555555555f..........
        .........f555555ff5f..........
        ..........f5555f88ff..........
        .........fef555f88ff..........
        ........fffef5ffff5f..........
        .......f55f..ff5fff...........
        ......f55f..fef55fef..........
        .....f55f...fef55fef..........
        ....f55f...feff5feef..........
        ...f55f....ff..fffff..........
        `],
    100,
    true
    )
    spider = true
    normal = false
    arow = false
    arow_gravety = false
    arow_gravety_on = false
    teleport_on = true
    Ggravety = true
    ufo = false
    ball = false
    teloport2 = false
    mySprite.setFlag(SpriteFlag.DestroyOnWall, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    teleport_on = false
    normal = true
    ufo = false
    arow = false
    spider = false
    arow_gravety_on = false
    ball = false
    icons()
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setFlag(SpriteFlag.DestroyOnWall, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
	
})
let trail = false
let projectile2: Sprite = null
let normal_gravity2 = false
let upsidedown = false
let telliport1 = false
let flip = false
let teloport2 = false
let Ggravety = false
let arow_gravety = false
let ufo = false
let mysprite3: Sprite = null
let mySprite2: Sprite = null
let ball = false
let move_up = false
let plane = false
let normal_gravity = false
let arow_gravety_on = false
let teleport_on = false
let normal = false
let arow = false
let spider = false
let super_slow_speed = false
let speed_slow = false
let speed_fast = false
let projectile3: Sprite = null
let mySprite: Sprite = null
start_level_7()
game.onUpdate(function () {
	
})
game.onUpdateInterval(1, function () {
	
})
game.onUpdateInterval(2, function () {
	
})
forever(function () {
    music.playMelody(music.convertRTTTLToMelody(""), 120)
})
forever(function () {
    if (super_slow_speed == true) {
        mySprite.vx = 80
    }
})
forever(function () {
    if (arow == true) {
    	
    }
})
forever(function () {
    if (teleport_on == true) {
    	
    }
})
forever(function () {
    if (normal == true) {
        teleport_on = false
        arow_gravety_on = false
        normal_gravity = false
        if (upsidedown == false) {
            if (controller.A.isPressed() && mySprite.isHittingTile(CollisionDirection.Bottom)) {
                mySprite.vy = -210
            }
        }
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            if (upsidedown == true) {
                if (controller.A.isPressed()) {
                    mySprite.vy = 210
                }
            }
        }
    }
})
forever(function () {
    if (normal == true) {
        for (let index = 0; index < 18; index++) {
            transformSprites.changeRotation(projectile2, 5)
            pause(1)
        }
    }
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        trail = false
    }
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        trail = false
    }
})
forever(function () {
    if (flip == true) {
        mySprite.vx = -150
    }
})
forever(function () {
    scene.setBackgroundColor(15)
})
forever(function () {
    if (!(mySprite.isHittingTile(CollisionDirection.Left) || (mySprite.isHittingTile(CollisionDirection.Top) || (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Right))))) {
        trail = true
    }
})
forever(function () {
    if (!(mySprite.isHittingTile(CollisionDirection.Left) || (mySprite.isHittingTile(CollisionDirection.Top) || (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Right))))) {
        trail = true
    }
    if (normal == true) {
        if (!(mySprite.isHittingTile(CollisionDirection.Left) || (mySprite.isHittingTile(CollisionDirection.Top) || (mySprite.isHittingTile(CollisionDirection.Bottom) || mySprite.isHittingTile(CollisionDirection.Right))))) {
            for (let index = 0; index < 18; index++) {
                transformSprites.changeRotation(mySprite, 5)
                pause(1)
            }
        }
    }
})
forever(function () {
    pause(2000)
    color.setColor(2, color.rgb(randint(100, 255), randint(1, 255), randint(1, 255)), 1000)
})
forever(function () {
    if (spider == true) {
        teleport_on = true
    }
})
forever(function () {
    if (spider == true) {
        if (teloport2 == true) {
            mySprite.vy = 1000
            animation.runImageAnimation(
            mySprite,
            [img`
                ..............................
                .........fffffffffff..........
                ........f5555555555f..........
                .........f555555ff5f..........
                .........ff5555f88ff..........
                .........fef555f88ff..........
                ........f5fef555ff5f..........
                .......f555fff55fff...........
                .......f55f...ff55ff..........
                ......f55f.....f55ff..........
                ......f5f......f55ff..........
                .......f.......f5ff...........
                `,img`
                ..............................
                .........fffffffffff..........
                ........f5555555555f..........
                .........f555555ff5f..........
                ..........f5555f88ff..........
                .........fef555f88ff..........
                .........ffef555ff5f..........
                ........f55f.ff555fef.........
                ........f5f.f55fff.fef........
                ........f5f.f55fef.feef.......
                ........f5f.f55fef..fef.......
                ........f5f.f5feff..fef.......
                `,img`
                ..............................
                .........fffffffffff..........
                ........f5555555555f..........
                .........f555555ff5f..........
                ..........f5555f88ff..........
                .........fef555f88ff..........
                ........fffef5ffff5f..........
                .......f55f..ff5fff...........
                ......f55f..fef55fef..........
                .....f55f...fef55fef..........
                ....f55f...feff5feef..........
                ...f55f....ff..fffff..........
                `],
            100,
            true
            )
        }
    }
    if (telliport1 == true) {
        if (spider == true) {
            if (flip == true) {
                mySprite.vy = -1000
                animation.runImageAnimation(
                mySprite,
                [img`
                    ..............................
                    ..........fffffffffff.........
                    ..........f5555555555f........
                    ..........f5ff555555f.........
                    ..........ff88f5555ff.........
                    ..........ff88f555fef.........
                    ..........f5ff555fef5f........
                    ...........fff55fff555f.......
                    ..........ff55ff...f55f.......
                    ..........ff55f.....f55f......
                    ..........ff55f......f5f......
                    ...........ff5f.......f.......
                    `,img`
                    ..............................
                    ..........fffffffffff.........
                    ..........f5555555555f........
                    ..........f5ff555555f.........
                    ..........ff88f5555f..........
                    ..........ff88f555fef.........
                    ..........f5ff555feff.........
                    .........fef555ff.f55f........
                    ........fef.fff55f.f5f........
                    .......feef.fef55f.f5f........
                    .......fef..fef55f.f5f........
                    .......fef..ffef5f.f5f........
                    `,img`
                    ..............................
                    ..........fffffffffff.........
                    ..........f5555555555f........
                    ..........f5ff555555f.........
                    ..........ff88f5555f..........
                    ..........ff88f555fef.........
                    ..........f5ffff5fefff........
                    ...........fff5ff..f55f.......
                    ..........fef55fef..f55f......
                    ..........fef55fef...f55f.....
                    ..........feef5ffef...f55f....
                    ..........fffff..ff....f55f...
                    `],
                100,
                true
                )
            }
        }
    }
    if (teloport2 == true) {
        if (ball == true) {
            mySprite.vy += 50
        }
    }
})
forever(function () {
    if (speed_fast == true) {
        speed_slow = false
        mySprite.vx = 150
    }
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
    if (telliport1 == true) {
        if (spider == true) {
            mySprite.vy = -1000
            animation.runImageAnimation(
            mySprite,
            [img`
                .......f.......f5ff...........
                ......f5f......f55ff..........
                ......f55f.....f55ff..........
                .......f55f...ff55ff..........
                .......f555fff55fff...........
                ........f5fef555ff5f..........
                .........fef555f88ff..........
                .........ff5555f88ff..........
                .........f555555ff5f..........
                ........f5555555555f..........
                .........fffffffffff..........
                ..............................
                `,img`
                ........f5f.f5feff..fef.......
                ........f5f.f55fef..fef.......
                ........f5f.f55fef.feef.......
                ........f5f.f55fff.fef........
                ........f55f.ff555fef.........
                .........ffef555ff5f..........
                .........fef555f88ff..........
                ..........f5555f88ff..........
                .........f555555ff5f..........
                ........f5555555555f..........
                .........fffffffffff..........
                ..............................
                `,img`
                ...f55f....ff..fffff..........
                ....f55f...feff5feef..........
                .....f55f...fef55fef..........
                ......f55f..fef55fef..........
                .......f55f..ff5fff...........
                ........fffef5ffff5f..........
                .........fef555f88ff..........
                ..........f5555f88ff..........
                .........f555555ff5f..........
                ........f5555555555f..........
                .........fffffffffff..........
                ..............................
                `],
            100,
            true
            )
        }
    }
    if (telliport1 == true) {
        if (spider == true) {
            if (flip == true) {
                mySprite.vy = -1000
                animation.runImageAnimation(
                mySprite,
                [img`
                    ...........ff5f.......f.......
                    ..........ff55f......f5f......
                    ..........ff55f.....f55f......
                    ..........ff55ff...f55f.......
                    ...........fff55fff555f.......
                    ..........f5ff555fef5f........
                    ..........ff88f555fef.........
                    ..........ff88f5555ff.........
                    ..........f5ff555555f.........
                    ..........f5555555555f........
                    ..........fffffffffff.........
                    ..............................
                    `,img`
                    .......fef..ffef5f.f5f........
                    .......fef..fef55f.f5f........
                    .......feef.fef55f.f5f........
                    ........fef.fff55f.f5f........
                    .........fef555ff.f55f........
                    ..........f5ff555feff.........
                    ..........ff88f555fef.........
                    ..........ff88f5555f..........
                    ..........f5ff555555f.........
                    ..........f5555555555f........
                    ..........fffffffffff.........
                    ..............................
                    `,img`
                    ..........fffff..ff....f55f...
                    ..........feef5ffef...f55f....
                    ..........fef55fef...f55f.....
                    ..........fef55fef..f55f......
                    ...........fff5ff..f55f.......
                    ..........f5ffff5fefff........
                    ..........ff88f555fef.........
                    ..........ff88f5555f..........
                    ..........f5ff555555f.........
                    ..........f5555555555f........
                    ..........fffffffffff.........
                    ..............................
                    `],
                100,
                true
                )
            }
        }
    }
    if (telliport1 == true) {
        if (ball == true) {
            mySprite.vy += -50
        }
    }
})
forever(function () {
    if (ufo == true) {
        mySprite.setImage(img`
            . . . . 1 1 1 1 . . . . 
            . . . 1 5 5 5 5 1 . . . 
            . . 1 5 9 5 5 9 5 1 . . 
            . . 1 5 9 5 5 9 5 1 . . 
            . . 1 5 5 5 5 5 5 1 . . 
            . . 1 5 9 9 9 9 5 1 . . 
            . 6 6 1 1 f f 1 1 6 6 . 
            6 6 6 6 f 6 6 f 6 6 6 6 
            . 5 5 5 5 f f 5 5 5 5 . 
            . . . 6 6 6 6 6 6 . . . 
            `)
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        mySprite.ay = 1000
        arow_gravety = false
        teleport_on = false
    }
})
forever(function () {
    color.setColor(15, color.rgb(255, 255, 255), 1)
})
forever(function () {
    if (controller.A.isPressed()) {
        if (arow == true) {
            if (arow_gravety == false) {
                arow_gravety = true
                mySprite.setImage(img`
                    f f f f f f f 
                    f 5 5 5 5 5 f 
                    f f 5 5 5 5 f 
                    . f f 5 5 5 f 
                    . . f f 5 5 f 
                    . . . f f 5 f 
                    . . . . f f f 
                    `)
                animation.runImageAnimation(
                mySprite,
                [img`
                    f f f f f f f 
                    f 5 5 5 5 5 f 
                    f f 5 5 5 5 f 
                    . f f 5 5 5 f 
                    . . f f 5 5 f 
                    . . . f f 5 f 
                    . . . . f f f 
                    `],
                100,
                true
                )
                if (flip == true) {
                    mySprite.setImage(img`
                        f f f f f f f 
                        f 5 5 5 5 5 f 
                        f 5 5 5 5 f f 
                        f 5 5 5 f f . 
                        f 5 5 f f . . 
                        f 5 f f . . . 
                        f f f . . . . 
                        `)
                    animation.runImageAnimation(
                    mySprite,
                    [img`
                        f f f f f f f 
                        f 5 5 5 5 5 f 
                        f 5 5 5 5 f f 
                        f 5 5 5 f f . 
                        f 5 5 f f . . 
                        f 5 f f . . . 
                        f f f . . . . 
                        `],
                    100,
                    true
                    )
                }
            }
        }
    }
})
forever(function () {
    if (upsidedown == true) {
        mySprite.ay = -1111
    }
    if (upsidedown == true) {
        normal_gravity = false
    }
})
forever(function () {
	
})
forever(function () {
    for (let index = 0; index < 10000; index++) {
        tiles.loadMap(tiles.createSmallMap(tilemap`level34`))
        pause(600)
        scene.cameraShake(5, 100)
        tiles.loadMap(tiles.createSmallMap(tilemap`level28`))
        pause(600)
        scene.cameraShake(5, 100)
    }
})
forever(function () {
    if (normal_gravity == true) {
        mySprite.ay = 1111
    }
})
forever(function () {
    if (speed_slow == true) {
        speed_fast = false
        mySprite.vx = 115
        scene.cameraFollowSprite(mySprite)
    }
})
forever(function () {
    if (arow_gravety_on == true) {
        if (arow_gravety == true) {
            mySprite.vy = -150
        }
        if (arow_gravety == false) {
            mySprite.vy = 150
        }
    }
})
forever(function () {
    color.startFade(color.originalPalette, color.originalPalette)
})
forever(function () {
    if (plane == true) {
        if (controller.A.isPressed()) {
            mySprite.setImage(img`
                . . . . . . . . 
                . . . . . . . . 
                . a a a a . . . 
                . a 9 . . . . . 
                9 a a . . . . . 
                9 a a a a 9 9 . 
                a 9 9 9 9 9 9 9 
                . a a a a a a . 
                `)
            mySprite.ay += -20
        }
    }
})
forever(function () {
    if (ball == true) {
        mySprite.setImage(img`
            . 9 . 9 . 9 . . 
            . 9 9 9 9 9 9 9 
            9 9 9 a a 9 9 . 
            . 9 a a a a 9 9 
            9 9 a a a a 9 . 
            . 9 9 a a 9 9 9 
            9 9 9 9 9 9 9 . 
            . . 9 . 9 . . 9 
            `)
        animation.runImageAnimation(
        mySprite,
        [img`
            . 9 . 9 . 9 . . 
            . 9 9 9 9 9 9 9 
            9 9 9 a a 9 9 . 
            . 9 a a a a 9 9 
            9 9 a a a a 9 . 
            . 9 9 a a 9 9 9 
            9 9 9 9 9 9 9 . 
            . . 9 . 9 . . 9 
            `,img`
            . . 9 . 9 . 9 . 
            9 9 9 9 9 9 9 . 
            . 9 9 a a 9 9 9 
            9 9 a a a a 9 . 
            . 9 a a a a 9 9 
            9 9 9 a a 9 9 . 
            . 9 9 9 9 9 9 9 
            . 9 . 9 . 9 . . 
            `],
        100,
        true
        )
    }
})
game.onUpdateInterval(70, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, mySprite, 0, 0)
    animation.runImageAnimation(
    projectile2,
    [img`
        b b b b b b b b 
        b b b b . b . b 
        b . b . . . . . 
        b . b . . . . . 
        b b b . . . . . 
        b b b . . . . . 
        b b b b . b . b 
        b b b b b b b b 
        `,img`
        b b b b b b b b 
        b b b b . b . b 
        b . b . . . . . 
        b . b . . . . . 
        b b b . . . . . 
        b b b . . . . . 
        b b b b . b . b 
        b b b b b b b b 
        `,img`
        b b b b b b b b 
        b b b b . b . b 
        b . b . . . . . 
        b . b . . . . . 
        b b b . . . . . 
        b b b . . . . . 
        b b b b . b . b 
        b b b b b b b b 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `],
    70,
    false
    )
})
