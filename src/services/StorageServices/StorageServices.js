import { getBytes, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";

class StorageServicesClass{

    async getTexture(path) {
        try {
            const fileRef = ref(storage,path)
            const url = await getDownloadURL(fileRef)
            return url;
        } catch (error) {
            console.log(error);
        }
    }
    async getExel(path) {
        try {
            const fileRef = ref(storage,path)

            const url = await getBytes(fileRef)
            return url;
        } catch (error) {
            console.log(error);
        }
    }
    async getImage(path) {
        try {
            const imagefer = ref(storage,path)
            const imageurl = await getDownloadURL(imagefer)
            return imageurl;
        } catch (error) {
            console.log(error);
        }
    }
}
export const StorageServices = new StorageServicesClass()