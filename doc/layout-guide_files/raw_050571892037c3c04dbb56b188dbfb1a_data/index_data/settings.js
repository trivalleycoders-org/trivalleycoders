var bannerboy = bannerboy || {};

/* Settings
================================================= */
bannerboy.settings = function(banner) {

	var corner_1 = bannerboy.createElement({backgroundColor: "#ff4531", left: 18+1, top: 34+6, width: 1, height: 1, parent: banner});
	var corner_2 = bannerboy.createElement({backgroundColor: "#ff4531", left: 98-4+1, top: 51+6, width: 1, height: 1, parent: banner});
	var corner_3 = bannerboy.createElement({backgroundColor: "#ff4531", left: 67, top: 162-1, width: 1, height: 1, parent: banner});
	var corner_4 = bannerboy.createElement({backgroundColor: "#ff4531", left: -15+4-1, top: 142, width: 1, height: 1, parent: banner});

	TweenMax.set(corner_1, {opacity: 0});
	TweenMax.set(corner_2, {opacity: 0});
	TweenMax.set(corner_3, {opacity: 0});
	TweenMax.set(corner_4, {opacity: 0});

	return {
		widthFactor: 1,
		heightFactor: 19/77,
		transformOrigin: "50% 50%",
		corners: [
			corner_1,
			corner_2,
			corner_3,
			corner_4
		],
		txt: [1, 1, 1],
		txt_travel: {x: -17},
		set: {
			//
		}
	}
}
