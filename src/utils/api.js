import axios from "axios";

const getOrderLines = async (typeId, quantity) => {
  const config = {
    method: "get",
    url: `https://minizuba-fn.azurewebsites.net/api/orderlines?type_id=${typeId}&quantity=${quantity}`,
  };

  return await axios(config).then((res) => {
    return { res };
  });

};


export {
    getOrderLines
}