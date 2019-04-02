from PIL import Image

in_img = Image.open('test.jpg')

lum = in_img.convert('L')

blue = Image.new('L', lum.size, (255,))

out_img = Image.merge('RGB', [lum, lum, blue])

in_img.save('thumbnail.jpg', quality=70, progressive=True)
out_img.save('thumbnail_blue.jpg', quality=70, progressive=True)