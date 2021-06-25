const chooseBestDistance = (t, k, ls) => {
	if (ls.length < k) {
		return null;
	} else {
		let fn = function (n, src, got, all) {
			if (n == 0) {
				if (got.length > 0) {
					all[all.length] = got;
				}
				return;
			}
			for (let j = 0; j < src.length; j++) {
				fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
			}
			return;
		}
		let all = [];
		fn(k, ls, [], all);
		console.log(all)
		let result = [];
		for (let i = 0; i < all.length; i++) {
			result.push(all[i].reduce(function (sum, current) {
				return sum + current
			}))

		}
		console.log(result);
		result.sort((a, b) => a - b);
		let goodDistance = result.filter(item => item <= t);
		if (goodDistance.length > 0) { 
			return goodDistance[goodDistance.length - 1]
		}
		else
			return null;
	}
}


console.log(chooseBestDistance(190, 3, [50, 56, 76, 99, 59, 61]))

console.log(chooseBestDistance(167, 2, [51]))
