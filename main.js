$(document).ready(function () {
	var holding = [],
		disksNum = 3,
		$container = $("#container"),
		$tower = $container.find(".tower")


	function initGame(tower) {
		$tower.html("");
		for (var i = 1; i <= disksNum; i++) {
			tower.prepend(
				$('<li class="disk disk-' + i + '" data-value="' + i + '"></li>')
			);
		}
	}

	function tower(tower) {
		var $disks = tower.children(),
			$topDisk = tower.find(":last-child"),
			topDiskValue = $topDisk.data("value"),
			$holdingDisk = $container.find(".hold");

		if ($holdingDisk.length !== 0) {
			if (topDiskValue === holding[0]) {
				$holdingDisk.removeClass("hold");
			} else if (topDiskValue === undefined || topDiskValue > holding[0]) {
				$holdingDisk.remove();
				tower.append(
					$(
						'<li class="disk disk-' +
							holding[0] +
							'" data-value="' +
							holding[0] +
							'"></li>'
					)
				);
			}
		} else if ($topDisk.length !== 0) {
			$topDisk.addClass("hold");
			holding[0] = topDiskValue;
		}
	}

	initGame($tower.eq(0));

	$container.on("click", ".tower", function () {
		var $this = $(this);
		tower($this);
		if ($tower.eq(2).children().length == disksNum) {
			$("#congrats").html("Congratulations! You've completed the game!");
			$("#restart").html("RESTART");
			initGame($tower.eq(2));
		}
	});

	$(document).on("click", ".restart", function () {
			$("#congrats").html("");
			$("#restart").html("");
		initGame($tower.eq(0));
	});
});