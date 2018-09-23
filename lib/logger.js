const outputLogger = req => {
  console.log("\x1b[32m", `${req.method} ${req.url}`);
};

module.exports = outputLogger;
