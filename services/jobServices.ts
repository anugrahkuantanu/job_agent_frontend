import axios from 'axios';
import { getCurrentUser } from '@/lib/actions/index';
import { string } from 'zod';


const API_BASE_URL = 'http://localhost:8000';

// Function to create a new job
export async function postData(Data: any, endpoint:string) {
  const { token } = await getCurrentUser();

  if (!token) {
    throw new Error('User not authenticated');
  }

  const response = await axios.post(`${API_BASE_URL}/${endpoint}/`, Data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

// Function to get jobs for the current user
export async function getData(endpoint:string) {
  const { token } = await getCurrentUser();

//   const token = "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IlBLcGJVK0VKbkpwVGVPZnMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE2NjcyMDU3LCJpYXQiOjE3MTY2Njg0NTcsImlzcyI6Imh0dHBzOi8vZGZkbGZ5Z2lmZmdtaXd4d3VmdXcuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6Ijc1ZGNkMDlhLTAyNjQtNGEzYy04YTQzLTY4NzE4ODJmNWVjZiIsImVtYWlsIjoiYW51Z3JhaEBrdWFudGFudS5kZSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJhbnVncmFoQGt1YW50YW51LmRlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6Ijc1ZGNkMDlhLTAyNjQtNGEzYy04YTQzLTY4NzE4ODJmNWVjZiJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzE2NjY4NDU3fV0sInNlc3Npb25faWQiOiJiMDczZDk3Yy0yMTMwLTQ3ZmQtOGI5MC1mMDQ5ZGViY2Y4ZDMiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.ejns6lAZcpzzmv6KO4O7s-BInw1FC7pZZony1MD9vAk";


  if (!token) {
    throw new Error('User not authenticated');
  }

  const response = await axios.get(`${API_BASE_URL}/${endpoint}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}


export async function kickOff() {
  const { token } = await getCurrentUser();

  if(!token){
    throw new Error('User not authenticated')
  }

  const response = await axios.post('http://localhost:8000/agent/run_agent',{
    headers:{
      Authorization: `Bearer ${token}`,
    }
  });
  
  return response.data
}
