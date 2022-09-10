const data = [
    {
        title:'Interacting Galaxies',
        name:'Stephan’s Quintet',
        description:'In Hickson Compact Group 92, we see five galaxies, four of which interact. (The left galaxy is actually much closer to us than the rest of the group.) These colliding galaxies are pulling and stretching each other in a gravitational dance.',
        thumbnail:'thumbnails/thumbnail1.jpg',
        large:'https://stsci-opo.org/STScI-01G8H4DRM2C010PX6T3DPEEDAW.png',
        full:'full/full1.jpg',
        original:'https://stsci-opo.org/STScI-01G8H49RQ0E48YDM8WKW9PP5XS.png',
        color:'#B7B0FF',
        position:'center center'
    },
    {
        title:'Star<span>–</span>Forming Region',
        name:'NGC 3324 in the Carina Nebula',
        description:'Called the Cosmic Cliffs, the region is actually the edge of a gigantic, gaseous cavity within NGC 3324, roughly 7,600 light-years away. The cavernous area has been carved from the nebula by the intense ultraviolet radiation and stellar winds from extremely massive, hot, young stars located in the center of the bubble, above the area shown in this image. The high-energy radiation from these stars is sculpting the nebula’s wall by slowly eroding it away.',
        thumbnail:'thumbnails/thumbnail2.jpg',
        large:'https://stsci-opo.org/STScI-01G8GX6MG9VC1BVR5NRK8C660A.png',
        full:'full/full2.jpg',
        original:'https://stsci-opo.org/STScI-01G8GX1KMWX2XA4PK2EWM7KE3R.png',
        color:'#7dccff',
        position:'center bottom'
    },
    {
        title:'Deep Field',
        name:'SMACS 0723',
        description:'Thousands of galaxies – including the faintest objects ever observed in the infrared – have appeared in Webb’s view for the first time. This slice of the vast universe is approximately the size of a grain of sand held at arm’s length by someone on the ground. The image shows the galaxy cluster SMACS 0723 as it appeared 4.6 billion years ago. The combined mass of this galaxy cluster acts as a gravitational lens, magnifying much more distant galaxies behind it.',
        thumbnail:'thumbnails/thumbnail3.jpg',
        large:'https://stsci-opo.org/STScI-01G8H1NK4W8CJYHF2DDFD1W0DQ.png',
        full:'full/full3.jpg',
        original:'https://stsci-opo.org/STScI-01G8H1K2BCNATEZSKVRN9Z69SR.png',
        color:'#B7B0FF',
        position:'center center'
    },
    {
        title:'Stellar Death',
        name:'Planetary Nebula NGC 3132',
        description:'The dimmer star at the center of this scene has been sending out rings of gas and dust for thousands of years in all directions, and NASA’s James Webb Space Telescope has revealed for the first time that this star is cloaked in dust. Two cameras aboard Webb captured the latest image of this planetary nebula, cataloged as NGC 3132, and known informally as the Southern Ring Nebula. It is approximately 2,500 light-years away.',
        thumbnail:'thumbnails/thumbnail4.jpg',
        large:'https://stsci-opo.org/STScI-01G8GZR18A6CBS9TGJS8JE9CM4.png',
        full:'full/full4.jpg',
        original:'https://stsci-opo.org/STScI-01G8GZQ3ZFJRD8YF8YZWMAXCE3.png',
        color:'#7dccff',
        position:'center center'
    },
    {
        title:'Speed Test',
        name:'Tracking Jupiter',
        description:'While preparing the Webb telescope to start science operations, NASA tested how it tracks objects in our solar system, such as Jupiter. But Webb didn’t just image Jupiter — it also caught Jupiter’s moon, Europa. These test images have engineering purposes, and are not processed in the same way as full-color images.',
        thumbnail:'thumbnails/thumbnail5.jpg',
        large:'https://blogs.nasa.gov/webb/wp-content/uploads/sites/326/2022/07/jupiter_hi_res_atmo-1.png',
        full:null,
        original:null,
        color:'#ececc1',
        position:'center bottom'
    },
    {
        title:'Wavelength Test',
        name:'The Rings of Jupiter',
        description:'Webb easily captured some of Jupiter’s rings, which especially stand out in the NIRcam long-wavelength filter image. The Jupiter images in the narrow-band filters were designed to provide nice images of the entire disk of the planet, but the wealth of additional information about very faint objects (Metis, Thebe, the main ring, hazes) in those images with approximately one-minute exposures.',
        thumbnail:'thumbnails/thumbnail6.jpg',
        large:'https://blogs.nasa.gov/webb/wp-content/uploads/sites/326/2022/07/jupiter_hi_res_rings-1.png',
        full:null,
        original:null,
        color:'#e3af89',
        position:'center bottom'
    },
    {
        title:'Collision!',
        name:'Cartwheel Galaxy',
        description:'This galaxy formed as the result of a high-speed collision that occurred about 400 million years ago. The Cartwheel is composed of two rings, a bright inner ring and a colorful outer ring. Both rings expand outward from the center of the collision like shockwaves. However, despite the impact, much of the character of the large, spiral galaxy that existed before the collision remains, including its rotating arms.',
        thumbnail:'thumbnails/thumbnail7.jpg',
        large:'https://blogs.nasa.gov/webb/wp-content/uploads/sites/326/2022/07/jupiter_hi_res_rings-1.png',
        full:'full/full7.jpg',
        original:'https://stsci-opo.org/STScI-01G9G4J23CDPVNGCYDJRZTTJQN.png',
        color:'#f5b5c2',
        position:'center center'
    },
    {
        title:'Newborns',
        name:'Tarantula Nebula',
        description:'The Tarantula Nebula shelters thousands of young and still-forming stars. At only 161,000 light-years away in the Large Magellanic Cloud galaxy, the Tarantula Nebula is the largest and brightest star-forming region in the Local Group, the galaxies nearest our Milky Way. It is home to the hottest, most massive stars known.',
        thumbnail:'thumbnails/thumbnail8.jpg',
        large:'https://stsci-opo.org/STScI-01GA76RM0C11W977JRHGJ5J26X.png',
        full:'full/full8.jpg',
        original:'https://stsci-opo.org/STScI-01GA76Q01D09HFEV174SVMQDMV.png',
        color:'#f5b5c2',
        position:'center center'
    },
];




