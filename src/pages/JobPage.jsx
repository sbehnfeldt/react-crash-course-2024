import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Spinner from "../components/Spinner.jsx";

const JobPage = () => {
    const {id}                  = useParams();
    const [job, setJob]         = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            const apiUrl = `/api/jobs/${id}`;

            try {
                const res  = await fetch(apiUrl);
                const data = await res.json();
                setJob(data);

            } catch (e) {
                console.error('Error fetch job data: ', e);

            } finally {
                setLoading(false);
            }
        }
        fetchJob();
    }, [])

    return loading ? <Spinner/> : (
        <h1>{job.title}</h1>
    )
};


export default JobPage;
