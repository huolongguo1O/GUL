// I can't visit the GitHub!
// So let's write more comments

// First we need to require the pyodide library
const { loadPyodide } = require("pyodide");

// Then we need to define the main function
async function hello_python() {
  // Let's load pyodide
  let pyodide = await loadPyodide();
  // It's important to mount the root directory
  let mountDir = "/mnt";
  pyodide.FS.mkdir(mountDir);
  pyodide.FS.mount(pyodide.FS.filesystems.NODEFS, { root: "." }, mountDir);
  // And let's load the python module
  await pyodide.loadPackage(
    ".\\dist\\main-0.1.0-py3-none-any.whl",
  );
  // It's time to run;-)
  return pyodide.runPython("import main,os;os.chdir('/mnt');main.main()");
}

hello_python()