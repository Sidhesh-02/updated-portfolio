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
            name:"socialLinks",
            title:"Social Links",
            type:"object",
            description:"Add your social media links: ",
            fields:[
                {
                    name: "linkedin",
                    title: "Linkedin URL",
                    type: "url",
                    initialValue: "https://linkedin.com/in/",
                },
                {
                    name:"github",
                    title:"Github URL",
                    type:"url",
                    initialValue:"https://github.com/"
                },
                {
                    name: "instagram",
                    title: "Instagram URL",
                    type: "url",
                    initialValue: "https://instagram.com/",
                },
                {
                    name: "youtube",
                    title: "Youtube URL",
                    type: "url",
                    initialValue: "https://youtube.com/",
                },
            ]
        }

        
    ],
}

export default profile