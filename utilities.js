window.onload = function () {
    ScrollReveal().reveal('img[src="holding.jpg"]', {
        duration: 1500,
        origin: 'left',
        distance: '100px',
        easing: 'ease-out',
        reset: true
    });

    ScrollReveal().reveal('img[src="hydrant.jpg"]', {
        duration: 1000,
        delay: 500,
        opacity: 0,
        easing: 'ease-in',
        reset: true
    });

    ScrollReveal().reveal('img[src="hand.jpg"]', {
        duration: 1000,
        scale: 0.85,
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('img[src="pompom.PNG"]', {
        duration: 2000,
        rotate: { x: 20, y: 10, z: 0 },
        opacity: 0,
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('img[src="josieandme.PNG"]', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        easing: 'ease-in',
        reset: true
    });

    ScrollReveal().reveal('img[src="lap.jpg"]', {
        duration: 1500,
        distance: '60px',
        easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        origin: 'bottom',
        reset: true
    });

    ScrollReveal().reveal('img[src="sweater.jpg"]', {
        duration: 1800,
        rotate: { x: 10, y: 20, z: 0 },
        origin: 'right',
        distance: '100px',
        easing: 'ease-out',
        reset: true
    });
};