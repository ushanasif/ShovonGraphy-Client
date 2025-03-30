import axios from "axios";


const uploadFileToCloudinary = async (img) => {
  
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "image_preset");

    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const resourceType = "image";
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const response = await axios.post(api, formData);
      const { secure_url, public_id } = response.data;
      console.log(secure_url);
      return { secure_url, public_id };
    } catch (error) {
      console.log(error.message);
    }
  };

export default uploadFileToCloudinary;
  