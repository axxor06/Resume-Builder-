import apiService from "../api/apiServices";

// saveResumeAPI: add resume details to JSON server

export const saveResumeAPI = async (resumeDetails) => {
    return await apiService('POST', "/resumes", resumeDetails);
};

//view resume
export const viewResumeAPI = async (resumeId) => {
    return await apiService('GET', `/resumes/${resumeId}`, {});
};
 //all resume api

 export const allResumeAPI = async () => {
    return await apiService('GET', `/resumes`, {});

 }

 //DownloadApi

  export const downloadResumeAPI = async (resumeDetails) => {
    return await apiService('POST', `/downloads`,resumeDetails);

 }


 //Get all download
  export const getAllDownloadResumeAPI = async () => {
    return await apiService('GET', `/downloads`,{});

 }

//Update 
  export const updateResumeAPI = async (resumeId,resumeDetails) => {
    return await apiService('PUT',  `/resumes/${resumeId}`,resumeDetails);

 }

 //Delete 
  export const deleteResumeAPI = async (resumeId) => {
    return await apiService('DELETE',  `/resumes/${resumeId}`,{})

 }