// VISUALS --------------------------------------------------------------------------------
    // https://github.com/s-yadav/iv-viewer
    import ImageViewer from './iv-viewer.es.js';

    const viewer = new ImageViewer(document.querySelector('main'),{
        hasZoomButtons:false,
        snapView:false,
    });

    // from https://stackoverflow.com/a/39077686
    const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));

    const activateImage = () => {
        // document.querySelector('#viewer img').src = activeImage.large;
        document.querySelector('.instructions img').src = activeImage.thumbnail;
        document.querySelector('h2').innerHTML = activeImage.title;
        document.querySelector('h3').innerHTML = activeImage.name;
        document.querySelector('p').innerHTML = activeImage.description;
        const rgb = hexToRgb(activeImage.color);
        document.documentElement.style.setProperty('--r', rgb[0]);
        document.documentElement.style.setProperty('--g', rgb[1]);
        document.documentElement.style.setProperty('--b', rgb[2]);
        document.documentElement.style.setProperty('--position', activeImage.position);

        viewer.load(activeImage.full ? activeImage.full : activeImage.large);

        if( !document.querySelector('.instructions').classList.contains('understood') ){
            setTimeout(()=>{
                document.querySelector('main .iv-image').addEventListener('wheel', hideInstructions);
            }, 1000);
        }

    };

    const hideInstructions = () => {
        document.querySelector('main .iv-image').removeEventListener('wheel', hideInstructions);
        document.querySelector('.instructions').classList.add('understood'); 
    };

    const showInstructions = () => {
        document.querySelector('main .iv-image').removeEventListener('wheel', hideInstructions);
        document.querySelector('main .iv-image').addEventListener('wheel', hideInstructions);
        document.querySelector('.instructions').classList.remove('understood'); 
    };

    const highlightActiveThumbnail = (activeElement) => {
        document.querySelectorAll('li').forEach(l=>l.classList.remove('active'));
        activeElement.classList.add('active');
    };
// --------------------------------------------------------------------------------





// SETUP --------------------------------------------------------------------------------
    const params = new URLSearchParams(window.location.search);
    if( params.has('kiosk') ){
        document.body.className = 'kiosk';
    }


    let activeImage;
    const shuffleRandomImage = () => {
        activeImage = data[Math.floor(Math.random() * data.length)];
    }
    shuffleRandomImage();



    data.forEach((d,i)=>{
        const li = document.createElement('li');
        const button = document.createElement('button');
        const img = document.createElement('img');
        button.ariaLabel = d.name;
        button.title = 'Switch to: '+d.name;
        img.src = d.thumbnail;
        button.appendChild(img);
        li.appendChild(button);
        document.querySelector('ul').appendChild(li);
        button.addEventListener('click',e=>{
            highlightActiveThumbnail(li);
            activeImage = d;
            activateImage();
        });
        if( d === activeImage ){
            button.dispatchEvent(new MouseEvent("click", {
                "view": window,
                "bubbles": true,
                "cancelable": false
            }));
        }
    });
// --------------------------------------------------------------------------------



// AUTOMATIC "RELOADING" --------------------------------------------------------------------------------
    let refreshTimer;

    const refreshScreen = () => {
        shuffleRandomImage();

        const selectedIndex = data.indexOf(activeImage);
        highlightActiveThumbnail(document.querySelectorAll('li')[selectedIndex]);       

        showInstructions();
        activateImage();
    };

    const delayRefresh = () => {
        clearInterval(refreshTimer);
        startTimer();
    }

    const startTimer = () => {
        refreshTimer = setInterval(refreshScreen, 3 * 1000 * 60); //refresh every 3 minutes
    }

    ['click', 'scroll', 'wheel', 'touchmove', 'touchstart'].forEach(eventType => document.body.addEventListener(eventType, delayRefresh));

    startTimer();
// --------------------------------------------------------------------------------
