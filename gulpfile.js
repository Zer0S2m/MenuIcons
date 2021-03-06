const { src, dest, series, watch, parallel } = require('gulp');

const removeCommentsCss = require('gulp-strip-css-comments');
const autoprefixer      = require('gulp-autoprefixer');
const cleanCSS          = require('gulp-clean-css');
const sass              = require('gulp-sass')(require('sass'));
const include           = require('gulp-file-include');
const htmlmin           = require("gulp-htmlmin");
const del               = require('del');
const concat            = require('gulp-concat');
const sourcemaps        = require('gulp-sourcemaps')
const sync              = require('browser-sync').create();


const basePathIcon = "./templates/icons";
const contextFileInclude = {
	iconsTitle: [
		"Hamburger", "Veggie burger", "Hotdog", "Fries", "Strawberry", "Stairs", "Cheeseburger",
		"Candy box", "Kebab", "Meatballs", "Chocolate", "Cake"
	],
	iconsPath: [
		`${basePathIcon}/hamburger.html`, `${basePathIcon}/veggie_burger.html`, `${basePathIcon}/hotdog.html`,
		`${basePathIcon}/fries.html`, `${basePathIcon}/strawberry.html`, `${basePathIcon}/stairs.html`,
		`${basePathIcon}/cheeseburger.html`, `${basePathIcon}/candy_box.html`, `${basePathIcon}/kebab.html`,
		`${basePathIcon}/meatballs.html`, `${basePathIcon}/chocolate.html`, `${basePathIcon}/cake.html`
	]
}

const htmlDev = () => {
	return src('./src/index.html')
		.pipe(include({
			prefix: '@@',
			context: contextFileInclude
		}))
		.pipe(dest('./app'));
};

const htmlBuild = () => {
	return src('./src/index.html')
		.pipe(include({
			prefix: '@@',
			context: contextFileInclude
		}))
		.pipe(htmlmin({
			collapseWhitespace: true,
			collapseInlineTagWhitespace: true,
			collapseBooleanAttributes: true,
			decodeEntities: true,
			removeComments: true,
			continueOnParseError: true,
			removeEmptyAttributes: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true
		}))
		.pipe(dest('./app'));
};


const scriptsDev = () => {
	return src("./src/js/**/*.js")
		.pipe(dest("./app/js"))
};


const scssDev = () => {
	 return src('./src/scss/style.scss')
		 .pipe(sourcemaps.init({
			 largeFile: true
		 }))
		 .pipe(sass({
			outputStyle:'expanded'
		}))
		 .pipe(concat('./css/style.css'))
		 .pipe(sourcemaps.write())
		 .pipe(dest('./app'));
};

const scssBuild = () => {
	 return src('./src/scss/style.scss')
		.pipe(sass({
			outputStyle:'compressed'
		}))
		.pipe(removeCommentsCss())
		.pipe(autoprefixer())
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(concat('./css/style.css'))
		.pipe(dest('./app'));
};


const fonts = () => {
	return src("./src/fonts/*")
		.pipe(dest('./app/fonts'));
};


const clear = () => {
	return del('./app');
};


const serveBuild = () => {
	sync.init({
		server: './app/'
	});
}


const serve = () => {
	sync.init({
		server: './app/'
	});

	watch('./src/**/*.html',				series(htmlDev)).on('change', sync.reload);
	watch("./src/js/**/*.js",	      series(scriptsDev)).on('change', sync.reload);
	watch('./src/scss/**/*.scss',		series(scssDev)).on('change', sync.reload);
};


exports.build = series(clear, parallel(scssBuild, htmlBuild, fonts));
exports.serve = series(clear, parallel(scssDev, htmlDev, fonts, scriptsDev, serve));
exports.serveBuild = series(serveBuild);
