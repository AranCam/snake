function ChangeX () {
    display.setMatrixColor(CurrentPosX, CurrentPosY, GAME_ZIP64.colors(ZipLedColors.Black))
    CurrentPosX += xChange
    display.setMatrixColor(CurrentPosX, CurrentPosY, GAME_ZIP64.colors(ZipLedColors.Red))
    display.show()
    basic.pause(200)
}
function Buzz () {
    GAME_ZIP64.runMotor(100)
    basic.pause(200)
}
function ChangeY () {
    display.setMatrixColor(CurrentPosX, CurrentPosY, GAME_ZIP64.colors(ZipLedColors.Black))
    CurrentPosY += yChange
    display.setMatrixColor(CurrentPosX, CurrentPosY, GAME_ZIP64.colors(ZipLedColors.Red))
    display.show()
    basic.pause(200)
}
let enemyy = 0
let enemyx = 0
let yChange = 0
let xChange = 0
let Score = 0
let CurrentPosY = 0
let CurrentPosX = 0
let display: GAME_ZIP64.ZIP64Display = null
display = GAME_ZIP64.createZIP64Display()
display.setBrightness(255)
CurrentPosX = 0
CurrentPosY = 0
display.setMatrixColor(CurrentPosX, CurrentPosY, GAME_ZIP64.colors(ZipLedColors.Red))
display.show()
let Ballx = 5
let BallY = 5
display.setMatrixColor(Ballx, BallY, GAME_ZIP64.colors(ZipLedColors.Green))
display.show()
basic.showString("" + Score)
basic.forever(function () {
    if (CurrentPosX == Ballx && CurrentPosY == BallY) {
        Ballx = randint(0, 7)
        BallY = randint(0, 7)
        display.setMatrixColor(Ballx, BallY, GAME_ZIP64.colors(ZipLedColors.Green))
        display.show()
        Score += 1
    }
})
basic.forever(function () {
    if (CurrentPosX == enemyx && CurrentPosY == enemyy) {
        enemyx = randint(0, 7)
        enemyy = randint(0, 7)
        display.setMatrixColor(enemyx, enemyy, GAME_ZIP64.colors(ZipLedColors.Violet))
        display.show()
        Score += -1
    }
})
basic.forever(function () {
    basic.pause(1000000000000)
    display.showColor(GAME_ZIP64.colors(ZipLedColors.Black))
    display.setBrightness(255)
    basic.showString("Game Over")
    basic.showString("" + Score)
})
basic.forever(function () {
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Right)) {
        if (CurrentPosX + 1 < 8) {
            xChange = 1
            ChangeX()
        } else {
            Buzz()
        }
    }
})
basic.forever(function () {
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Down)) {
        if (CurrentPosY + 1 < 8) {
            yChange = 1
            ChangeY()
        } else {
            Buzz()
        }
    }
})
basic.forever(function () {
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Left)) {
        if (CurrentPosX - 1 >= 0) {
            xChange = -1
            ChangeX()
        } else {
            Buzz()
        }
    }
})
basic.forever(function () {
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Up)) {
        if (CurrentPosY - 1 >= 0) {
            yChange = -1
            ChangeY()
        } else {
            Buzz()
        }
    }
})
