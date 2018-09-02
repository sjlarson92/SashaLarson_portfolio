Problem
For this studio, your job is to write an algorithm that processes an image to make it “fuzzy” looking

The algorithm to achieve this effect is actually fairly simple: for each pixel, randomly choose one of its neighboring pixels, and use that pixel’s color instead.

For example, imagine that the table below is a zoomed-in view of the pixels in our image, and that we are trying to alter the center pixel (the one whose color is E):

We want to randomly choose one of the 9 pixels in this grid, and insert its color to replace the center one. Let’s say we choose the bottom-left. This will alter the resulting image like so:


Step by Step

#for each pixel find it's location
p = getPixel(col,row)

#find a random neighbor location around the original pixel
new_p = shuffle(p)

#find the colors of the random neighbor pixel

new_red = new_p.getRed()
new_green = new_p.getGreen()
new_blue = new_p.newBlue()

new_pixel =image.Pixel(new_red,new_green,new_blue)

img.setPixel(col,row,new_pixel)
#set the neighbor pixels colors to the original pixel
#print the new image with the new set colors



Solution







import image
import sys
import random

img = image.Image("luther.jpg")
new_img = image.EmptyImage(img.getWidth(), img.getHeight())
win = image.ImageWin(img.getWidth(), img.getHeight())

for i in range(1, img.getWidth() - 1):
    for j in range(1, img.getHeight() - 1):
        # TODO: Randomly choose the coordinates of a neighboring pixel
        p = img.getPixel(col,row)
        new_p = random.
        # TODO: in the new image, set this pixel's color to the neighbor's color

new_img.draw(win)
win.exitonclick()
