import axios from 'axios';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

const HMU_URL = 'http://api.hmu.cool/messages/33f87347a5c9057c701dd9ef54d34824';
const CONTENTFUL_TOKEN = 'fb755dc2ec915d690992c3d2d6bfb407567e50efd4a670eae621949a9798e2ee';
const CONTENTFUL_SPACE = 'vplamhx6q3sl';
const CONTENTFUL_URL = `http://cdn.contentful.com/spaces/${CONTENTFUL_SPACE}/entries/?access_token=${CONTENTFUL_TOKEN}`;
const CONTENTFUL_SINGLE_URL = `http://cdn.contentful.com/spaces/${CONTENTFUL_SPACE}/entries`;

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

export function fetchPosts() {
  const request = axios.get(CONTENTFUL_URL);
  return {
    type: FETCH_POSTS,
    payload: request,
  }
}

export function fetchPost(slug) {
  console.log(slug);
  const request = axios.get(`${CONTENTFUL_SINGLE_URL}?access_token=${CONTENTFUL_TOKEN}&fields.slug=${slug}&content_type=post`);
  return {
    type: FETCH_POST,
    payload: request,
  }
}
