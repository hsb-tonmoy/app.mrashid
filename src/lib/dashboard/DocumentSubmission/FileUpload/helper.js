export function humanFileSize(size) {
	let i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
	return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
}

export function extractExtension(filename) {
	return filename.substring(filename.lastIndexOf('.') + 1, filename.length) || filename;
}
