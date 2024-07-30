import React, {useState, useEffect} from 'react';
import Job from './Job';
import Spinner from './Spinner';

const JobList = ({ limit }) => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                let apiUrl = '/api/recruit';
                if (limit && limit > 0) {
                    apiUrl += `?pageSize=${limit}`;
                } else {
                    apiUrl += '/all';
                }
                const response = await fetch(apiUrl);
                const data = await response.json();
                data.map((item) => {
                    item.id = item.recruitId
                });
                setJobs(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    { limit > 0 ? 'Recent Jobs' : 'All Jobs' }
                </h2>
                {loading ? <Spinner loading={loading}/> : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            jobs.map((job) => (
                                <Job job={job} key={job.id}/>
                            ))
                        }
                    </div>
                )}
            </div>
        </section>
    )
}

export default JobList
