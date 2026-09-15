import apiService from "../api/apiServices";

//saveResumeAPI: add resuumme details to JJJSONNN server

export const saveResumeAPI = async(resumeDetails)=>{
    return await apiService('POST',"/resumes",resumeDetails)
    
}