var granimInstance = new Granim({
    element: '#canvas-radial',
    name: 'radial-gradient',
    direction: 'radial',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ffb347', '#ffcc33'],
                
                ['#9D50BB', '#6E48AA']
            ]
        }
    }
});

Typed.new("#test", {
			strings: ["Welcome to my space^4000", "Here I express myself, thoughts, belief and my works^4000", "In every man lies greatness, everyone has a flavour, everyone has something to bless the world with.^6000"],
			typeSpeed: 0

		})

$("#js-rotating").Morphext()
/* $("#js-rotating").Morphext({
    animation: "fadeIn", // Overrides default "bounceIn"
    separator: ",", // Overrides default ","
    speed: 3000, // Overrides default 2000
    complete: function () {
        // Overrides default empty function
    }
}); */
