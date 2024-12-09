import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      position,
      shortBio,
      socialLinks
    }`
  );
}

export async function getProject() {
  return client.fetch(
    groq`*[_type == "projects"]{
      _id,
      title,
      startDate,
      endDate,
      description,
      projectUrl,
    }`
  );
}

export async function getSpotifyEmbed(){
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      spotifyEmbed
    }`
  );
}

export async function getTitleAndTaglines(){
  return client.fetch(
    groq`*[_type == "details"]{
      _id,
      albumPageTitle,
      albumTagline,
      skillsPageTitle,
      skillsTagline,
      projectPageTitle,
      projectTagline,
    }`
  )
}