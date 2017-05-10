var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = 300;
	var height = 250;
	var border = bannerboy.createElement({width: width, height: height, border: 'solid 1px #000', boxSizing: 'border-box', overflow: 'hidden', parent: document.getElementById('banner')});
	var banner = bannerboy.createElement({width: width, height: height, left: -border.get('borderWidth'), top: -border.get('borderWidth'), backgroundColor: "#000", overflow: "hidden", cursor: "pointer", parent: border});

	var settings = bannerboy.settings(banner);

	var images = [
		"content.jpg",
		"image_1.jpg",
		"image_2.png",
		"logo_squarespace.png",
		"website_txt_1.png", 
		"website_txt_2.png", 
		"logo.png", 
		"headline.png", 
		"cta_txt.png"
	];

	for (var i = 1; i <= settings.txt[0]; i++) { images.push("txt_0_" + i + ".png"); }
	for (var i = 1; i <= settings.txt[1]; i++) { images.push("txt_1_" + i + ".png"); }
	for (var i = 1; i <= settings.txt[2]; i++) { images.push("txt_2_" + i + ".png"); }

	bannerboy.preloadImages(images, function() {

		bannerboy.defaults.rotationZ = 0.01;

		/* Create elements
		================================================= */
		var content = bannerboy.createElement({id: "content", backgroundImage: "content.jpg", parent: banner});
		var image_2 = bannerboy.createElement({id: "image_2", backgroundImage: "image_2.png", parent: banner});
		var image_1 = bannerboy.createElement({id: "image_1", backgroundImage: "image_1.jpg", parent: banner});
		var logo_squarespace = bannerboy.createElement({backgroundImage: "logo_squarespace.png", left: 15, bottom: 23, retina: true, parent: banner});
		var website_txt = bannerboy.createElement({left: 53, top: 120, width: 194, height: 34, parent: banner});
			var website_txt_1 = bannerboy.createElement({backgroundImage: "website_txt_1.png", retina: true, parent: website_txt});
			var website_txt_2 = bannerboy.createElement({backgroundImage: "website_txt_2.png", left: 35, top: 28, retina: true, parent: website_txt});
		var logo = bannerboy.createElement({backgroundImage: "logo.png", left: 66, top: 113, retina: true, parent: banner});
		var headline = bannerboy.createElement({backgroundImage: "headline.png", left: 120, top: 147, retina: true, parent: banner});
		var txt_0 = bannerboy.createElement({id: "txt_0", width: width, height: height, parent: banner});
		var txt_1 = bannerboy.createElement({id: "txt_1", width: width, height: height, parent: banner});
		var txt_2 = bannerboy.createElement({id: "txt_2", width: width, height: height, parent: banner});
		var cta = bannerboy.createElement({right: 15, bottom: 15, width: 135, height: 32, parent: banner});
			var cta_base = bannerboy.createElement({backgroundColor: "#ffffff", right: 0, bottom: 0, width: 135, height: 32, parent: cta});
			var cta_txt = bannerboy.createElement({backgroundImage: "cta_txt.png", right: 15, bottom: 13, retina: true, parent: cta});
		// var tagline = bannerboy.createElement({id: "tagline", backgroundImage: "tagline.png", left: 24, top: 152, retina: true, parent: banner});

		for (var i = 1; i <= settings.txt[0]; i++)
			bannerboy.createElement({id: "txt_0_" + i, backgroundImage: "txt_0_" + i + ".png", retina: true, center: true, parent: txt_0});
		for (var i = 1; i <= settings.txt[1]; i++)
			bannerboy.createElement({id: "txt_1_" + i, backgroundImage: "txt_1_" + i + ".png", retina: true, center: true, parent: txt_1});
		for (var i = 1; i <= settings.txt[2]; i++)
			bannerboy.createElement({id: "txt_2_" + i, backgroundImage: "txt_2_" + i + ".png", retina: true, center: true, parent: txt_2});

		/* Adjustments
		================================================= */
		TweenMax.set(image_1, {transformOrigin: settings.transformOrigin});
		TweenMax.set(image_2, {transformOrigin: settings.transformOrigin});
		TweenMax.set(cta, {overflow: "hidden"});
		TweenMax.set(cta_txt, {centerY: true, });

		for (var id in settings.set) { TweenMax.set('#' + id, settings.set[id]); }

		/* Screen setup
		================================================= */
		var screenWidth = content.get("width") * settings.widthFactor;
		var screenHeight = content.get("height") * settings.heightFactor;
		var screen = bannerboy.createElement({id: "screen", insertBefore: content});
		var transform = new PerspectiveTransform(screen, screenWidth, screenHeight, true);

		setTransformPoint(transform.topLeft, settings.corners[0]);
		setTransformPoint(transform.topRight, settings.corners[1]);
		setTransformPoint(transform.bottomRight, settings.corners[2]);
		setTransformPoint(transform.bottomLeft, settings.corners[3]);
		transform.update();

		// append content to its now perspective transformed container
		content.set({left: 0, top: -10});
		screen.appendChild(content);

		// create new container to put both screen and image_2 in to able to scale them together
		var image_2_container = bannerboy.createElement({width: width, height: height, scale: 1.1, insertBefore: screen});
		image_2_container.appendChildren([screen, image_2]);

		/* Initiate
		================================================= */
		animations();
		timeline();
		interaction();
		jitterFix([image_1, image_2_container]);

		/* Animations
		================================================= */
		function timeline() {
			var main_tl = new BBTimeline()
			.add(image_1.zoom_tl)
			.offset(0.3)
			.add(logo.in_tl)
			.offset(1.7)
			.add(txtOut([logo, headline]))
			.offset(0.8)
			.add(txtIn(website_txt))
			.offset(1.5)
			.add(txtOut(website_txt))
			.chain()
			.add(image_1.out_tl)

			.add(image_2.zoom_tl)
			.add(logo_squarespace.in_tl)
			.add(cta.in_tl)
			.offset(1.5)
			.add(txtIn(txt_0, txt_1))
			.offset(1)
			.add(content.scroll_tl)
			.offset(2.75)
			.add(txtSwitch)
			// .to(mask, .5, {opacity: 0, ease: Power1.easeInOut});

			scrubber(main_tl);
		}

		function animations() {

			txtIn = function(container_1, container_2) {
				var txt_tl = new BBTimeline()
				.staggerFrom(container_1.childNodes, 0.5, {opacity: 0, y: 6, ease: Power1.easeOut}, .12)

				if (container_2)
					txt_tl
					.chain(-.5)
					.staggerFrom(container_2.childNodes, 0.5, {opacity: 0, y: 6, ease: Power1.easeOut}, .12)

				return txt_tl
			}

			txtOut = function (obj) {
				return new BBTimeline()
				.to(obj, 0.6, {opacity: 0, ease: Power2.easeIn});
			}

			settings.txt_travel.ease = Power1.easeInOut
			txtSwitch = new BBTimeline()
				.to(txt_0, 0.8, settings.txt_travel)
				.staggerTo(txt_1.childNodes, 0.5, {opacity: 0, y: -6, ease: Power1.easeIn}, .12)
				.offset(.3)
				.staggerFrom(txt_2.childNodes, 0.5, {opacity: 0, y: 6, ease: Power1.easeOut}, .12)

			// cta
			cta.in_tl = new BBTimeline()
			.from(cta_base, 0.65, {y: 46, ease: Power2.easeInOut})
			.offset(0.06)
			.from(cta_txt, 0.65, {y: 46, opacity: 0, ease: Power2.easeInOut});

			// logo

			logo.in_tl = new BBTimeline()
			.staggerFrom([logo, headline], 0.5, {opacity: 0, y: 6, ease: Power1.easeOut}, .12);

			logo_squarespace.in_tl = new BBTimeline()
			.from(logo_squarespace, 0.3, {opacity: 0, ease: Power1.easeIn});

			// images
			image_1.out_tl = new BBTimeline()
			.to(image_1, 0.3, {opacity: 0, ease: Power2.easeIn})

			image_1.zoom_tl = new BBTimeline()
			.from(image_1, 5.2, {scale: 1.13, ease: Linear.easeNone});

			image_2.zoom_tl = new BBTimeline()
			.to(image_2_container, 4.5, {scale: 1, ease: Sine.easeOut});

			// device
			var travel = -content.get("height") + screenHeight + 10 ;

			content.scroll_tl = new BBTimeline()
			.to(content, 1.3, {y: (travel * 0.33), ease: Power2.easeInOut})
			.chain(1)
			.to(content, 1, {y: travel, ease: Power2.easeInOut})
			.chain()
			.to(content, 0.5, {y: travel + 3, ease: Power1.easeInOut})
		}

		/* Helpers
		================================================= */
		function setTransformPoint(transformPoint, corner) {
			transformPoint.x = corner.get("left") + corner.get("width") / 2;
			transformPoint.y = corner.get("top") + corner.get("height") / 2;
		}

		function jitterFix(objects) {
			var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
			var isExplorer = navigator.userAgent.indexOf('MSIE') > -1;
			var isEdge = navigator.userAgent.indexOf('Edge') > -1;
			var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
			var isSafari = navigator.userAgent.indexOf("Safari") > -1;
			var isOpera = navigator.userAgent.toLowerCase().indexOf("op") > -1;

			if ((isChrome) && (isSafari)) { isSafari = false; }
			if ((isChrome) && (isOpera)) { isChrome = false; }
			if ((isChrome) && (isEdge)) { isChrome = false; }

			if (isChrome) {
				for (var i = 0; i < objects.length; i++) {
					objects[i].set({transition: "all 0.1s", force3D: true});
				}
			}
		}

		/* Interactions
		================================================= */
		function interaction() {
			cta.addEventListener("mouseenter", function() {
				cta_base.to(0.1, {opacity: 0.9});
			});

			cta.addEventListener("mouseleave", function() {
				cta_base.to(0.1, {opacity: 1.0});
			});
		}

		/* Scrubber
		================================================= */
		function scrubber(tl) {
			if (window.location.origin == "file://") {
				bannerboy.include(["../../bannerboy_scrubber.min.js"], function() {
					if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
				});
			}
		}
	});
};
