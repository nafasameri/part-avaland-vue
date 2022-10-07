import axios from "axios";

export default function axiosRequest(method, path, data, id) {
  switch (method) {
    case "get":
      axios({
        url: `localhost:8000/${path}`,
        method: "get",
      })
        .then((response) => {
          console.log(response);
          return response.data;
        })
        .catch((error) => console.log(error));
      break;
    case "post":
      axios({
        url: `localhost:81/${path}`,
        data: data,
        method: "post",
      })
        .then((response) => {
          console.log(response);
          return response.data;
        })
        .catch((error) => console.log(error));
      break;
    case "put":
      axios({
        url: `localhost:81/${path}?${id}`,
        data: data,
        method: "put",
      })
        .then((response) => {
          console.log(response);
          return response.data;
        })
        .catch((error) => console.log(error));
      break;
    case "delete":
      axios({
        url: `localhost:81/${path}?${id}`,
        method: "delete",
      })
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((error) => console.log(error));
      break;
  }
}
