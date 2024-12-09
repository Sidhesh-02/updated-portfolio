import { defineField } from "sanity";

const projects ={
    name:"projects",
    title:"Projects",
    description:"Add your project details: ",
    type:"document",
    fields:[
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        defineField({
            name:"startDate",
            title:"Start Date",
            type:"date",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"endDate",
            title:"End Date",
            type:"date",
            validation: (rule) => rule.required(),
        }),
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "projectUrl",
            title: "Project Url",
            type: "url",
        },
    ]
}

export default projects;