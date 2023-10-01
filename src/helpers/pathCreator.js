import { ref } from "firebase/storage";
import { storage } from "../firebase";

function pathCreator(path) {
    const storageRef = ref(storage, path);
    const murl = storageRef._location.bucket
    const str = `gs://${murl}/${path}`;
    return (str);
}

export default pathCreator;