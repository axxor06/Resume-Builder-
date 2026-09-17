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