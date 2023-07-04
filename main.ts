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
let yChange = 0
let xChange = 0
let CurrentPosY = 0
let CurrentPosX = 0
let display: GAME_ZIP64.ZIP64Display = null
display = GAME_ZIP64.createZIP64Display()
display.setBrightness(30)
CurrentPosX = 3
CurrentPosY = 3
display.setMatrixColor(CurrentPosX, CurrentPosY, GAME_ZIP64.colors(ZipLedColors.Red))
display.show()
let Ballx = 5
let BallY = 5
display.setMatrixColor(Ballx, BallY, GAME_ZIP64.colors(ZipLedColors.Green))
display.show()
let Score = 0
basic.showString("" + (Score))
basic.forever(function () {
    if (CurrentPosX == Ballx && CurrentPosY == BallY) {
        Ballx = randint(0, 7)
        BallY = randint(0, 7)
        display.setMatrixColor(Ballx, BallY, GAME_ZIP64.colors(ZipLedColors.Green))
        display.show()
        Score += 1
        basic.showString("" + (Score))
    }
})
basic.forever(function () {
    basic.pause(10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
    display.showColor(GAME_ZIP64.colors(ZipLedColors.Black))
    display.setBrightness(255)
    basic.showString("Game Over")
    basic.showString("" + (Score))
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
basic.forever(function () {
    if (CurrentPosX == Ballx && CurrentPosY == BallY) {
    	
    }
})
