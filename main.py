def ChangeX():
    global CurrentPosX
    display.set_matrix_color(CurrentPosX,
        CurrentPosY,
        GAME_ZIP64.colors(ZipLedColors.BLACK))
    CurrentPosX += xChange
    display.set_matrix_color(CurrentPosX,
        CurrentPosY,
        GAME_ZIP64.colors(ZipLedColors.RED))
    display.show()
    basic.pause(200)
def Buzz():
    GAME_ZIP64.run_motor(100)
    basic.pause(200)
def ChangeY():
    global CurrentPosY
    display.set_matrix_color(CurrentPosX,
        CurrentPosY,
        GAME_ZIP64.colors(ZipLedColors.BLACK))
    CurrentPosY += yChange
    display.set_matrix_color(CurrentPosX,
        CurrentPosY,
        GAME_ZIP64.colors(ZipLedColors.RED))
    display.show()
    basic.pause(200)
yChange = 0
xChange = 0
Score = 0
CurrentPosY = 0
CurrentPosX = 0
display: GAME_ZIP64.ZIP64Display = None
display = GAME_ZIP64.create_zip64_display()
display.set_brightness(30)
CurrentPosX = 0
CurrentPosY = 0
display.set_matrix_color(CurrentPosX,
    CurrentPosY,
    GAME_ZIP64.colors(ZipLedColors.RED))
display.show()
Ballx = 5
BallY = 5
display.set_matrix_color(Ballx, BallY, GAME_ZIP64.colors(ZipLedColors.GREEN))
display.show()
basic.show_string("" + str(Score))

def on_forever():
    global Ballx, BallY, Score
    if CurrentPosX == Ballx and CurrentPosY == BallY:
        Ballx = randint(0, 7)
        BallY = randint(0, 7)
        display.set_matrix_color(Ballx, BallY, GAME_ZIP64.colors(ZipLedColors.BLUE))
        display.show()
        Score += 1
        basic.show_string("" + str(Score))
basic.forever(on_forever)

def on_forever2():
    basic.pause(1000000000000)
    display.show_color(GAME_ZIP64.colors(ZipLedColors.BLACK))
    display.set_brightness(255)
    basic.show_string("Game Over")
    basic.show_string("" + str(Score))
basic.forever(on_forever2)

def on_forever3():
    global xChange
    if GAME_ZIP64.button_is_pressed(GAME_ZIP64.ZIP64ButtonPins.RIGHT):
        if CurrentPosX + 1 < 8:
            xChange = 1
            ChangeX()
        else:
            Buzz()
basic.forever(on_forever3)

def on_forever4():
    global yChange
    if GAME_ZIP64.button_is_pressed(GAME_ZIP64.ZIP64ButtonPins.DOWN):
        if CurrentPosY + 1 < 8:
            yChange = 1
            ChangeY()
        else:
            Buzz()
basic.forever(on_forever4)

def on_forever5():
    global xChange
    if GAME_ZIP64.button_is_pressed(GAME_ZIP64.ZIP64ButtonPins.LEFT):
        if CurrentPosX - 1 >= 0:
            xChange = -1
            ChangeX()
        else:
            Buzz()
basic.forever(on_forever5)

def on_forever6():
    global yChange
    if GAME_ZIP64.button_is_pressed(GAME_ZIP64.ZIP64ButtonPins.UP):
        if CurrentPosY - 1 >= 0:
            yChange = -1
            ChangeY()
        else:
            Buzz()
basic.forever(on_forever6)
