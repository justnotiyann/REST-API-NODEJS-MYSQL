const multer = require("multer");

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, "tmp/avatar");
	},

	filename: function(req, file, cb) {
		const mimeExtension = {
			"image/jpeg": ".jpeg",
			"image/jpg": ".jpg",
			"image/png": ".png"
		};
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + "-" + uniqueSuffix + mimeExtension[file.mimetype]);
	}
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "image/jpeg" ||
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/png"
	) {
		cb(null, true);
	} else {
		return cb(new Error("Invalid mime type"));
	}
};

const limitSize = 0.5 * 1000 * 1000;

const upload = multer({
	storage: storage,
	fileFilter: fileFilter,
	limits: {fileSize: limitSize}
});

module.exports = upload;
