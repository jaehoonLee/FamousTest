/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;
var Surface = famous.core.Surface;
var StateModifier = famous.modifiers.StateModifier

// create the main context
var mainContext = Engine.createContext();
var stateModifier = new StateModifier();

var mainsurface = new Surface({
    size: [undefined, undefined],
    properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#AAAAAA'
    }
});

var surface = new Surface({
    size: [100, 100],
    content: '나는 객체다.',
    properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#FA5C4F'
    }

})

//mainContext.add(stateModifier).add(surface);

mainsurface.on('mousemove',function(e){
    surface.setContent("x: "+e.offsetX+", y: "+e.offsetY);
    surface.state = new StateModifier({
        transform: Transform.translate(e.offsetX-50, e.offsetY-50, 0)
    })
    mainContext.add(surface.state).add(surface)
});



mainContext.add(mainsurface);
mainContext.add(surface);
/*
 Engine.on('keydown', function(e) {
 surface.setContent(e.which);
 if(e.witch == 39) {
 stateModifier.setTransform(
 Transform.translate(0, 10, 0),
 { duration : 500, curve: 'linear' }
 );
 }
 stateModifier.setTransform(
 Transform.translate(0, 10, 0),
 { duration : 500, curve: 'linear' }
 );
 });
 */