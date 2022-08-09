function depthPath() {
  const depth = location.pathname.split("/").length - 2;
  const path = "../".repeat(depth);
  return path;
}