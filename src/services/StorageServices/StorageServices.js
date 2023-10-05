import { getBytes, getDownloadURL, getMetadata, ref } from "firebase/storage";
import { storage } from "../../firebase";

class StorageServicesClass{

    async getTexture(path) {
        try {
            const fileRef = ref(storage,path)
            const meta = await getMetadata(fileRef);

            console.log("Metadata: " + JSON.stringify(meta));
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
    getImage(path) {
        try {
            const imagefer = ref(storage,path)
            // const imageurl = await getDownloadURL(imagefer)
            const imageurl = path.replace("gs://", "https://storage.googleapis.com/")
            return imageurl;
        } catch (error) {
            console.log(error);
        }
    }
}
export const StorageServices = new StorageServicesClass()