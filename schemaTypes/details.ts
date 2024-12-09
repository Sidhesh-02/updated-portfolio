import { defineField } from "sanity";

const details ={
    name:"details",
    title:"Overall Document Structuring",
    type:"document",
    fields:[
        defineField({
            name:"albumPageTitle",
            title:"Album Headline",
            type:"string",
            validation:(rule)=> rule.required()
        }),
        defineField({
            name:"albumTagline",
            title:"Album Tagline",
            type:"string",
            validation:(rule)=> rule.required()
        }),
        defineField({
            name:"skillsPageTitle",
            title:"Skill Headline",
            type:"string",
            validation:(rule)=> rule.required()
        }),
        defineField({
            name:"skillsTagline",
            title:"Skills Tagline",
            type:"string",
            validation:(rule)=> rule.required()
        }),
        defineField({
            name:"projectPageTitle",
            title:"Project Headline",
            type:"string",
            validation:(rule)=> rule.required()
        }),
        defineField({
            name:"projectTagline",
            title:"Project Tagline",
            type:"string",
            validation:(rule)=> rule.required()
        }),
        {
            name:"socialLink",
            title:"Social Link",
            type:"object",
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
        },
    ]
}

export default details;