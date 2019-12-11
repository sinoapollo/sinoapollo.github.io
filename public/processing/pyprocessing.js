var jspyProcessingWindow = null;
function runPyProcessing(pyprocessingcode)
{
	jspyProcessingWindow = window.open('', "_blank", '');
	html1 = '<head><title>jspy.Processing</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width; initial-scale=1.0; minimum-scale=1.0; maximum-scale=1.0"/><base href="' + window.location + '"><script language="javascript" type="text/javascript" src="p5/p5.js"></script'+'><script language="javascript" type="text/javascript" src="p5/p5.dom.js"></script'+'><script language="javascript" type="text/javascript" src="p5/p5.sound.js"></script'+'><script type="text/javascript" src="brython/brython.js"></script'+'><style> body {padding: 0; margin: 0;} </style></head><body onload="brython()"><script type="text/python">\
from browser import document, window, alert\n\
\n\
def sketch(p5):\n\
\n\
	PI = p5.PI\n\
	P2D = p5.P2D\n\
	P3D = p5.WEBGL\n\
	ARROW = p5.ARROW\n\
	CROSS = p5.CROSS\n\
	HAND = p5.HAND\n\
	MOVE = p5.MOVE\n\
	TEXT = p5.TEXT\n\
	WAIT = p5.WAIT\n\
	HALF_PI = p5.HALF_PI\n\
	QUARTER_PI = p5.QUARTER_PI\n\
	TWO_PI = p5.TWO_PI\n\
	DEGREES = p5.DEGREES\n\
	RADIANS = p5.RADIANS\n\
	CORNER = p5.CORNER\n\
	CORNERS = p5.CORNERS\n\
	RADIUS = p5.RADIUS\n\
	RIGHT = p5.RIGHT\n\
	LEFT = p5.LEFT\n\
	CENTER = p5.CENTER\n\
	TOP = p5.TOP\n\
	BOTTOM = p5.BOTTOM\n\
	BASELINE = p5.BASELINE\n\
	POINTS = p5.POINTS\n\
	LINES = p5.LINES\n\
	LINE_STRIP = p5.LINE_STRIP\n\
	LINE_LOOP = p5.LINE_LOOP\n\
	TRIANGLES = p5.TRIANGLES\n\
	TRIANGLE_FAN = p5.TRIANGLE_FAN\n\
	TRIANGLE_STRIP = p5.TRIANGLE_STRIP\n\
	QUADS = p5.QUADS\n\
	QUAD_STRIP = p5.QUAD_STRIP\n\
	CLOSE = p5.CLOSE\n\
	OPEN = p5.OPEN\n\
	CHORD = p5.CHORD\n\
	PIE = p5.PIE\n\
	PROJECT = p5.PROJECT\n\
	SQUARE = p5.SQUARE\n\
	ROUND = p5.ROUND\n\
	BEVEL = p5.BEVEL\n\
	MITER = p5.MITER\n\
	RGB = p5.RGB\n\
	HSB = p5.HSB\n\
	HSL = p5.HSL\n\
	AUTO = p5.AUTO\n\
	ALT = p5.ALT\n\
	BACKSPACE = p5.BACKSPACE\n\
	CONTROL = p5.CONTROL\n\
	DELETE = p5.DELETE\n\
	DOWN_ARROW = p5.DOWN_ARROW\n\
	ENTER = p5.ENTER\n\
	ESCAPE = p5.ESCAPE\n\
	LEFT_ARROW = p5.LEFT_ARROW\n\
	OPTION = p5.OPTION\n\
	RETURN = p5.RETURN\n\
	RIGHT_ARROW = p5.RIGHT_ARROW\n\
	SHIFT = p5.SHIFT\n\
	TAB = p5.TAB\n\
	UP_ARROW = p5.UP_ARROW\n\
	BLEND = p5.BLEND\n\
#	ADD = p5.ADD\n\
#	SUBTRACT = p5.SUBTRACT\n\
	DARKEST = p5.DARKEST\n\
	LIGHTEST = p5.LIGHTEST\n\
	DIFFERENCE = p5.DIFFERENCE\n\
	EXCLUSION = p5.EXCLUSION\n\
	MULTIPLY = p5.MULTIPLY\n\
	SCREEN = p5.SCREEN\n\
	REPLACE = p5.REPLACE\n\
	OVERLAY = p5.OVERLAY\n\
	HARD_LIGHT = p5.HARD_LIGHT\n\
	SOFT_LIGHT = p5.SOFT_LIGHT\n\
	DODGE = p5.DODGE\n\
	BURN = p5.BURN\n\
	THRESHOLD = p5.THRESHOLD\n\
	GRAY = p5.GRAY\n\
	OPAQUE = p5.OPAQUE\n\
	INVERT = p5.INVERT\n\
	POSTERIZE = p5.POSTERIZE\n\
	DILATE = p5.DILATE\n\
	ERODE = p5.ERODE\n\
	BLUR = p5.BLUR\n\
	NORMAL = p5.NORMAL\n\
	ITALIC = p5.ITALIC\n\
	BOLD = p5.BOLD\n\
	_DEFAULT_TEXT_FILL = p5._DEFAULT_TEXT_FILL\n\
	_DEFAULT_LEADMULT = p5._DEFAULT_LEADMULT\n\
	_CTX_MIDDLE = p5._CTX_MIDDLE\n\
	LINEAR = p5.LINEAR\n\
	QUADRATIC = p5.QUADRATIC\n\
	BEZIER = p5.BEZIER\n\
	CURVE = p5.CURVE\n\
	_DEFAULT_STROKE = p5._DEFAULT_STROKE\n\
	_DEFAULT_FILL = p5._DEFAULT_FILL\n\
\n\
#Environment\n\
	cursor = p5.cursor\n\
	#frameRate\n\
	frameRate = p5.frameRate\n\
	noCursor = p5.noCursor\n\
	size = p5.createCanvas\n\
\n\
#Conversion\n\
	#binary = p5.\n\
	float = p5.float\n\
	hex = p5.hex\n\
	int = p5.int\n\
	#list = p5.\n\
	str = p5.str\n\
	#unbinary = p5.\n\
	unhex = p5.unhex\n\
	\n\
	#added\n\
	boolean = p5.boolean\n\
	byte = p5.byte\n\
	char = p5.char\n\
	unchar = p5.unchar\n\
\n\
#List Functions\n\
	#reversed = p5.\n\
	#sorted = p5.\n\
\n\
#String Functions\n\
	#match = p5.\n\
	#matchAll = p5.\n\
	#nf = p5.\n\
	#nfc = p5.\n\
	#nfp = p5.\n\
	#nfs = p5.\n\
\n\
#Shape\n\
	#createShape = p5.\n\
\n\
#2D Primitives\n\
	arc = p5.arc\n\
	ellipse = p5.ellipse\n\
	line = p5.line\n\
	point = p5.point\n\
	quad = p5.quad\n\
	rect = p5.rect\n\
	triangle = p5.triangle\n\
	circle = p5.circle\n\
	square = p5.square\n\
\n\
#Curves\n\
	bezier = p5.bezier\n\
	bezierDetail = p5.bezierDetail\n\
	bezierPoint = p5.bezierPoint\n\
	bezierTangent = p5.bezierTangent\n\
	curve = p5.curve\n\
	curveDetail = p5.curveDetail\n\
	curvePoint = p5.curvePoint\n\
	curveTangent = p5.curveTangent\n\
	curveTightness = p5.curveTightness\n\
\n\
#3D Primitives\n\
	box = p5.box\n\
	sphere = p5.sphere\n\
	#sphereDetail = p5.\n\
	\n\
	#added\n\
	plane = p5.plane\n\
	cylinder = p5.cylinder\n\
	cone = p5.cone\n\
	ellipsoid = p5.ellipsoid\n\
	torus = p5.torus\n\
\n\
#Attributes\n\
	ellipseMode = p5.ellipseMode\n\
	noSmooth = p5.noSmooth\n\
	rectMode = p5.rectMode\n\
	smooth = p5.smooth\n\
	strokeCap = p5.strokeCap\n\
	strokeJoin = p5.strokeJoin\n\
	strokeWeight = p5.strokeWeight\n\
\n\
#Vertex\n\
	beginContour = p5.beginContour\n\
	beginShape = p5.beginShape\n\
	bezierVertex = p5.bezierVertex\n\
	curveVertex = p5.curveVertex\n\
	endContour = p5.endContour\n\
	endShape = p5.endShape\n\
	quadraticVertex = p5.quadraticVertex\n\
	texture = p5.texture\n\
	#textureMode = p5.\n\
	vertex = p5.vertex\n\
\n\
#Loading & Displaying\n\
	#loadShape = p5.\n\
	#shape = p5.\n\
	#shapeMode = p5.\n\
\n\
#Input\n\
#Mouse\n\
\n\
#Keyboard\n\
\n\
#Files\n\
	#createReader = p5.\n\
	loadBytes = p5.loadBytes\n\
	loadStrings = p5.loadStrings\n\
	#selectFolder = p5.\n\
	#selectInput = p5.\n\
\n\
#Time & Date\n\
	day = p5.day\n\
	hour = p5.hour\n\
	millis = p5.millis\n\
	minute = p5.minute\n\
	month = p5.month\n\
	second = p5.second\n\
	year = p5.year\n\
\n\
#Output\n\
#Text Area\n\
	#print = p5.print\n\
	println = print\n\
\n\
#Image\n\
	save = p5.save\n\
	saveFrame = p5.saveCanvas  #not verified\n\
\n\
#Files\n\
	#beginRaw = p5.\n\
	createWriter = p5.createWriter\n\
	#endRaw = p5.\n\
	#saveBytes = p5.\n\
	saveStrings = p5.saveStrings\n\
	#selectOutput = p5.\n\
	#added\n\
	#save = p5.save        #save image, string\n\
	saveJSON = p5.saveJSON\n\
	saveTable = p5.saveTable\n\
\n\
#Transform\n\
	applyMatrix = p5.applyMatrix\n\
	popMatrix = p5.pop\n\
	#printMatrix = p5.\n\
	pushMatrix = p5.push\n\
	resetMatrix = p5.resetMatrix\n\
	rotate = p5.rotate\n\
	rotateX = p5.rotateX\n\
	rotateY = p5.rotateY\n\
	rotateZ = p5.rotateZ\n\
	scale = p5.scale\n\
	shearX = p5.shearX\n\
	shearY = p5.shearY\n\
	translate = p5.translate\n\
\n\
#Lights, Camera\n\
#Lights\n\
	ambientLight = p5.ambientLight\n\
	directionalLight = p5.directionalLight\n\
	#lightFalloff = p5.\n\
	#lightSpecular = p5.\n\
	#lights = p5.\n\
	#noLights = p5.\n\
	#normal = p5.\n\
	pointLight = p5.pointLight\n\
	#spotLight = p5.\n\
\n\
#Camera\n\
	#beginCamera = p5.\n\
	camera = p5.camera\n\
	#endCamera = p5.\n\
	#frustum = p5.\n\
	ortho = p5.ortho\n\
	perspective = p5.perspective\n\
	#printCamera = p5.\n\
	#printProjection = p5.\n\
\n\
#Coordinates\n\
	#modelX = p5.\n\
	#modelY = p5.\n\
	#modelZ = p5.\n\
	#screenX = p5.\n\
	#screenY = p5.\n\
	#screenZ = p5.\n\
\n\
#Material Properties\n\
	ambient = p5.ambientMaterial\n\
	#emissive = p5.\n\
	#shininess = p5.\n\
	specular = p5.specularMaterial\n\
	#added\n\
	normalMaterial = p5.normalMaterial\n\
\n\
#Color\n\
#Setting\n\
	background = p5.background\n\
	clear = p5.clear\n\
	colorMode = p5.colorMode\n\
	fill = p5.fill\n\
	noFill = p5.noFill\n\
	noStroke = p5.noStroke\n\
	stroke = p5.stroke\n\
\n\
#Creating & Reading\n\
	alpha = p5.alpha\n\
	#blendColor = p5.\n\
	blue = p5.blue\n\
	brightness = p5.brightness\n\
	color = p5.color\n\
	green = p5.green\n\
	hue = p5.hue\n\
	lerpColor = p5.lerpColor\n\
	red = p5.red\n\
	saturation = p5.saturation\n\
	\n\
	#added\n\
	#PColor = p5.p5.Color\n\
\n\
#Image\n\
	#PImage = p5.p5.Image\n\
	createImage = p5.createImage\n\
\n\
	#added\n\
	saveCanvas = p5.saveCanvas\n\
	saveFrames = p5.saveFrames\n\
\n\
#Loading & Displaying\n\
	image = p5.image\n\
	imageMode = p5.imageMode\n\
	loadImage = p5.loadImage\n\
	noTint = p5.noTint\n\
	requestImage = p5.loadImage\n\
	tint = p5.tint\n\
\n\
#Textures\n\
	#textureWrap = p5.\n\
\n\
#Pixels\n\
	blend = p5.blend\n\
	copy = p5.copy\n\
	filter = p5.filter\n\
	get = p5.get\n\
	loadPixels = p5.loadPixels\n\
	pixels = p5.pixels  #not verified\n\
	set = p5.set\n\
	updatePixels = p5.updatePixels\n\
\n\
#Rendering\n\
	#PGraphics = p5.p5.Graphics\n\
	blendMode = p5.blendMode\n\
	#clip = p5.\n\
	createGraphics = p5.createGraphics\n\
	#noClip = p5.\n\
\n\
	#added\n\
	#setAttributes = p5.setAttributes	#p5.js documented but not work\n\
\n\
#Shaders\n\
	#PShader = p5.p5.Shader\n\
	#loadShader = p5.loadShader			#p5.js documented but not work\n\
	#resetShader = p5.resetShader		#p5.js documented but not work\n\
	#shader = p5.shader					#p5.js documented but not work\n\
\n\
#Typography\n\
	#PFont = p5.p5.Font\n\
\n\
#Loading & Displaying\n\
	#createFont\n\
	loadFont = p5.loadFont\n\
	text = p5.text\n\
	textFont = p5.textFont\n\
\n\
#Attributes\n\
	textAlign = p5.textAlign\n\
	textLeading = p5.textLeading\n\
	#textMode = p5.\n\
	textSize = p5.textSize\n\
	textWidth = p5.textWidth\n\
\n\
	#added\n\
	textStyle = p5.textStyle\n\
\n\
#Metrics\n\
	textAscent = p5.textAscent\n\
	textDescent = p5.textDescent\n\
	\n\
#Math\n\
	PVector = p5.createVector\n\
	\n\
#Calculation\n\
	abs = p5.abs\n\
	ceil = p5.ceil\n\
	constrain = p5.constrain\n\
	dist = p5.dist\n\
	exp = p5.exp\n\
	floor = p5.floor\n\
	lerp = p5.lerp\n\
	log = p5.log\n\
	mag = p5.mag\n\
	map = p5.map\n\
	max = p5.max\n\
	min = p5.min\n\
	norm = p5.norm\n\
	pow = p5.pow\n\
	round = p5.round\n\
	sq = p5.sq\n\
	sqrt = p5.sqrt\n\
\n\
#Trigonometry\n\
	acos = p5.acos\n\
	asin = p5.asin\n\
	atan = p5.atan\n\
	atan2 = p5.atan2\n\
	cos = p5.cos\n\
	degrees = p5.degrees\n\
	radians = p5.radians\n\
	sin = p5.sin\n\
	tan = p5.tan\n\
\n\
	#added\n\
	angleMode = p5.angleMode\n\
\n\
#Random\n\
	noise = p5.noise\n\
	noiseDetail = p5.noiseDetail\n\
	noiseSeed = p5.noiseSeed\n\
	random = p5.random\n\
	randomGaussian = p5.randomGaussian\n\
	randomSeed = p5.randomSeed\n\
	\n\
#Constants\n\
	HALF_PI = p5.HALF_PI\n\
	PI = p5.PI\n\
	QUARTER_PI = p5.QUARTER_PI\n\
	TAU = p5.TAU\n\
	TWO_PI = p5.TWO_PI\n\
\n\
	#added\n\
	DEGREES = p5.DEGREES\n\
	RADIANS = p5.RADIANS\n\n\
';
html2 = '\n\n\
	try:\n\
		p5.preload = preload\n\
	except NameError:\n\
		pass\n\
	try:\n\
		p5.setup = setup\n\
	except NameError:\n\
		pass\n\
	try:\n\
		p5.draw = draw\n\
	except NameError:\n\
		pass\n\
	try:\n\
		p5.mouseClicked = mouseClicked\n\
	except NameError:\n\
		pass\n\
	try:\n\
		p5.mouseDragged = mouseDragged\n\
	except NameError:\n\
		pass\n\
	try:\n\
		p5.mouseMoved = mouseMoved\n\
	except NameError:\n\
		pass\n\
	try:\n\
		p5.mousePressed = mousePressed\n\
	except NameError:\n\
		pass\n\
	try:\n\
		p5.mouseReleased = mouseReleased\n\
	except NameError:\n\
		pass\n\
	try:\n\
		p5.mouseWheel = mouseWheel\n\
	except NameError:\n\
		pass\n\
	try:\n\
		p5.keyPressed = keyPressed\n\
	except NameError:\n\
		pass\n\
	try:\n\
		p5.keyReleased = keyReleased\n\
	except NameError:\n\
		pass\n\
	try:\n\
		p5.keyTyped = keyTyped\n\
	except NameError:\n\
		pass\n\
	#added\n\
	try:\n\
		p5.doubleClicked = doubleClicked\n\
	except NameError:\n\
		pass\n\
myp5 = window.p5.new(sketch)\n\
</script'+'>\n\
</body></html>';
	if (-1 == pyprocessingcode.indexOf('def setup():')) {
		pyprocessingcode = 'def setup():\n\t' + pyprocessingcode.
		 	replace(/\ {4}/g, '\t').
		 	replace(/\n/g, '\n\t')
	}
	jspyProcessingWindow.document.write(html1
		 + '\t' + pyprocessingcode.
		 	replace(/\ {4}/g, '\t').
		 	replace(/\n/g, '\n\t').
		 	replace(/\bmouseButton\b(?!\()/g, 'p5.mouseButton').
		 	replace(/\bmousePressed\b(?!\()/g, 'p5.mouseIsPressed').
		 	replace(/\bmouseX\b(?!\()/g, 'p5.mouseX').
		 	replace(/\bmouseY\b(?!\()/g, 'p5.mouseY').
		 	replace(/\bpmouseY\b(?!\()/g, 'p5.pmouseY').
		 	replace(/\bkey\b(?!\()/g, 'p5.key').
		 	replace(/\bkeyCode\b(?!\()/g, 'p5.keyCode').
		 	replace(/\bkeyPressed\b(?!\()/g, 'p5.keyIsPressed').
		 	replace(/\bkeyDown\b(?!\()/g, 'p5.keyIsDown').
		 	replace(/\bframeCount\b(?!\()/g, 'p5.frameCount').
		 	replace(/\bdisplayHeight\b(?!\()/g, 'p5.displayHeight').
		 	replace(/\bdisplayWidth\b(?!\()/g, 'p5.displayWidth').
		 	replace(/\bwindowHeight\b(?!\()/g, 'p5.windowHeight').
		 	replace(/\bwindowWidth\b(?!\()/g, 'p5.windowWidth').
		 	replace(/\bfocused\b(?!\()/g, 'p5.focused').
		 	replace(/\bheight\b(?!\()/g, 'p5.height').
		 	replace(/\bwidth\b(?!\()/g, 'p5.width')
		 + html2);//editor.getValue());
	jspyProcessingWindow.document.close();
}

function stopPyProcessing()
{
	if (jspyProcessingWindow != null) {
		jspyProcessingWindow.close();
		jspyProcessingWindow = null;
	}
}
