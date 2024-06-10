export interface MotivationLetter {
    id?: string;
    content?: string;
    user_id: string;
    job_id?: string;
    company?: string;
  }
  
export interface MotivationLetterUpdate {
  content: string
}