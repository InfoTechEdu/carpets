import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";

class StorageServicesClass{

    async getTexture(path) {
        try {
            const fileRef = ref(storage,'/texture_images/' + path)
            const url = await getDownloadURL(fileRef)
            return url;
        } catch (error) {
            console.log(error);
        }
    }
    getImage(path) {
        try {
            const imageurl = `https://firebasestorage.googleapis.com/v0/b/amour-fleurs-ar.appspot.com/o/preview_images%2F${path}?alt=media&token=3718fd80-e1c6-4a9a-8565-76d6287d60cc`
            return imageurl;
        } catch (error) {
            console.log(error);
        }
    }
}
export const StorageServices = new StorageServicesClass()