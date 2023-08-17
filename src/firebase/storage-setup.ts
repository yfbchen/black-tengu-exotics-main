import { getStorage, ref } from "firebase/storage";

import app from "@firebase/config";

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Create a child reference to the images bucket
const imagesBucket = ref(storage, "images");

export { imagesBucket };
