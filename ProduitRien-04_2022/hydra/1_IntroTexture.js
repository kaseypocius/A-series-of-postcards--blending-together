osc(10,0.1,2).mult(shape(2).scrollY(0.1,0.01).rotate(1,0)).diff(o0).modulate(noise(2,0.2),()=>  2*LeftABS).out(o0)
render(o0)

osc(10,0.1,2).mult(shape(2).scrollY(0.1,0.01).rotate(1,0)).diff(o0).modulate(src(s0),()=>  2*LeftABS).out(o0)
render(o0)

osc(10,0.1,2).mult(shape(2).scrollY(0.1,0.01).rotate(1,0)).diff(o0).modulate(src(s0),()=>  4*LeftABS).mult(s0).diff(o0).out(o0)
render(o0)

osc(10,0.1,2).mult(shape(2).scrollY(0.1,0.01).rotate(1,()=>1*RightABS)).diff(o0).modulate(src(s0),()=>  4*LeftABS).mult(s0).diff(o0).out(o0)
render(o0)

osc(10,0.1,2).mult(shape(2).scrollY(0.1,0.01).modulateRotate(s0,()=>12*RightABS)).diff(o0).modulate(src(s0),()=>  4*LeftABS).mult(s0).diff(o0).out(o0)
render(o0)

noise(10,0.1,2).colorama(()=>LeftABS*4).mult(shape(2).scrollY(0.1,0.01).modulatePixelate(s0,()=>12*RightABS,()=>1200*RightABS)).diff(o0).modulate(src(s0),()=>  4*LeftABS).diff(src(o0).scale(0.9,0.9)).mult(s0).modulate(osc(()=>LeftABS*12,()=>RightABS*12)).diff(src(o0).rotate(-1,0)).out(o0)
render(o0)

src(s0).mult(shape(2).diff(o0).scrollX(()=>LeftABS*1000,()=>RightABS*1000).kaleid(3)).rotate(0.02,0.02).saturate(1.2,1.2,1.2).diff(s0).out(o0)

s0.initVideo("file:///Users/kasey/Documents/ProduitRien_2022/Docks.mp4")

s0.initVideo("file:///Users/kasey/Documents/ProduitRien_2022/ProduitRien_Glue_2_Bus_1.mp4")

s0.initVideo("file:///Users/kasey/Documents/ProduitRien_2022/PDR_EndMontage_Squish.mp4")
