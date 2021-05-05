let Ship: game.LedSprite = null
let Asteroid_1: game.LedSprite = null
let Asteroid_2: game.LedSprite = null
let Asteroid_3: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    Ship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Ship.change(LedSpriteProperty.X, 1)
})
basic.forever(function () {
    Ship = game.createSprite(2, 4)
    Asteroid_1 = game.createSprite(randint(0, 4), 0)
    Asteroid_2 = game.createSprite(randint(0, 4), 0)
    Asteroid_3 = game.createSprite(randint(0, 4), 0)
    while (true) {
        Asteroid_1.change(LedSpriteProperty.Y, 1)
        Asteroid_2.change(LedSpriteProperty.Y, 1)
        Asteroid_3.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        while (Ship.isTouching(Asteroid_1)) {
            game.gameOver()
        }
        while (Ship.isTouching(Asteroid_2)) {
            game.gameOver()
        }
        while (Ship.isTouching(Asteroid_3)) {
            game.gameOver()
        }
        while (Asteroid_1.get(LedSpriteProperty.Y) == 4) {
            Asteroid_1.delete()
            Asteroid_1 = game.createSprite(randint(0, 4), 0)
            game.addScore(3)
            basic.pause(500)
        }
        while (Asteroid_2.get(LedSpriteProperty.Y) == 4) {
            Asteroid_2.delete()
            Asteroid_2 = game.createSprite(randint(0, 4), 0)
            basic.pause(500)
        }
        while (Asteroid_3.get(LedSpriteProperty.Y) == 4) {
            Asteroid_3.delete()
            Asteroid_3 = game.createSprite(randint(0, 4), 0)
            basic.pause(500)
        }
    }
})
