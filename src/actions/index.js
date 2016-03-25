import axios from 'axios';

export const SEND_MESSAGE = 'SEND_MESSAGE';

const HMU_URL = 'http://api.hmu.cool/messages/33f87347a5c9057c701dd9ef54d34824';

export function sendMessage(props) {
  let {email, name, subject, budget, description, projectName} = props;
  if(!budget) {
    budget = "$10,000-$15,000";
  }
  if(!subject) {
    subject = "Project Enquiry";
  }
  const requestData = {
    email: email,
    fields: {
      name: name,
      budget: budget,
      subject: subject,
      description: description,
      project_name: projectName
    }
  };

  const request = axios.post(HMU_URL, requestData);

  return {
    type: SEND_MESSAGE,
    payload: request,
  }
}
