export const createAndApplyTexture = async (channel = "normalTexture", path = "",view) => {
    try {
      if (view) {
        let material = view?.model?.materials[0];
      if (path === "None") {
        if (material) {
          material[channel].setTexture(null);
        //   console.log("unset");
        } else {
        //   console.log('material is not ready');
        }
    } else if (path) {
        // Creates a new texture.
        const texture = await view?.createTexture(path)
        // Set the texture name
        texture.name = path.toLowerCase();
        if (material) {
          material[channel].setTexture(texture);
        } else {
        //   console.log('material is not ready');
        }
      }
    } else {
    //   console.log('ref is not ready');
    }
    } catch (error) {
      console.log(error);
    }
}