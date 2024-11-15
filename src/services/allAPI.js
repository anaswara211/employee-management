//saveEmpAPI- post httpreq called when add component

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const saveEmpAPI = async(empDetailes)=>{
  return  commonAPI("POST",`${SERVERURL}/uploadEmployee`,empDetailes)
}

//getAllEmpAPI -get http req called by home compoent when component displayed  in browser  inside its use effect hook
 
export const getAllEmpAPI = async()=>{
  return  commonAPI("GET",`${SERVERURL}/uploadEmployee`,"")
}

// Get employee by ID (GET request)
export const getEditAPI = async (id) => {
  return commonAPI("GET", `${SERVERURL}/uploadEmployee/${id}`, "");
}

// Update employee details (PUT request)
export const updateEmpAPI = async (id, empDetails) => {
  return commonAPI("PUT", `${SERVERURL}/uploadEmployee/${id}`, empDetails);
}

// Delete employee (DELETE request)
export const deleteEmpAPI = async (id) => {
  return commonAPI("DELETE", `${SERVERURL}/uploadEmployee/${id}`, "");
}