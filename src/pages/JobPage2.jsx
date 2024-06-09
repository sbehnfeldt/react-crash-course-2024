import {useLoaderData} from "react-router-dom";

const JobPage2 = () => {
    const job = useLoaderData();

    return (
        <h1>{job.title}</h1>
    )
};

// From react-router, not react proper
const jobLoader = async ({params}) => {
    const res  = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export {JobPage2 as default, jobLoader};
