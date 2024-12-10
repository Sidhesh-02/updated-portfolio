import { defineField, defineType } from "sanity";

export default defineType({
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
        defineField({
            name: "skillField",
            title: "Skill Field",
            description: "Add skills",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1).max(50), 
        }),
        defineField({
            name: "learningField",
            title: "Learning Field",
            description: "Add skills",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1).max(50), 
        })
    ],
});
