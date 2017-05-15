function parsePromised(arg) {   
	try {
		def.resolve(JSON.parse(arg));
	} catch (error) {
		.reject(error);
	}
	return def.promise;
}
	parsePromised(process.argv[2]).then(null, console.log);