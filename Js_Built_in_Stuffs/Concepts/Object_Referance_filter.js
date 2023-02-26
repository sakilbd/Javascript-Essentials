//got this in quiz of "Think in a redux way " by Learn with sumit course in in Module 3.4 : Module 3 Lesson 4 Quiz

const libraries = [{
        id: 1,
        title: "React",
        created: 2013,
    },
    {
        id: 2,
        title: "Vue",
        created: 2014,
    },
    {
        id: 3,
        title: "Svelte",
        created: 2016,
    },
];

const result = libraries.filter((lib) => lib.created > 2015);
result[0].title = "React";

console.log(libraries[2].title); //prints "React"
// though the filter returns new array .. the referance are same to libraries object thats why