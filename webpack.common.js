const path = require("path");
const fs = require("fs");

var getFiles = function (dir) {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = dir + "/" + file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(getFiles(file));
    } else {
      /* Is a file */
      results.push(file);
    }
  });
  return results;
};

function getTsFiles() {
  const srcDir = path.resolve(path.join(__dirname, "src"));
  return getFiles(srcDir)
    .map((file) => {
      if (file.match(".+.liquid.ts")) {
        return {
          name: "." + file.substring(srcDir.length, file.length - 3) + '.js',
          path: "./" + file.substring(srcDir.length - 3, file.length)
        };
      } else if (file === srcDir + "/main.ts") {
        return {
          name: 'main.js',
          path: './' + file.substring(srcDir.length - 3, file.length),
        };
      }
    })
    .filter(x => !!x)
    .reduce((memo, file) => {
      memo[file.name] = { import: file.path };
      return memo;
    }, {});
}

module.exports = {
  entry: getTsFiles,
  output: {
    path: path.resolve(path.join(__dirname), "build"), // path.resolve(path.join(__dirname, '../', '/server/'))
    filename: "[name]",
    publicPath: "/build"
  },
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: /src/,
        exclude: /node_modules/,
      }
    ],
  }
};
