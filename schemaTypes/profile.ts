import { defineField } from "sanity";

const profile = {
    name:"profile",
    title:"Profile",
    type:"document",
    fields: [
        defineField({
            name:"fullName",
            title:"Full Name",
            type:"string",
            validation:(rule) => rule.required()
        }),
        defineField({
            name:"position",
            title:"Position",
            type:"string",
            description:"In one-two words describe your role ?",
            validation:(rule) => rule.required()
        }),
        {
            name: "shortBio",
            title: "Short Bio",
            type: "text",
            rows: 4,
        },
        {
            name:"spotifyEmbed",
            title:"Spotify Embed",
            type:"string",
        }    
    ],
}

export default profile